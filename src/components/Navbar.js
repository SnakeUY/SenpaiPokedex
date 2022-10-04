import React from "react";

const Navbar = () =>{
    return (
        <nav> 
            <div className="title margins">
                 <div className="logo">
                    <img className="image-logo" src="/Sprites/Icons/Pokeball.png" alt="pokeball"/>
                 
                 <span className="text-title margins">
                    Pokédex
                 </span> </div> 
                 <div className="type-order">
                #<img src="/Sprites/Icons/Arrow.svg" alt="arrow"/>
                 </div>
            </div>
                  <div>
                  <input type="text" placeholder="&#xF002; Search"/>
                  </div>
        </nav>
    )
}
export default Navbar