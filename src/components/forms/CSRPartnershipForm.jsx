import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, AlertTriangle, Building2, Phone, Mail, User, Briefcase, FileText, Check } from 'lucide-react';
import { submitInquiry } from '../../utils/apiService';
import { csrOpportunities, schoolInfo } from '../../data/schoolData';

export default function CSRPartnershipForm() {
  const [submissionState, setSubmissionState] = useState({ loading: false, result: null });
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setSubmissionState({ loading: true, result: null });
    const response = await submitInquiry('csr-partnership', data);
    setSubmissionState({ loading: false, result: response });
    if (response.success) {
      reset();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 xs:p-6 sm:p-10 shadow-xl border border-[#CDDCD2] relative overflow-hidden">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3 py-1 rounded-full inline-block mb-3">
          CSR & Foundation Gateway
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#073D32]">
          Corporate Partnership Enquiry
        </h3>
        <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
          Connect your organization’s social impact mandate with 40 years of educational transformation. Our administration will contact you within 2 business days.
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
                    ? 'Enquiry Validated & Stored Locally (Integration Ready)'
                    : 'Enquiry Received Successfully'
                  : 'Unable to Dispatch Enquiry'}
              </p>
              <p className="leading-relaxed opacity-90">
                {submissionState.result.message || submissionState.result.error}
              </p>
              {submissionState.result.isSimulated && (
                <div className="mt-3 pt-3 border-t border-amber-200/70 text-xs">
                  <span className="font-semibold block mb-0.5">Direct Administrative Contact:</span>
                  <span>Call our principal liaison directly at </span>
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
        {/* Row 1: Company & Contact Person */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Organization / Company Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="companyName"
                type="text"
                placeholder="e.g. Hyderabad Infrastructure Ltd"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.companyName ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('companyName', { required: 'Organization name is required' })}
              />
            </div>
            {errors.companyName && (
              <p className="text-xs text-rose-600 mt-1">{errors.companyName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contactPerson" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Contact Person <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="contactPerson"
                type="text"
                placeholder="Full Name"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.contactPerson ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('contactPerson', { required: 'Contact person name is required' })}
              />
            </div>
            {errors.contactPerson && (
              <p className="text-xs text-rose-600 mt-1">{errors.contactPerson.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Designation & Official Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="designation" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Designation / Role <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Briefcase className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="designation"
                type="text"
                placeholder="e.g. CSR Head / Director / Trustee"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.designation ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('designation', { required: 'Designation is required' })}
              />
            </div>
            {errors.designation && (
              <p className="text-xs text-rose-600 mt-1">{errors.designation.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Official Email Address <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="email"
                type="email"
                placeholder="official@company.com"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('email', {
                  required: 'Official email is required',
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
        </div>

        {/* Row 3: Phone & Industry Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="phone"
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

          <div>
            <label htmlFor="industryType" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Industry / Organization Type <span className="text-rose-600">*</span>
            </label>
            <select
              id="industryType"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                errors.industryType ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
              }`}
              {...register('industryType', { required: 'Please select an industry type' })}
            >
              <option value="">Select industry sector</option>
              <option value="IT & Software">Information Technology & Software</option>
              <option value="Manufacturing & Heavy Industry">Manufacturing & Heavy Industry</option>
              <option value="Pharmaceuticals & Healthcare">Pharmaceuticals & Healthcare</option>
              <option value="Banking & Financial Services">Banking & Financial Services (BFSI)</option>
              <option value="Philanthropic Foundation / Trust">Philanthropic Foundation / Trust</option>
              <option value="Infrastructure & Real Estate">Infrastructure & Real Estate</option>
              <option value="Other">Other Corporate Entity</option>
            </select>
            {errors.industryType && (
              <p className="text-xs text-rose-600 mt-1">{errors.industryType.message}</p>
            )}
          </div>
        </div>

        {/* Row 4: Area of Interest */}
        <div>
          <label htmlFor="areaOfInterest" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
            Primary Area of Interest <span className="text-rose-600">*</span>
          </label>
          <select
            id="areaOfInterest"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
              errors.areaOfInterest ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
            }`}
            {...register('areaOfInterest', { required: 'Please select an area of interest' })}
          >
            <option value="">Select an impact domain</option>
            {csrOpportunities.map((opp) => (
              <option key={opp.id} value={opp.title}>{opp.title} ({opp.impactArea})</option>
            ))}
            <option value="Comprehensive Institutional Adoption">Comprehensive Institutional Adoption / General CSR</option>
          </select>
          {errors.areaOfInterest && (
            <p className="text-xs text-rose-600 mt-1">{errors.areaOfInterest.message}</p>
          )}
        </div>

        {/* Row 5: Proposed Support or Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
            Proposed Support or Message <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <FileText className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
            <textarea
              id="message"
              rows="4"
              placeholder="Outline your organization's CSR objectives, intended contribution, timeline, or any specific queries..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
              }`}
              {...register('message', {
                required: 'Please provide brief details regarding your proposal',
                minLength: { value: 15, message: 'Message should be at least 15 characters' }
              })}
            ></textarea>
          </div>
          {errors.message && (
            <p className="text-xs text-rose-600 mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#064E3B] focus:ring-[#064E3B]"
              {...register('consent', { required: 'Consent is required to be contacted by school trustees' })}
            />
            <span className="text-xs text-neutral-600 leading-normal">
              I authorize LCH SGT High School administration and the Lions Club educational committee to contact our representative regarding this CSR partnership inquiry.
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-rose-600 mt-1 ml-7">{errors.consent.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submissionState.loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#073D32] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          {submissionState.loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Validating & Processing...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-[#D4AF37]" />
              <span>Submit CSR Partnership Proposal</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
