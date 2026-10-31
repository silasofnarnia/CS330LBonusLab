import Modal from './Modal';

function Card() {
    return (
        <div id="threeCardsContainer" 
            style={{display: "flex", gap: 9 + 'rem', justifyContent: "center"}}>
            <div class="card" style={{width: 18 + 'rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#first">
                        Launch demo modal
                    </button>
                    {Modal("first")}
                </div>
            </div>
            <div class="card" style={{width: 18 + 'rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#second">
                        Launch demo modal
                    </button>
                    {Modal("second")}
                </div>
            </div>
            <div class="card" style={{width: 18 + 'rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#third">
                        Launch demo modal
                    </button>
                    {Modal("third")}
                </div>
            </div>
        </div>
    ); // End returning HTML for Card function. 
} // End function Card().

export default Card;