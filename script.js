

function init() {
    console.log("start");

    dictionary.forEach(create_element);

}


function create_element(word) {
    // Create Container
    let word_box = document.createElement("div");
    word_box.id = word["Cceona"];
    word_box.classList.add("word_box");
    document.getElementById("dictionary_box").appendChild(word_box);

    // Cceona
    let cceona = document.createElement("p");
    cceona.innerHTML = word["Cceona"];
    cceona.classList.add("cceona_word");
    word_box.appendChild(cceona);

    // Pronounciation
    let pronounciation = document.createElement("p");
    pronounciation.innerHTML = word["Pronounciation"];
    pronounciation.classList.add("pronounciation");
    word_box.appendChild(pronounciation);
    
    // English (long)
    let en_word = document.createElement("p");
    en_word.innerHTML = word["Long_EN"];
    en_word.classList.add("en_word");
    word_box.appendChild(en_word);

}
