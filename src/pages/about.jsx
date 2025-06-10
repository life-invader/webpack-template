import { renderToStaticMarkup } from "react-dom/server";
import { Page } from "@shared/ui/page";

const title = "О компании";

const About = () => {
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

export default renderToStaticMarkup(<About />);
