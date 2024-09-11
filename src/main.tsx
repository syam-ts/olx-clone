import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Body from "./components/Body.tsx";
import Product from "./components/Product.tsx";
import About from "./components/About.tsx";
import Signup from "./components/SIgnup.tsx";
import Login from "./components/Login.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FirebaseContext } from "./strore/FirebaseContext.tsx";
import firebase from "./firebase/config.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/body", element: <Body /> },
      { path: "/product/:id", element: <Product /> },
    ],
  },
  { path: "/about", element: <About /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

createRoot(document.getElementById("root")!).render(
  <FirebaseContext.Provider value={firebase}>
    <RouterProvider router={router} />
  </FirebaseContext.Provider>
);
