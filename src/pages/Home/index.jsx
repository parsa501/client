import React from "react";
import Hero from "./Hero";
import Companies from "./Companies";
import CoursesSection from "./CoursesSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies/>
      <CoursesSection/>
      <TestimonialsSection/>
    </div>
  );
}
