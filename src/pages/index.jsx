import { renderToStaticMarkup } from "react-dom/server";
import { Page } from "@shared/page";

const pages = [
  {
    label: "Главная",
    href: "/main.html",
  },
  {
    label: "Контакты",
    href: "/contacts.html",
  },
  {
    label: "О компании",
    href: "/about.html",
  },
  {
    label: "Тестовая страница",
    href: "/test.html",
  },
];

const title = "Список страниц верстки";

const Index = () => {
  return (
    <Page title={title}>
      <section>
        <div className="container">
          <h1>{title}</h1>

          <ul>
            {pages.map(({ href, label }, index) => (
              <li key={index}>
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Page>
  );
};

export default renderToStaticMarkup(<Index />);
