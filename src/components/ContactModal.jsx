import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';
import NexusLogo from './NexusLogo';

export default function ContactModal({ isOpen, onClose, preselectedService = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    scope: 'Expansion & Scale',
    services: preselectedService ? [preselectedService] : ['Digital Marketing'],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const availableServices = [
    'Digital Marketing & Ads',
    'Social Media Management',
    'Website Development',
    'Mobile & Web App Dev',
    'AI Content Creation',
    'AI Automation & Chatbots',
    'Strategic Partnerships',
    'Investment Advisory'
  ];

  const handleToggleService = (svc) => {
    setFormData(prev => {
      const exists = prev.services.includes(svc);
      if (exists) {
        return { ...prev, services: prev.services.filter(s => s !== svc) };
      } else {
        return { ...prev, services: [...prev.services, svc] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission to CRM / webhook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-[#FBFBFB]">
          <div className="flex items-center gap-2">
            <NexusLogo variant="light" size="sm" />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-50 text-[#C4121A] flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111315] tracking-tight mb-2">
              Strategic Consultation Requested!
            </h3>
            
            <p className="text-sm text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-black">{formData.fullName || 'Partner'}</span>. Our senior growth strategists in Dubai and Nigeria have received your inquiry and will reach out within 24 hours.
            </p>

            {/* Simulated Booking Confirmation Box */}
            <div className="w-full max-w-md p-4 rounded-xl bg-gray-50 border border-gray-200/80 text-left mb-8 text-xs text-gray-700 space-y-2">
              <div className="flex items-center gap-2 text-[#C4121A] font-semibold">
                <Calendar className="w-4 h-4" />
                <span>Next Step: Discovery Session Scheduling</span>
              </div>
              <p className="text-gray-500">
                A calendar invitation with meeting links has been prepared for <strong className="text-black">{formData.email || 'your email'}</strong>.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="btn-primary-red px-8 py-3 rounded-lg text-sm font-semibold tracking-wide"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="red-dash" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#C4121A] uppercase">
                  Let's Connect
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#111315] tracking-tight">
                Ready to Grow Your Business?
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Fill out the strategic discovery brief below and let's engineer your growth roadmap.
              </p>
            </div>

            {/* Select Services of Interest */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Services Required (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {availableServices.map((svc) => {
                  const isSelected = formData.services.includes(svc);
                  return (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => handleToggleService(svc)}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                        isSelected 
                          ? 'bg-[#C4121A] text-white shadow-sm' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}{svc}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Two-Column Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-[#C4121A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Alexander Brooks"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4121A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Work Email <span className="text-[#C4121A]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alexander@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4121A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Phone / WhatsApp <span className="text-[#C4121A]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+971 50 123 4567 / +234..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4121A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Apex Ventures Ltd"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4121A] focus:border-transparent"
                />
              </div>
            </div>

            {/* Scope / Timeline */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Project Scope & Timeline
              </label>
              <select
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4121A] bg-white"
              >
                <option>Immediate Launch (Next 1-2 Weeks)</option>
                <option>Quarterly Digital Overhaul (1-3 Months)</option>
                <option>Ongoing Strategic Growth Retainer</option>
                <option>Enterprise AI & Technology Automation</option>
              </select>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Tell us about your objectives or current bottlenecks
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Give us a brief overview of your business, target market, or what you would like to achieve..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4121A] focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary-red py-3.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Submitting Discovery Request...</span>
                ) : (
                  <>
                    <span>Submit & Request Strategic Consultation</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-center text-gray-400">
              Nexus Bridge Alliance Limited respects your confidentiality. Non-Disclosure Agreement (NDA) provided upon request.
            </p>

            <div className="pt-2 text-center border-t border-gray-100">
              <span className="text-[11px] text-gray-500">
                Prefer direct executive contact?{' '}
                <a
                  href="https://www.linkedin.com/in/abraham-munie-abdullahi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#0A66C2] hover:underline inline-flex items-center gap-1"
                >
                  Connect with Abraham Munie Abdullahi (Founder) ↗
                </a>
              </span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
