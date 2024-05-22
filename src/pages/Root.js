import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Mainnavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
