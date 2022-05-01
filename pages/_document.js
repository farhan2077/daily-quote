import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* google font preloading */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400&family=Fraunces:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#1E293B"></meta>

          <meta property="og:title" content="Daily Quote" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:description" content="Get daily quote" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:image" content="/social-preview.png" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@farhanbinamin" />
          <meta name="twitter:title" content="Daily Quote" />
          <meta name="twitter:description" content="Get daily quote" />
          <meta name="twitter:image" content="/social-preview.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
