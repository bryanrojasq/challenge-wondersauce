import React from "react"
import "./styles.css"

export default () => (
    <nav className="nav__container--footer">
        <ul className="nav__footer">
            <li className="nav__footer__col">copyright josh.com</li>
            <li className="nav__footer__col nav__footer--pull-right">
                <ul>
                    <li className="nav__footer_item">social media</li>
                    <li className="nav__footer_item">terms</li>
                    <li className="nav__footer_item">faq</li>
                </ul>
            </li>
        </ul>
    </nav>
)