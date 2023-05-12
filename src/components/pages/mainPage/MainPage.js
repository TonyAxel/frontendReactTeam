import Slider from 'react-slick'
import ItemSlider from "./itemSlider/ItemSlider";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import AxiosClient from "../../../axiosClient/AxiosClient";
import {ClipLoader} from "react-spinners";
import {useSelector} from "react-redux";

const MainPage = () => {

    const [shops, setShops] = useState([]);
    const [discauntedPerecr, setDiscauntedPerecr] = useState([]);
    const [discauntedMagnit, setDiscauntedMagnit] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        AxiosClient.post('/shops')
            .then((res) => {
                setShops(res.data);
                setLoading(false)
            })
        AxiosClient.post('/discountedProduct')
            .then((res) => {
                setDiscauntedMagnit(res.data[0]);
                setDiscauntedPerecr(res.data[1]);
                setLoading(false)
            })
    }, [])

    return (<>
        <div className="page_content">
            <div className="content">
                <div className="card">
                    <div className="card_header">
                        <h2>Магазины</h2>
                    </div>
                    <div className="card_body">
                        <Slider
                            dots={true}
                            speed={1500}
                            slidesToShow={2}
                            slidesToScroll={1}
                        >
                            {
                                (shops || []).map((shop, key) => {
                                    return <Link key={shop.id} to={`/shop/${shop.id}/products`}>
                                        <div key={shop.id} className='item'><img
                                            src={shop.logo_shop}
                                            alt=""/>
                                        </div>
                                    </Link>
                                })
                            }

                        </Slider>
                    </div>
                </div>
                <div className="card">
                    <div className="card_header">
                        <h2>Акции магнит</h2>
                    </div>
                    <div className="card_body">
                        <Slider
                            dots={true}
                            speed={1500}
                            slidesToShow={5}
                            slidesToScroll={5}
                        >
                            {
                                (discauntedMagnit || []).map((product, key) => {
                                        return <ItemSlider key={product.id}
                                                           id={product.id}
                                                           product={product.name_product}
                                                           oldPrice={product.cost}
                                                           newPrice={product.discounted_cost}
                                                           shop={product.shop.name_shop}
                                                           photo={product.image}/>

                                })
                            }


                        </Slider>
                    </div>
                </div>
                <div className="card" style={{'marginTop': '10'}}>
                    <div className="card_header">
                        <h2>Акции перекресток</h2>
                    </div>
                    <div className="card_body">
                        <Slider
                            dots={true}
                            speed={1500}
                            slidesToShow={5}
                            slidesToScroll={5}
                        >
                            {
                                (discauntedPerecr || []).map((product) => {
                                        return <ItemSlider key={product.id}
                                                           id={product.id}
                                                           product={product.name_product}
                                                           oldPrice={product.cost}
                                                           newPrice={product.discounted_cost}
                                                           shop={product.shop.name_shop}
                                                           photo={product.image}/>

                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        {
            loading ?
                <div style={{
                    position: 'fixed',
                    backgroundColor: 'black',
                    width: '100%',
                    height: '100vh',
                    top: '0',
                    bottom: '0',
                    opacity: '0.3',
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ClipLoader
                        color={'#ffffff'}
                        loading={loading}
                        cssOverride={{
                            opacity: '1',
                            display: "flex",
                            borderColor: "red",
                            border: '5px solid',
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
                :
                null
        }
    </>)
}

export default MainPage;