import { useState } from "react";
import './App.css';
import { data } from "./data";
import FilterBtns from "./FilterBtns";
import Slides from "./Slides";

function Home(){
    const [plants, setPlants] = useState(data);
    const [condition, setCondition] = useState(false);

    const changeDescription = (plant) => {
        plant.showMore = !plant.showMore
        setCondition(!condition)
    }
    const filterPlants = (category) => {
    const newPlants = data.filter(plant => 
        plant.category === category)
    setPlants(newPlants)
    }
    return(
    <div className="home--backround">
    <h1>Find your favorite plant</h1>
       <FilterBtns filterPlants={filterPlants} data={data} setPlants={setPlants}/>
        <article className="container">
            {plants.map((plant => {
                const {id, itemName, price, description, images, showMore} = plant;
                return(
                    <div key={id} className="product-card">
                        <h2>{itemName}</h2>
                        <Slides imagesProp={images}/>
                        <div className="test">{price}</div>
                        <p className="description">{showMore? description : description.substring(0, 110)}
                        <button className="btnShowMore" onClick={()=> changeDescription(plant)}>{showMore? "...Show Less" : "...Show More"}</button>
                        </p>
                    </div>
                )
            }))}
        </article>
    </div>
    )
}
export default Home;