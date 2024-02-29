import { Outlet } from "react-router";

const Parent = () => {
  return (
    <div>
      I'm a parent
      <Outlet />
    </div>
  );
};

export default Parent;
