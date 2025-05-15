import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Minimal placeholder SVG for icons
const PlaceholderIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="#ebf4ff" />
    <path d="M8 12l2 2 4-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function App() {
  // For FAQ open state if needed
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Dummy testimonials
  const testimonials = [
    {
      name: "Dayanara",
      sub: "Co-Founder of Ademsa",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      subscribers: "13K subscribers",
      text: "With Magnific, we cut our maintenance approval time from 3 days to under an hour—and finally have a proper audit trail for every decision.",
    },
    {
      name: "Brandon M.",
      sub: "Property Investor",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      subscribers: "700K subscribers",
      text: "Magnific actually feels like a cheat code. I can legitimately make more approvals in less time. If you want to get started, you gotta give it a try.",
    },
    {
      name: "James S.",
      sub: "Building Manager",
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
      subscribers: "850K subscribers",
      text: "For real, Magnific has made compliance so much easier. I never miss a key deadline and have instant audit logs!",
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] font-sans">
      {/* HEADER */}
      <header className="bg-[#000d49] w-full">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-6">
          <div className="text-white text-2xl font-bold tracking-tight" style={{ fontFamily: 'PP Mori, Inter, sans-serif' }}>MAGNIFIC</div>
          <a href="#demo" className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition text-base shadow">
            Get a Demo
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="w-full bg-[#000d49] py-20 sm:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center px-4">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white text-center max-w-3xl tracking-tight" style={{ fontFamily: 'PP Mori, Inter, sans-serif' }}>
            Automate Every Approval, <br className="hidden sm:block" /> Cut Weeks of Back-and-forth to Minutes
          </h1>
          <p className="text-lg text-[#afdafa] mt-6 max-w-xl text-center">
            Manage maintenance requests, budget sign-offs and vendor approvals—all in one, WhatsApp-powered workflow.
          </p>
          <a
            href="#demo"
            className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 shadow-lg transition"
          >
            Book a Demo
          </a>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {[
            { label: "WhatsApp Gateway" },
            { label: "Audit Logs" },
            { label: "Escalation Alerts" },
            { label: "Custom Workflows" },
            { label: "Real-Time Ping" },
            { label: "Compliance" },
            { label: "Dashboard" },
            { label: "Templates" }
          ].map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center hover:shadow-xl transition">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <PlaceholderIcon className="w-10 h-10" />
              </div>
              <div className="text-sm font-medium text-gray-700 text-center">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3-STEP WORKFLOW SECTION */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-[#000d49] text-center mb-12">How Magnific Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Submit Request', desc: 'Start with a WhatsApp or email, or use a template.' },
            { step: '02', title: 'Review & Approve', desc: 'Managers and board review with audit-ready approvals.' },
            { step: '03', title: 'Complete & Log', desc: 'Automated notifications & audit log for every decision.' },
          ].map(({ step, title, desc }, i) => (
            <div key={i} className="rounded-2xl p-6 bg-[#f8fafc] border border-gray-200 shadow-sm text-center flex flex-col items-center">
              <div className="text-xl font-bold text-indigo-600 mb-2">{step}</div>
              <div className="font-semibold mb-2 text-[#1e244d]">{title}</div>
              <div className="text-gray-500 text-base max-w-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-[#000d49] text-center mb-12">What Our Customers Say</h2>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-left space-y-3 flex flex-col">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.sub}</div>
                  <div className="text-xs text-gray-400">{t.subscribers}</div>
                </div>
              </div>
              <div className="text-[15px] text-gray-700 font-medium mt-2">{t.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="border-t border-b divide-y divide-gray-200 mt-12">
          {/* Section Title */}
          <h2 className="text-3xl font-semibold text-[#000d49] py-10 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full divide-y divide-gray-200">
            {[
              {
                q: "Can I cancel at any time?",
                a: "Absolutely! You can cancel your Magnific subscription at any time in your account or by contacting support.",
              },
              {
                q: "Does Magnific work on mobile and desktop?",
                a: "Yes, Magnific workflows and approvals can be managed from any device via WhatsApp, email, or browser.",
              },
              {
                q: "Is my data secure?",
                a: "We use industry best practices and encryption to keep your data and audit logs protected.",
              },
              {
                q: "How quickly can we onboard?",
                a: "You can get started within a day—most users onboard in under an hour. Our team will assist you with setup if needed.",
              },
              {
                q: "Can I customize my workflow?",
                a: "Yes! Magnific has a drag-and-drop workflow editor so you can mirror your exact process.",
              },
              {
                q: "How do escalations work?",
                a: "If an approver is delayed, Magnific automatically triggers reminders and escalations via your chosen channel (SMS, email, or call).",
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq${i}`}>
                <AccordionTrigger className="py-4 px-1 text-left w-full font-medium text-gray-900 cursor-pointer hover:text-indigo-600 transition">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pt-2 px-1 w-full">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#000d49] text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center py-6 px-4">
          <div className="font-bold text-lg tracking-tight">MAGNIFIC</div>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:underline transition">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline transition">Terms of Service</a>
          </div>
          <div className="flex gap-4">
            {/* Social icon placeholders */}
            <a href="#" aria-label="Twitter" className="hover:opacity-70">
              <svg width={20} height={20} fill="currentColor" className="text-white"><path d="M19.6,4.6c-0.5,0.2-0.9,0.3-1.4,0.4c0.5-0.3,0.9-0.8,1.1-1.3c-0.5,0.3-1,0.6-1.6,0.7c-0.5-0.5-1.3-0.8-2-0.8 c-1.5,0-2.5,1.4-2.2,2.8C7.7,6.2,4.1,4.5,1.7,1.9c-0.4,0.7-0.2,1.5,0.4,2c-0.4,0-0.7-0.1-1-0.3C1.1,5.3,2,6.3,3.3,6.6 c-0.3,0.1-0.6,0.1-0.8,0c0.2,0.7,0.9,1.2,1.7,1.2C3.2,8.8,2.3,9.1,1.4,9.1c-0.3,0-0.5,0-0.8-0.1C2.1,10.4,4.6,11.2,7.3,11.2 c8.5,0,13.2-7,12.9-13.4C18.4,5.2,19,5,19.6,4.6z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
              <svg width={20} height={20} fill="currentColor" className="text-white"><path d="M18.4 18.4h-3.2v-5.6c0-1.3 0-3-1.8-3-1.8 0-2.2 1.4-2.2 2.8v5.8H8V7.9h3v1.4h0c0.4-0.8 1.3-1.6 2.7-1.6 2.9 0 3.4 1.9 3.4 4.3V18.4zM4.2 6.6c-1 0-1.7-0.8-1.7-1.7 0-1 0.7-1.7 1.7-1.7s1.7 0.8 1.7 1.7c0 0.9-0.7 1.7-1.7 1.7zM6.3 18.4H2.1V7.9h4.2V18.4zM20 0H0v20h20V0z"/></svg>
            </a>
            <a href="#" aria-label="Email" className="hover:opacity-70">
              <svg width={20} height={20} fill="currentColor" className="text-white"><path d="M1.4,4.1l8.3,6.1c0.6,0.5,1.5,0.5,2.1,0l8.3-6.1C19.6,4.7,20,5.4,20,6.1v7.8c0,1-0.7,1.7-1.7,1.7H1.7C0.7,15.6,0,14.9,0,13.9V6.1C0,5.4,0.4,4.7,1.4,4.1z M10,10.7L1.4,4.1C1.7,3.6,2.5,3.2,3.3,3.2h13.4c0.8,0,1.6,0.4,1.9,0.9L10,10.7z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
