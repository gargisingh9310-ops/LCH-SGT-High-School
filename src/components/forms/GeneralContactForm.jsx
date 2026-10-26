import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, AlertTriangle, User, Phone, Mail, HelpCircle, MessageSquare } from 'lucide-react';
import { submitInquiry } from '../../utils/apiService';
import { schoolInfo } from '../../data/schoolData';

export default function GeneralContactForm() {
  const [submissionState, setSubmissionState] = useState({ loading: false, result: null });
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setSubmissionState({ loading: true, result: null });
    const response = await submitInquiry('general-contact', data);
    setSubmissionState({ loading: false, result: response });
    if (response.success) {
      reset();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-[#CDDCD2] relative overflow-hidden">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3 py-1 rounded-full inline-block mb-3">
          Direct School Office
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#073D32]">
          Send Us a Message
        </h3>
        <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
          For campus visits, institutional queries, or general administrative matters, please submit your enquiry below.
        </p>
      </div>

      {submissionState.result && (
        <div className={`mb-8 p-5 rounded-xl border ${
          submissionState.result.success
            ? submissionState.result.isSimulated
              ? 'bg-amber-50/90 border-amber-300 text-amber-950'
              : 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
            : 'bg-rose-50 border-rose-300 text-rose-950'
        }`}>
          <div className="flex items-start gap-3">
            {submissionState.result.success ? (
              <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${submissionState.result.isSimulated ? 'text-amber-700' : 'text-emerald-700'}`} />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
            )}
            <div className="text-sm">
              <p className="font-semibold mb-1">
                {submissionState.result.success
                  ? submissionState.result.isSimulated
                    ? 'Message Validated & Stored Locally (Integration Ready)'
                    : 'Message Sent Successfully'
                  : 'Unable to Send Message'}
              </p>
              <p className="leading-relaxed opacity-90">
                {submissionState.result.message || submissionState.result.error}
              </p>
              {submissionState.result.isSimulated && (
                <div className="mt-3 pt-3 border-t border-amber-200/70 text-xs">
                  <span className="font-semibold block mb-0.5">Urgent matter?</span>
                  <span>Contact our helplines immediately at </span>
                  <a href={`tel:${schoolInfo.phones[0].raw}`} className="font-bold underline text-[#064E3B]">
                    {schoolInfo.phones[0].display}
                  </a>
                  <span> or </span>
                  <a href={`tel:${schoolInfo.phones[1].raw}`} className="font-bold underline text-[#064E3B]">
                    {schoolInfo.phones[1].display}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contactName" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="contactName"
                type="text"
                placeholder="Your Name"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('name', { required: 'Full name is required' })}
              />
            </div>
            {errors.name && (
              <p className="text-xs text-rose-600 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contactPhone" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="contactPhone"
                type="tel"
                placeholder="+91 98765 43210"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9+\s-]{8,15}$/,
                    message: 'Please enter a valid phone number'
                  }
                })}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Email & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contactEmail" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="contactEmail"
                type="email"
                placeholder="name@example.com"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address'
                  }
                })}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Nature of Query <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <HelpCircle className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <select
                id="subject"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.subject ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('subject', { required: 'Please select inquiry nature' })}
              >
                <option value="">Select category</option>
                <option value="General Information">General School Information</option>
                <option value="Campus Visit Appointment">Schedule Campus Visit</option>
                <option value="Alumni Connection">Alumni Association</option>
                <option value="Vendor / Partner">Vendor / Supplies</option>
                <option value="Other">Other Administrative Inquiry</option>
              </select>
            </div>
            {errors.subject && (
              <p className="text-xs text-rose-600 mt-1">{errors.subject.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="generalMessage" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
            Your Message <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
            <textarea
              id="generalMessage"
              rows="4"
              placeholder="How can we assist you today? Please share any relevant context..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
              }`}
              {...register('message', {
                required: 'Please enter your message',
                minLength: { value: 10, message: 'Message must be at least 10 characters' }
              })}
            ></textarea>
          </div>
          {errors.message && (
            <p className="text-xs text-rose-600 mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#064E3B] focus:ring-[#064E3B]"
              {...register('consent', { required: 'Consent is required to process your inquiry' })}
            />
            <span className="text-xs text-neutral-600 leading-normal">
              I agree to be contacted by LCH SGT High School staff in response to this inquiry.
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-rose-600 mt-1 ml-7">{errors.consent.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submissionState.loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#073D32] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          {submissionState.loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-[#D4AF37]" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
