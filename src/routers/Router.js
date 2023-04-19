import Footer from "../components/layouts/footer/Footer";
import Header from "../components/layouts/header/Header";
import LeftPopupMenu from "../components/layouts/leftPopupMenu/LeftPopupMenu";
import PopupAuth from "../components/popup/popupAuth/PopupAuth";
import PopupRegister from "../components/popup/popupRegister/PopupRegister";
import CategoryProductPopupMenu from "../components/popup/categoryProductPopupMenu/CategoryProductPopupMenu";


const Router = ({children}) => {
    return(
        <div id={'main'} style={{margin: 'auto', position: 'relative', height: '100vh'}}>
            <Header/>
            <CategoryProductPopupMenu/>
            <LeftPopupMenu/>
            <PopupAuth/>
            <PopupRegister/>
                {children}
            {/*<Footer/>*/}
        </div>
    )
}

export default Router;