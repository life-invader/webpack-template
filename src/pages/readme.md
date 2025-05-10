В этой папке содержаться JSX-шаблоны страниц, которые после сборки будут преобразованы в html-файлы. Страница верстается внутри компонента `<Page />`, он содержит `<html />`, `<head />` и прочие общие для всех страниц теги. Компонент страницы должен быть преобразован в строку путем передачи компонента страницы в метод `renderToStaticMarkup` из `react-dom/server`. 

```jsx
import { renderToStaticMarkup } from "react-dom/server";
import { Page } from "@shared/page/index";

const title = "Главная страница";

const ExamplePage = () => {
  return (
    <Page title={title}>
      <section>
        Контент страницы
      </section>
    </Page>
  );
};

export default renderToStaticMarkup(<ExamplePage />);
```