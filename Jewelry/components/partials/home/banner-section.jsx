import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

export default function BannerSection() {
    return (
        <section className="banner-section pt-8 pb-8 mt-4 pt-lg-10 pb-lg-10 section-gray">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-4 mb-3">
                        <div className="banner banner-sm" style={{ backgroundColor: '#CDCED3' }}>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banners/3.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="380"
                                    height="170"
                                />
                            </figure>
                            <div className="banner-content y-50">
                                <h4 className="banner-subtitle font-weight-bold ls-normal mb-0">Flash Sale</h4>
                                <strong className="text-primary text-uppercase">Up To 50% Off</strong>
                                <p className="banner-desc mb-0 ls-normal mt-4">From Riode Store</p>
                            </div>
                        </div>
                        <div className="newsletter-form text-center">
                            <h3 className="newsletter-title font-weight-bold text-uppercase ls-m mb-6">Sign Up To
                            Our Newsletter</h3>
                            <form action="#" method="get" className="input-wrapper">
                                <input type="email" className="form-control text-center" name="email" id="email"
                                    placeholder="Email address here..." required />
                                <button className="btn btn-primary text-uppercase w-100"
                                    type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div> */}
                    <div className="col-lg-6 mb-3">
                        <div className="banner banner-lg border-radius-25">
                        <ALink href={ { pathname: '/shop/grid/5cols/' }}>
                            <figure>
                                <LazyLoadImage
                                    src="./images/jewelry/bross.png"
                                    alt="banner"
                                    effect="opacity"
                                    width="780"
                                    height="457"
                                />
                            </figure>
                        </ALink>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="banner banner-lg border-radius-25">
                        <ALink href={ { pathname: '/shop/grid/5cols/' }}>
                            <figure>
                                <LazyLoadImage
                                    src="./images/jewelry/cincin.png"
                                    alt="banner"
                                    effect="opacity"
                                    width="780"
                                    height="457"
                                />
                            </figure>
                        </ALink>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="banner banner-lg border-radius-25">
                        <ALink href={ { pathname: '/shop/grid/5cols/' }}>
                            <figure>
                                <LazyLoadImage
                                    src="./images/jewelry/kalung.png"
                                    alt="banner"
                                    effect="opacity"
                                    width="780"
                                    height="457"
                                />
                            </figure>
                        </ALink>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="banner banner-lg border-radius-25">
                        <ALink href={ { pathname: '/shop/grid/5cols/' }}>
                            <figure>
                                <LazyLoadImage
                                    src="./images/jewelry/anting.png"
                                    alt="banner"
                                    effect="opacity"
                                    width="780"
                                    height="457"
                                />
                            </figure>
                        </ALink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}