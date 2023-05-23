import React from 'react';

const ItemShopsCart = ({price, name, image, products, noProducts, analog}) => {
    return (
        <div className='cart_content_shops-shops_item'>
            <div className="cart_content_shops-shops_item-header">
                <div className="cart_content_shops-shops_item-header-logo_name">
                    <div className='logo'>
                        <img src={image} alt=""/>
                    </div>
                    <div className='name'>
                        <span>{name}</span>
                    </div>
                </div>
                <div className="cart_content_shops-shops_item-header-price">
                    <span>Итого: {price.toFixed(2)} р</span>
                </div>
            </div>
            <div className="cart_content_shops-shops_item-body">
                <div className='cart_content_shops-shops_item-body-count'>
                    <span>
                        В наличии:
                    </span> <br/>
                    <ul>
                        {
                            products.map((product) => (
                                <li>{product.name_product} <br/> <span>Цена: {product.discounted_cost > 0 ? product.discounted_cost : product.cost }</span></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="cart_content_shops-shops_item-body-no_count">
                    <span>
                        Отсутствует:
                    </span> <br/>
                    <ul>
                        {
                            noProducts?.map((product) => (
                                <li>{product.name_product} <br/> <span>Цена: {product.discounted_cost > 0 ? product.discounted_cost : product.cost }</span></li>
                            ))
                        }
                    </ul>
                </div>
                {
                    analog.length > 0 &&
                    <div className="cart_content_shops-shops_item-body-count" style={{marginTop: 10}}>
                        <span>
                            Аналоги:
                        </span> <br/>
                            <ul>
                                {
                                    analog?.map((product) => (
                                        <li>{product.name_product} <br/> <span>Цена: {product.discounted_cost > 0 ? product.discounted_cost : product.cost }</span></li>
                                    ))
                                }
                            </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default ItemShopsCart;
