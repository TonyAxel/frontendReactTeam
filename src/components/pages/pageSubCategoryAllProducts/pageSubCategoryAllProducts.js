import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import AxiosClient from "../../../axiosClient/AxiosClient";
import ItemAllProducts from "./ItemAllProducts";

const PageSubCategoryAllProducts = () => {
    const {id} = useParams();

    // const [count, setCount] = useState(10)
    const [SubCategory, setSubCategory] = useState([])

    useEffect(() => {
        AxiosClient.post(`/productsBySubcategory/${id}`)
            .then((res) => {
                setSubCategory(res.data[0])
                // console.log(res.data[0])
            })

    }, [id]);

    return (
        <div className='page_content'>
            <div className="content_products">

                <div className="card_header">
                    <h2>{SubCategory.name_subcategory}</h2>
                </div>

                <div className="items_products">
                    {
                        (SubCategory.products || []).map((product) => {
                            return <ItemAllProducts
                                key={product.id}
                                oldPrice={product.cost}
                                newPrice={product.discounted_cost === 0 ? '' : product.discounted_cost}
                                name={product.name_product.split(" ", 3).join(" ")}
                                photo={product.image}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default PageSubCategoryAllProducts;
