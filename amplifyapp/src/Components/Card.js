import Modal from './Modal';
import getRules from './../data/rules.js';

function Card() {
    // Define rules. 
    let allRules = getRules();
    let Sounds = allRules.Sounds;
    let languageName = allRules.languageName;
    
    // Consonants
    let consonants = `<ul>`;
    let consonantArray = Sounds.Consonants;
    let consonantSoundsArray = Sounds.ConsonantSounds;
    for (let i = 0; i < consonantArray.length; i++) {
        consonants += `<li>${consonantArray[i]} (${consonantSoundsArray[i]})</li>`;
    }
    consonants += `</ul>`;

    // Vowels
    let vowels = `<ul>`;
    let vowelsArray = Sounds.Vowels;
    let vowelSoundsArray = Sounds.VowelSounds;
    for (let i = 0; i < vowelsArray.length; i++) {
        vowels += `<li>${vowelsArray[i]} (${vowelSoundsArray[i]})</li>`;
    }
    vowels += `</ul>`;

    // Phonotactics
    let Phonotactics = `<ul>`;
    let phonotacticsSyllablesArray = Sounds.Phonotactics.Syllables;
    for (let i = 0; i < phonotacticsSyllablesArray.length; i++) {
        Phonotactics += `<li>${phonotacticsSyllablesArray[i]}</li>`
    }
    Phonotactics += `</ul>`;
    Phonotactics += `<p>`;
    Phonotactics += Sounds.Phonotactics.Words;
    Phonotactics += `</p>`;

    // Return statement. 
    return (
        <div id="threeCardsContainer" 
            style={{display: "flex", gap: 9 + 'rem', justifyContent: "center"}}>
            {getCard(`Consonants`, `Sounds used in ${languageName}.`, consonants)}
            {getCard(`Vowels`, `Vowels used in ${languageName}.`, vowels)}
            {getCard(`Phonotactics`, 
                `Unstated rules used in ${languageName}.`, 
                Phonotactics)}
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