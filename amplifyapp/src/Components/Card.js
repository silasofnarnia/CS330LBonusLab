import Modal from './Modal';
import getRules from './../data/rules.js';

function Card() {
    // Define rules. 
    let allRules = getRules();
    let Sounds = allRules.Sounds;
    let languageName = allRules.languageName;
    
    // Consonants
    let consonants = ``;
    let consonantArray = Sounds.Consonants;
    let consonantSoundsArray = Sounds.ConsonantSounds;
    for (let i = 0; i < consonantArray.length; i++) {
        consonants += `${consonantArray[i]} (${consonantSoundsArray[i]})\n`;
    }
    //consonants += `</ul>`;

    // Vowels
    let vowels = ``;
    let vowelsArray = Sounds.Vowels;
    let vowelSoundsArray = Sounds.VowelSounds;
    for (let i = 0; i < vowelsArray.length; i++) {
        vowels += `${vowelsArray[i]} (${vowelSoundsArray[i]})\n`;
    }
    //vowels += `</ul>`;

    // Phonotactics
    let Phonotactics = ``;
    let phonotacticsSyllablesArray = Sounds.Phonotactics.Syllables;
    for (let i = 0; i < phonotacticsSyllablesArray.length; i++) {
        Phonotactics += `${phonotacticsSyllablesArray[i]}\n`;
    }
    //Phonotactics += `</ul>`;
    //Phonotactics += `<p>`;
    Phonotactics += Sounds.Phonotactics.Words;
    //Phonotactics += `</p>`;

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