import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider, onCarouselResized } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter, fadeIn, fadeInUp, fadeInRight } from '~/utils/data/keyframes';

function BerlianSection( props ) {
    return (
        <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white intro-slider animation-slider" events={{onResize:onCarouselResized}}>
           
            <div className="banner banner-fixed video-banner intro-slide3" >
                <figure>
                    <video src={ '/videos/berlian desc 2_1.mp4' } width="1903" height="1080" autoPlay={ true } muted loop></video>
                </figure>
              </div>
        </OwlCarousel >
    )
}

export default React.memo( BerlianSection );