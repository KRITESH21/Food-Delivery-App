import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense> },
      { path: "/contact", element: <Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);