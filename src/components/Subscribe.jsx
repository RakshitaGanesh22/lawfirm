import "../App.css";
export default function Subscribe(){
    return(
        <div style={{display:"flex",justifyContent:"center",width:"100%",paddingBottom:"10rem"}}>
        <div className="subscribe">
            <div className="againstyle">
            <div className="news"> Subscribe Our Newsletter</div>
            <div style={{display:"flex",gap:"1rem"}}>
                <input type="text" placeholder="Name:" className="inputStyle"/>
                <input type="text" placeholder="Enter your Email" className="inputStyle"/>
                <button className="buttonstylee">SEND</button>
            </div>
            </div>
        </div>
        </div>
    )
}