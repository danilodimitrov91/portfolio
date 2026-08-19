import nodemailer from 'nodemailer';

// Klijent može sam da postavi X-Forwarded-For/X-Real-IP, pa se vrednost prihvata
// samo ako izgleda kao validna IPv4/IPv6 adresa — sprečava ubacivanje proizvoljnog
// teksta u telo mejla preko lažiranog zaglavlja.
function sanitizeIp(raw) {
  const ip = raw?.trim();
  if (!ip || ip.length > 45 || !/^[0-9a-fA-F:.]+$/.test(ip)) return null;
  return ip;
}

export async function POST(request) {
  const { ime, telefon, email, poruka } = await request.json();

  if (!ime || !telefon || !email || !poruka) {
    return Response.json({ error: 'Nedostaju podaci.' }, { status: 400 });
  }

  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0];
  const ip =
    sanitizeIp(forwardedFor) ||
    sanitizeIp(request.headers.get('x-real-ip')) ||
    'nepoznato';

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `Novi upit sa sajta — ${ime}`,
      text: `Ime: ${ime}\nTelefon: ${telefon}\nEmail: ${email}\nIP adresa: ${ip}\n\nPoruka:\n${poruka}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Slanje mejla nije uspelo:', err);
    return Response.json({ error: 'Slanje nije uspelo.' }, { status: 500 });
  }
}
