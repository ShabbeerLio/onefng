import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Location from "./Pages/Location/Location";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";

function App() {

  // remove inspect and copy element
  useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
    };

    const handleSelect = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('selectstart', handleSelect);
    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('selectstart', handleSelect);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home title={"One FNG - Commercial Property in Noida Sector 142 by Group 108"} descriptions={"One FNG is an IT/ITES Project in Noida Expressway Sector 142 by Group 108. One FNG Spread Across 15 Acres with 2 Towers G+37 &amp; G+15 Floors and A Low-rise retail space in every tower."} />} />
          <Route
            path="/gallery"
            exact
            element={
              <Gallery title={"One FNG - Commercial Property in Noida Sector 142 by Group 108"} descriptions={"One FNG is an IT/ITES Project in Noida Expressway Sector 142 by Group 108. One FNG Spread Across 15 Acres with 2 Towers G+37 &amp; G+15 Floors and A Low-rise retail space in every tower."} />} />
          <Route
            path="/price-list"
            exact
            element={
              <PriceList title={"One FNG - Commercial Property in Noida Sector 142 by Group 108"} descriptions={"One FNG is an IT/ITES Project in Noida Expressway Sector 142 by Group 108. One FNG Spread Across 15 Acres with 2 Towers G+37 &amp; G+15 Floors and A Low-rise retail space in every tower."} />} />
          <Route
            path="/master-plan"
            exact
            element={
              <MasterPlan title={"One FNG - Commercial Property in Noida Sector 142 by Group 108"} descriptions={"One FNG is an IT/ITES Project in Noida Expressway Sector 142 by Group 108. One FNG Spread Across 15 Acres with 2 Towers G+37 &amp; G+15 Floors and A Low-rise retail space in every tower."} />} />
          <Route
            path="/floor-plan"
            exact
            element={
              <FloorPlan title={"One FNG - Commercial Property in Noida Sector 142 by Group 108"} descriptions={"One FNG is an IT/ITES Project in Noida Expressway Sector 142 by Group 108. One FNG Spread Across 15 Acres with 2 Towers G+37 &amp; G+15 Floors and A Low-rise retail space in every tower."} />} />
          <Route
            path="/location"
            exact
            element={
              <Location title={"One FNG - Commercial Property in Noida Sector 142 by Group 108"} descriptions={"One FNG is an IT/ITES Project in Noida Expressway Sector 142 by Group 108. One FNG Spread Across 15 Acres with 2 Towers G+37 &amp; G+15 Floors and A Low-rise retail space in every tower."} />} />
          <Route
            path="/site-visit"
            exact
            element={
              <SiteVisit title={"One FNG - Commercial Property in Noida Sector 142 by Group 108"} descriptions={"One FNG is an IT/ITES Project in Noida Expressway Sector 142 by Group 108. One FNG Spread Across 15 Acres with 2 Towers G+37 &amp; G+15 Floors and A Low-rise retail space in every tower."} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
