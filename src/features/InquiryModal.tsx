"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import {
  Award,
  CheckCircle,
  GraduationCap,
  MessageCircle,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import * as Yup from "yup";

export default function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("supernova_inquiry_seen");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("supernova_inquiry_seen", "true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const formik = useFormik({
    initialValues: {
      studentName: "",
      phone: "",
      schoolName: "",
      seekingAdmission: "",
      referredFrom: "",
      studyType: "",
      message: "",
    },
    validationSchema: Yup.object({
      studentName: Yup.string()
        .required("Full name is required")
        .min(2, "Name is too short"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(
          /^[6-9]\d{9}$/,
          "Must be a valid 10-digit Indian phone number"
        ),
      schoolName: Yup.string().required("School name is required"),
      seekingAdmission: Yup.string().required("Please select a standard"),
      referredFrom: Yup.string().required("Please select a reference"),
      studyType: Yup.string().required("Please select a study type"),
    }),
    onSubmit: async (values) => {
      console.log("Form values:", values);
      setIsSubmitted(true);
    },
  });

  if (!isOpen) return null;

  const selectClass = (hasError: boolean) =>
    `flex h-11 w-full rounded-md border text-sm px-3 py-2 bg-slate-50 shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary ${
      hasError ? "border-red-300 ring-red-500" : "border-slate-200"
    }`;

  const admissionOptions = [
    { value: "grade_1", label: "Grade 1" },
    { value: "grade_2", label: "Grade 2" },
    { value: "grade_3", label: "Grade 3" },
    { value: "grade_4", label: "Grade 4" },
    { value: "grade_5", label: "Grade 5" },
    { value: "grade_6", label: "Grade 6" },
    { value: "grade_7", label: "Grade 7" },
    { value: "grade_8", label: "Grade 8" },
    { value: "grade_9", label: "Grade 9" },
    { value: "grade_10", label: "Grade 10" },
    { value: "grade_11_science", label: "Grade 11 – Science" },
    { value: "grade_11_commerce", label: "Grade 11 – Commerce" },
    { value: "grade_12_science", label: "Grade 12 – Science" },
    { value: "grade_12_commerce", label: "Grade 12 – Commerce" },
    { value: "crash_course", label: "Crash Course" },
    { value: "spoken_english", label: "Spoken English" },
    { value: "skill_development", label: "Skill Development" },
    { value: "digital_skills", label: "Digital Skills" },
    { value: "mothers_club", label: "Mothers Club" },
  ];

  const referenceOptions = [
    { value: "social_media", label: "Social Media" },
    { value: "friend_family", label: "Friend / Family" },
    { value: "google", label: "Google Search" },
    { value: "newspaper", label: "Newspaper / Pamphlet" },
    { value: "existing_student", label: "Existing Student" },
    { value: "school", label: "School" },
    { value: "other", label: "Other" },
  ];

  const studyTypeOptions = [
    { value: "personal", label: "Personal (1-on-1)" },
    { value: "chapter", label: "Chapter-wise" },
    { value: "group", label: "Group" },
    { value: "at_your_place", label: "At Your Place" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full sm:rounded-md sm:max-w-4xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative max-h-[95dvh] sm:max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-50 p-2 bg-white/80 backdrop-blur-md rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Branding */}
        <div className="hidden md:flex md:w-5/12 bg-primary text-white p-10 flex-col justify-between relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[#051d40]/40 z-0" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <span className="font-heading font-bold text-xl tracking-wide">
                SuperNova
              </span>
            </div>
            <h2 className="text-4xl font-bold font-heading leading-tight mb-6">
              Start Your <br />
              Journey to <br />
              Success.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Join thousands of students achieving their dreams in engineering
              and medical sciences.
            </p>
          </div>
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-3 bg-white text-primary px-5 py-3 rounded-xl font-bold text-sm shadow-lg">
              <Award className="w-5 h-5 opacity-80 text-primary" />
              100% IMPROVEMENT RATE
            </div>
          </div>
        </div>

        {/* Mobile Top Banner */}
        <div className="md:hidden bg-primary text-white px-6 pt-8 pb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary" />
            </div>
            <span className="font-heading font-bold text-base tracking-wide">
              SuperNova
            </span>
          </div>
          <h2 className="text-2xl font-bold font-heading leading-tight">
            Book Your Free Demo
          </h2>
          <p className="text-white/75 text-sm mt-1">
            Our counselor will call you within 24 hours.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 flex flex-col overflow-y-auto">
          <div className="p-5 sm:p-8 md:p-5 flex flex-col justify-center flex-1">
            {isSubmitted ? (
              <div className="text-center py-10 animate-in slide-in-from-bottom-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-md flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                  Inquiry Received!
                </h3>
                <p className="text-slate-600 mb-6 max-w-sm mx-auto text-sm sm:text-base">
                  Thank you for your interest. One of our academic counselors
                  will contact you within 24 hours to schedule your free demo.
                </p>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="px-8 font-bold rounded-xl h-11 w-full sm:w-auto"
                >
                  Return to Website
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-5 hidden md:block space-y-2">
                  <div className="inline-flex items-center gap-2 bg-primary text-white px-2 py-1.5 rounded-md text-sm md:text-xs font-bold border border-primary/20 uppercase tracking-widest shadow-sm w-fit">
                    <Star className="w-3.5 h-3.5 fill-current text-white" />
                    Quick Inquiry
                  </div>
                  <h2 className="text-3xl font-bold text-primary font-heading">
                    Admission Enquiry
                  </h2>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-4">
                  {formik.status && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                      {formik.status}
                    </div>
                  )}

                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="studentName"
                        placeholder="Student's full name"
                        className={`h-11 bg-slate-50 border-slate-200 focus-visible:ring-primary text-sm ${
                          formik.touched.studentName &&
                          formik.errors.studentName
                            ? "border-red-300 focus-visible:ring-red-500"
                            : ""
                        }`}
                        {...formik.getFieldProps("studentName")}
                      />
                      {formik.touched.studentName &&
                        formik.errors.studentName && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.studentName}
                          </p>
                        )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 00000 00000"
                        className={`h-11 bg-slate-50 border-slate-200 focus-visible:ring-primary text-sm ${
                          formik.touched.phone && formik.errors.phone
                            ? "border-red-300 focus-visible:ring-red-500"
                            : ""
                        }`}
                        {...formik.getFieldProps("phone")}
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* School Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      School Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="schoolName"
                      placeholder="Enter your school name"
                      className={`h-11 bg-slate-50 border-slate-200 focus-visible:ring-primary text-sm ${
                        formik.touched.schoolName && formik.errors.schoolName
                          ? "border-red-300 focus-visible:ring-red-500"
                          : ""
                      }`}
                      {...formik.getFieldProps("schoolName")}
                    />
                    {formik.touched.schoolName && formik.errors.schoolName && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.schoolName}
                      </p>
                    )}
                  </div>

                  {/* Seeking Admission + Study Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Seeking Admission In{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="seekingAdmission"
                        className={selectClass(
                          !!(
                            formik.touched.seekingAdmission &&
                            formik.errors.seekingAdmission
                          )
                        )}
                        {...formik.getFieldProps("seekingAdmission")}
                      >
                        <option value="" disabled>
                          Select Standard / Course
                        </option>
                        <optgroup label="Grade 1 – 10">
                          {admissionOptions.slice(0, 10).map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Grade 11 & 12">
                          {admissionOptions.slice(10, 14).map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Special Programs">
                          {admissionOptions.slice(14).map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                      {formik.touched.seekingAdmission &&
                        formik.errors.seekingAdmission && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.seekingAdmission}
                          </p>
                        )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Study Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="studyType"
                        className={selectClass(
                          !!(
                            formik.touched.studyType && formik.errors.studyType
                          )
                        )}
                        {...formik.getFieldProps("studyType")}
                      >
                        <option value="" disabled>
                          Select Study Type
                        </option>
                        {studyTypeOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      {formik.touched.studyType && formik.errors.studyType && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.studyType}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Referred From */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Referred From <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="referredFrom"
                      className={selectClass(
                        !!(
                          formik.touched.referredFrom &&
                          formik.errors.referredFrom
                        )
                      )}
                      {...formik.getFieldProps("referredFrom")}
                    >
                      <option value="" disabled>
                        How did you hear about us?
                      </option>
                      {referenceOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                    {formik.touched.referredFrom &&
                      formik.errors.referredFrom && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.referredFrom}
                        </p>
                      )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us about your academic goals..."
                      className="flex w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-none"
                      {...formik.getFieldProps("message")}
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3 border-t border-slate-100">
                    <p className="text-[10px] text-slate-400 leading-relaxed max-w-[220px] hidden sm:block">
                      By submitting, you agree to our{" "}
                      <span className="font-bold text-slate-800 underline">
                        Privacy Policy
                      </span>{" "}
                      and authorize our counselors to contact you.
                    </p>

                    <div className="flex w-full sm:w-auto gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="h-11 px-5 rounded-xl font-bold md:hidden border-green-200 text-green-700 bg-green-50 hover:bg-green-100 flex-1"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                      </Button>

                      <Button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="h-11 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold flex-1 sm:flex-none shadow-md"
                      >
                        {formik.isSubmitting
                          ? "Submitting..."
                          : "Submit Inquiry"}
                      </Button>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
