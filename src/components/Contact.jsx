import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">
          Ready to bring your next project to life? Let's discuss how my expertise in backend systems and ML integration can help achieve your goals.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>{import.meta.env.VITE_CONTACT_EMAIL || 'your.email@example.com'}</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>{import.meta.env.VITE_CONTACT_PHONE || '+91 XXXXX XXXXX'}</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>{import.meta.env.VITE_CONTACT_LOCATION || 'India | Open to Remote'}</p>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className={`btn btn-primary btn-full${sent ? ' sent' : ''}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                {sent ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
