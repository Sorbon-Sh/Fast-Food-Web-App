import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import ProductDetailsPage from "./pages/ProductDetails.tsx";
import CartPage from "./pages/Junk.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { Provider } from "react-redux";
import { store } from "./lib/store.ts";

import PizzaPage from "./pages/category/Pizza.tsx";
import ComboPage from "./pages/category/Combo.tsx";
import SnacksPage from "./pages/category/Snacks.tsx";
import DessertsPage from "./pages/category/Deserty.tsx";
import DrinksPage from "./pages/category/Drinks.tsx";
import SaucesPage from "./pages/category/Sauces.tsx";
import KidsPage from "./pages/category/KidsLike.tsx";

import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <PizzaPage /> },
        { path: "/combo", element: <ComboPage /> },
        { path: "/snacks", element: <SnacksPage /> },
        { path: "/deserty", element: <DessertsPage /> },
        { path: "/drinks", element: <DrinksPage /> },
        { path: "/sauces", element: <SaucesPage /> },
        { path: "/kidsLike", element: <KidsPage /> },
        { path: "/product/:id", element: <ProductDetailsPage /> },
        { path: "/junk", element: <CartPage /> },
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
    <Provider store={store}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </Provider>
  </StrictMode>,
);
