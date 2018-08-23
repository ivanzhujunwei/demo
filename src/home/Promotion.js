import React, {Component} from 'react';
import Login from './Login';
import Register from "./Register";
const promStyle = {
    height: '120%',
    backgroundImage: `url(assets/img/background.jpg)`
};

class Promotion extends Component {

    isSignUp(props){
        const isSignUp = props.isSignUp;
        if(isSignUp){
            return <Register/>;
        }else{
            return <Login/>;
        }
    }
    render() {
        return (
            // Promo Block
            <div className = "dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall"
                 data-options = '{direction: "reverse", settings_mode_oneelement_max_offset: "150"}'>
                <div className = "divimage dzsparallaxer--target w-100 g-bg-cover g-bg-black-opacity-0_3--after"
                     style = {promStyle}/>
                <div className = "container g-pt-170">
                    <div className = "row justify-content-between align-items-center">
                        <div className = "col-md-6 col-lg-7 g-mb-90">
                            {/* Content Info */}
                            <div className = "mb-5">
                                <h1 className = "g-color-white g-font-weight-600 g-font-size-50 mb-3">Enjoy. Relax.
                                                                                                      Collaboration.</h1>
                                <p className = "g-color-white g-font-size-18 g-line-height-2">Unify Marketing is a
                                                                                              comprehensive, creation
                                                                                              and management solution
                                                                                              that helps business
                                                                                              providers manage their
                                                                                              shifts with complete
                                                                                              accuracy.</p>
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
                        {/*{this.props.func ? <Register/> : <Login/>}*/}
                        <Login/>
                    </div>
                </div>
            </div>
            //End  Promo Block
        )
            ;
    }
}

export default Promotion;
