import React from 'react';
import { Helmet } from 'react-helmet';

import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import BerlianSection from '~/components/partials/home/berlian-section';
import LimitedSection from '~/components/partials/home/limited-section';

import ServiceBox from '~/components/partials/home/service-section';
import CategorySection from '~/components/partials/home/category-section-demo15';
import BestCollection from '~/components/partials/home/best-collection';
import DealSection from '~/components/partials/home/deal-section';
import BannerSection from '~/components/partials/home/banner-section';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import CtaSection from '~/components/partials/home/cta-section';
import BrandSection from '~/components/partials/home/brand-section';
import BlogSection from '~/components/partials/home/blog-section';
import SmallCollection from '~/components/partials/product/small-collection';
import ShopBannerWrapper from '~/components/partials/shop/shop-banner2-wrapper'


function HomePage() {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 7 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const onSale = data && data.specialProducts.onSale;
    const posts = data && data.posts.data;
    const categories = [{title:'Bross',subTitle:'', btnText:'Shop Now', imageUrl:'url(images/jewelry/bross_brown.png)'},
        {title:'Earing',subTitle:'', btnText:'Shop Now', imageUrl:'url(images/jewelry/earing_brown.png)'},
        {title:'Ring',subTitle:'', btnText:'Shop Now', imageUrl:'url(images/jewelry/cincin_brown.png)'},
        {title:'Neklace',subTitle:'', btnText:'Shop Now', imageUrl:'url(images/jewelry/kalung_brown.png)'}
    ];
    return (
        <div className="main home">
            <Helmet>
                <title>Jewelery Template - Home</title>
            </Helmet>


            <h1 className="d-none">Jewelery Template - Home</h1>

            {/* <div className="page-content" style= {{ backgroundColor:'black'}} > */}
            <div className="page-content" style= {{ backgroundColor:'black'}} >
                <div className="intro-section">
                    <IntroSection />
                    <BerlianSection />
                    <LimitedSection />
                    <CategorySection />
                    <ServiceBox />
                </div>
              

                {/* <BestCollection products={ bestSelling } loading={ loading } /> */}

                {/* <DealSection /> */}
               
                {/* <ShopBannerWrapper categories={categories}/>
                */}


{/*          
                <FeaturedCollection products={ featured } loading={ loading } />

                <CtaSection />

                <BlogSection posts={ posts } />

                <BrandSection />

                <SmallCollection featured={ featured } latest={ latest } bestSelling={ bestSelling } onSale={ onSale } loading={ loading } /> */}
            </div>

            {/* <NewsletterModal /> */}
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomePage );