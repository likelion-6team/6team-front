import { Suspense } from "react";
import Footer from "./components/Footer";
import RoutesSetting from "./Routes";

function App() {
  return (
    <Suspense fallback={<div />}>
      <Footer />
      <RoutesSetting />
    </Suspense>
  );
}

export default App;
