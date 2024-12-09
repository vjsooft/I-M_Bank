// import logo from './logo.svg';
import "./style/App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./share-components/Layout";
import SearchingFlights from "./pages/SearchingFlights";
const MyAccount = React.lazy(() => import("./pages/MyAccount"));
const Flight = React.lazy(() => import("./pages/Flights"));
const Hotel = React.lazy(() => import("./pages/Hotel"));
const Deal = React.lazy(() => import("./pages/Deal"));
const About = React.lazy(() => import("./pages/About"));
const Faqs = React.lazy(() => import("./pages/Faqs"));
const Tac = React.lazy(() => import("./pages/Tac"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const Contact = React.lazy(() => import("./pages/ContactUs"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/SearchingFlights" element={<SearchingFlights/>} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/deal" element={<Deal />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/tac" element={<Tac />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
