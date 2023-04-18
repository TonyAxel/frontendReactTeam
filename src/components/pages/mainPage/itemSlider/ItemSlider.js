import React from 'react';

const ItemSlider = ({product, oldPrice, newPrice, shop, photo}) => {
    return (
        <div>
            <div className='item item_slider__product'>
                <div className="item_shop">{shop}</div>
                <img src={photo} alt=""/>
                <p className="name_product">{product.split(" ", 3).join(" ")}</p>
                <p className="old_price">{oldPrice}</p>
                <p className="new_price">{newPrice} ₽</p>
                <button>Добавить</button>
            </div>
        </div>
    );
};

export default ItemSlider;


