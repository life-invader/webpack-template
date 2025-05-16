import { baseProps } from "./props.js";

export const Footer = (props) => {
  const { links } = {
    ...baseProps,
    ...props,
  };

  return (
    <header className="footer">
      <div className="container">
        <ul className="footer__list">
          {links.map(({ label, href }, index) => (
            <li className="footer__listItem" key={index}>
              <a className="footer__link" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
