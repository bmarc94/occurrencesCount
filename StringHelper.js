const StringHelperTest = {
    countEachWord: function(text) {
        let wordOccurrences = {};
        let wordsArray = text ? text.toLowerCase().split(/[^a-zÀ-ÿ-]+/g) : [];

        for (let i = 0, l = wordsArray.length; i < l; i++) {
            let word = wordsArray[i];

            if (word.length > 2) {
                wordOccurrences.hasOwnProperty(word) ? ++wordOccurrences[word] : wordOccurrences[word] = 1;
            }
        }
        console.log(wordOccurrences);
    }
}

/*Etape 2 premier Jet 15 minutes*/



/*
Etape 3 
Amélioration pour être utilisé avec des options

patern de regExp et ou une taille d'occurrence minimum
*/


const StringHelper = {
        /**
         * Compte les occurrence de chaque mot
         * @param {String} text
         * @param {Boolean} ignoreCase 
         * @param {Integer} occurrenceLength 
         * @param {regExp} RegExp 
         */
        countEachWord: function(text, ignoreCase, occurrenceLength, regExp) {
            let _occurrenceLength = occurrenceLength > 0 ? occurrenceLength : 0;
            let pattern = regExp ? this._checkRegExpThenReturn(regExp) : /[^a-zA-ZÀ-ÿ-]+/g;
            let wordArray = [];

            if (ignoreCase) {
                wordsArray = text ? text.toLowerCase().split(pattern) : [];
            } else {
                wordsArray = text ? text.split(pattern) : [];
            }

            /**
             * Déclare la fonction de l'existance d'une taille minimum
             * @param {Integer} minOccurenceLength 
             * @return {Function}
             */
            debugger;
            this.count = ((minOccurenceLength) => {

                if (minOccurenceLength) {
                    return (wordsArray, minOccurenceLength) => {
                        let wordOccurrences = {};
                        for (let i = 0, l = wordsArray.length; i < l; i++) {
                            let word = wordsArray[i];
                            if (word.length >= minOccurenceLength) {
                                wordOccurrences.hasOwnProperty(word) ? ++wordOccurrences[word] : wordOccurrences[word] = 1;
                            }
                        }
                        return wordOccurrences;
                    }
                } else {
                    return (wordsArray) => {
                        let wordOccurrences = {};
                        for (let i = 0, l = wordsArray.length; i < l; i++) {
                            let word = wordsArray[i];
                            wordOccurrences.hasOwnProperty(word) ? ++wordOccurrences[word] : wordOccurrences[word] = 1;
                        }
                        return wordOccurrences;
                    }
                }
            })(_occurrenceLength)

            return this.count(wordsArray, _occurrenceLength);

        },
        /**
         * Vérifie si c'est une regExp et la retourne le cas échéant
         * @param {Integer} regExp 
         * @return {regExp}
         */

        _checkRegExpThenReturn: function(regExp) {
            return regExp instanceof RegExp ? regExp : (() => {
                throw new Error('Bad RegExp Patern')
            })();
        }
    }
    /*45min sans les commentaires */