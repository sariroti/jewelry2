import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider, onCarouselResized } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter, fadeIn, fadeInUp, fadeInRight } from '~/utils/data/keyframes';

function IntroSection( props ) {
    return (
        <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white intro-slider animation-slider" events={{onResize:onCarouselResized}}>
                <div className="banner banner-fixed video-banner intro-slide3" >
                <figure>
                      <video src={ '/videos/First section_1.mp4' } width="1903" height="1080" autoPlay={ true } muted loop></video> 
                    {/* <video src={ '/videos/1113.mp4' } width="1903" height="1080" autoPlay={ true } muted loop></video>  */}
                    {/* <video src={ '/videos/limited(anting).mp4' } width="1903" height="1080" autoPlay={ true } muted loop></video> */}
                    {/* <video src={ '/videos/limited(ring2).mp4' } width="1903" height="1080" autoPlay={ true } muted loop></video> */}
                </figure>                
           
                 <div className="container">
                    <div className="banner-content x-50 y-50 text-center"> 
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 700 }>
                            <h4 className="banner-subtitle text-white text-uppercase mb-3 ls-normal">Check out our</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 500 } duration={ 700 }>
                            <h2 className="banner-title mb-3 text-white font-weight-bold text-uppercase ls-m">Summer Season's</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 800 } duration={ 1000 }>
                            <p className="mb-7 text-white ls-s font-primary">Up to 50% Off this Season’s &amp; Get free shipping<br />on all orders over $199.00</p>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 1500 } duration={ 1000 }>
                            <ALink href="/shop" className="btn btn-dark btn-rounded mb-1">Custome Now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                     </div>
                </div> 
            </div>
           
            {/* <div className="banner banner-fixed video-banner intro-slide3" >
                <figure>
                     <video src={ '/videos/1116.mp4' } width="1903" height="1080" autoPlay={ true } muted loop></video>
                </figure>
            </div> */}
        </OwlCarousel >
    )
}

export default React.memo( IntroSection );