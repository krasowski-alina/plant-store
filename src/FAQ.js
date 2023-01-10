import video from "./my-collection.MP4";
function FAQ(){
    return(
        <div>
            <video autoPlay muted loop playsInline className="myVideo">
                <source src={video}/>
            </video>
        </div>
    )
}
export default FAQ;