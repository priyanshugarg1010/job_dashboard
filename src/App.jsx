import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import JobDashboard from "./pages/JobDashboard";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

const App = () => {
  const Layout = () => {
    return (
      <MaxWidthWrapper>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </MaxWidthWrapper>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <JobDashboard />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
