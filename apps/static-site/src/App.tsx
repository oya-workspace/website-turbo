import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import ApproachPage from "./pages/Approach/ApproachPage";
import PartnerPage from "./pages/Partner/PartnerPage";
import MarkdownArticle from "./pages/Learn/markdown-demo/MarkdownArticle";
import ProgramQuiz from "./pages/ProgramQuiz/ProgramQuiz";
import LearnPage from "./pages/Learn/LearnPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "approach", element: <ApproachPage /> },
      { path: "partner-with-us", element: <PartnerPage /> },
      { path: "learn", element: <LearnPage /> },
      // { path: "learn/:slug", element: <ArticlePage /> },
      { path: "learn/demo/test1", element: <MarkdownArticle /> },
      { path: "program-quiz", element: <ProgramQuiz /> },
    ],
  },
]);

export default function App() {
  // Initialize AOS once for the entire application
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
