import { renderToStaticMarkup } from "react-dom/server";
import { Page } from "@shared/page/index";

const title = "Список страниц верстки";

const Index = () => {
  return (
    <Page title={title}>
      <section>
        <div className="container">
          <h1>{title}</h1>
          <ul>
            <li>
              <a href="/main.html">Главная</a>
            </li>
          </ul>
        </div>
      </section>
    </Page>
  );
};

export default renderToStaticMarkup(<Index />);
