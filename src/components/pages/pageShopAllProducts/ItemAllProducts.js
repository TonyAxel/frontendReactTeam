import React from 'react';
import classNames from "classnames";

const ItemAllProducts = ({name, oldPrice, newPrice}) => {

    const classes = classNames({
        'new_price_p_salle': newPrice !== '',
        'new_price_p': newPrice === ''
    })
    return (
        <div className="item_product">
            <div className="product_img">
                <img
                    src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614527202_135-p-yabloko-na-belom-fone-177.jpg"
                    alt=""/>
            </div>
            <p className="name_product">{name}</p>
            {
                newPrice !== '' ?
                    <div>
                        <p className="old_price_p">{oldPrice}</p>
                        <p className={classes}>{newPrice} ₽</p>
                    </div> :
                    <div>
                        <p className={classes}>{oldPrice} ₽</p>
                    </div>

            }
            <button>Добавить</button>
        </div>
    );
};

export default ItemAllProducts;
