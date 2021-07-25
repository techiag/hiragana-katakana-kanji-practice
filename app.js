var hiragana_dict = {
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
    // Currently empty object, find right kanji for the course
}

const form = document.getElementById('practice-form');

    form.addEventListener('submit', (event) => {
        const alphabetForm = form.elements['alphabet'];
        const orderForm = form.elements['order'];
        const setsForm = form.elements['sets'];

        var alphabet = alphabetForm.value;
        var order = orderForm.value;
        var sets = setsForm.value;

        console.log('');
        processForm(alphabet, order, sets);
    })

function processForm(alphabet, order, sets) {
    
    console.log("processing form....");
    document.getElementById('question-word-item').innerHTML = "sucess!";
    if (alphabet != "" && order != "" && sets != "") {
        switch(alphabet) {
            case "hiragana":
                console.log("Hiragana YAY!");
                console.log("code reached");
                document.getElementById('question-word-item').innerHTML = "ka";
                break;
            case "katakana":
                console.log("Katakana");
                break;
            case "kanji":
                console.log("Kanji");
                break;
        }
    }
}

function ordering(alphabet, order) {
    if (order == "random") {
        // Make new dictionary with 46 random keys and their corresponding values
    }
    else {
        return alphabet;
    }
}

function practiceHiragana(order, sets) {

}

function practiceKatakana(order, sets) {

}

function practiceKanji(order, sets) {

}