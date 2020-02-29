import React from "react"
import Arrow from "../assets/arrow-thin-right.svg"
import Credit from "../assets/credit.svg"
import Speed from "../assets/fast.svg"
import Rates from "../assets/rates.svg"
import Check from "../assets/checkmark-outline.svg"


export default () => (
<section className="feature01">
    <div className="container half-grid">
        <div className="sales-copy">
            <h2>We finance any type of equipment your business needs</h2>
            <p className="large">Headache free  financing so you can get back to what really matters, making money.</p>
            <div className="flexcenter">
            <a href="https://ben1238.typeform.com/to/PRIyZc" className="btn-large" target="_blank" rel="noopener noreferrer">Get Started <Arrow className="arrow"/></a>
            </div>
        </div>
        <div className="bullets">
            <div className="feature11">
                    <span className="feature01icon"><Credit className="credit"></Credit></span>
                   <div>
                       <h3>No Impact To Credit Score</h3>
                       <p>Place a feaure here you want to talk about. Couple of lines, couple of slam pigs.</p>
                    </div>
               </div>
            <div className="feature11">
                    <span className="feature01icon"><Speed className="speed"></Speed></span>
                   <div>
                       <h3>Unbelivably Fat Funding</h3>
                       <p>Place a feaure here you want to talk about. Couple of lines, couple of slam pigs.</p>
                    </div>
               </div>
               <div className="feature11">
                    <span className="feature01icon"><Rates className="rates"></Rates></span>
                   <div>
                       <h3>Competitive Commerical Rates</h3>
                       <p>Place a feaure here you want to talk about. Couple of lines, couple of slam pigs.</p>
                    </div>
               </div>
        </div>
    </div>
</section> 
)

