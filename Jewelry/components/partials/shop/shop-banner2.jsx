import ALink from '~/components/features/custom-link';

export default function ShopBanner(props) {
    const { subTitle = '', title = '', subTitle2='', btnText='',imageUrl='' } = props;
    return (
        <div className="shop-banner banner container col-sm-12 col-md-12 col-lg-12 mb-5"
            style={{ backgroundImage:imageUrl, backgroundSize:'500px 500px', backgroundPosition:'right', height:'450px', display:'flex', width:'1200px',  alignItems:'center', backgroundColor:'rgb(53, 53, 48, 0.9)' }}>
            <div className="banner-content" style={{left:'18rem'}}>
                <h4 className="banner-subtitle text-uppercase ls-m font-weight-bold">
                    {subTitle}</h4>
                <h1 className="banner-title font-weight-bold text-white text-uppercase">{title}
									</h1>
                <p className="font-primary text-white lh-1 ls-m">{subTitle2}</p>
                <>
                <ALink href="/shop/grid/5cols" className="btn btn-outline btn-rounded btn-shop-focus">{btnText} <i class='d-icon-arrow-right'></i></ALink>
               
                </>
            </div>
        </div>
    )
}