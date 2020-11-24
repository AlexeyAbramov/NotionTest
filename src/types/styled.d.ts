import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    defPadding: string;
    defFont: string;

    colors: {
      font: string;
      links: string;
      mainBg: string;
      mainBgDark: string;
      secondBg: string;
    };
  }
}
