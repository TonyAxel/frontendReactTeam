import React from 'react';

const ItemSlider = ({product, oldPrice, newPrice, shop}) => {
    return (
        <div>
            <div className='item item_slider__product'>
                <div className="item_shop">{shop}</div>
                <img src="https://irecommend.ru/sites/default/files/product-images/2257062/DZ9FyUHkfg9rWk5R2UrZA.png" alt=""/>
                <p className="name_product">{product}</p>
                <p className="old_price">{oldPrice}</p>
                <p className="new_price">{newPrice} ₽</p>
                <button>Добавить</button>
            </div>
        </div>
    );
};

export default ItemSlider;


