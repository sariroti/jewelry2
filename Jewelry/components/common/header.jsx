import { useEffect } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header( props ) {
    const router = useRouter();

    useEffect( () => {
        let header = document.querySelector( 'header' );
        if ( header ) {
            if ( headerBorderRemoveList.includes( router.pathname ) && header.classList.contains( 'header-border' ) ) header.classList.remove( 'header-border' )
            else if ( !headerBorderRemoveList.includes( router.pathname ) ) document.querySelector( 'header' ).classList.add( 'header-border' );
        }
    }, [ router.pathname ] )

    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className="header header-border">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <p className="welcome-msg">ALEXANDERenFAM</p>
                    </div>
                    <div className="header-right">
                    <div className="dropdown">
                            <ALink href="#">USD</ALink>
                            <ul className="dropdown-box">
                                <li><ALink href="#">USD</ALink></li>
                                <li><ALink href="#">EUR</ALink></li>
                            </ul>
                        </div>

                        <div className="dropdown ml-5">
                            <ALink href="#">ENG</ALink>
                            <ul className="dropdown-box">
                                <li>
                                    <ALink href="#">ENG</ALink>
                                </li>
                                <li>
                                    <ALink href="#">FRH</ALink>
                                </li>
                            </ul>
                        </div>
                        <span className="divider"></span>
                        <ALink href="/pages/contact-us" className="contact d-lg-show"><i className="d-icon-map"></i>Contact</ALink>
                        <ALink href="#" className="help d-lg-show"><i className="d-icon-info"></i> Need Help</ALink>
                        <LoginModal />
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header fix-top ">
                <div className="container">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={showMobileMenu}>
                            <i className="d-icon-bars2"></i>
                        </ALink>
                    </div>

                    <div className="header-center">
                        {/* <ALink href="/" className="logo">
                            <img src='./images/logo.png' alt="logo" width="154" height="43" />
                        </ALink> */}
                    </div>

                    <div className="header-right">
                         {/* <ALink href="#" className="mobile-menu-toggle" onClick={showMobileMenu}>
                            <i className="d-icon-bars2"></i>
                        </ALink> */}

                        <a href="tel:#" className="call icon-box icon-box-side">
                            <div className="icon-box-icon text-white p-0">
                                <i className="d-icon-phone"></i>
                            </div>
                            <div className="icon-box-content d-lg-show">
                                <h4 className="icon-box-title text-white">Call Us Now:</h4>
                                <p className="text-white">0(123) 456-789</p>
                            </div>
                        </a>
                        <ALink href="/pages/account" className="login-link mr-4 mr-lg-6">
                            <i className="d-icon-user text-white"></i>
                        </ALink>
                        <ALink href="/pages/wishlist" className="wishlist">
                            <i className="d-icon-heart text-white"></i>
                        </ALink>
                        <span className="divider mr-3 text-white"></span>

                        <CartMenu />
                    </div>
                </div>
            </div>

            {/* <div className={`header-bottom sticky-header fix-top sticky-content ${hasborder === 'true' ? 'no-border' : ''}`}> */}
                {/* <div className="container">
                    <div className="header-left">
                        <SearchBox />

                    </div>

                    <div className="header-center justify-content-center">
                        <MainMenu />
                    </div>

                    
                </div> */}
            {/* </div> */}
        </header >
    );
}