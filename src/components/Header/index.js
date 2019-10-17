import React, {useState, useEffect} from 'react'
import {withRouter, Link} from 'react-router-dom'

function Header({location, history}) {
    let [burgerMenuVisible, showBurgerMenu] = useState(false)
    let [dropdownActive, activateDropdown] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset
            const headerWrapper = document.querySelector('.header-wrap')
            if (headerWrapper) {
                if (scrollPosition > 5) {
                    headerWrapper.classList.add('header-shrink')
                } else {
                    headerWrapper.classList.remove('header-shrink')
                }
            }
        })

        window.innerWidth <= 560 && showBurgerMenu(true)

        window.addEventListener('resize', function handleWindowResize() {
            if (window.innerWidth <= 560) {
                showBurgerMenu(true)
            }
            if (window.innerWidth > 560) {
                showBurgerMenu(false)
                activateDropdown(false)
            }
        })
    }, [burgerMenuVisible, showBurgerMenu])

    function handleClickHome() {
        history.push('/')
    }

    function handleClickAbout() {
        history.push('/about')
    }

    function handleClickExplore() {
        history.push('/explore')
    }

    function handleClickFaqs() {
        history.push('/faqs')
    }

    function handleClickContact() {
        history.push('/contact')
    }

    function handleClickBurgerMenu() {
        activateDropdown(!dropdownActive)
    }

    return (
        <div className="header-container">
            <div
                className={
                    burgerMenuVisible
                        ? !dropdownActive
                            ? 'header-wrap'
                            : 'no-padding-top header-wrap'
                        : 'header-wrap'
                }>
                <nav>
                    <ul className="nav-bar">
                        {burgerMenuVisible && (
                            <li>
                                <img
                                    onClick={handleClickBurgerMenu}
                                    id="burger-menu"
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg"
                                    alt="Dropdown menu"
                                />
                            </li>
                        )}
                        <ul
                            className={
                                burgerMenuVisible
                                    ? !dropdownActive
                                        ? 'flex-dropdown inner-nav-bar hide'
                                        : 'flex-dropdown inner-nav-bar'
                                    : 'inner-nav-bar'
                            }>
                            <li className="opt-wrapper">
                                <option className="nav-option" onClick={handleClickHome}>
                                    home
                                </option>
                            </li>
                            <li className="opt-wrapper">
                                <option className="nav-option" onClick={handleClickAbout}>
                                    about
                                </option>
                            </li>
                            <li className="opt-wrapper">
                                <option className="nav-option" onClick={handleClickExplore}>
                                    explore
                                </option>
                            </li>
                            <li className="opt-wrapper">
                                <option className="nav-option" onClick={handleClickFaqs}>
                                    faqs
                                </option>
                            </li>
                            <li className="opt-wrapper">
                                <option className="nav-option" onClick={handleClickContact}>
                                    contact
                                </option>
                            </li>
                            <li className="opt-wrapper">
                                <a
                                    className="nav-option"
                                    href="https://github.com/s-Hale/BuildTravelCards">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </div>
            {location.pathname.includes('/trip/') && (
                <Link className="back-link-arrow" to="/">
                    ⬅
                </Link>
            )}
        </div>
    )
}

export default withRouter(Header)
