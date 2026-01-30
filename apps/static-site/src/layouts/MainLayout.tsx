import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function MainLayout() {
  const location = useLocation();
  const hideLayoutRoutes = ["/program-quiz"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}

      <main className="page-content">
        <Outlet />
      </main>

      {!shouldHideLayout && <Footer />}
    </>
  );
}
