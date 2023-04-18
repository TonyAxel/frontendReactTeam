import Slider from 'react-slick'
import ItemSlider from "./itemSlider/ItemSlider";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import AxiosClient from "../../../axiosClient/AxiosClient";

const MainPage = () => {

    const [shops, setShops] = useState([]);
    const [discauntedProduct, setDiscauntedProduct] = useState([])

    useEffect(() => {
        AxiosClient.post('/shops')
            .then((res) => {
                setShops(res.data);
            })
        AxiosClient.post('/discountedProduct')
            .then((res) => {
                setDiscauntedProduct(res.data);
            })
    }, [])

    return (<>
        <div className="page_content">
            <div className="content">
                <div className="card">
                    <div className="card_header">
                        <h2>Магазины</h2>
                    </div>
                    <div className="card_body">
                        <Slider
                            dots={true}
                            speed={1500}
                            slidesToShow={3}
                            slidesToScroll={3}
                        >
                            {
                                (shops || []).map((shop, key) => {
                                    return <Link key={shop.id} to={`/shop/${shop.id}/products`}>
                                        <div key={shop.id} className='item'><img
                                            src="https://irecommend.ru/sites/default/files/product-images/2257062/DZ9FyUHkfg9rWk5R2UrZA.png"
                                            alt=""/>
                                        </div>
                                    </Link>
                                })
                            }

                        </Slider>
                    </div>
                </div>
                <div className="card">
                    <div className="card_header">
                        <h2>Акции</h2>
                    </div>
                    <div className="card_body">
                        <Slider
                            dots={true}
                            speed={1500}
                            slidesToShow={5}
                            slidesToScroll={5}
                        >
                            {
                                (discauntedProduct || []).map((product, key) => {
                                    if(key < 10)
                                    return <ItemSlider key={product.id}
                                                       product={product.name_product}
                                                       oldPrice={product.cost}
                                                       newPrice={product.discounted_cost}
                                                       shop={product.shop.name_shop}
                                                       photo={product.image}/>

                                })
                            }


                        </Slider>
                    </div>
                </div>
                <div className="card" style={{'marginTop': '10'}}>
                    <div className="card_header">
                        <h2>Акции</h2>
                    </div>
                    <div className="card_body">
                        <Slider
                            dots={true}
                            speed={1500}
                            slidesToShow={5}
                            slidesToScroll={5}
                        >
                            {
                                (discauntedProduct || []).map((product, key) => {
                                    if(key > 10)
                                        return <ItemSlider key={product.id}
                                                           product={product.name_product}
                                                           oldPrice={product.cost}
                                                           newPrice={product.discounted_cost}
                                                           shop={product.shop.name_shop}
                                                           photo={product.image}/>

                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default MainPage;