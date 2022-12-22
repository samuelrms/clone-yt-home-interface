import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { theme, roboto } from '../theme';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR" className={roboto.className}>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="emotion-insertion-point" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
  };
};
