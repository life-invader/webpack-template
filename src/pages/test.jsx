import { renderToStaticMarkup } from "react-dom/server";
import { Page } from "@shared/page/index";
import { ReactComponentExample } from "@widgets/reactComponentExample";
import img from "@images/image.png";

const title = "Тестовая страница";

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
          <h2>Пример React-компонента</h2>
          <ReactComponentExample.Container btnText={"setNumber + 1"} />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Картинка</h2>
          <img
            src={img}
            alt="Скриншот Cyberpunk 2077."
            width={1920}
            height={1080}
            loading="lazy"
          />
        </div>
      </section>
    </Page>
  );
};

export default renderToStaticMarkup(<Main />);
