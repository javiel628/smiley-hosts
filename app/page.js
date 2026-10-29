'use client';

import { useState } from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Instant deployment',
    description:
      'Launch your bot environment in minutes with a clean workflow, ready-to-use infrastructure, and monitored endpoints.',
  },
  {
    icon: '🔒',
    title: 'Secure infrastructure',
    description:
      'Built with encrypted traffic, session isolation, and protections for mission-critical bot services.',
  },
  {
    icon: '📱',
    title: 'WhatsApp-ready',
    description:
      'Designed for WhatsApp automation, message flows, and customer engagement across private channels.',
  },
  {
    icon: '📊',
    title: 'Monitoring dashboard',
    description:
      'Track status, message volume, uptime, incidents, and platform health from a single control panel.',
  },
  {
    icon: '🧩',
    title: 'Flexible API access',
    description:
      'Connect your bot logic, database, CRM, and automation services through scalable endpoints.',
  },
  {
    icon: '🤝',
    title: 'Support for growth',
    description:
      'Built for startups, agencies, and high-volume teams that need reliable infrastructure and low operational friction.',
  },
];

const pricing = [
  {
    name: 'Starter',
    price: '$19',
    period: '/ month',
    description: 'Perfect for testing, small bots, and early automation projects.',
    list: ['1 active bot', 'Basic monitoring', 'Standard support', 'SSL protected access'],
    cta: 'Start Now',
    primary: false,
  },
  {
    name: 'Business',
    price: '$49',
    period: '/ month',
    description: 'Built for growth-focused teams managing active customer automation.',
    list: ['Unlimited bots', 'Priority monitoring', 'Custom webhook support', 'Dedicated account help'],
    cta: 'Get Business',
    primary: true,
    featured: true,
  },
  {
    name: 'Scale',
    price: '$99',
    period: '/ month',
    description: 'For larger teams and high-volume messaging operations that need stability.',
    list: ['Enterprise uptime', 'Advanced analytics', 'Custom deployment', 'Priority support SLA'],
    cta: 'Talk to Sales',
    primary: false,
  },
];

const faqs = [
  {
    question: 'Do I need a VPS?',
    answer:
      'Not necessarily. The website itself does not require a VPS. For real bot operations, your backend still needs a hosted service such as Render, Railway, or a similar managed platform.',
    open: true,
  },
  {
    question: 'Will my bot run 24/7?',
    answer:
      'Yes, if the backend runs on a continuously hosted service with an HTTPS endpoint. A static landing page alone cannot power bot logic by itself.',
  },
  {
    question: 'Can I use WhatsApp?',
    answer:
      'Yes. Smiley Hosts is designed for WhatsApp business workflows, automation services, and secure message integrations through trusted APIs.',
  },
  {
    question: 'Is it good for beginners?',
    answer:
      'Absolutely. The plans are designed to help beginners start small while giving growing businesses a clear path to scale up as bot traffic increases.',
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Smiley Hosts home">
            <span className="brand-mark">S</span>
            <span>Smiley Hosts</span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a className="button ghost" href="#pricing">
              View Pricing
            </a>
            <a className="button primary" href="#contact">
              Get Started
            </a>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '×' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div>
              <span className="eyebrow">Reliable WhatsApp Bot Hosting</span>
              <h1>
                Run your <span className="highlight">bot business</span> with always-on hosting
              </h1>
              <p>
                Smiley Hosts gives you secure, scalable infrastructure for WhatsApp automation,
                customer support, CRM workflows, and messaging systems designed for agencies,
                creators, and growing businesses.
              </p>

              <div className="cta-row">
                <a className="button primary" href="#pricing">
                  Get Started
                </a>
                <a className="button secondary" href="#features">
                  Explore Features
                </a>
              </div>

              <ul className="hero-meta">
                <li>99.9% uptime</li>
                <li>24/7 support</li>
                <li>Fast setup</li>
              </ul>
            </div>

            <div className="dashboard">
              <div className="window">
                <div className="window-top">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>

                <div className="dashboard-body">
                  <div className="status-row">
                    <span>Active Bot Infrastructure</span>
                    <span className="status-pill">Live</span>
                  </div>

                  <div className="bot-grid">
                    <div className="bot-card">
                      <div className="bot-left">
                        <div className="bot-icon">💬</div>
                        <div>
                          <div className="bot-title">Auto Reply Bot</div>
                          <div className="bot-small">2,340 conversations</div>
                        </div>
                      </div>
                      <span className="tag">Online</span>
                    </div>

                    <div className="bot-card">
                      <div className="bot-left">
                        <div className="bot-icon">📦</div>
                        <div>
                          <div className="bot-title">Order Bot</div>
                          <div className="bot-small">1,120 orders today</div>
                        </div>
                      </div>
                      <span className="tag">Healthy</span>
                    </div>

                    <div className="bot-card">
                      <div className="bot-left">
                        <div className="bot-icon">📈</div>
                        <div>
                          <div className="bot-title">Growth Bot</div>
                          <div className="bot-small">94% reply rate</div>
                        </div>
                      </div>
                      <span className="tag">Boost</span>
                    </div>
                  </div>

                  <div className="stats-grid">
                    <div className="mini-stat">
                      <strong>24/7</strong>
                      <span>Monitoring</span>
                    </div>
                    <div className="mini-stat">
                      <strong>32ms</strong>
                      <span>Avg. ping</span>
                    </div>
                    <div className="mini-stat">
                      <strong>99.9%</strong>
                      <span>Uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brands">
          <div className="container">
            <div className="brand-row">
              <div className="brand-box">WABA</div>
              <div className="brand-box">FLOW</div>
              <div className="brand-box">CRM</div>
              <div className="brand-box">AI</div>
              <div className="brand-box">SUPPORT</div>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Why teams choose us</span>
              <h2>Built for fast, secure bot operations.</h2>
              <p>
                Whether you run a WhatsApp bot agency, e-commerce automation, customer support
                system, or sales pipeline, Smiley Hosts helps you deploy faster and scale without
                infrastructure headaches.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Simple pricing</span>
              <h2>Choose the hosting plan that fits your bot.</h2>
            </div>

            <div className="pricing-grid">
              {pricing.map((plan) => (
                <article className={`price-card ${plan.featured ? 'popular' : ''}`} key={plan.name}>
                  {plan.featured && <span className="badge">Most popular</span>}
                  <h3 className="price-name">{plan.name}</h3>
                  <div className="price">
                    <strong>{plan.price}</strong>
                    <span>{plan.period}</span>
                  </div>
                  <p>{plan.description}</p>

                  <ul className="feature-list">
                    {plan.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a className={`button ${plan.primary ? 'primary' : 'secondary'}`} href="#contact">
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">How it works</span>
              <h2>From setup to scale in four steps.</h2>
            </div>

            <div className="process-grid">
              <article className="step">
                <div className="step-number">1</div>
                <h3>Choose a plan</h3>
                <p>Pick the hosting plan that matches your bot workload and target uptime needs.</p>
              </article>

              <article className="step">
                <div className="step-number">2</div>
                <h3>Connect your bot</h3>
                <p>Link your WhatsApp or automation service to your Smiley Hosts environment.</p>
              </article>

              <article className="step">
                <div className="step-number">3</div>
                <h3>Deploy securely</h3>
                <p>Get your webhook, access setup, and message flow live with dashboards and alerts.</p>
              </article>

              <article className="step">
                <div className="step-number">4</div>
                <h3>Scale with confidence</h3>
                <p>Grow your automation without worrying about poor uptime or backend instability.</p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Customer feedback</span>
              <h2>Trusted by modern automation teams.</h2>
            </div>

            <div className="testimonials-grid">
              <article className="quote">
                <p>
                  “Smiley Hosts helped us move from a shaky local setup to a professional bot
                  infrastructure that clients can rely on every day.”
                </p>
                <div className="person">
                  <div className="avatar">A</div>
                  <div>
                    <strong>Amir K.</strong>
                    <small>Bot Agency Founder</small>
                  </div>
                </div>
              </article>

              <article className="quote">
                <p>
                  “The platform feels premium, the rollout was quick, and the uptime has made a
                  big difference for our support and sales channels.”
                </p>
                <div className="person">
                  <div className="avatar">N</div>
                  <div>
                    <strong>Nadya R.</strong>
                    <small>Operations Lead</small>
                  </div>
                </div>
              </article>

              <article className="quote">
                <p>
                  “We wanted something reliable and polished. Smiley Hosts delivered an easy setup
                  and a better experience for our clients.”
                </p>
                <div className="person">
                  <div className="avatar">T</div>
                  <div>
                    <strong>Tom S.</strong>
                    <small>Automation Consultant</small>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="container faq-wrap">
            <div className="faq-left">
              <span className="eyebrow">FAQ</span>
              <h3>Everything you need to know.</h3>
              <p>
                Smiley Hosts is designed to make bot deployment simpler, more reliable, and easier
                to scale for teams that want to focus on customers instead of infrastructure.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => (
                <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={item.question}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    <span>{item.question}</span>
                    <span>+</span>
                  </button>
                  <div className="faq-answer" style={{ maxHeight: openFaq === index ? '200px' : '0px' }}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="cta-banner">
              <div>
                <h3>Launch your bot business with Smiley Hosts.</h3>
                <p>Fast setup, smooth support, and a premium client experience.</p>
              </div>
              <a className="button primary" href="mailto:hello@smileyhosts.com">
                hello@smileyhosts.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div className="brand">
            <span className="brand-mark">S</span>
            <span>Smiley Hosts</span>
          </div>

          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>

          <div>© {new Date().getFullYear()} Smiley Hosts</div>
        </div>
      </footer>
    </>
  );
}
