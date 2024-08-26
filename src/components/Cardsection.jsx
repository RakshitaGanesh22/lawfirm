import "../App.css";
import * as React from 'react';
export default function Cardsection(){
    return(
        <div style={{paddingBottom:"10rem"}}>
            <div className="choosing">Why Choose us?</div>
            <div style={{display:"flex",justifyContent:"center",gap:"5rem"}}>
            <div className="card" style={{width: "18rem",background:"#111111"}}>
            <img className="card-img-top" src="https://img.cdnx.in/262794/1664699132235_SKU-0001_0.jpg?" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">100% Success Rate</h5>
            <p className="card-text">Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
            <a href="#" className="btn btn-primary" >Read More</a>
            </div>
            
        </div>
        <div className="card" style={{width: "18rem",background:"#111111"}}>
            <img className="card-img-top" src="https://img.cdnx.in/262794/1664699132235_SKU-0001_0.jpg?" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">100% Success Rate</h5>
            <p className="card-text">Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
            <a href="#" className="btn btn-primary" >Read More</a>
            </div>
            
        </div>
        <div className="card" style={{width: "18rem",background:"#111111"}}>
            <img className="card-img-top" src="https://img.cdnx.in/262794/1664699132235_SKU-0001_0.jpg?" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">100% Success Rate</h5>
            <p className="card-text">Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
            <a href="#" className="btn btn-primary" >Read More</a>
            </div>
            
        </div>
            </div>
        </div>
    )
}