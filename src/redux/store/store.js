import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "../state/slice/settingsReducer";
import profileReducer from "../state/slice/profileReducer";
import brandReducer from "../state/slice/brandReducer";
import supplierReducer from "../state/slice/supplierReducer";
import categoryReducer from "../state/slice/categoryReducer";
import customerReducer from "../state/slice/customerReducer";
import expenseReducer from "../state/slice/expenseReducer";
import expensesettypeReducer from "../state/slice/expensesettypeReducer";
import productReducer from "../state/slice/productReducer";
import purchaseReducer from "../state/slice/purchaseReducer";
import reportReducer from "../state/slice/reportReducer";
import saleReducer from "../state/slice/saleReducer";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    profile: profileReducer,
    brand: brandReducer,
    supplier: supplierReducer,
    category: categoryReducer,
    customer: customerReducer,
    expense: expenseReducer,
    expensesettype: expensesettypeReducer,
    product: productReducer,
    purchase: purchaseReducer,
    report: reportReducer,
    sale: saleReducer,
  },
});

export default store;
