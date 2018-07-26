import React, {Component} from 'react';

class Promotion extends Component {
    render() {
        return (
            // Promo Block 
            <div className = "dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
                 data-options = '{direction: "reverse", settings_mode_oneelement_max_offset: "150"}'>
                <div className = "divimage dzsparallaxer--target w-100 g-bg-cover g-bg-black-opacity-0_3--after"
                     style = "height: 120%; background-image: url(assets/img-temp/1920x1080/img1.jpg);"/>

                <div className = "container g-pt-170">
                    <div className = "row justify-content-between align-items-center">
                        <div className = "col-md-6 col-lg-7 g-mb-90">
                            {/* Content Info */}
                            <div className = "mb-5">
                                <h1 className = "g-color-white g-font-weight-600 g-font-size-50 mb-3">Fast. Flexible.
                                                                                                      Leaders.</h1>
                                <p className = "g-color-white g-font-size-18 g-line-height-2">Unify Marketing is a
                                                                                              comprehensive, creation
                                                                                              and management solution
                                                                                              that helps business
                                                                                              providers manage their
                                                                                              shifts with complete
                                                                                              accuracy. Our Unify
                                                                                              management software Unify
                                                                                              Marketing has earned us
                                                                                              the position of market
                                                                                              leaders for unscheduled
                                                                                              business providers.</p>
                            </div>
                            <a className = "btn u-btn-primary g-brd-main--hover g-bg-main--hover g-font-weight-600 g-font-size-12 text-uppercase g-px-25 g-py-13 mr-3" href = "page-services-1.html">
                                Our Services
                                <i className = "g-pos-rel g-top-minus-1 ml-2 fa fa-angle-right"/>
                            </a>
                            <a className = "btn u-btn-black g-brd-main g-brd-primary--hover g-bg-main g-bg-primary--hover g-font-weight-600 g-font-size-12 text-uppercase g-px-25 g-py-13" href = "page-works-1.html">
                                Our Works
                                <i className = "g-pos-rel g-top-minus-1 ml-2 fa fa-angle-right"/>
                            </a>
                            {/* End Content Info */}
                        </div>

                        <div className = "col-md-6 col-lg-4 g-mb-90">
                            {/* Join Form */}
                            <form className = "g-bg-white rounded g-px-30 g-py-40">
                                <div className = "text-center">
                                    <h2 className = "h3 g-font-weight-600 g-mb-35">Join Unify Marketing</h2>
                                </div>

                                <input className = "form-control rounded g-px-20 g-py-12 mb-3" type = "text" placeholder = "Your Name"/>
                                <input className = "form-control rounded g-px-20 g-py-12 mb-3" type = "email" placeholder = "Your Email"/>
                                <input className = "form-control rounded g-px-20 g-py-12 mb-3" type = "text" placeholder = "Your Password"/>

                                <div className = "g-mb-35">
                                    <button className = "btn btn-block u-btn-black g-brd-main g-brd-primary--hover g-bg-main g-bg-primary--hover g-font-weight-600 g-font-size-12 text-uppercase g-px-25 g-py-13" type = "submit">Submit</button>
                                </div>

                                <div className = "text-center mb-3">
                                    <h3 className = "h5">Join with</h3>
                                </div>

                                <div className = "row no-gutters">
                                    <div className = "col">
                                        <a className = "btn btn-block u-btn-facebook g-font-weight-600 g-font-size-12 text-uppercase g-rounded-right-0 g-rounded-left-3 g-px-25 g-py-13" href = "page-works-1.html">
                                            <i className = "mr-2 fa fa-facebook"/>
                                            Facebook
                                        </a>
                                    </div>
                                    <div className = "col">
                                        <a className = "btn btn-block u-btn-twitter g-font-weight-600 g-font-size-12 text-uppercase g-rounded-left-0 g-rounded-right-3 g-px-25 g-py-13" href = "page-works-1.html">
                                            <i className = "mr-2 fa fa-twitter"/>
                                            Twitter
                                        </a>
                                    </div>
                                </div>
                            </form>
                            {/* End Join Form */}
                        </div>
                    </div>
                </div>
            </div>
            //End  Promo Block
        )
            ;
    }
}

export default Promotion;
