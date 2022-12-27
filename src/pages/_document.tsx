import Document, { Html, Head, Main, NextScript } from 'next/document';

import { Body } from '../shared';
import { theme, roboto } from '../theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR" className={roboto.className}>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="shortcut icon"
            href="https://www.youtube.com/s/desktop/451d4225/img/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="https://www.youtube.com/s/desktop/451d4225/img/favicon_32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="https://www.youtube.com/s/desktop/451d4225/img/favicon_48x48.png"
            sizes="48x48"
          />
          <link
            rel="icon"
            href="https://www.youtube.com/s/desktop/451d4225/img/favicon_96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            href="https://www.youtube.com/s/desktop/451d4225/img/favicon_144x144.png"
            sizes="144x144"
          />
          <meta name="emotion-insertion-point" content="" />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
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
