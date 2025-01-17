import {contactinfo} from '../../../public/assets/locales/static.json'
import { mediaIcon } from '../../../public/assets/locales/static.json'

export function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__info">
                        <div className="footer__header">
                            <div className="logo">
                                <img src="/images/logo.svg" alt="logo" className="logo__img"/>
                                <div className="logo__name">Johannes</div>
                            </div>
                            <a className="footer__email" href="${contactinfo.mail}">${contactinfo.mail}</a>
                        </div>

                        <p className="footer__description">${Footer.description}</p>
                    </div>
                    <div className="footer__media">
                        <div className="footer__title">${Footer.media}</div>
                        <div className="footer__list">
                            ${["github", "discord"]
                                .map((name) => mediaIcon({ name }))
                                .join("")}
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">© ${contactinfo.Copyright}</div>
            </div>

        </footer>
    )};
