
function FilterBtns({filterPlants}){
    return(
        <div className="btnContainer">
            <button className="filterBtn" onClick={()=> filterPlants("succulent")}>Succulents</button>
            <button className="filterBtn" onClick={()=> filterPlants("cactus")}>Cacti</button>
            <button className="filterBtn" onClick={()=> filterPlants("aloe")}>Aloe</button>
            <button className="filterBtn" onClick={()=> filterPlants("agave")}>Agaves</button>
            <button className="filterBtn" onClick={()=> filterPlants("lithops")}>Lithops</button>
            {/* <button className="filterBtn" onClick={()=> filterPlants(data)}>All</button> */}

        </div>
    )
}
export default FilterBtns;