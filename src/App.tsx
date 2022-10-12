import React from "react";
import Layout from "./components/layout/layout";
import CouponManage from "./pages/couponManage/couponManage";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/merchant/management/coupons/"
            element={<CouponManage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
