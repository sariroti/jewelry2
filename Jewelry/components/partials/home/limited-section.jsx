import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter, fadeIn, fadeInUp, fadeInRight } from '~/utils/data/keyframes';

function LimitedSection( props ) {
    return (
        <>
        <h2 className="title title-center mb-1 mt-5 title-white">Limited</h2>
        <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white intro-slider animation-slider" options={ introSlider }>
            <div className="container">
                <div className="banner banner-fixed video-banner" >
                    <figure>
                            <video src={ '/videos/home slide/limited(ring).mp4' } width="1903" height="680" muted loop></video>
                    </figure>
                    
                </div>
            </div>
            <div className="container">
                <div className="banner banner-fixed video-banner" >
                    <figure>
                            <video src={ '/videos/home slide/limited(anting).mp4' } width="1903" height="680" muted loop></video>
                    </figure>
                    
                </div>
            </div>
            <div className="container">
                <div className="banner banner-fixed video-banner" >
                    <figure>
                            <video src={ '/videos/home slide/limited(bross).mp4' } width="1903" height="680" muted loop></video>
                    </figure>
                    
                </div>
            </div>
            <div className="container">
                <div className="banner banner-fixed video-banner" >
                    <figure>
                            <video src={ '/videos/home slide/limited(cincin1).mp4' } width="1903" height="680" muted loop></video>
                    </figure>
                    
                </div>
            </div>
        </OwlCarousel >
        </>
    )
}

export default React.memo( LimitedSection );