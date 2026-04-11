"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import {
  Award,
  CheckCircle,
  GraduationCap,
  MessageCircle,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import * as Yup from "yup";

export default function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Trigger modal after 10 seconds
  useEffect(() => {
    // Check if the user has already seen or submitted it (using sessionStorage to not annoy on every refresh during a single session)
    const hasSeenModal = sessionStorage.getItem("supernova_inquiry_seen");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("supernova_inquiry_seen", "true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent background scrolling when the modal is open
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
      grade: "",
      course: "",
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
      grade: Yup.string().required("Please select a grade/class"),
      course: Yup.string().required("Please select your interested course"),
    }),
    onSubmit: async (values) => {
      console.log("🚀 ~ :48 ~ InquiryModal ~ values:", values);
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative min-h-[500px]">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 p-2 bg-white/50 backdrop-blur-md rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Branding / Copy (Hidden on tight mobile, shown otherwise) */}
        <div className="hidden md:flex md:w-5/12 bg-primary text-white p-10 flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[#051d40]/40 z-0"></div>

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
            <div className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-5 py-3 rounded-xl font-bold text-sm shadow-lg">
              <Award className="w-5 h-5 opacity-80" />
              98.2% SUCCESS RATE
            </div>

            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Certified NEET/JEE Faculty</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Personalized Doubt Sessions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 p-8 md:p-12 bg-white flex flex-col justify-center">
          {isSubmitted ? (
            <div className="text-center py-12 animate-in slide-in-from-bottom-4">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-slate-800 mb-4">
                Inquiry Received!
              </h3>
              <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                Thank you for your interest. One of our academic counselors will
                contact you within 24 hours to schedule your free demo.
              </p>
              <Button
                onClick={() => setIsOpen(false)}
                className="px-8 font-bold rounded-xl h-12 w-full md:w-auto"
              >
                Return to Website
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                {/* Mobile title variation */}
                <h3 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 md:hidden">
                  Book Your Free Demo
                </h3>
                {/* Desktop title variation */}
                <h3 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 hidden md:block">
                  Quick Inquiry
                </h3>

                <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">
                  Admission Enquiry
                </h2>
              </div>

              <form onSubmit={formik.handleSubmit} className="space-y-5">
                {/* Form Status Error */}
                {formik.status && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                    {formik.status}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="studentName"
                      placeholder="Enter student's name"
                      className={`h-12 bg-slate-50 border-slate-200 focus-visible:ring-primary ${
                        formik.touched.studentName && formik.errors.studentName
                          ? "border-red-300 focus-visible:ring-red-500"
                          : ""
                      }`}
                      {...formik.getFieldProps("studentName")}
                    />
                    {formik.touched.studentName && formik.errors.studentName ? (
                      <div className="text-red-500 text-xs mt-1 font-medium">
                        {formik.errors.studentName}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className={`h-12 bg-slate-50 border-slate-200 focus-visible:ring-primary ${
                        formik.touched.phone && formik.errors.phone
                          ? "border-red-300 focus-visible:ring-red-500"
                          : ""
                      }`}
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-red-500 text-xs mt-1 font-medium">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Current Grade / Class{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="grade"
                      className={`flex h-12 w-full items-center justify-between rounded-md border text-sm px-3 py-2 bg-slate-50 shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary ${
                        formik.touched.grade && formik.errors.grade
                          ? "border-red-300 ring-red-500"
                          : "border-slate-200"
                      }`}
                      {...formik.getFieldProps("grade")}
                    >
                      <option value="" disabled>
                        Select Grade
                      </option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 11">Class 11</option>
                      <option value="Class 12">Class 12</option>
                      <option value="Dropper">Dropper</option>
                    </select>
                    {formik.touched.grade && formik.errors.grade ? (
                      <div className="text-red-500 text-xs mt-1 font-medium">
                        {formik.errors.grade}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Interested Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="course"
                      className={`flex h-12 w-full items-center justify-between rounded-md border text-sm px-3 py-2 bg-slate-50 shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary ${
                        formik.touched.course && formik.errors.course
                          ? "border-red-300 ring-red-500"
                          : "border-slate-200"
                      }`}
                      {...formik.getFieldProps("course")}
                    >
                      <option value="" disabled>
                        Select Program
                      </option>
                      <option value="NEET">NEET Ultimate</option>
                      <option value="JEE">JEE Main & Advanced</option>
                      <option value="Foundation">Pre-Foundation</option>
                    </select>
                    {formik.touched.course && formik.errors.course ? (
                      <div className="text-red-500 text-xs mt-1 font-medium">
                        {formik.errors.course}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your academic goals..."
                    className="flex w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-none p-4"
                    {...formik.getFieldProps("message")}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-100">
                  <p className="text-[10px] text-slate-400 max-w-[250px] leading-relaxed">
                    By submitting, you agree to our{" "}
                    <span className="font-bold text-slate-800 underline">
                      Privacy Policy
                    </span>{" "}
                    and authorize our counselors to contact you.
                  </p>

                  <div className="flex w-full sm:w-auto gap-3 flex-col-reverse sm:flex-row">
                    {/* Optional Mobile WhatsApp CTA matching layout */}
                    <Button
                      type="button"
                      variant="outline"
                      className="h-12 px-6 rounded-xl font-bold md:hidden border-green-200 text-green-700 bg-green-50 hover:bg-green-100 w-full"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                    </Button>

                    <Button
                      type="submit"
                      disabled={formik.isSubmitting}
                      className="h-12 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold w-full sm:w-auto shadow-md"
                    >
                      {formik.isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
