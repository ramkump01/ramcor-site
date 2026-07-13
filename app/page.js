'use client';

import { useState } from 'react';

const services = [
  {
    title: 'IT Services & Operations',
    description:
      'Reliable infrastructure, modern support models, and resilient delivery for fast-moving institutions.',
  },
  {
    title: 'Banking & Financial Advisory',
    description:
      'Strategy and execution support for compliance, transformation, and growth in regulated environments.',
  },
  {
    title: 'AI & Software Development',
    description:
      'Custom automation, intelligent platforms, and software solutions built with enterprise-grade quality.',
  },
];

const highlights = [
  'Executive-level advisory for digital transformation',
  'Secure, scalable delivery with measurable business impact',
  'Hands-on support aligned with modern compliance needs',
];

const stats = [
  { value: '24/7', label: 'Support readiness' },
  { value: '100+', label: 'Delivery engagements' },
  { value: '99.9%', label: 'Reliability standard' },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`RAMCOR inquiry from ${formData.name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:ramkump01@googlemail.com?subject=${subject}&body=${body}`;
    setStatus('Your email app should open with your message ready to send.');
  };

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="RAMCOR home">
          <img src="/assets/ramcor-logo.svg" alt="RAMCOR" className="brand-logo" />
        </a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Trusted technology partner for ambitious organisations</p>
          <h1>RAMCOR delivers intelligent IT services and advisory for the modern financial world.</h1>
          <p className="hero-text">
            From resilient infrastructure and support to AI strategy, software development, and executive advisory, we help banks and financial businesses move faster with confidence.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="primary-btn">Schedule a consultation</a>
            <a href="#services" className="secondary-btn">Explore services</a>
          </div>
        </div>

        <div className="hero-card">
          <p className="card-label">Why RAMCOR</p>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="stats-grid" aria-label="RAMCOR impact stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="services" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Core capabilities</p>
          <h2>Technology that supports growth, trust, and innovation.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div>
          <p className="eyebrow">Built for regulated, high-performance teams</p>
          <h2>Modern support and advisory shaped by finance-ready thinking.</h2>
          <p>
            RAMCOR combines deep operational understanding with modern delivery practices to create practical solutions for complex environments.
          </p>
        </div>
        <div className="panel-card">
          <h3>What we bring</h3>
          <ul>
            <li>Secure and scalable systems architecture</li>
            <li>AI-enabled productivity and automation</li>
            <li>Reliable support for day-to-day operations</li>
            <li>Practical advisory grounded in industry realities</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section-block contact-section">
        <div className="section-heading">
          <p className="eyebrow">Contact us</p>
          <h2>Let’s discuss your next digital move.</h2>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              Name
              <input
                required
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label>
            Company
            <input
              value={formData.company}
              onChange={(event) => setFormData({ ...formData, company: event.target.value })}
              placeholder="Organisation"
            />
          </label>
          <label>
            Project details
            <textarea
              required
              rows="5"
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              placeholder="Tell us about your goals, challenges, or priorities..."
            />
          </label>
          <button type="submit" className="primary-btn">Send inquiry</button>
          {status ? <p className="status-text">{status}</p> : null}
        </form>
      </section>
    </main>
  );
}
