import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";

export const Page = ({ children, title = "Document" }) => {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous" /* Шрифты, предзагруженные без атрибута crossorigin, будут загружены дважды! */
          href="fonts/TT_Travels_Text_Medium.woff2"
        />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="icons/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="manifest.json" />
        <title>{title}</title>
      </head>
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
};
