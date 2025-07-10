import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home,CoursesList,CoursesDetails,MyEnrollments,Player} from "./pages"
import {Loading,Navbar,Footer} from "./components"

export default function App() {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CoursesDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
      </Routes>
      <Footer />
    </div>
  );
}
