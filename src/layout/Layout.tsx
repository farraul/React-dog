import { Outlet } from "react-router-dom";
import { TheFooter, TheHeader } from "src/components";

export const Layout = () => {
  return (
    <>
      <TheHeader />
      <main className="container mx-auto flex-grow">
        <Outlet />
      </main>
      <TheFooter />
    </>
  );
};
