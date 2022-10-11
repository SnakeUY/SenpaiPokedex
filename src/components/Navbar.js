import React from "react";

const Navbar = ({change,stateChange,search}) =>{
    return (
        <nav> 
            <div className="title margins">
                 <div className="logo">
                    <img className="image-logo" src="/Sprites/Icons/Pokeball.png" alt="pokeball"/>
                 
                 <span className="text-title margins">
                    Pokédex
                 </span> </div> 
                 <div className="type-order" onClick={() => change()}>
                 {(!stateChange)?
                    <>
                        #<img src="/Sprites/Icons/Arrow.svg" alt="arrow" className="arrowNav"/>
                    </>
                 :
                    <>
                        A<img src="/Sprites/Icons/Arrow.svg" alt="arrow" className="arrowNav"/>
                    </>
                }
                </div>
            </div>
                  <div className="searchBar">
                  <input type="text" placeholder="&#xF002; Buscar" className="FontAw" onChange={(e)=> search(e.target.value)}/>
                  </div>
        </nav>
    )
}
export default Navbar