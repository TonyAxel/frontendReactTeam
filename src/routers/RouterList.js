import MainPage from "../components/pages/mainPage/MainPage";
import PageShopAllProducts from "../components/pages/pageShopAllProducts/PageShopAllProducts";
import {Navigate} from "react-router-dom";
import PageCategoryAllProducts from "../components/pages/pageCategoryAllProducts/PageCategoryAllProducts";
import PageSubCategoryAllProducts from "../components/pages/pageSubCategoryAllProducts/pageSubCategoryAllProducts";
const publicRouters = [
    {path: '/', component: <MainPage/>},
    {path: '/shop/:id/products', component: <PageShopAllProducts/>},
    {path: '/category/:id/products', component: <PageCategoryAllProducts/>},
    {path: '/subcategory/:id/products', component: <PageSubCategoryAllProducts/>},
    {path: '*', component: <Navigate to={'/'}/>}
]

export {publicRouters};