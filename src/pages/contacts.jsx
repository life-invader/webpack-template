import { renderToStaticMarkup } from "react-dom/server";
import { Page } from "@shared/page";

const title = "Контакты";

const Contacts = () => {
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

export default renderToStaticMarkup(<Contacts />);
