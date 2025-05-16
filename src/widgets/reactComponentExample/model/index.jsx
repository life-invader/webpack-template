import { createRoot } from "react-dom/client";
import { ReactComponentExample } from "../ui/ReactComponentExample.jsx";

export class ReactComponentExampleModel {
  static selector = "#reactComponentContainer";
  static propsAttr = "reactcomponent";
  container = null;

  constructor() {
    this.container = document.querySelector(
      ReactComponentExampleModel.selector,
    );
    this.props = JSON.parse(
      this.container?.dataset[ReactComponentExampleModel.propsAttr] || "{}",
    );

    this.render();
  }

  render() {
    if (this.container) {
      const root = createRoot(this.container);
      root.render(<ReactComponentExample {...this.props} />);
    }
  }
}
