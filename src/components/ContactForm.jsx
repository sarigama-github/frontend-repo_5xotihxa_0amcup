import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'inquiry' }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('✅ We received your message. We will contact you shortly.')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      setStatus('❌ Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
            <p className="mt-2 text-gray-600">Questions, test drive requests, or service inquiries — we’re here to help.</p>
            <div className="mt-6 space-y-2 text-gray-700">
              <p><span className="font-semibold">Phone:</span> (555) 123-4567</p>
              <p><span className="font-semibold">Email:</span> sales@autocorp.com</p>
              <p><span className="font-semibold">Hours:</span> Mon–Sat 9:00–19:00</p>
            </div>
          </div>
          <form onSubmit={submit} className="bg-white p-6 rounded-xl ring-1 ring-gray-200 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <input className="input" placeholder="Full name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
              <input className="input" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
              <input className="input" placeholder="Phone (optional)" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
              <textarea className="input min-h-[120px]" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
              <button className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-blue-700">Send Message</button>
            </div>
            {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
