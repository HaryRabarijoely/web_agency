import React, {/* useContext */} from "react";
import { Link } from "react-router-dom";
import works from "../../data/works";
//import ThemeContext from "../../ThemeContext";




const Works = () => {    
    //const theme = useContext(ThemeContext);

    return (
        <>
            <h2> Au fil des années, nous avons pu accompagner les meilleurs.</h2>
            <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
            <div style={{textAlign: 'center'}}>
                {works.map((a, i) => {
                    return (
                    <Link to={`/works/${a.slug}-study-case`} id={i} className="links"> {a.name} </Link>
                    )
                })}
            </div>
        </>
    );
};

export default Works;