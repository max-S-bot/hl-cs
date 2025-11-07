//global variables here: word, word array(s), guesses, guessedLetters
let alphabet = ["a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z"];
let words;
let eWords = [
    "cat", "dog", "sun", "bed", "hat", "car", "cup", "tree", "ball", "pen",
    "book", "bird", "fish", "door", "leaf", "star", "bell", "cake", "moon", "key",
    "chair", "hand", "road", "town", "park", "shoe", "coat", "tent", "swan", "kite",
    "apple", "house", "cloud", "chair", "clock", "bread", "shirt", "horse", "flower", "river"
  ];
let mWords = [
    "window", "guitar", "basket", "island", "jacket", "cloud", "music", "forest", 
    "mountain", "bicycle", "bubble", "candle", "flower", "castle", "galaxy", 
    "rocket", "pirate", "diamond", "picture", "concert", "bicycle", "waterfall",
    "village", "treasure", "airport", "rainbow", "theater", "mittens", "volcano",
    "tornado", "fountain", "juggler", "necklace", "scarecrow", "unicorn", "dessert"
  ];
let hWords = [
    "xylophone", "chrysanthemum", "encyclopedia", "pterodactyl", "kaleidoscope",
    "zephyr", "echelon", "fuchsia", "hyacinth", "quixotic", "zymurgy", "guillotine",
    "acquiesce", "chutzpah", "queueing", "syllogism", "phlebotomist", "knaidel",
    "serendipity", "schadenfreude", "czar", "myrrh", "quinoa", "karaoke", "chutzpah",
    "onomatopoeia", "palindrome", "pneumonia", "phalanges", "chutzpah", "zephyr"
  ];
let word;
let guesses;
let answer;
let letters;
let otherAnswer;
//event listeners for startGame and guessLetter
document.getElementById("easy").addEventListener("click", easy);
document.getElementById("medium").addEventListener("click", medium);
document.getElementById("hard").addEventListener("click", hard);
document.getElementById("easy").addEventListener("click", startGame);
document.getElementById("medium").addEventListener("click", startGame);
document.getElementById("hard").addEventListener("click", startGame);

function hard() {
    words = hWords;
    guesses=6;
}
function medium() {
    words = mWords;
    guesses=7;
}
function easy() {
    words = eWords;
    guesses=10;
}
//once at start of the game
function startGame() {
    /*
    - Reset the board, empty guessedLetters 
    - Set a word from words array into word - this line will 
    grab  a random element from your words array for you:
    word = words[Math.floor(Math.random() * (words.length-1))];
    */
    const dropdown = document.getElementById("guessedLetter");
    while (dropdown.options.length > 0) {
        dropdown.remove(0);
    }

    for (let elem of alphabet) {
        dropdown.options[dropdown.options.length] = new Option(elem, elem);
    }
    word = words[Math.floor(Math.random() * (words.length-1))];
    guesses=6;
    document.getElementById("numGuesses").innerHTML=guesses;
    letters="";
    answer="";
    otherAnswer="";
    for (let i=0; i<word.length; i++) {
        answer+="_ ";
    }
    document.getElementById("word").innerHTML=answer;
    document.getElementById("guessedLetters").innerHTML=letters
    document.getElementById("guessLetter").addEventListener("click", guessLetter);
    
    document.getElementById("img").src = "img/hangman7.jpg";
    
}
    
//at start and every time the user enters a guess
function printWord(guess) {
    /*
    Compare each letter in answer word to the letters in guessedLetters 
    using guessedLetters.indexOf(letter).  Use this to build the “_” 
    word with the correctly guessed letters filled in.
    there is a help video for this in classroom 
    */
    var right = 0;
    for (let i=0; i<word.length; i++) {
        var boole = false;
        
        if (word[i]==guess) {
            boole = true;
            right++;
            let temp=answer;
            if(right==1) {guesses++;}
            answer="";
            otherAnswer="";
            for (let k=0; k<word.length; k++) {
                
                if (k==i) {
                    answer+=guess+" ";
                    otherAnswer+=guess
                } else if (temp[2*k]==word[k]) {
                    answer+=word[k]+" ";
                    otherAnswer+=word[k];
                } else {
                    answer+="_ ";
                }
            }

        }
        

    }
    if (!boole) {
        document.getElementById("img").src = "img/hangman"+(guesses+1)+".jpg";
    }
    document.getElementById("guessedLetters").innerHTML = answer;
    return word==otherAnswer;
}

//every time the user enters a guess
function guessLetter() {
    /*
    Manage the game: Add letters to guessedLetters, call printWord, 
    deduct from guesses, check for a win or loss.
    */
    
    let guess=document.getElementById("guessedLetter").value;
    var x = document.getElementById("guessedLetter");
    x.remove(x.selectedIndex);
    guesses--;
    bool = printWord(guess);
    document.getElementById("numGuesses").innerHTML=guesses;
    document.getElementById("word").innerHTML=answer;
    if(letters=="") {
        letters+=guess;
    } else {
        letters+=", "+guess;
    }
    document.getElementById("guessedLetters").innerHTML = letters;
    if ((!bool)&&(guesses==0)) {
        answer=word;
        document.getElementById("numGuesses").innerHTML="No More Guesses! The word was "+word+".";
        document.getElementById("guessLetter").removeEventListener("click", guessLetter);
    }
    if (bool) {
        document.getElementById("numGuesses").innerHTML="You Got It!";
        document.getElementById("guessLetter").removeEventListener("click", guessLetter);
    }
}