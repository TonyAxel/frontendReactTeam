import React from 'react';
import {useParams} from "react-router-dom";
import ItemAllProducts from "./ItemAllProducts";
import {useState} from "react";
const PageShopAllProducts = () => {
    const {id} = useParams();


    return (
        <div className='page_content'>
            <div className="content_products">
                <div className="card_header">
                    <h2>Ашан</h2>
                </div>
                <div className="items_products">
                    <ItemAllProducts oldPrice={100} newPrice={''} name={"Яблоки"} photo={""}/>
                    <ItemAllProducts oldPrice={100} newPrice={90} name={"Яблоки"}/>
                    <ItemAllProducts oldPrice={100} newPrice={''} name={"Яблоки"}/>
                    <ItemAllProducts oldPrice={100} newPrice={90} name={"Яблоки"}/>
                    <ItemAllProducts oldPrice={100} newPrice={''} name={"Яблоки"}/>
                    <ItemAllProducts oldPrice={100} newPrice={90} name={"Яблоки"}/>
                    <ItemAllProducts oldPrice={100} newPrice={90} name={"Яблоки"}/>
                    <ItemAllProducts oldPrice={100} newPrice={90} name={"Яблоки"}/>
                    <ItemAllProducts oldPrice={100} newPrice={''} name={"Яблоки"}/>
                    <ItemAllProducts oldPrice={100} newPrice={90} name={"Яблоки"}/>
                    <ItemAllProducts oldPrice={100} newPrice={90} name={"Яблоки"}/>
                    <ItemAllProducts oldPrice={100} newPrice={''} name={"Яблоки"}/>
                </div>
            </div>
        </div>
    );
};

export default PageShopAllProducts;
