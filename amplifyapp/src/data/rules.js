function getRules() {
    return {

        "languageName" : "This Language",
        
        "Sounds" : {

            "Consonants" : [
                "m", "p", "f", "b", 
                "t", "d", "z",
                "n", "s", "l", "r", "R",
                "c", "h", "y", 
                "k", "g", "x", "j"
            ],
            
            "ConsonantSounds" : [
                "m", "p", "f", "b",
                "t", "d", "th (soft)",
                "n", "s", "l", "r", "trilled r",
                "ch", "sh (soft)", "y (as in yew)",
                "k", "g", "gh", "stop"
            ],

            "Vowels" : [
                "e",  "u", "o" , "a" , "i" , "q" , "w"
            ],

            "VowelSounds" : [ 
                "ee", "uh", "oh", "oo", "ih", "eh", "oa" 
            ],
                
            "Phonotactics" : {
                "Syllables" : [
                    "Onset: Optional but very common. Unlimited sounds, not group 5, not vowels",
                    "Nucleus: Not optional. One vowel",
                    "Coda: Optional, but mildly uncommon. Not group 3"
                ],
                "Words" : "Often start with group 2 or 3. Often end with group 4 or 5"
            },

            "Stress" : {
                "OneSyllable" : [ "No stress" ],
                "TwoSyllables" : [ "Primary stress on syllable 2" ],
                "MoreThanTwoSyllables" : [
                    "Secondary stress on syllable 1",
                    "Primary stress on syllable 2",
                    "Then Secondary stress on every other syllable"
                ]
            },

            "Tone" : {
                "desc" : "This is not a tone based language."
            }

        }

    } // End object to return. 
} // End function.

export default getRules;
