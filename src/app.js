import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import Details from "./pages/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "details/:detailsId",
    element: <Details />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
