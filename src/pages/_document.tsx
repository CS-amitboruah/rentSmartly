import { Html, Head, Main, NextScript } from "next/document";
import { I18Provider, LOCALES } from "../i18n/index";

export default function Document() {
  return (
    <I18Provider locale={LOCALES.ENGLISH}>
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </I18Provider>
  );
}
