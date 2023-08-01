import { Suspense } from "react";
import Footer from "./components/Footer";
import RoutesSetting from "./Routes";
import { Global } from "@emotion/react";
import reset from "./styles/reset";

function App() {
  return (
    <Suspense fallback={<div />}>
      <Global styles={reset} />
      <Footer />
      <RoutesSetting />
    </Suspense>
  );
}

export default App;
