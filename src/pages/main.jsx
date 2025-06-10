import { renderToStaticMarkup } from "react-dom/server";
import { Page } from "@shared/ui/page";

const title = "Главная страница";

const Main = () => {
  return (
    <Page title={title}>
      <section>
        <div className="container">
          <h1>{title}</h1>
          <p>Добро пожаловать!</p>
        </div>
      </section>
    </Page>
  );
};

export default renderToStaticMarkup(<Main />);
