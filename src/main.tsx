import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import MainPage from "./pages/MainPage.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import Junk from "./pages/Junk.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { Provider } from "react-redux";
import { store } from "./lib/store.ts";
import Pizza from "./pages/category/Pizza.tsx";
import Combo from "./pages/category/Combo.tsx";
import Snacks from "./pages/category/Snacks.tsx";
import Deserty from "./pages/category/Deserty.tsx";
import Drinks from "./pages/category/Drinks.tsx";
import Sauces from "./pages/category/Sauces.tsx";
import KidsLike from "./pages/category/KidsLike.tsx";
// import CategoryPage from "./pages/CategoryPage.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/", element: <Pizza /> },
        { path: "/combo", element: <Combo /> },
        { path: "/snacks", element: <Snacks /> },
        { path: "/deserty", element: <Deserty /> },
        { path: "/drinks", element: <Drinks /> },
        { path: "/sauces", element: <Sauces /> },
        { path: "/kidsLike", element: <KidsLike /> },
        { path: "/product/:id", element: <ProductDetails /> },
        { path: "/junk", element: <Junk /> },
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
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </Provider>
  </StrictMode>
);
