import { useState } from "react";
import './App.css';
import { data } from "./data";
import Slides from "./Slides";

function Home(){
    const [plants, setPlants] = useState(data);
    return(
        <div className="container">
            {plants.map((plant => {
                const {id, itemName, price, description, images} = plant;
                return(
                    <div key={id}>
                        <Slides imagesProp={images}/>
                        <h2>{itemName}</h2>
                        <h2>$ {price}</h2>
                        <p>{description}</p>
                    </div>
                )
            }))}

        </div>
    )
}
export default Home;