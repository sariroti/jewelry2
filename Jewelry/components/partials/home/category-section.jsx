import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';

function CategorySection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="pt-10 mt-7">
                <div className="container">
                    <h2 className="title title-center mb-5">Browse Our Categories</h2>

                    <div className="row">
                        <div className="col-xs-6 col-lg-3 mb-4">
                            <div className="category category-default1 category-absolute banner-radius overlay-zoom">
                                <ALink href={ { pathname: '/shop', query: { category: 'for-men-s' } } }>
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="./images/jewelry/diamond.png"
                                            alt="Intro Slider"
                                            effect="opacity; transform"
                                            width={ 280 }
                                            height={ 280 }
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h4 className="category-name font-weight-bold ls-l">Diamond Stud Earing</h4>
                                    </div>
                                </ALink>
                            </div>
                        </div>

                        <div className="col-xs-6 col-lg-3 mb-4">
                            <div className="category category-default1 category-absolute banner-radius overlay-zoom">
                                <ALink href={ { pathname: '/shop', query: { category: 'accessories' } } }>
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="../images/jewelry/earing.png"
                                            alt="Intro Slider"
                                            effect="opacity; transform"
                                            width={ 280 }
                                            height={ 280 }
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h4 className="category-name font-weight-bold ls-l">Blue Opal Sapphire Earing</h4>
                                    </div>
                                </ALink>
                            </div>
                        </div>

                        <div className="col-xs-6 col-lg-3 mb-4">
                            <div className="category category-default1 category-absolute banner-radius overlay-zoom">
                                <ALink href={ { pathname: '/shop', query: { category: 'fashionable-women-s' } } }>
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="./images/jewelry/sapphire.png"
                                            alt="Intro Slider"
                                            effect="opacity; transform"
                                            width={ 280 }
                                            height={ 280 }
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h4 className="category-name font-weight-bold ls-l">Blue Earrings Pair</h4>
                                    </div>
                                </ALink>
                            </div>
                        </div>

                        <div className="col-xs-6 col-lg-3 mb-4">
                            <div className="category category-default1 category-absolute banner-radius overlay-zoom">
                                <ALink href={ { pathname: '/shop', query: { category: 'cosmetic' } } }>
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="./images/jewelry/diamondearring.png"
                                            alt="Intro Slider"
                                            effect="opacity; transform"
                                            width={ 280 }
                                            height={ 350 }
                                        />
                                    </figure>

                                    <div className="category-content">
                                        <h4 className="category-name font-weight-bold ls-l">Rose Gold Diamond Earrings</h4>
                                    </div>
                                </ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( CategorySection );