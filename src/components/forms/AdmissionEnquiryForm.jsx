import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, AlertTriangle, User, GraduationCap, Phone, Mail, Calendar, MessageSquare } from 'lucide-react';
import { submitInquiry } from '../../utils/apiService';
import { schoolInfo } from '../../data/schoolData';

export default function AdmissionEnquiryForm() {
  const [submissionState, setSubmissionState] = useState({ loading: false, result: null });
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setSubmissionState({ loading: true, result: null });
    const response = await submitInquiry('admissions', data);
    setSubmissionState({ loading: false, result: response });
    if (response.success) {
      reset();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 xs:p-6 sm:p-10 shadow-xl border border-[#CDDCD2] relative overflow-hidden">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3 py-1 rounded-full inline-block mb-3">
          Parent & Student Admissions
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#073D32]">
          Admission Enquiry Form
        </h3>
        <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
          Take the first step toward your child's holistic educational journey. Fill in the details below, and our admissions team will connect with you with complete guidance.
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
                    : 'Admission Enquiry Received'
                  : 'Unable to Dispatch Form'}
              </p>
              <p className="leading-relaxed opacity-90">
                {submissionState.result.message || submissionState.result.error}
              </p>
              {submissionState.result.isSimulated && (
                <div className="mt-3 pt-3 border-t border-amber-200/70 text-xs">
                  <span className="font-semibold block mb-0.5">Need immediate assistance?</span>
                  <span>Call our school counselors directly at </span>
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
        {/* Row 1: Parent Name & Student Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="parentName" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Parent / Guardian Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="parentName"
                type="text"
                placeholder="Parent's Full Name"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.parentName ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('parentName', { required: 'Parent name is required' })}
              />
            </div>
            {errors.parentName && (
              <p className="text-xs text-rose-600 mt-1">{errors.parentName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="studentName" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Student Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <GraduationCap className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="studentName"
                type="text"
                placeholder="Child's Full Name"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.studentName ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('studentName', { required: 'Student name is required' })}
              />
            </div>
            {errors.studentName && (
              <p className="text-xs text-rose-600 mt-1">{errors.studentName.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Age, Current Class, Applying Class */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label htmlFor="studentAge" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Student's Age <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="studentAge"
                type="number"
                min="3"
                max="18"
                placeholder="e.g. 10"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.studentAge ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('studentAge', {
                  required: 'Age is required',
                  min: { value: 3, message: 'Minimum age is 3' },
                  max: { value: 18, message: 'Maximum age is 18' }
                })}
              />
            </div>
            {errors.studentAge && (
              <p className="text-xs text-rose-600 mt-1">{errors.studentAge.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="currentClass" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Current Class / School
            </label>
            <input
              id="currentClass"
              type="text"
              placeholder="e.g. Class 4"
              className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-neutral-50/50 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
              {...register('currentClass')}
            />
          </div>

          <div>
            <label htmlFor="applyingClass" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Class Applying For <span className="text-rose-600">*</span>
            </label>
            <select
              id="applyingClass"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                errors.applyingClass ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
              }`}
              {...register('applyingClass', { required: 'Please select class applying for' })}
            >
              <option value="">Select target class</option>
              <option value="Primary (Classes 1 - 5)">Primary (Classes 1 - 5)</option>
              <option value="Upper Primary (Classes 6 - 7)">Upper Primary (Classes 6 - 7)</option>
              <option value="High School (Classes 8 - 10)">High School (Classes 8 - 10)</option>
              <option value="General Admission Inquiry">General / Nursery Inquiry</option>
            </select>
            {errors.applyingClass && (
              <p className="text-xs text-rose-600 mt-1">{errors.applyingClass.message}</p>
            )}
          </div>
        </div>

        {/* Row 3: Parent's Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="parentPhone" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Parent's Phone Number <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="parentPhone"
                type="tel"
                placeholder="+91 98765 43210"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B] ${
                  errors.parentPhone ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-neutral-50/50'
                }`}
                {...register('parentPhone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9+\s-]{8,15}$/,
                    message: 'Please enter a valid phone number'
                  }
                })}
              />
            </div>
            {errors.parentPhone && (
              <p className="text-xs text-rose-600 mt-1">{errors.parentPhone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="parentEmail" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                id="parentEmail"
                type="email"
                placeholder="parent@example.com (optional)"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-300 bg-neutral-50/50 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                {...register('parentEmail')}
              />
            </div>
          </div>
        </div>

        {/* Row 4: Preferred Contact Method */}
        <div>
          <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
            Preferred Contact Method
          </label>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="Phone Call"
                defaultChecked
                {...register('preferredContact')}
                className="text-[#064E3B] focus:ring-[#064E3B]"
              />
              <span>Phone Call</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="WhatsApp"
                {...register('preferredContact')}
                className="text-[#064E3B] focus:ring-[#064E3B]"
              />
              <span>WhatsApp Message</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="Email"
                {...register('preferredContact')}
                className="text-[#064E3B] focus:ring-[#064E3B]"
              />
              <span>Email</span>
            </label>
          </div>
        </div>

        {/* Row 5: Additional Message */}
        <div>
          <label htmlFor="admissionMessage" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
            Additional Questions / Notes
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
            <textarea
              id="admissionMessage"
              rows="3"
              placeholder="Any specific questions regarding fee concessions, syllabus, transport, or timing..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-300 bg-neutral-50/50 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
              {...register('admissionMessage')}
            ></textarea>
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#064E3B] focus:ring-[#064E3B]"
              {...register('consent', { required: 'Consent is required to be contacted by school staff' })}
            />
            <span className="text-xs text-neutral-600 leading-normal">
              I agree to be contacted by LCH SGT High School staff regarding admission eligibility, schedules, and document requirements.
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
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-[#D4AF37]" />
              <span>Submit Admission Enquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
