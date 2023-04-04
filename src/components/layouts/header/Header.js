import ShopLogo2 from '../../../assets/images/ShopLogo2.png'

const Header = () => {

    const showMenuLeft = () => {
        document.documentElement.setAttribute('show-menu-left', 'true')
    }

    const showMenuAuth = () =>{
        document.documentElement.setAttribute('show-popup-auth', 'true');
    }

    return (
        <div className="header">
            <div className="header__left" >
                <div className="header__left_popup" onClick={() => showMenuLeft()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
                <img src={ShopLogo2} alt="img" className="header__left_img" width={50} height={40} />
                <div className="header__left_catalog" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-basket3" viewBox="0 0 20 20">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                    </svg>
                    <p>Каталог</p>
                </div>
                <div className='header__left_search'>
                    <input type="text" placeholder='Поиск продуктов' />
                    <button>Найти</button>
                </div>
            </div>
            <div className="header__right">
                <div className='header__right_cart'>
                    <div className='icon_cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#1B81BA" className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                        <div className="count_product">
                            <p className='count'>1</p>
                        </div>
                    </div>
                    <p className='label_cart'>
                        Корзина
                    </p>
                </div>
                <div className="header__right_map">
                    <div className='icon_map'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#1B81BA" className="bi bi-globe-americas" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                        </svg>
                    </div>
                    <p className='label_map'>
                        Тюмень
                    </p>
                </div>
                <div className="header__right_person" onClick={() => showMenuAuth()}>
                    <div className='icon_person'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#1B81BA" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>
                    <p className='label_person'>
                        Войти
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header;