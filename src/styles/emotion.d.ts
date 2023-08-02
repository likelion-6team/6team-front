import "@emotion/react";

type themeId = "main-color";

declare module "@emotion/react" {
  export interface Theme {
    colors: { [key in themeId]: string };
  }
}
