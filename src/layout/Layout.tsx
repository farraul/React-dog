import { Outlet } from "react-router-dom";
import { TheFooter, TheHeader } from "src/components";

export const Layout = () => {
  return (
    <>
      <TheHeader />
      <main>
        <Outlet />
      </main>
      <TheFooter />
    </>
  );
};
