import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import DynamicLayout from "./pages/DynamicLayout";
import DynamicRouter from "./components/DynamicPage";
// import DynamicLayout from "./pages/DynamicLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/work",
    element: <DynamicLayout />,
    children: [{ path: "/work/:id", element: <DynamicRouter /> }],
  },
  { path: "*", element: <div>404 Not Found</div> },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
