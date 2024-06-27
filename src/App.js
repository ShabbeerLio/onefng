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
import Disclaimer from "./Pages/Disclaimer/Disclaimer";

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
              <Home title={"One FNG Noida | One FNG Group 108 | One FNG Expressway"} descriptions={"The One FNG project, crafted by Group 108, stands out for its exceptional infrastructure and prime location. Call us to schedule your Site Visit Today!"} />} />
          <Route
            path="/gallery"
            exact
            element={
              <Gallery title={"One FNG Noida | One FNG Group 108 | One FNG Expressway"} descriptions={"The One FNG project, crafted by Group 108, stands out for its exceptional infrastructure and prime location. Call us to schedule your Site Visit Today!"} />} />
          <Route
            path="/price-list"
            exact
            element={
              <PriceList title={"One FNG Noida | One FNG Group 108 | One FNG Expressway"} descriptions={"The One FNG project, crafted by Group 108, stands out for its exceptional infrastructure and prime location. Call us to schedule your Site Visit Today!"} />} />
          <Route
            path="/master-plan"
            exact
            element={
              <MasterPlan title={"One FNG Noida | One FNG Group 108 | One FNG Expressway"} descriptions={"The One FNG project, crafted by Group 108, stands out for its exceptional infrastructure and prime location. Call us to schedule your Site Visit Today!"} />} />
          <Route
            path="/floor-plan"
            exact
            element={
              <FloorPlan title={"One FNG Noida | One FNG Group 108 | One FNG Expressway"} descriptions={"The One FNG project, crafted by Group 108, stands out for its exceptional infrastructure and prime location. Call us to schedule your Site Visit Today!"} />} />
          <Route
            path="/location"
            exact
            element={
              <Location title={"One FNG Noida | One FNG Group 108 | One FNG Expressway"} descriptions={"The One FNG project, crafted by Group 108, stands out for its exceptional infrastructure and prime location. Call us to schedule your Site Visit Today!"} />} />
          <Route
            path="/site-visit"
            exact
            element={
              <SiteVisit title={"One FNG Noida | One FNG Group 108 | One FNG Expressway"} descriptions={"The One FNG project, crafted by Group 108, stands out for its exceptional infrastructure and prime location. Call us to schedule your Site Visit Today!"} />} />
          <Route
            path="/disclaimer"
            exact
            element={
              <Disclaimer title={"One FNG Noida | One FNG Group 108 | One FNG Expressway"} descriptions={"The One FNG project, crafted by Group 108, stands out for its exceptional infrastructure and prime location. Call us to schedule your Site Visit Today!"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
