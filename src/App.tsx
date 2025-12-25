import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import DynamicLayout from "./pages/DynamicLayout";
import DynamicRouter from "./components/DynamicPage";
import DynamicBlog from "./components/DynamicBlog";
// import DynamicLayout from "./pages/DynamicLayout";
import DynamicWork from "./pages/DynamicWork";
import Blog from "./pages/Blog";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/work",
    element: <DynamicLayout />,
    children: [
      { path: "/work/:id", element: <DynamicRouter /> },
      { path: "/work/dynamicwork", element: <DynamicWork /> },
      {
        path: "/work/blog",
        children: [
          { index: true, element: <Blog /> },
          { path: "/work/blog/:id", element: <DynamicBlog /> },
        ],
      },
    ],
  },

  { path: "*", element: <div>404 Not Found</div> },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
