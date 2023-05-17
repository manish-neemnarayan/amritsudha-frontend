import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import AboutAmritsudha from "./components/AboutAmritsudha";
import Achievements from "./components/Achievements";
import Aware from "./components/Aware";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Edit from "./components/Edit";
import EditGallery from "./components/EditGallery";

import MyContext from "./utils/context";
import SignUp from "./components/SignUp";
import axios from "axios";

function App() {

  const [conditionalRenderingRoutes, setConditionalRenderingRoutes] = useState(undefined);

// NOTICES STARTING-------------------------------------------------------------------------------------
  // state for storing value of notices
  const [allNotices, setAllNotices] = useState("");
  // fetching notices and putting them in a context value 
  const getNotices = async function () {
    await axios.get("/notice/getAll").then(res => setAllNotices(res.data.notices));
  }

// NOTICES ENDING-------------------------------------------------------------------------------------

// PROGRAMMES STARTING-------------------------------------------------------------------------------------
  // state for storing value of programs
  const [allProgrammes, setAllProgrammes] = useState("");
  // fetching notices and putting them in a context value 
  const getProgrammes = async function () {
    await axios.get("/program/getAll").then(res => {
      setAllProgrammes(res.data.programs)
    });
  }

// PROGRAMMES ENDING-------------------------------------------------------------------------------------

// PROGRAMMES STARTING-------------------------------------------------------------------------------------
  // state for storing value of programs
  const [allImages, setAllImages] = useState("");
  // fetching notices and putting them in a context value 
  const getImages = async function () {
    await axios.get("/image/getAllImages").then(res => {
      setAllImages(res.data.images)
    });
  }

// PROGRAMMES ENDING-------------------------------------------------------------------------------------

// STARTING making a context for containing current user after login and vlaue will be set in login component
const [user, setUser] = useState();
// ENDING making a context for containing current user after login and vlaue will be set in login component

const fetchUserById = async function() {
  if (localStorage.getItem("user")) {
    await axios.get(`/auth/getUser/${JSON.parse(localStorage.getItem("user"))._id}`)
    .then(res => setConditionalRenderingRoutes(res));
  } else {
    setConditionalRenderingRoutes(undefined);
  }
}

React.useEffect(() => {
  getNotices();
  getProgrammes();
  getImages();
  fetchUserById();
},[])

  return (
    <>
    {
      ( conditionalRenderingRoutes && conditionalRenderingRoutes?.data?.user?.role === "ADMIN") ? 
      <MyContext.Provider value={{
        notices : allNotices,
        programmes : allProgrammes,
        images: allImages,
        user,
        setUser
      }} >
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <HeroSection />
          <ImageSlider />
          <AboutAmritsudha />
          <Aware />
          <Achievements />
          <Footer />
          </>
        } />
        <Route path="/gallery" element={
          <>
          <Header />
          <Gallery />
          <Footer />
          </>
        } />
        <Route path="/faqs" element={
          <>
          <Header />
          <FAQ />
          <Footer />
          </>
        } />
        <Route path="/aboutUs" element={
          <>
          <Header />
          <AboutUs />
          <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
          <Header />
          <Login />
          <Footer />
          </>
        } />
        <Route path="/edit" element={
          <>
          <Header />
          <Edit />
          <Footer />
          </>
        } />
        <Route path="/signup" element={
          <>
          <Header />
          <SignUp />
          <Footer />
          </>
        } />
        <Route path="/edit/gallary" element={
          <>
          <Header />
          <EditGallery />
          <Footer />
          </>
        } />
        <Route path="/auth/logout" element={
          <>
          <Header />
          <Footer />
          </>
        } />
      </Routes>
      </MyContext.Provider>

      : 

      <MyContext.Provider value={{
        notices : allNotices,
        programmes : allProgrammes,
        images: allImages,
        user,
        setUser
      }} >
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <HeroSection />
          <ImageSlider />
          <AboutAmritsudha />
          <Aware />
          <Achievements />
          <Footer />
          </>
        } />
        <Route path="/gallery" element={
          <>
          <Header />
          <Gallery />
          <Footer />
          </>
        } />
        <Route path="/faqs" element={
          <>
          <Header />
          <FAQ />
          <Footer />
          </>
        } />
        <Route path="/aboutUs" element={
          <>
          <Header />
          <AboutUs />
          <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
          <Header />
          <Login />
          <Footer />
          </>
        } />
       
      </Routes>
      </MyContext.Provider>
    }
    
    </>
  );
}

export default App;
