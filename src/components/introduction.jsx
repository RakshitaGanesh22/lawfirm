import "../App.css";
export default function Introduction(){
    return(
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"190px",paddingTop:"10rem",paddingBottom:"10rem"}}>
                <div className="stylepre">
                Let’s Introduce<br/>
                Ourself
                </div>
            <div style={{borderLeft:"1px solid #6A6A6A",paddingLeft:"7rem",textAlign:"start"}}>
                <div className="Criminal">Criminal Lawyer</div>
                    <div className="elements">
                        <div>Amet minim mollit non deserunt ullamco est</div>
                        <div>sit aliqua dolor do amet sint. Velit officia consequatduis</div>
                        <div>enim velit mollit Exercitation.</div>
                    </div>
            </div>
        </div>
    )
}