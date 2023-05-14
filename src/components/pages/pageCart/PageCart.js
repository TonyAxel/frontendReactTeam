import React, {useEffect, useState} from 'react';
import ItemProductsCart from "./ItemProductsCart";
import ItemShopsCart from "./ItemShopsCart";
import AxiosClient from "../../../axiosClient/AxiosClient";

const PageCart = () => {

    const [cart, setCart] = useState({
        products: []
    });

    useEffect(() => {
        AxiosClient.post('/getInfoCart')
            .then((res) => {
                setCart(res.data);
            })
    }, []);




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

                        <button>Очистить корзину</button>
                    </div>
                    <div className="cart_content_products-products">
                        {
                            cart.products.map((product) => (
                                <ItemProductsCart
                                    image={product.image}
                                    name={product.name_product}
                                    weight={product.weight}
                                    count={product.cart_product.filter(item  => item.cart_id === cart.cart)[0].count}/>
                            ))
                        }

                    </div>
                </div>
                <div className="cart_content_shops">
                    <div className="cart_content_shops_header">
                        <span className='cart_content_shops_header_name'>
                            Магазины для приобретения
                        </span>

                        <button>Проанализировать</button>
                    </div>
                    <div className="cart_content_shops-shops">
                        <ItemShopsCart/>
                        <ItemShopsCart/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageCart;
