const form = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || 'website visitor';
    const email = data.get('email')?.toString().trim() || '';
    const company = data.get('company')?.toString().trim() || 'Not provided';
    const message = data.get('message')?.toString().trim() || '';

    const subject = encodeURIComponent(`RAMCOR inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:ramkump01@googlemail.com?subject=${subject}&body=${body}`;
    statusText.textContent = 'Your email app should open with the message ready to send.';
  });
}
