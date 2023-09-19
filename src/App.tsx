import React from "react";
import LandingPage from "./pages/LandingPage";
import TermsAndConditions from "./components/subcomponents/TermsAndConditions";
import Privacy from "./components/subcomponents/Privacy";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route element={<LandingPage />} path="/"></Route>
        <Route path="/privacypolicy" element={<Privacy />}></Route>
        <Route
          path="/termsandconditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route path="*" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
