import { useState } from "react";

function Slides({imagesProp}){
    const [photo, setPhoto] = useState(0);
    const prevBtn = () => {
        setPhoto((photo => {
            photo --;
            if(photo < 0){
                return imagesProp.length - 1
            }
        return photo
        }))
    
    }
    const nextBtn = () => {
        setPhoto(( photo => {
            photo ++
            if(photo > imagesProp.length - 1){
                photo = 0
            }
            return photo
        }))
    }
    return(
        <div>
            <div className="btnContainer">
                <img src={imagesProp[photo]} width="150px" alt="plant"/>
            </div>
            <div className="btnContainer">
                    <button onClick={prevBtn}>PREV</button>
                    <button onClick={nextBtn}>NEXT</button>
            </div>
        </div>
    )
}
export default Slides;