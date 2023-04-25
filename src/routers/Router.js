import Footer from "../components/layouts/footer/Footer";
import Header from "../components/layouts/header/Header";
import LeftPopupMenu from "../components/layouts/leftPopupMenu/LeftPopupMenu";
import PopupAuth from "../components/popup/popupAuth/PopupAuth";
import PopupRegister from "../components/popup/popupRegister/PopupRegister";
import CategoryProductPopupMenu from "../components/popup/categoryProductPopupMenu/CategoryProductPopupMenu";
import {StrictMode} from "react";


const Router = ({children}) => {
    return (
        <div id={'main'} style={{margin: 'auto', position: 'relative', height: '100vh'}}>
            <StrictMode>
                <Header/>
                <CategoryProductPopupMenu/>
                <LeftPopupMenu/>
            </StrictMode>
            <PopupAuth/>
            <PopupRegister/>
            <StrictMode>
                {children}
            </StrictMode>
            {/*<Footer/>*/}
        </div>
    )
}

export default Router;