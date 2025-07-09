import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoursesList from "./pages/CoursesList";
import CoursesDetails from "./pages/CoursesDetails";
import MyEnrollments from "./pages/MyEnrollments";
import Player from "./pages/Player";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CoursesDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
      </Routes>
    </div>
  );
}
