import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#2296f3" />
        <meta name="title" content="Aqary International - Aqary Dashboard" />
        <meta
          name="description"
          content="Aqary International - Aqary Dashboard"
        />
        <meta
          name="keywords"
          content="aqary, dashboard"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="//" />
        <meta property="og:site_name" content="//" />
        <meta property="article:publisher" content="//" />
        <meta property="og:title" content="Aqary International - Aqary Dashboard" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:image" content="//" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="//" />
        <meta property="twitter:title" content="Aqary International - Aqary Dashboard" />
        <meta
          property="twitter:description"
          content="Aqary’s purpose is to make home moving easier in the entire world"
        />
        <meta property="twitter:image" content="//" />
        <meta name="twitter:creator" content="@codedthemes" />

        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
