import React from "react";

import "./Example.css"

import Navbar from "../Navbar";

import g2 from "../Group2.jpg"
import g3 from "../Group 3.png"
import g1 from "../Group 1 .png"

export default function Example(){
    return(
        <>
            <Navbar />
            <div id="example">
                <img className="example_group" src ={g2}/>
                <img className="example_group" src ={g3}/>
                <img className="example_group" src ={g1}/>

            </div>
        </>
    )
}