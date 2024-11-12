import ShopBanner from './shop-banner2'


export default function ShopBannerWrapper(props) {
    const {categories} = props;
    return (
    <div>
    <h2 className="title title-center mb-5 mt-5 title-white">Category</h2>
    
    {
        categories.map(category => (
            <ShopBanner title={category.title} subTitle={category.subTitle} btnText={category.btnText} imageUrl={category.imageUrl} />
        ))
    }
   
   </div>
    );
}