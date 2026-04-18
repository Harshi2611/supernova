"use client";

import CampusLocations from "@/features/registration/CampusLocations";
import RegistrationFormSection from "@/features/registration/RegistrationFormSection";

export default function RegistrationPage() {
  return (
    <>
      <RegistrationFormSection />

      <CampusLocations />
    </>
  );
}
