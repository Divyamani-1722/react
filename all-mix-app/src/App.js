import React, { Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load the components
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading App...</div>}>
        <Home />
        <Suspense fallback={<div>Loading About Section...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading Contact Section...</div>}>
          <Contact />
        </Suspense>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
