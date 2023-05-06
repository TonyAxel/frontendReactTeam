import React from 'react';
import ItemProductsCart from "./ItemProductsCart";
import ItemShopsCart from "./ItemShopsCart";

const PageCart = () => {
    return (
        <div className='page_content'>
            <div className='cart_content'>
                <div className="cart_content_products">
                    <div className="cart_content_products_header">
                        <span className='cart_content_products_header_name'>
                            Корзина
                        </span>
                        <span className='cart_content_products_header_weight'>
                            Вес корзины 3.5 кг
                        </span>

                        <button>Очистить корзину</button>
                    </div>
                    <div className="cart_content_products-products">
                        <ItemProductsCart/>
                        <ItemProductsCart/>
                        <ItemProductsCart/>
                        <ItemProductsCart/>
                        <ItemProductsCart/>
                        <ItemProductsCart/>
                        <ItemProductsCart/>
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
