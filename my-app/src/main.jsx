import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Expenses from "./pages/expenses/Expenses.jsx";
import ExpensesList from "./pages/expenses/ExpensesList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Expenses />,
  },
  {
    path: "/expenseslist",
    element: <ExpensesList />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
