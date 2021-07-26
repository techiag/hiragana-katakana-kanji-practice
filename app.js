/*
Hiragana Katakana Kanji Practice website
Created by Github user techiag
Date: 24.07.2021
Version: 1.0
*/

var hiragana_dict = {
    // All 46 principal characters of Hiragana
    "あ" : "a", 
    "い" : "i", 
    "う": "u", 
    "え" : "e", 
    "お": "o",
    "か" : "ka", 
    "き" : "ki", 
    "く" : "ku", 
    "け" : "ke", 
    "こ" : "ko",
    "さ" : "sa", 
    "し": "shi", 
    "す" : "su", 
    "せ" : "se", 
    "そ" : "so",
    "た" : "ta", 
    "ち" : "chi", 
    "つ" : "tsu", 
    "て" : "te", 
    "と" : "to",
    "な" : "na", 
    "に" : "ni", 
    "ぬ" : "nu", 
    "ね" : "ne", 
    "の" : "no",
    "は" : "ha", 
    "ひ" : "hi", 
    "ふ" : "fu", 
    "へ" : "he", 
    "ほ" : "ho",
    "ま" : "ma", 
    "み" : "mi", 
    "む" : "mu", 
    "め" : "me", 
    "も" : "mo",
    "や": "ya", 
    "ゆ": "yu", 
    "よ" : "yo",
    "ら" : "ra", 
    "り" : "ri", 
    "る" : "ru", 
    "れ" : "re", 
    "ろ" : "ro",
    "わ" : "wa", 
    "を" : "wo",
    "ん" : "n",
}

var katakana_dict = {
    // All 46 principal characters of Katakana
    "ア" : "a", 
    "イ" : "i", 
    "ウ" : "u", 
    "エ" : "e", 
    "オ" : "o",
    "カ" : "ka", 
    "キ" : "ki", 
    "ク" : "ku", 
    "ケ" : "ke", 
    "コ" : "ko",
    "サ" : "sa", 
    "シ" : "shi", 
    "ス" : "su", 
    "セ" : "se", 
    "ソ" : "so",
    "タ" : "ta", 
    "チ" : "chi", 
    "ツ" : "tsu", 
    "テ" : "te", 
    "ト" : "to",
    "ナ" : "na", 
    "ニ" : "ni", 
    "ヌ" : "nu", 
    "ネ" : "ne", 
    "ノ" : "no",
    "ハ" : "ha", 
    "ヒ": "hi", 
    "フ" : "fu", 
    "ヘ" : "he", 
    "ホ" : "ho",
    "マ" : "ma", 
    "ミ" : "mi", 
    "ム" : "mu", 
    "メ" : "me", 
    "モ" : "mo",
    "ヤ" : "ya", 
    "ユ" : "yu", 
    "ヨ" : "yo",
    "ラ" : "ra", 
    "リ" : "ri", 
    "ル" : "ru", 
    "レ" : "re", 
    "ロ" : "ro",
    "ワ" : "wa", 
    "ヲ" : "wo",
    "ン": "n",
}

var kanji_dict = {
    // Currently empty object, find the right kanji for the JAP0501 course
}

// Retrieve the correct form from the html document
const form = document.getElementById('practice-form');

    form.addEventListener('submit', (event) => {
        // Prevent the form from forcing page reload, because no server to conserve state
        event.preventDefault();

        // Retrieve the input values of the form
        const alphabetForm = form.elements['alphabet'];
        const orderForm = form.elements['order'];
        const setsForm = form.elements['sets'];

        // Get the exact value of each input
        var alphabet = alphabetForm.value;
        var order = orderForm.value;
        var sets = setsForm.value;

        console.log('Form values retrieved...');
        processForm(alphabet, order, sets);
    })

function processForm(alphabet, order, sets) {
    // Process the input values from the form
    console.log("Processing form....");

    // Create an empty dictionary that will be set later
    current_dict = {}

    // Make sure choice has been made for practice set, no empty values allowed
    if (alphabet != "" && order != "" && sets != "") {
        switch(alphabet) {
            case "hiragana":
                console.log("Alphabet: Hiragana");
                current_dict = hiragana_dict;
                break;
            case "katakana":
                console.log("Alphabet: Katakana");
                current_dict = katakana_dict;
                break;
            case "kanji":
                console.log("Alphabet: Kanji");
                current_dict = kanji_dict;
                break;
        }
    }

    practiceSet(current_dict, order, sets);
}

function order(alphabet, order) {
    // Orders an alphabet according to a specific requirement
    if (order == "random") {
        randomized_alphabet = {}
        // Make new dictionary with 46 random keys and their corresponding values
        return randomized_alphabet;
    }
    else {
        // Alphabet is already sorted alphabetically, so do nothing
        return alphabet;
    }
}

function practice(dictionary, order, sets) {
    // First iterate through number of sets wanted
    for (let i = 0; i < sets; i++) {
        // Then iterate through the elements in each practice set
        for (element in dictionary) {
            // Get the actual romanized equivalent of the Japanese letter
            var actualValue = dictionary[element]
            // Get the two other options from the pickRandomOptions help function
            randomOptionsArray = pickRandomOptions(dictionary);
            // Extract each of the options from the randomOptionsArray
            option1 = randomOptionsArray[0];
            option2 = randomOptionsArray[1];
        }
    }
}

function pickRandomOptions(dictionary) {
    // Help function to generate random romanized equivalents of Japanese letters
    // Do differently, with loop and append, and make sure to not get correct option as option again!
    var keys = Object.keys(dictionary);
    rndInt = Math.floor(Math.random() * Object.keys(dictionary).length);
    option1 = dictionary[keys[rndInt]];
    anotherRndInt = Math.floor(Math.random() * Object.keys(dictionary).length);
    option2 = dictionary[keys[rndInt]];
    return [option1, option2];
}

function comparer() {
    // Compares button press with which option is correct
}

function setButtonStrings(actualValue, option1, option2) {
    // Sets the string values of the three option buttons
    // Generate an offset to set the button strings with
    randomOffset = Math.floor(Math.random() * 3);
    // Create array from function parameters
    optionArray = [actualValue, option1, option2];
    randomizedOptionArray = []
    // Iterate as many times as there are elements in the optionArray
    for (let i = 0; i < length(optionArray); i++) {
        // Modulo 3 function to get correct item
        randomOffset = randomOffset % 3;
        // Push the desired item to the new randomizedOptionArray
        randomizedOptionArray.push(optionArray[randomOffset])
        //Increment randomOffset to get next element from optionArray
        randomOffset++;
    }

    // Set document buttons and make sure strings are set
    document.getElementById('button-1').innerHTML = randomOptionsArray[0].toString();
    document.getElementById('button-1').innerHTML = randomOptionsArray[1].toString();
    document.getElementById('button-1').innerHTML = randomOptionsArray[2].toString();
}

function setQuestionLetter(element) {
    // Sets the string value of the Japanese letter in question
    // Convert element's key to a string, how?
    document.getElementById('question-word-item').innerHTML = element.toString();
}

function practiceHiragana(order, sets) {

}

function practiceKatakana(order, sets) {

}

function practiceKanji(order, sets) {

}