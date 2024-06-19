import React, { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";

import { ScrollProvider } from "./helpers/scrollProvider";
import { Header } from "@C/Header/Header";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Footer } from "./components/Footer/Footer";
import PopUp from "./components/PopUp/PopUp";
import { Loader } from "./components/Loader/Loader";
import classNames from "classnames";

const queryC = new QueryClient();

function App() {
  const [loaderEnded, setLoaderEnded] = useState(true);
  // const [loaderEnded, setLoaderEnded] = useState(false);

  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/ua/",
      element: <Home />,
    },
    {
      path: "/en/",
      element: <Home />,
    },

    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  const location = useLocation();

  return (
    <QueryClientProvider client={queryC}>
      <main
        // className="app"
        className={classNames("app", {
          "app--loading": !loaderEnded,
        })}
      >
        <ScrollProvider>
          {!loaderEnded && <Loader setLoaderEnded={setLoaderEnded} />}
          <Header />

          <AnimatePresence mode="wait" initial={false}>
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
          <PopUp />
          <Footer />
        </ScrollProvider>
      </main>
    </QueryClientProvider>
  );
}

export default App;
