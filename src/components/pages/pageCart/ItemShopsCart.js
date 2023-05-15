import React from 'react';

const ItemShopsCart = ({price, products, noProducts}) => {
    return (
        <div className='cart_content_shops-shops_item'>
            <div className="cart_content_shops-shops_item-header">
                <div className="cart_content_shops-shops_item-header-logo_name">
                    <div className='logo'>
                        <img src="https://sun6-20.userapi.com/s/v1/if2/EXtogNqIzgOatw24Ik6NW8v7zcBB4Ovm_Qp5oiF37zWIg1Fn6Lsve6hBxCcCD2i38YSuOTJVMrB6Mi02WE2XheL7.jpg?size=1324x1324&quality=96&crop=46,46,1324,1324&ava=1" alt=""/>
                    </div>
                    <div className='name'>
                        <span>Пятерочка</span>
                    </div>
                </div>
                <div className="cart_content_shops-shops_item-header-price">
                    <span>Итого: {price} р</span>
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
                                <li>{product.name_product}</li>
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
                                <li>{product.name_product}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ItemShopsCart;
