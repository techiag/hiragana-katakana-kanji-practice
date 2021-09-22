/*
Hiragana Katakana Kanji Practice Website
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
    "一" : "ichi",
    "ニ" : "ni",
    "三" : "san",
    "四" : "yon",
    "五" : "go",
    "六" : "roku",
    "七" : "shichi",
    "八" : "hachi",
    "九" : "kyuu",
    "十" : "juu",
    "百" : "hyaku",
    "千" : "sen",
    "万" : "man",
    "円" : "en",
    "時" : "ji",
    "日" : "hi",
    "本" : "hon",
}

// Create an empty dictionary that will be set later
current_dict = {}

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

        // Make sure user feedback from last set isn't displayed
        userFeedback = document.getElementById('user-feedback')
        userFeedback.style.color = "white";

        // Make sure practice content shows after form submit
        document.getElementById('practice-content').style.display = "block";

        processForm(alphabet, order, sets);
    })

function processForm(alphabet, order, sets) {
    // Process the input values from the form
    console.log("Processing form....");

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
        switch(order) {
            case "random":
                // Randomize the apperance of characters
                current_dict = randomizeDictionary();
                break;
            case "alphabetical":
                // Do nothing, as current_dict is already ordered alphabetically
                break;
        }
    }

    setupFirstQuestionItem();
}

// Helper function that randomizes the order of a dictionary
function randomizeDictionary() {
    // Create empty object that will house the random key-value pairs
    randomized_alphabet = {}

    dictKeys = []
    dictValues = []

    dictKeys = Object.keys(current_dict);
    dictValues = Object.values(current_dict);

    oldRandomNumbers = [];

    // Make new dictionary with 46 random keys and their corresponding values
    for (let i = 0; i < Object.keys(current_dict).length; i++) {
        newRandomNumber = generateRandomNumber();
        // Make sure to not get duplicates (they will be removed in object)
        while (oldRandomNumbers.includes(newRandomNumber)) {
            newRandomNumber = generateRandomNumber();
        }
        oldRandomNumbers.push(newRandomNumber);

        randomKey = dictKeys[newRandomNumber];
        randomValue = dictValues[newRandomNumber];

        // Add the newRandomNumber'th entry of current_dict into the new dictionary
        randomized_alphabet[randomKey] = randomValue;
    }
    return randomized_alphabet;
}

// Help function to generate random number
function generateRandomNumber() {
    newRandomNumber = Math.floor(Math.random()*46)
    return newRandomNumber;
}

// Generate random romanized equivalents of Japanese letters
function pickRandomOptions() {
    var keys = Object.keys(current_dict);

    // Maybe take in actual value as parameter instead?
    actualValueInJapanese = document.getElementById('question-word-item').innerHTML;
    actualRomanizedValue = current_dict[keys[actualValueInJapanese]];

    rndInt = Math.floor(Math.random() * Object.keys(current_dict).length);
    option1 = current_dict[keys[rndInt]];

    option1 = pickRandomOptionsHelper(option1, actualRomanizedValue);

    anotherRndInt = Math.floor(Math.random() * Object.keys(current_dict).length);
    option2 = current_dict[keys[anotherRndInt]];

    option2 = pickRandomOptionsHelper(option2, actualRomanizedValue);
    console.log("Options: " + option1 + ", " + option2);
    return [option1, option2];
}

// Helper function that makes sure options are not the same as actual value
function pickRandomOptionsHelper(option, actualRomanizedValue) {
    while (option == actualRomanizedValue) {
        rndInt = Math.floor(Math.random() * Object.keys(current_dict).length);
        option = current_dict[keys[rndInt]];
    }
    return option;
}

// Compares button press with which option is correct
function comparer(btnValue) {
    actualValueInJapanese = document.getElementById('question-word-item').innerHTML;
    actualValue = current_dict[actualValueInJapanese];

    userFeedback = document.getElementById('user-feedback')

    if (btnValue == actualValue) {
        console.log("Correct");
        userFeedback.innerHTML = "Correct!";
        userFeedback.style.color = "green";
        setNextQuestionItem();
    }
    else {
        console.log("Wrong");
        userFeedback.innerHTML = "Wrong!";
        userFeedback.style.color = "red";
    }
}

// Helper function to determine which of the buttons are pressed
function compareBtn1() {
    btnValue = document.getElementById('button-1').innerHTML;
    comparer(btnValue);
}

// Helper function to determine which of the buttons are pressed
function compareBtn2() {
    btnValue = document.getElementById('button-2').innerHTML;
    comparer(btnValue);
}

// Helper function to determine which of the buttons are pressed
function compareBtn3() {
    btnValue = document.getElementById('button-3').innerHTML;
    comparer(btnValue);
}

// Set all the button strings correctly
function setButtonStrings(actualValue, option1, option2) {
    // Sets the string values of the three option buttons
    // Generate an offset to set the button strings with
    randomOffset = Math.floor(Math.random() * 3);
    // Create array from function parameters
    optionArray = [current_dict[actualValue], option1, option2];
    randomizedOptionsArray = []
    // Iterate as many times as there are elements in the optionArray
    for (let i = 0; i < optionArray.length; i++) {
        // Modulo 3 function to get correct item
        randomOffset = randomOffset % 3;
        // Push the desired item to the new randomizedOptionArray
        randomizedOptionsArray.push(optionArray[randomOffset])
        //Increment randomOffset to get next element from optionArray
        randomOffset++;
    }

    // Set document buttons and make sure strings are set
    document.getElementById('button-1').innerHTML = randomizedOptionsArray[0].toString();
    document.getElementById('button-2').innerHTML = randomizedOptionsArray[1].toString();
    document.getElementById('button-3').innerHTML = randomizedOptionsArray[2].toString();
}

function setQuestionLetter(letter) {
    // Sets the string value of the Japanese letter in question
    // Convert element's key to a string, how?
    document.getElementById('question-word-item').innerHTML = letter.toString();
}

// Increments the index for which element in current_dict to display
function incrementDictionaryIndex() {
    index = sessionStorage.getItem("index");
    index++;
    sessionStorage.setItem("index", index);
    console.log(index);
}

// Sets the correct letter at the start of a practice
function setupFirstQuestionItem() {
    questionItem = "";
    sessionStorage.setItem("index", 0);
    currentIndex = sessionStorage.getItem("index");
    keys = Object.keys(current_dict);
    questionItem = keys[currentIndex];
    setQuestionLetter(questionItem);
    options = pickRandomOptions();
    actualValue = document.getElementById('question-word-item').innerHTML.toString();
    console.log("Question word item: " + actualValue);
    setButtonStrings(actualValue, options[0], options[1]);

}

// Sets the next letter as part of the practice
function setNextQuestionItem() {
    incrementDictionaryIndex();
    if (sessionStorage.getItem("index") >= Object.keys(current_dict).length) {
        // Hide the practice content after set is finished
        document.getElementById('practice-content').style.display = "none";
    }
    else {
        questionItem = getKeyFromIndex();
        console.log("Question item: " + questionItem)
        setQuestionLetter(questionItem);
        options = pickRandomOptions();
        actualValue = document.getElementById('question-word-item').innerHTML.toString();
        setButtonStrings(actualValue, options[0], options[1]);
    }
}

// Helper function to get a key from an index saved in HTML sessionStorage
function getKeyFromIndex() {
    currentIndex = sessionStorage.getItem("index");
    keys = Object.keys(current_dict);
    questionItem = keys[currentIndex];
    console.log("getKeyfromIndex: " + questionItem);
    return questionItem;
}