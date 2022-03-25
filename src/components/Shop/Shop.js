import { useEffect, useState } from 'react';
import Carriage from '../Carriage/Carriage';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);
    const [carriage, setCarriage] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ranga-store-api/main/ranga-api.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const addToCarriage = (item) => {
        const newCarriage = [...carriage, item];
        setCarriage(newCarriage);
    }
    return (
        <div className='container'>
            <div className="shop-container">

                {
                    items.map(item => <Product key={item.id} item={item} addToCarriage={addToCarriage} ></Product>)
                }
            </div>
            <div className="carriage-container">
                <Carriage carriage={carriage}></Carriage>
            </div>
        </div>
    );
};

export default Shop;