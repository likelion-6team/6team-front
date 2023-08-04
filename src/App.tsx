import { Suspense } from "react";
import RoutesSetting from "./Routes";
import { Global } from "@emotion/react";
import reset from "./styles/reset";

function App() {
  return (
    <Suspense fallback={<div />}>
      <Global styles={reset} />
      <RoutesSetting />
    </Suspense>
  );
}

export default App;
