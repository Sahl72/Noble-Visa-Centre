import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Send, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Header';
import { getWhatsAppUrl, LOCAL_PHONE_DISPLAY, WHATSAPP_DISPLAY } from '../data/visaData';
import { ConsultationFormData } from '../types';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    interest: 'Student Visa',
    preferredCountry: 'UK',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage = `*New Consultation Request - Noble Visa Centre*\n\n` +
      `👤 *Name:* ${formData.fullName || 'Prospective Client'}\n` +
      `📱 *Phone/WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `✉️ *Email:* ${formData.email || 'Not provided'}\n` +
      `🎯 *Visa Interest:* ${formData.interest}\n` +
      `🌍 *Destination of Interest:* ${formData.preferredCountry}\n` +
      (formData.message ? `📝 *Notes:* ${formData.message}\n` : '') +
      `\n_Sent via Noble Visa Centre Web Portal_`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Direct connection to WhatsApp with formatted client message
      window.open(getWhatsAppUrl(whatsappMessage), '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-5 sm:p-10 lg:p-12 border border-slate-200 shadow-xl overflow-hidden relative">
          
          {/* Left Column: Smiling Student Photo with Passport & Travel Dotted Trail */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Travel Path Dotted Graphic */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <svg className="w-full h-full text-blue-400" viewBox="0 0 400 400" fill="none">
                <path d="M50 300 C 100 100, 300 100, 350 300" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                <circle cx="80" cy="150" r="16" fill="#3b82f6" fillOpacity="0.15" />
                <circle cx="80" cy="150" r="6" fill="#2563eb" />
                <circle cx="320" cy="180" r="16" fill="#3b82f6" fillOpacity="0.15" />
                <circle cx="320" cy="180" r="6" fill="#2563eb" />
              </svg>
            </div>

            {/* Student Visual Card */}
            <div className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 bg-gradient-to-b from-blue-50 to-white">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80" 
                alt="Happy Student with Visa and Passport" 
                className="w-full h-64 sm:h-96 object-cover object-top"
                referrerPolicy="no-referrer"
              />

              {/* Passport Stamp Overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-lg border border-blue-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#0a193b]">100% Free Initial Assessment</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Chat directly with licensed counselor</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a193b] tracking-tight">
                Book Your Free Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Let our experts guide you to the right path.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-emerald-900">Consultation Request Dispatched!</h3>
                  <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                    Your details have been connected to our WhatsApp counselor team ({LOCAL_PHONE_DISPLAY}). We will review your application requirements immediately.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        interest: 'Student Visa',
                        preferredCountry: 'UK',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-900 py-2"
                  >
                    Submit another consultation
                  </button>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-xl text-xs font-bold shadow hover:bg-[#20ba59]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                
                {/* Row 1: Full Name & Mobile/WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Full Name
                    </label>
                    <input 
                      type="text"
                      name="fullName"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Mobile / WhatsApp
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      placeholder="074 010 4106"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address & Preferred Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      name="email"
                      required
                      placeholder="youremail@mail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Preferred Destination
                    </label>
                    <select
                      name="preferredCountry"
                      value={formData.preferredCountry}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    >
                      <option value="Haven't Decided Yet (Need Counselor Guidance)">🤔 Haven't Decided Yet (Need Guidance)</option>
                      <option value="UK">🇬🇧 United Kingdom</option>
                      <option value="Russia">🇷🇺 Russia</option>
                      <option value="Malaysia">🇲🇾 Malaysia</option>
                      <option value="Singapore">🇸🇬 Singapore</option>
                      <option value="Taiwan">🇹🇼 Taiwan (Hospitality Internship)</option>
                      <option value="Belarus">🇧🇾 Belarus</option>
                      <option value="Cyprus">🇨🇾 Cyprus</option>
                      <option value="Latvia">🇱🇻 Latvia (Schengen)</option>
                      <option value="Switzerland">🇨🇭 Switzerland</option>
                      <option value="India">🇮🇳 India</option>
                      <option value="Dubai (UAE)">🇦🇪 Dubai (UAE)</option>
                      <option value="Canada">🇨🇦 Canada</option>
                      <option value="New Zealand">🇳🇿 New Zealand</option>
                      <option value="Australia">🇦🇺 Australia</option>
                      <option value="Thailand">🇹🇭 Thailand</option>
                      <option value="Vietnam">🇻🇳 Vietnam</option>
                      <option value="Other Destination (Worldwide)">🌍 Other Destination (Worldwide)</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: I am interested in */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    I am interested in
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  >
                    <option value="Student Visa">Student Visa (Undergraduate / Masters)</option>
                    <option value="Tourist Visa">Tourist & Holiday Visit Visa</option>
                    <option value="Business Visa">Business & Commercial Visa</option>
                    <option value="Family Visa">Family & Dependent Sponsorship</option>
                    <option value="Employment Visa">Work & Employment Permit</option>
                    <option value="Direct University Payment">Direct University Tuition Support</option>
                    <option value="Other Visa Solutions">Other Custom Visa Solution</option>
                  </select>
                </div>

                {/* Big Blue Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="consultation-form-submit-btn"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#1053c7] hover:bg-[#0c43a3] text-white py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 group active:scale-98 disabled:opacity-75"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Connecting with Counselor...</span>
                      </span>
                    ) : (
                      <>
                        <span>Book Free Consultation</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Connects you directly with Noble Visa Centre official WhatsApp assistance.</span>
                </p>

              </form>
            )}

          </div>

        </div>

        {/* Office Branch Locations & Direct Hotlines */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Headquarters Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <h3 className="text-xs font-black text-[#0a193b] uppercase tracking-wider">Headquarters</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium">393/3, Lily Avenue, Battaramulla</p>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                <a 
                  href="https://www.google.com/maps/place/393+Lily+Ave,+Sri+Jayawardenepura+Kotte/@6.9028978,79.9219379,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae257547942e599:0x8c661df1a15de96d!8m2!3d6.9028925!4d79.9245128!16s%2Fg%2F11h4nzbq5g?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium underline"
                >
                  View on Google Maps ↗
                </a>
                <span>•</span>
                <span>Mon - Sat 9:00 AM – 6:00 PM</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <a
                href="tel:0740104106"
                className="inline-flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 px-3 py-1.5 rounded-xl text-xs font-bold transition"
                title="Call 074 010 4106"
              >
                <span>074 010 4106</span>
              </a>
              <a
                href="tel:0114166068"
                className="inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold transition"
                title="Call Landline 0114 166 068"
              >
                <span>0114 166 068</span>
              </a>
              <a
                href={getWhatsAppUrl("Hello Noble Visa Centre Headquarters! I would like to book a consultation.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition shadow-xs"
                title="WhatsApp Headquarters"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* One Galle Face Branch Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <h3 className="text-xs font-black text-[#0a193b] uppercase tracking-wider">One Galle Face Branch</h3>
              </div>
              <p className="text-xs text-slate-600">Level 12, One Galle Face Tower, Colombo, Sri Lanka</p>
              <p className="text-[11px] text-slate-400">Business Hours: Mon - Sat 9:00 AM – 6:00 PM</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="tel:0740102108"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-200 px-3.5 py-2 rounded-xl text-xs font-bold transition"
              >
                <span>074 010 2108</span>
              </a>
              <a
                href={getWhatsAppUrl("Hello Noble Visa Centre One Galle Face Branch! I would like to book a consultation.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition shadow-xs"
                title="WhatsApp One Galle Face Office"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

