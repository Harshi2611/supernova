"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import {
  BookOpen,
  CheckCircle,
  Form,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";

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

export default function RegistrationFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      console.log("Registration Form values:", values);
      setIsSubmitted(true);
    },
  });

  const selectClass = (hasError: boolean) =>
    `flex h-12 w-full rounded-md border text-sm px-3 py-2 bg-slate-50 shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary ${
      hasError ? "border-red-300 ring-red-500" : "border-slate-200"
    }`;

  return (
    <div className=" min-h-[calc(100vh-80px)] pt-32 bg-slate-50">
      <div className="container">
        {/* Header Section */}
        <div className="mb-10 lg:w-2/3">
          <div
            className="inline-flex 
          items-center gap-2 bg-white text-primary px-3 py-1.5 rounded-md text-[11px] font-bold border border-primary/20 uppercase tracking-widest mb-6 shadow-sm w-fit"
          >
            <Star className="w-3.5 h-3.5 fill-current text-primary" />
            Admissions Open 2024-25
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary font-heading mb-6 leading-tight tracking-tight uppercase">
            Ignite Your Potential
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl">
            Join the galaxy of high-achievers. Complete the form below to begin
            your journey at SuperNova Academy.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-md shadow-xl p-6 sm:p-10 border border-slate-100 relative overflow-hidden h-full">
              {isSubmitted ? (
                <div className="text-center py-16 px-4 h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary mb-4">
                    Registration Received!
                  </h3>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto text-lg">
                    Thank you for your interest. One of our academic counselors
                    will contact you within 24 hours to schedule your free demo.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      formik.resetForm();
                    }}
                    className="px-8 font-bold rounded-xl h-12 bg-primary hover:bg-primary text-white"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                    <Form className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold text-primary font-heading">
                      Registration Form
                    </h2>
                  </div>

                  <form onSubmit={formik.handleSubmit} className="space-y-6">
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="studentName"
                          placeholder="Enter student's name"
                          className={`h-12 bg-slate-50 border-slate-200 focus-visible:ring-primary text-sm ${
                            formik.touched.studentName &&
                            formik.errors.studentName
                              ? "border-red-300 focus-visible:ring-red-500"
                              : ""
                          }`}
                          {...formik.getFieldProps("studentName")}
                        />
                        {formik.touched.studentName &&
                          formik.errors.studentName && (
                            <p className="text-red-500 text-xs mt-1.5 font-medium">
                              {formik.errors.studentName}
                            </p>
                          )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                          Contact Number <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className={`h-12 bg-slate-50 border-slate-200 focus-visible:ring-primary text-sm ${
                            formik.touched.phone && formik.errors.phone
                              ? "border-red-300 focus-visible:ring-red-500"
                              : ""
                          }`}
                          {...formik.getFieldProps("phone")}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <p className="text-red-500 text-xs mt-1.5 font-medium">
                            {formik.errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* School Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        School Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="schoolName"
                        placeholder="Current attending school"
                        className={`h-12 bg-slate-50 border-slate-200 focus-visible:ring-primary text-sm ${
                          formik.touched.schoolName && formik.errors.schoolName
                            ? "border-red-300 focus-visible:ring-red-500"
                            : ""
                        }`}
                        {...formik.getFieldProps("schoolName")}
                      />
                      {formik.touched.schoolName &&
                        formik.errors.schoolName && (
                          <p className="text-red-500 text-xs mt-1.5 font-medium">
                            {formik.errors.schoolName}
                          </p>
                        )}
                    </div>

                    {/* Seeking Admission In + Study Type*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
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
                            Select Grade
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
                            <p className="text-red-500 text-xs mt-1.5 font-medium">
                              {formik.errors.seekingAdmission}
                            </p>
                          )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                          Study Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="studyType"
                          className={selectClass(
                            !!(
                              formik.touched.studyType &&
                              formik.errors.studyType
                            )
                          )}
                          {...formik.getFieldProps("studyType")}
                        >
                          <option value="" disabled>
                            Select Type
                          </option>
                          {studyTypeOptions.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                        {formik.touched.studyType &&
                          formik.errors.studyType && (
                            <p className="text-red-500 text-xs mt-1.5 font-medium">
                              {formik.errors.studyType}
                            </p>
                          )}
                      </div>
                    </div>

                    {/* Referred From */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
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
                          <p className="text-red-500 text-xs mt-1.5 font-medium">
                            {formik.errors.referredFrom}
                          </p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Additional Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="How can we help you reach your goals?"
                        className="flex w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-none"
                        {...formik.getFieldProps("message")}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="h-14 w-full text-base rounded-xl bg-primary hover:bg-primary text-white font-bold shadow-md uppercase tracking-wider transition-all duration-300"
                      >
                        {formik.isSubmitting
                          ? "Submitting..."
                          : "Submit Enrollment Request"}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Visuals & Summary */}
          <div className="lg:col-span-5 space-y-6">
            {/* Image Banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent z-10" />
              <Image
                src="/focused_student_hero.png" // Using the provided hero image
                alt="Students studying"
                width={800}
                height={600}
                className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <h3 className="text-2xl font-bold text-white font-heading mb-2">
                  Shape the Future.
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Join 5000+ Luminaries who achieved Top 100 ranks in NEET-JEE.
                </p>
              </div>
            </div>

            {/* Inquiry Summary Box */}
            <div className="bg-[#b1d4e0]/20 rounded-2xl p-8 border border-primary/10 shadow-sm h-[calc(100%-344px)] min-h-[300px]">
              <h3 className="text-xl font-bold text-primary font-heading mb-6 border-b border-primary/10 pb-4">
                Inquiry Summary
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Personalized Counseling
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Our academic advisors will call within 24 hours to guide
                      your choice.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Scholarship Assessment
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Eligible students receive up to 100% tuition waivers based
                      on tests.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Pan-India Network
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Access resources across all 15 SuperNova learning hubs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
