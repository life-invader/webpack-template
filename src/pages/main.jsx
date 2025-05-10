import { renderToStaticMarkup } from "react-dom/server";
import { Page } from "@shared/page/index";
import img from "@images/image.png";

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

      <section>
        <div className="container">
          <h2>Картинка</h2>
          <img src={img} alt="" />
        </div>
      </section>
    </Page>
  );
};

export default renderToStaticMarkup(<Main />);
