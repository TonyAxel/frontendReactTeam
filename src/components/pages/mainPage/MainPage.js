import Slider from 'react-slick'
import ItemSlider from "./itemSlider/ItemSlider";
import {Link} from "react-router-dom";
const MainPage = () => {
    return (
        <>
            <div className="page_content">
                <div className="content">
                    <div className="card">
                        <div className="card_header">
                            <h2>Магазины</h2>
                        </div>
                        <div className="card_body">
                            <Slider
                                dots = {true}
                                speed = {1500}
                                slidesToShow = {5}
                                slidesToScroll = {5}
                            >
                                <Link to={'/shop/1/products'}>
                                    <div className='item'><img src="https://irecommend.ru/sites/default/files/product-images/2257062/DZ9FyUHkfg9rWk5R2UrZA.png" alt=""/></div>
                                </Link>
                                <Link to={'/shop/1/products'}>
                                    <div className='item'><img src="https://irecommend.ru/sites/default/files/product-images/2257062/DZ9FyUHkfg9rWk5R2UrZA.png" alt=""/></div>
                                </Link>
                                <Link to={'/shop/1/products'}>
                                    <div className='item'><img src="https://irecommend.ru/sites/default/files/product-images/2257062/DZ9FyUHkfg9rWk5R2UrZA.png" alt=""/></div>
                                </Link>
                                <Link to={'/shop/1/products'}>
                                    <div className='item'><img src="https://irecommend.ru/sites/default/files/product-images/2257062/DZ9FyUHkfg9rWk5R2UrZA.png" alt=""/></div>
                                </Link>
                                <Link to={'/shop/1/products'}>
                                    <div className='item'><img src="https://irecommend.ru/sites/default/files/product-images/2257062/DZ9FyUHkfg9rWk5R2UrZA.png" alt=""/></div>
                                </Link>
                                <Link to={'/shop/1/products'}>
                                    <div className='item'><img src="https://irecommend.ru/sites/default/files/product-images/2257062/DZ9FyUHkfg9rWk5R2UrZA.png" alt=""/></div>
                                </Link>
                                <Link to={'/shop/1/products'}>
                                    <div className='item'><img src="https://irecommend.ru/sites/default/files/product-images/2257062/DZ9FyUHkfg9rWk5R2UrZA.png" alt=""/></div>
                                </Link>
                                <Link to={'/shop/1/products'}>
                                    <div className='item'><img src="https://irecommend.ru/sites/default/files/product-images/2257062/DZ9FyUHkfg9rWk5R2UrZA.png" alt=""/></div>
                                </Link>
                            </Slider>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_header">
                            <h2>Акции</h2>
                        </div>
                        <div className="card_body">
                            <Slider
                                dots = {true}
                                speed = {1500}
                                slidesToShow = {5}
                                slidesToScroll = {5}
                            >
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />



                            </Slider>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_header">
                            <h2>Вам понравилось</h2>
                        </div>
                        <div className="card_body">
                            <Slider
                                dots = {true}
                                speed = {1500}
                                slidesToShow = {5}
                                slidesToScroll = {5}
                            >
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />
                                <ItemSlider product={"Банан"} oldPrice={150} newPrice={120} shop={"Ашан"} />

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;