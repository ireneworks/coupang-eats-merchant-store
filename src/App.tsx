import React from "react";
import CouponManagement from "./pages/couponManage/couponManagement";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import BodyLayout from "./components/layout/bodyLayout";
import PageLayout from "./components/layout/pageLayout";

function App() {
  return (
    <BrowserRouter>
      <BodyLayout>
        <Navigation />
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/merchant/management/coupons/"
              element={<CouponManagement />}
            />
          </Routes>
        </PageLayout>
      </BodyLayout>
    </BrowserRouter>
  );
}

export default App;
