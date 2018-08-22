import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            // Login modal
            <div className = "col-md-6 col-lg-4 g-mb-90">
                {/* Join Form */}
                <form className = "g-bg-white rounded g-px-30 g-py-40">
                    <div className = "text-center">
                        <h2 className = "h3 g-font-weight-600 g-mb-35">Login to New Moon</h2>
                    </div>

                    <input className = "form-control rounded g-px-20 g-py-12 mb-3" type = "email" placeholder = "Your Email"/>
                    <input className = "form-control rounded g-px-20 g-py-12 mb-3" type = "text" placeholder = "Your Password"/>

                    <div className = "g-mb-35">
                        <button className = "btn btn-block u-btn-black g-brd-main g-brd-primary--hover g-bg-main g-bg-primary--hover g-font-weight-600 g-font-size-12 text-uppercase g-px-25 g-py-13" type = "submit">
                            Login
                        </button>
                    </div>

                    <div className = "text-center mb-3">
                        <h3 className = "h5">Login with</h3>
                    </div>

                    <div className = "row no-gutters">
                        <div className = "col">
                            <a className = "btn btn-block u-btn-facebook g-font-weight-600 g-font-size-12 text-uppercase g-rounded-right-0 g-rounded-left-3 g-px-25 g-py-13" href = "page-works-1.html">
                                <i className = "mr-2 fa fa-facebook"/>
                                Facebook
                            </a>
                        </div>
                        <div className = "col">
                            <a className = "btn btn-block btn-success g-font-weight-600 g-font-size-12 text-uppercase g-rounded-left-0 g-rounded-right-3 g-px-25 g-py-13" href = "page-works-1.html">
                                <i className = "mr-2 fa fa-wechat"/>
                                Wechat
                            </a>
                        </div>
                    </div>
                </form>
                {/* End Join Form */}
            </div>
            //End  Promo Block
        )
            ;
    }
}

export default Login;
