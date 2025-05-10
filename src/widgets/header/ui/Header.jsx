import { baseProps } from "./props.js";

export const Header = (props) => {
  const { links } = {
    ...baseProps,
    ...props,
  };

  return (
    <header className="header">
      <div className="container">
        <ul className="header__list">
          {links.map(({ label, href }) => (
            <li className="header__listItem">
              <a className="header__link" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
