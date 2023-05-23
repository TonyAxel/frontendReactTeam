import React, {useEffect, useState} from 'react';
import AddProductInCart from "../../functions/addProductInCart";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import AxiosClient from "../../../axiosClient/AxiosClient";

const PageProductInfo = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [alternativeProduct, setAlternativeProduct] = useState([])
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.authReducer)

    useEffect(() => {
        AxiosClient.post(`/productInfo/${id}`)
            .then((res) => {
                setProduct(res.data[0][0])
                setAlternativeProduct(res.data[1])
            })
    }, [id]);

    return (
        <div className="page_content">
            <div className="content_product">
                <h2>{product.name_product}</h2>
                <div className="content_product_main">
                    <div className="content_product_main_photo">
                        <div>
                            <img src={product.image} alt=""/>
                        </div>
                    </div>
                    <div className="content_product_main_info">
                        <div className="content_product_main_info_price">
                            {
                                product.discounted_cost !== 0 ?
                                    <>
                                        <p className="content_product_main_info_price_old">{product.cost} ₽</p>
                                        <p className="content_product_main_info_price_new">{product.discounted_cost} ₽</p>
                                    </>
                                :
                                    <p className="content_product_main_info_price_new">{product.cost} ₽</p>
                            }

                        </div>
                        <button onClick={() => AddProductInCart((data) => dispatch(data), user, id)}>В корзину</button>
                        <div className="content_product_main_info_description">
                            <h4>Описание</h4>
                            <p>{product.description}</p>
                        </div>
                        <div className="content_product_main_info_shops">
                            <h3>Где купить?</h3>
                            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: '10px', width: '350px'}}>
                                <div className="content_product_main_info_shops_shop">
                                    <img src={product?.shop?.logo_shop} alt=""/>
                                    <p className="content_product_main_info_shops_shop_name_shop">{product?.shop?.name_shop}</p>
                                    <p className="content_product_main_info_shops_shop_low-cost">{product.discounted_cost === 0 ? product.cost : product.discounted_cost} ₽</p>
                                </div>
                                {
                                    alternativeProduct !== '' &&
                                    alternativeProduct.map(product => (
                                        <div className="content_product_main_info_shops_shop" key={product.id}>
                                            <img src={product?.shop?.logo_shop} alt=""/>
                                            <p className="content_product_main_info_shops_shop_name_shop">{product?.shop?.name_shop}</p>
                                            <p className="content_product_main_info_shops_shop_low-cost">{product.discounted_cost === 0 ?
                                                product.cost : product.discounted_cost.toFixed(0)} ₽</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageProductInfo;
