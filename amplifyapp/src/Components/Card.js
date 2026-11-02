import Modal from './Modal';
import getRules from './../data/rules.js';

function Card() {
    // Define rules. 
    let allRules = getRules();
    let Sounds = allRules.Sounds;
    let languageName = allRules.languageName;
    
    // Consonants
    let consonantArray = Sounds.Consonants;
    let consonantSoundsArray = Sounds.ConsonantSounds;
    
    // Vowels
    let vowelsArray = Sounds.Vowels;
    let vowelSoundsArray = Sounds.VowelSounds;

    // Phonotactics
    let phonotacticsSyllablesArray = Sounds.Phonotactics.Syllables;
    
    // Return statement. 
    return (
        <div id="threeCardsContainer" 
            style={{display: "flex", gap: 9 + 'rem', justifyContent: "center"}}>
            {getCard(`Consonants`, `Sounds used in ${languageName}.`, consonantArray)}
            {getCard(`Vowels`, `Vowels used in ${languageName}.`, vowelsArray)}
            {getCard(`Phonotactics`, 
                `Unstated rules used in ${languageName}.`, 
                phonotacticsSyllablesArray)}
        </div>
    );
}

function getCard(title, sample, ModalContents) {
    //console.log("Want modal to respond to " + title);
    
    return (
        <div className="card" style={{width: 18 + 'rem'}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{sample}</p>
                <button type="button" 
                    className="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target={`#${title}`}>
                    Explore
                </button>
                {Modal(title, ModalContents)}
            </div>
        </div> 
    );
}

/*function Card() {
    
    // RETURN FINAL
    return (
        <div id="threeCardsContainer" 
            style={{display: "flex", gap: 9 + 'rem', justifyContent: "center"}}>
            <BuildCards/>
        </div>
    ); // End returning HTML for Card function. 

} // End function Card().*/

export default Card;