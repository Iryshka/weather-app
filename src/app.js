import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/main";
import Details from "./pages/details";
import DetailsId from "./pages/detailsId";
import Parent from "./pages/parent";
import Child from "./pages/child";

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
  {
    path: "parent",
    element: <Parent />,
    children: [
      {
        path: ":id",
        element: <Child />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
const App = () => {
  // return <RouterProvider router={router} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
