import React, {Component} from 'react';
import './App.css';


class AppNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignUp: true
        };
        this.setState = this.setState.bind(this);
    }

    setState(isSignUp) {
        alert(1);
        this.isSignUp = !isSignUp;
        console.log(this.isSignUp);
    };

    pressHandler(isSignUp) {
        this.props.set_sign_up_state(isSignUp);
    }

    render() {
        return (

            // Header
            <header id = "js-header"
                    className = "u-header u-header--sticky-top u-header--toggle-section u-header--change-appearance u-shadow-v19">
                <div className = "u-header__section g-bg-white g-transition-0_3">
                    <nav className = "js-mega-menu navbar navbar-expand-lg g-pa-0">
                        <div className = "container">
                            {/* Logo */}
                            <a className = "navbar-brand g-pl-15" href = "home-page-1.html">
                                <img className = "g-width-45" src = "assets/img/logo.jpg" alt = "Logo"/>
                            </a>
                            {/* End Logo */}

                            {/* Responsive Toggle Button */}
                            <button
                                className = "navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pos-abs g-top-10 g-right-0 g-pa-0 g-mt-2"
                                type = "button"
                                aria-label = "Toggle navigation"
                                aria-expanded = "false"
                                aria-controls = "navBar"
                                data-toggle = "collapse"
                                data-target = "#navBar">
                                    <span className = "hamburger hamburger--slider g-px-15">
                                      <span className = "hamburger-box">
                                        <span className = "hamburger-inner"/>
                                      </span>
                                    </span>
                            </button>
                            {/* End Responsive Toggle Button */}

                            {/* Navigation */}
                            <div id = "navBar" className = "collapse navbar-collapse align-items-center flex-sm-row">
                                <ul className = "navbar-nav ml-auto g-pb-30 g-pb-0--lg">
                                    <li className = "nav-item g-mx-15 g-mx-3--lg g-mb-5 g-mb-0--lg">
                                        <a
                                            className = "nav-link rounded g-color-primary--hover g-bg-transparent g-bg-main--hover g-font-weight-600 g-font-size-15 g-px-14 g-py-10"
                                            href = "home-page-1.html">
                                            Home
                                        </a>
                                    </li>

                                    {/* About - Submenu */}
                                    <li className = "nav-item hs-has-sub-menu g-mx-15 g-mx-3--lg g-mb-5 g-mb-0--lg">
                                        <a id = "nav-link--page"
                                           className = "nav-link rounded g-color-primary--hover g-bg-transparent g-bg-main--hover g-font-weight-600 g-font-size-15 g-px-14 g-py-10"
                                           aria-haspopup = "true"
                                           aria-expanded = "false"
                                           aria-controls = "nav-submenu--page">
                                            About
                                        </a>

                                        {/* Submenu */}
                                        <ul id = "nav-submenu--page" className = "hs-sub-menu list-unstyled u-shadow-v11 g-min-width-220 g-mt-18"
                                            aria-labelledby = "nav-link--page">
                                            <li className = "dropdown-item">
                                                <a className = "nav-link g-color-text g-font-weight-600" href = "page-about-1.html">About</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a className = "nav-link g-color-text g-font-weight-600" href = "page-services-1.html">Services</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a className = "nav-link g-color-text g-font-weight-600" href = "page-consultants-1.html">Consultants</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a className = "nav-link g-color-text g-font-weight-600" href = "page-works-1.html">Works</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a className = "nav-link g-color-text g-font-weight-600" href = "page-hire-us-1.html">Hire
                                                                                                                                      Us</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a className = "nav-link g-color-text g-font-weight-600" href = "page-careers-1.html">Careers</a>
                                            </li>
                                        </ul>
                                        {/* End Submenu */}
                                    </li>
                                    {/* End About - Submenu */}

                                    <li className = "nav-item g-mx-15 g-mx-3--lg g-mb-5 g-mb-0--lg">
                                        <a
                                            className = "nav-link d-inline-block rounded g-brd-around g-brd-2 g-brd-primary g-color-primary--hover g-bg-transparent g-bg-main--hover g-font-weight-600 g-font-size-15 g-px-20 g-py-8"
                                            href = "../../index.html">Main</a>
                                    </li>
                                    {/* Login Register*/}
                                    <li className = "nav-item g-mx-15 g-mx-3--lg g-mb-5 g-mb-0--lg">
                                        <a
                                            className = "nav-link rounded g-color-primary--hover g-bg-transparent g-bg-main--hover g-font-weight-600 g-font-size-15 g-px-14 g-py-10"
                                            href = "#"
                                            onClick = {() => {
                                                this.pressHandler(true);
                                                // this.setState(this.state.isSignUp)
                                            }}>
                                            Sign up
                                        </a>
                                    </li>
                                    <li className = "nav-item g-mx-15 g-mx-3--lg g-mb-5 g-mb-0--lg">
                                        <a
                                            className = "nav-link rounded g-color-primary--hover g-bg-transparent g-bg-main--hover g-font-weight-600 g-font-size-15 g-px-14 g-py-10"
                                            href = "#"
                                            onClick = {() => {
                                                this.pressHandler(false);
                                                // this.setState(this.state.isSignUp)
                                            }}>
                                            Log in
                                        </a>
                                    </li>
                                    {/* End Login Register*/}
                                </ul>
                            </div>
                            {/* End Navigation */}

                            {/* Social Icons */}
                            <ul
                                className = "col-auto list-inline g-pos-rel g-top-minus-3 g-py-20 g-py-6--lg g-pr-5 g-mr-60 g-mr-0--lg ml-auto ml-lg-0 mb-0">
                                <li className = "list-inline-item g-mx-0">
                                    <a className = "u-icon-v3 u-icon-size--xs g-bg-transparent g-bg-main--hover rounded"><i
                                        className = "fa fa-facebook"/></a>
                                </li>
                                <li className = "list-inline-item g-mx-0">
                                    <a className = "u-icon-v3 u-icon-size--xs g-bg-transparent g-bg-main--hover rounded"><i
                                        className = "fa fa-twitter"/></a>
                                </li>
                                <li className = "list-inline-item g-mx-0">
                                    <a className = "u-icon-v3 u-icon-size--xs g-bg-transparent g-bg-main--hover rounded"><i
                                        className = "fa fa-pinterest"/></a>
                                </li>
                            </ul>
                            {/* End Social Icons */}

                            <div className = "col-auto g-hidden-md-down g-pr-0">
                                <div className = "g-bg-main g-cursor-pointer g-px-25 g-py-20">
                                    <span className = "d-block g-color-primary g-font-size-11 mb-1">(0161) 347 8854</span>
                                    <span className = "d-block g-color-primary"><i className = "mr-2 fa fa-phone"/> Request a Call</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            // End Header

        );
    }
}

export default AppNav;
