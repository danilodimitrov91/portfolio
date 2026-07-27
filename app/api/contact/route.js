import nodemailer from 'nodemailer';

export async function POST(request) {
  const { ime, telefon, email, poruka } = await request.json();

  if (!ime || !telefon || !email || !poruka) {
    return Response.json({ error: 'Nedostaju podaci.' }, { status: 400 });
  }

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
      text: `Ime: ${ime}\nTelefon: ${telefon}\nEmail: ${email}\n\nPoruka:\n${poruka}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Slanje mejla nije uspelo:', err);
    return Response.json({ error: 'Slanje nije uspelo.' }, { status: 500 });
  }
}
