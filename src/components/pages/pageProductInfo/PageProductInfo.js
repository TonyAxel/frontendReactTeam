import React from 'react';

const PageProductInfo = () => {
    return (
        <div className="page_content">
            <div className="content_product">
                <h2>Яблоки</h2>
                <div className="content_product_main">
                    <div className="content_product_main_photo">
                        <div>
                            <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614527202_135-p-yabloko-na-belom-fone-177.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="content_product_main_info">
                        <div className="content_product_main_info_price">
                            <p className="content_product_main_info_price_old">129 ₽</p>
                            <p className="content_product_main_info_price_new">90 ₽</p>
                        </div>
                        <button>В корзину</button>
                        <div className="content_product_main_info_description">
                            <h4>Описание</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Arcu malesuada ipsum aliquet consectetur senectus. At turpis congue imperdiet hendrerit. Arcu rhoncus elit adipiscing mauris erat iaculis diam sem. Amet adipiscing vestibulum cursus tortor. Quam commodo at nisl lacus viverra varius nisl proin. Faucibus nisl mattis semper in eget volutpat. Mi facilisi nunc eu at cursus. Elit at adipiscing arcu elementum vulputate. Ut dictum viverra volutpat feugiat.</p>
                        </div>
                        <div className="content_product_main_info_shops">
                            <h3>Где купить?</h3>
                            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: '10px', width: '350px'}}>
                                <div className="content_product_main_info_shops_shop">
                                    <img src="https://jobcart.ru/wp-content/uploads/job-manager-uploads/company_logo/2019/06/15_Magnit_main-logo_sign.jpg" alt=""/>
                                    <p className="content_product_main_info_shops_shop_name_shop">Магнит</p>
                                    <p className="content_product_main_info_shops_shop_low-cost">90 ₽</p>
                                </div>
                                <div className="content_product_main_info_shops_shop">
                                    <img src="https://jobcart.ru/wp-content/uploads/job-manager-uploads/company_logo/2019/06/15_Magnit_main-logo_sign.jpg" alt=""/>
                                    <p className="content_product_main_info_shops_shop_name_shop">Магнит</p>
                                    <p className="content_product_main_info_shops_shop_low-cost">90 ₽</p>
                                </div>
                                <div className="content_product_main_info_shops_shop">
                                    <img src="https://jobcart.ru/wp-content/uploads/job-manager-uploads/company_logo/2019/06/15_Magnit_main-logo_sign.jpg" alt=""/>
                                    <p className="content_product_main_info_shops_shop_name_shop">Магнит</p>
                                    <p className="content_product_main_info_shops_shop_low-cost">90 ₽</p>
                                </div>
                                <div className="content_product_main_info_shops_shop">
                                    <img src="https://jobcart.ru/wp-content/uploads/job-manager-uploads/company_logo/2019/06/15_Magnit_main-logo_sign.jpg" alt=""/>
                                    <p className="content_product_main_info_shops_shop_name_shop">Магнит</p>
                                    <p className="content_product_main_info_shops_shop_low-cost">90 ₽</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageProductInfo;
