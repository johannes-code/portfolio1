import logoImg from '/assets/images/logo.svg';
import githubIcon from '/assets/images/icons/github.svg';
import emailIcon from '/assets/images/icons/email.svg';
import "./header.css";

export function Header({ data }) {
  
  return (
    <header className="header">
      <input className="hamburger" type="checkbox" aria-label="Menu" />

      <div className="media-header">
        <span className="media-header__line"></span>
        <div className="media-header__links">
          <img src={githubIcon} alt="github" />
          <img src="" alt="" />
          <img src={emailIcon} alt="email" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="header__inner">
          <a className="logo" href="/">
            <img
              className="logo__img"
              src={logoImg}
              alt="Johannes logo"
            />
            <span className="logo__name">Johannes</span>
          </a>
          <div className="header__links">
            <a href="/">{data.home}</a>
            <a href="/projects">{data.projects}</a>
            <a href="/about">{data.about}</a>
            <a href="/contacts">{data.contacts}</a>
          </div>
          <div className="dropdown">
            <span className="dropdown__label">EN</span>

            <div className="dropdown__list">
              <div className="dropdown__option">NO</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
