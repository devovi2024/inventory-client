import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getToken } from "./helper/SessionHelper";

import FullscreenLoader from "./components/Common/FullscreenLoader";

import DashboardPage from "./pages/Dashboard/DashboardPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import LoginPage from "./pages/Users/LoginPage";
import RegistrationPage from "./pages/Users/RegistrationPage";
import SendPage from "./pages/Users/SendPage";
import VerifyOtpPage from "./pages/Users/VerifyOtpPage";
import CreatePasswordPage from "./pages/Users/CreatePasswordPage";
import ProfilePage from "./pages/Users/ProfilePage";

import BrandCreateUpdatePage from "./pages/Brand/BrandCreateUpdatePage";
import BrandListPage from "./pages/Brand/BrandListPage";

import CategoryCreateUpdatePage from "./pages/Category/CategoryCreateUpdatePage";
import CategoryListPage from "./pages/Category/CategoryListPage";

import CustomerCreateUpdatePage from "./pages/Customer/CustomerCreateUpdatePage";
import CustomerListPage from "./pages/Customer/CustomerListPage";

import ExpenseTypeCreateUpdatePage from "./pages/Expense/ExpenseTypeCreateUpdatePage";
import ExpenseListPage from "./pages/Expense/ExpenseListPage";
import ExpenseCreateUpdatePage from "./pages/Expense/ExpenseCreateUpdatePage";
import ExpenseReportPage from "./pages/Expense/ExpenseReportPage";

import ProductCreateUpdatePage from "./pages/Product/ProductCreateUpdatePage";
import ProductListPage from "./pages/Product/ProductListPage";

import PurchaseCreateUpdatePage from "./pages/Purchase/PurchaseCreatePage";
import PurchaseListPage from "./pages/Purchase/PurchaseListPage";
import PurchaseReportPage from "./pages/Purchase/PurchaseReportPage";

import ReturnCreatePage from "./pages/Return/ReturnCreatePage";
import ReturnListPage from "./pages/Return/ReturnListPage";
import ReturnReportPage from "./pages/Return/ReturnReportPage";

import SalesCreatePage from "./pages/Sale/SalesCreatePage";
import SalesListPage from "./pages/Sale/SalesListPage";
import SalesReportPage from "./pages/Sale/SalesReportPage";

import SupplierCreatePage from "./pages/Suppliers/SupplierCreatePage";
import SupplierListPage from "./pages/Suppliers/SupplierListPage";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {getToken() ? (
            <>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              <Route path="/brand/list" element={<BrandListPage />} />
              <Route path="/brand/create" element={<BrandCreateUpdatePage />} />

              <Route path="/category/list" element={<CategoryListPage />} />
              <Route path="/category/create" element={<CategoryCreateUpdatePage />} />

              <Route path="/customer/list" element={<CustomerListPage />} />
              <Route path="/customer/create" element={<CustomerCreateUpdatePage />} />

              <Route path="/expense/list" element={<ExpenseListPage />} />
              <Route path="/expense/create" element={<ExpenseCreateUpdatePage />} />
              <Route path="/expense/type" element={<ExpenseTypeCreateUpdatePage />} />
              <Route path="/expense/report" element={<ExpenseReportPage />} />

              <Route path="/product/list" element={<ProductListPage />} />
              <Route path="/product/create" element={<ProductCreateUpdatePage />} />

              <Route path="/purchase/list" element={<PurchaseListPage />} />
              <Route path="/purchase/create" element={<PurchaseCreateUpdatePage />} />
              <Route path="/purchase/report" element={<PurchaseReportPage />} />

              <Route path="/return/list" element={<ReturnListPage />} />
              <Route path="/return/create" element={<ReturnCreatePage />} />
              <Route path="/return/report" element={<ReturnReportPage />} />

              <Route path="/sales/list" element={<SalesListPage />} />
              <Route path="/sales/create" element={<SalesCreatePage />} />
              <Route path="/sales/report" element={<SalesReportPage />} />

              <Route path="/supplier/list" element={<SupplierListPage />} />
              <Route path="/supplier/create" element={<SupplierCreatePage />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/send-otp" element={<SendPage />} />
              <Route path="/verify-otp" element={<VerifyOtpPage />} />
              <Route path="/create-password" element={<CreatePasswordPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </Fragment>
  );
};

export default App;
