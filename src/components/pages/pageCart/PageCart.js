import React, {useEffect, useState} from 'react';
import ItemProductsCart from "./ItemProductsCart";
import ItemShopsCart from "./ItemShopsCart";
import AxiosClient from "../../../axiosClient/AxiosClient";
import {useDispatch, useSelector} from "react-redux";
import {setCart, setCompressionCart, setCountProduct} from "../../../store/AuthSlice";

const PageCart = () => {

    const {cart, compressionCart} = useSelector(state => state.authReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        AxiosClient.post('/getInfoCart')
            .then((res) => {
                dispatch(setCart(res.data))
            })
        AxiosClient.post('/comparisonCart')
            .then((res) => {
                console.log(res.data)
                dispatch(setCompressionCart(res.data))
            })
    }, []);

    console.log()

    function clearCart() {
        AxiosClient.post('/deleteAllProductInCart')
            .then((res) => {
                AxiosClient.post('/getInfoCart')
                    .then((res) => {
                        dispatch(setCart(res.data))
                    })
                AxiosClient.post('/CountProductInCart')
                    .then(
                        (res) => {
                            dispatch(setCountProduct(res.data))
                        }
                    )
            })
    }

    return (
        <div className='page_content'>
            <div className='cart_content'>
                <div className="cart_content_products">
                    <div className="cart_content_products_header">
                        <span className='cart_content_products_header_name'>
                            Корзина
                        </span>
                        <span className='cart_content_products_header_weight'>
                            Вес корзины {cart?.weight?.toFixed(2)} кг
                        </span>
                        {
                            cart.products?.length > 0 && <button onClick={() => clearCart()}>Очистить корзину</button>
                        }
                    </div>
                    <div className="cart_content_products-products">
                        {
                            cart.products?.map((product) => (
                                <ItemProductsCart
                                    key={product.id}
                                    image={product.image}
                                    name={product.name_product}
                                    weight={product.weight}
                                    count={product.cart_product.filter(item  => item.cart_id === cart.cart)[0].count}
                                    id={product.id}/>
                            ))
                        }

                    </div>
                </div>
                <div className="cart_content_shops">
                    <div className="cart_content_shops_header">
                        <span className='cart_content_shops_header_name'>
                            Магазины для приобретения
                        </span>

                    </div>
                    <div className="cart_content_shops-shops">
                        {
                            compressionCart?.map(cart => (
                                <ItemShopsCart price={cart.summ}
                                               name={cart.name_shop}
                                               image={cart.logo_shop}
                                               products={cart.products}
                                               noProducts={cart.no_products}
                                               analog={cart.analog}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageCart;
