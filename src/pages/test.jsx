import { renderToStaticMarkup } from "react-dom/server";
import { Page } from "@shared/ui/page";
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
          <h2>Формы</h2>

          <form
            method="POST"
            action={"https://jsonplaceholder.typicode.com/posts"}
            noValidate={true}
            data-js-form
          >
            <p>
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
                required
                aria-errormessage="name-error"
                minLength={"2"}
                data-js-form-input-mask="name"
              />

              <span id="name-error" data-js-form-input-error></span>
            </p>

            <p>
              <label htmlFor="secondname">Фамилия</label>
              <input
                type="text"
                name="secondname"
                id="secondname"
                placeholder="Фамилия"
                required
                aria-errormessage="secondname-error"
                data-js-form-input-mask="name"
              />

              <span id="secondname-error" data-js-form-input-error></span>
            </p>

            <p>
              <label htmlFor="tel">Номер телефона</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="+7 (000) 000-00-00"
                required
                aria-errormessage="tel-error"
                data-js-form-input-mask="phone"
              />

              <span id="tel-error" data-js-form-input-error></span>
            </p>

            <p>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                aria-errormessage="email-error"
              />

              <span id="email-error" data-js-form-input-error></span>
            </p>

            <p>
              <label htmlFor="age">Возраст</label>
              <input
                type="text"
                name="age"
                id="age"
                placeholder="Возраст"
                required
                aria-errormessage="age-error"
                data-js-form-input-mask="age"
              />

              <span id="age-error" data-js-form-input-error></span>
            </p>

            <p>
              <label htmlFor="notrequired">Необязательное поле</label>
              <input
                type="text"
                name="notrequired"
                id="notrequired"
                placeholder="Необязательное поле"
              />
            </p>

            <p>
              <label htmlFor="radio1">Радио кнопка 1</label>
              <input
                type="radio"
                name="radio"
                id="radio1"
                value={1}
                required
                aria-errormessage="agreement-error"
              />

              <label htmlFor="radio2">Радио кнопка 2</label>
              <input
                type="radio"
                name="radio"
                id="radio2"
                value={2}
                required
                aria-errormessage="agreement-error"
              />

              <label htmlFor="radio3">Радио кнопка 3</label>
              <input
                type="radio"
                name="radio"
                id="radio3"
                value={3}
                required
                aria-errormessage="agreement-error"
              />

              <label htmlFor="radio4">Радио кнопка 4</label>
              <input
                type="radio"
                name="radio"
                id="radio4"
                value={4}
                required
                aria-errormessage="agreement-error"
              />

              <span id="agreement-error" data-js-form-input-error></span>
            </p>

            <p>
              <label htmlFor="agreement">Согласие</label>
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                value={"true"}
                required
                aria-errormessage="agreement-error"
              />

              <span id="agreement-error" data-js-form-input-error></span>
            </p>

            <button type="submit">Отправить форму</button>
          </form>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Пример React-компонента</h2>
          <ReactComponentExample.Container someProp={"exampleProp"} />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Картинка</h2>
          <img
            src={img}
            alt="Скриншот Cyberpunk 2077."
            width={400}
            height={200}
            loading="lazy"
          />
        </div>
      </section>
    </Page>
  );
};

export default renderToStaticMarkup(<Main />);
