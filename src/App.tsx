import React from "react";
import CouponManage from "./pages/couponManage/couponManage";
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
              element={<CouponManage />}
            />
          </Routes>
        </PageLayout>
      </BodyLayout>
    </BrowserRouter>
  );
}

export default App;
