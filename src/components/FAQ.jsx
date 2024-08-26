import "../App.css";
export default function FAQ(){
    return(
        <div style={{display:"flex",justifyContent:"space-around",paddingBottom:"10rem"}}>
            <div className="wholeClass">
                <div className="FAQsection">FAQ</div>
                <div className="explain">Amet minim mollit non deserunt ullamco est sit<br/>
                aliqua dolor do amet sint. </div>
            </div>
            <div className="secondMain">
                <div>
                    <div className="need">Do I need a personal injury report?</div>
                    <div className="amet">Amet minim mollit non deserunt ullamco est sit<br/>
aliqua dolor do amet sint. Velit officia consequatduis<br/>
enim velit mollit Exer. Amet minim mollit non deserunt<br/>
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</div>
                    <hr style={{color:'white'}}/>
                </div>
                <div>
                <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How much is my case worth?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What should I do right after car accidect
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How much is my case worth?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    )
}