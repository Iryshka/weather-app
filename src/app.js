import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Main from "./pages/main";
import Details from "./pages/details";
import DetailsId from "./pages/detailsId";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "details",
    element: <Details />,
  },
  {
    path: "details/:id",
    element: <DetailsId />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
