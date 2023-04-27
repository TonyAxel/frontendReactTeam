import React from 'react';
import {useState, useEffect} from "react";
import AxiosClient from "../../../axiosClient/AxiosClient";
import {Link} from "react-router-dom";

const CategoryProductPopupMenu = () => {

    const [categorySubcategory, setCategorySubcategory] = useState([]);
    const [showSubcategory, setShowSubcategory] = useState('');

    useEffect(() => {
        AxiosClient.post('/productCategoriesForMenu')
            .then(
                (res) => {
                    setCategorySubcategory(res.data);
                    setShowSubcategory(res.data[0].id)
                }
            )
    }, []);

    return (
        <div className="category_product">
            <div className="category">
                {
                    categorySubcategory.map((category) => {
                        return(
                            <Link to={`/category/${category.id}/products`} key={category.id} onMouseEnter={() => setShowSubcategory(category.id)}>
                                {category.name_category}
                            </Link>
                        )

                    })
                }

            </div>
            <div className="subcategory">
                {
                    categorySubcategory.map((category) => {
                        if (category.id === showSubcategory)
                            return category.sub_categories.map((subCategory) => {
                                return(
                                    <Link to={`/subcategory/${subCategory.id}/products`} key={subCategory.id}>
                                        {
                                            subCategory.name_subcategory
                                        }
                                    </Link>
                                )
                            })
                        else {
                            return null
                        }
                    })
                }
            </div>
        </div>
    );
};

export default CategoryProductPopupMenu;
