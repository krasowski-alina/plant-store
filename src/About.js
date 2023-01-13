import './App.css';
import kristi from "./kristi.jpg";
import video from "./my-collection.MP4";
function About(){
    return(
        <div className="about--container">
            <video autoPlay muted loop playsInline className="myVideo">
                <source src={video} type="video/MP4"/>
            </video>
            <h1>About</h1>
            <div className="container">
                <article className="article">
                    <img src={kristi} alt="Author" className="authorImg"/>
                    <div className="article-element">
                        <h4 className="phrase">"...If you love succulents like me, you're in the right place!"</h4>
                        <p className="about-text">Hi everyone! My name is Kristina.Welcome to the fascinating world of succulents! There are more than 150 types of succulents in my collection! You might ask... Why succulents?</p>
                        <ul className="list">
                            <li>Defined only by the water stored in their leaves, succulent plants offer a huge  variety of colors, textures, growth habits, and forms</li>
                            <li>Ease of propagation, drought tolerance, and low maintenance requirements make these plants the perfect choice for practically everyone.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    )
}
export default About;