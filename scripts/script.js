

function init() {
    console.log("start");

    dictionary.forEach(create_element);
}


function create_element(word) {

    // Check to make sure the word exists
    if (!word["Cceona"]) { 
        return;
    }

    // Create Row
    let row = document.createElement("tr");
    row.id = word["Cceona"];
    let dictList = document.getElementById("dictionary");
    dictList.appendChild(row);

    // Cceona
    let cceona = document.createElement("td");
    cceona.innerHTML = word["Cceona"];
    cceona.classList.add("cceona_word");
    row.appendChild(cceona);

    // Pronounciation
    let pronounciation = document.createElement("td");
    pronounciation.innerHTML = word["Pronounciation"];
    pronounciation.classList.add("pronounciation");
    row.appendChild(pronounciation);
    
    // English (long)
    let en_word = document.createElement("td");
    en_word.innerHTML = word["Long_EN"];
    en_word.classList.add("en_word");
    row.appendChild(en_word);

}





