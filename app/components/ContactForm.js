'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = {
      ime: form.ime.value,
      telefon: form.telefon.value,
      email: form.email.value,
      poruka: form.poruka.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('failed');

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" name="ime" placeholder="Ime i prezime" className="form-input" required />
        <input type="tel" name="telefon" placeholder="Telefon" className="form-input" required />
      </div>
      <input type="email" name="email" placeholder="Email" className="form-input" required />
      <textarea name="poruka" placeholder="Opišite vaš zahtev..." className="form-textarea" rows={5} required />
      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Slanje...' : 'Pošalji upit'}
      </button>
      {status === 'success' && <p className="form-status success">Poruka je poslata. Javiću se uskoro.</p>}
      {status === 'error' && <p className="form-status error">Greška pri slanju. Pokušajte ponovo.</p>}
    </form>
  );
}
