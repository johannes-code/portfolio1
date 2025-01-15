export function header() {

return(
<header class="header">
      <input class="hamburger" type="checkbox" aria-label="Menu" />

      <div class="media-header">
        <span class="media-header__line"></span>
        <div class="media-header__links">
          <img src="assets/images/icons/github.svg" alt="github" />
          <img src="" />
          <img src="assets/images/icons/email.svg" alt="email" />
          <img src="" />
        </div>
      </div>
      <div class="container">
        <div class="header__inner">
          <a class="logo" href="/">
            <img
              class="logo__img"
              src="assets/images/logo.svg"
              alt="Johannes logo"
            />
            <span class="logo__name">Johannes</span>
          </a>
          <div class="header__links">
            <div id="dataDisplay"></div>
          </div>
          <div class="dropdown">
            <span class="dropdown__label">EN</span>

            <div class="dropdown__list">
              <div class="dropdown__option">NO</div>
            </div>
          </div>
        </div>
      </div>
    </header>
);
}