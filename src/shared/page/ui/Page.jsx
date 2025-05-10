import { Header } from "@widgets/header/index.js";
import { Footer } from "@widgets/footer/ui/Footer";

export const Page = ({ children, title = "Document" }) => {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
