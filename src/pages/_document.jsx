import Document, { Html, Head, Main, NextScript } from "next/document";
import { SEO } from "../SEO";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={SEO.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
