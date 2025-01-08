import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import ProductDetailsPage from "./pages/ProductDetails.tsx";
import CartPage from "./pages/Cart.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { Provider } from "react-redux";
import { store } from "./lib/store.ts";

import PizzaPage from "./pages/category/Pizza.tsx";
import ComboPage from "./pages/category/Combo.tsx";
import SnacksPage from "./pages/category/Snacks.tsx";
import DessertsPage from "./pages/category/Desserts.tsx";
import DrinksPage from "./pages/category/Drinks.tsx";
import SaucesPage from "./pages/category/Sauces.tsx";
import KidsPage from "./pages/category/KidsLike.tsx";

import "./index.css";

const router = createBrowserRouter(
  [
    {
      //* Creating path for Components
      path: "/",
      element: <Layout />,
      //* All Component childrens of Component Layout
      //* They can changes by changing URL address, but Elements in Layout Component can not changes and update
      //* If you do not update somethink in Layout Component
      children: [
        { path: "/", element: <PizzaPage /> },
        { path: "/combo", element: <ComboPage /> },
        { path: "/snacks", element: <SnacksPage /> },
        { path: "/deserty", element: <DessertsPage /> },
        { path: "/drinks", element: <DrinksPage /> },
        { path: "/sauces", element: <SaucesPage /> },
        { path: "/kidsLike", element: <KidsPage /> },
        //* Create param URL for any ID
        { path: "/product/:id", element: <ProductDetailsPage /> },
        { path: "/cart", element: <CartPage /> },
      ],
    },
    { path: "*", element: <ErrorPage /> },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*
     //* Redux-Toolkit Provider
     */}
    <Provider store={store}>
      {/* 
      //* Router Provider
       */}
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </Provider>
  </StrictMode>,
);
