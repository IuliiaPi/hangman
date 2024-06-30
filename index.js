import keyboardData from "./keyboard.js";
import animalsList from "./animals-list.js";
import wordHintList from "./word-hint-list.js";

document.body.setAttribute('class', 'page');

const pageContainer = document.createElement('div');
pageContainer.className = 'page__container';
document.body.append(pageContainer);

const pageContent = document.createElement('div');
pageContent.className = 'page__content';
pageContainer.append(pageContent);

const title = document.createElement('h1');
title.textContent = 'Welcome to Hangman';
title.className = 'title';

const buttonShowInstructions = document.createElement('button');
buttonShowInstructions.className = 'btn button-show-instructions';
buttonShowInstructions.setAttribute('type', 'button');
buttonShowInstructions.textContent = 'Show Instructions';

// Add elements to the DOM
pageContent.append(title, buttonShowInstructions);

// popup Show Instructions

const popupShowInstructions = document.createElement('div');
popupShowInstructions.className = 'popup-show-instructions';
pageContent.append(popupShowInstructions);

const popupContainerShowInstructions = document.createElement('div');
popupContainerShowInstructions.className = 'popup-show-instructions__container';
popupShowInstructions.append(popupContainerShowInstructions);

const popupContentShowInstructions = document.createElement('div');
popupContentShowInstructions.className = 'popup-show-instructions__content';
popupContainerShowInstructions.append(popupContentShowInstructions);

const popupTitleShowInstructions = document.createElement('p');
popupTitleShowInstructions.className = 'popup-show-instructions__title';
popupTitleShowInstructions.textContent = `How to Play Hangman`;
popupContentShowInstructions.append(popupTitleShowInstructions);

const popupSubtitleShowInstructions = document.createElement('p');
popupSubtitleShowInstructions.className = 'popup-show-instructions__subtitle';
popupSubtitleShowInstructions.innerHTML = `
-   Guess the hidden word by choosing one letter at a time.
-   If you guess a letter in the hidden word, then it will show in the hidden word, and the letter will turn green on the keyboard.
-   If you guess a letter that is not in the hidden word, the letter will show red on the keyboard, and the hangman will build another stage of the gallows.
-   If the gallows are completed, you lose.`;
popupContentShowInstructions.append(popupSubtitleShowInstructions);

buttonShowInstructions.addEventListener('click', (e) => {
    popupShowInstructions.classList.toggle('_active');
    if (buttonShowInstructions.textContent === 'Show Instructions') {
        buttonShowInstructions.textContent = 'Hide Instructions';
    } else {
        buttonShowInstructions.textContent = 'Show Instructions';
    }
});

// 

const subtitle = document.createElement('p');
subtitle.innerHTML = `The hidden word is from the <span class="category">animals</span> category.`;
subtitle.className = 'subtitle';
pageContent.append(subtitle);

const hintText = document.createElement('p');
hintText.className = 'hint-text';
pageContent.append(hintText);

// hidden Word 

const hiddenWord = document.createElement('div');
hiddenWord.className = 'hidden-word';
pageContent.append(hiddenWord);

// gallows 

const gallows = document.createElement('div');
gallows.className = 'gallows';
pageContent.append(gallows);

const gallowsParts = document.createElement('div');
gallowsParts.className = 'gallows-parts';
gallows.append(gallowsParts);

const bodyParts = document.createElement('div');
bodyParts.className = 'body-parts';
gallows.append(bodyParts);

const gallowsPart1 = document.createElement('div');
gallowsPart1.className = 'gallows__part-1';
gallowsParts.append(gallowsPart1);

const gallowsPart4 = document.createElement('div');
gallowsPart4.className = 'gallows__part-4';
gallowsParts.append(gallowsPart4);

const gallowsPart2 = document.createElement('div');
gallowsPart2.className = 'gallows__part-2';
gallowsParts.append(gallowsPart2);

const gallowsPart3 = document.createElement('div');
gallowsPart3.className = 'gallows__part-3';
gallowsParts.append(gallowsPart3);

// counter 
const incorrectGuesses = 0;
const maxIncorrectGuesses = 6;

const displayCounter = document.createElement('div');
displayCounter.className = 'display-counter';
displayCounter.innerHTML = `${incorrectGuesses} / ${maxIncorrectGuesses}`;
gallows.append(displayCounter);

// body parts

const gallowsPart5 = document.createElement('div');
gallowsPart5.className = 'body-part body-part-head';
bodyParts.append(gallowsPart5);

const gallowsPart6 = document.createElement('div');
gallowsPart6.className = 'body-part body-part-body';
bodyParts.append(gallowsPart6);

const gallowsPart7 = document.createElement('div');
gallowsPart7.className = 'body-part body-part-left-arm';
bodyParts.append(gallowsPart7);

const gallowsPart8 = document.createElement('div');
gallowsPart8.className = 'body-part body-part-right-arm';
bodyParts.append(gallowsPart8);

const gallowsPart9 = document.createElement('div');
gallowsPart9.className = 'body-part body-part-left-leg';
bodyParts.append(gallowsPart9);

const gallowsPart10 = document.createElement('div');
gallowsPart10.className = 'body-part body-part-right-leg';
bodyParts.append(gallowsPart10);

// const buttonPlayAgain = document.createElement('button');
// buttonPlayAgain.className = 'btn button-play-again';
// buttonPlayAgain.setAttribute('type', 'button');
// buttonPlayAgain.innerHTML = 'Play again';
// pageContent.append(buttonPlayAgain);

// popup Game Over

const popup = document.createElement('div');
popup.className = 'popup';
document.body.append(popup);

const popupContainer = document.createElement('div');
popupContainer.className = 'popup__container';
popup.append(popupContainer);

const popupContent = document.createElement('div');
popupContent.className = 'popup__content';
popupContainer.append(popupContent);

const popupTitle = document.createElement('p');
popupTitle.className = 'popup__title';
popupTitle.innerHTML = 'Game Over!!';
popupContent.append(popupTitle);

const popupSubtitle = document.createElement('p');
popupSubtitle.className = 'popup__subtitle';
popupContent.append(popupSubtitle);

const buttonPlayAgain = document.createElement('button');
buttonPlayAgain.className = 'btn popup__button button-play-again';
buttonPlayAgain.setAttribute('type', 'button');
buttonPlayAgain.innerHTML = 'Play again';
popupContent.append(buttonPlayAgain);

//  keyboard

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
pageContent.append(keyboard);

keyboardData.forEach((row) => {
    const rows = document.createElement('div');
    rows.setAttribute('class', 'row');
    keyboard.append(rows);

    row.forEach((key) => {
        const buttonKey = document.createElement('button');
        buttonKey.className = 'btn button-key';
        buttonKey.setAttribute('type', 'button');
        buttonKey.innerHTML = key.text.en;
        rows.append(buttonKey);
    });
});

const buttonsKey = keyboard.querySelectorAll('.button-key');

// get Random Word 

// let playing = false;
let currentWord;
let wordArray;
let wordLength;
let currentImage;

const getRandomWord = () => {
    const { word, hint, image } = getRandomItem(wordHintList);
    currentWord = word;
    currentImage = image;
    hintText.innerHTML = hint;

    wordArray = currentWord.split(''); //  ['c', 'a', 't']
    wordLength = currentWord.length;

    getCellWord();
}

// let randomWord;
function getRandomItem(items) {
    // randomWord = items[Math.floor(Math.random() * items.length) + 1];
    // return randomWord;
    return items[Math.floor(Math.random() * items.length)];
}

// getRandomItem();

// function getWordNext() {
// if (randomWord === 8) {
//     randomWord = 1;
// } else {
//     randomWord++;
// }
// getRandomWord();
// }

const getCellWord = () => {
    wordArray.forEach((letter) => {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = letter;
        hiddenWord.append(cell);
    });
}
// getWordNext();
getRandomWord();

console.log(`The hidden word is "${currentWord.toLowerCase().split()}".`);

let cells = hiddenWord.querySelectorAll('.cell');

let counter;
counter = 0;

let counterOpenCell;
counterOpenCell = 0;

let counterLostLives;
counterLostLives = 0;

let counterKeyTrue;
counterKeyTrue = 0;

let counterKeyFalse;
counterKeyFalse = 0;

function play() {
    // playing = true;
    buttonsKey.forEach((key) => {
        key.addEventListener('click', (e) => {
            counter++;
            console.log(`counter Key-Click: ${counter}`);

            cells.forEach((cell) => {

                if (key.innerHTML === cell.innerHTML) {
                    cell.innerHTML = key.innerHTML;
                    cell.classList.add('_active');
                    key.classList.add('button-key_true');
                    key.setAttribute('disabled', 'disabled');

                    counterOpenCell++;
                    console.log(`counter Open Cell: ${counterOpenCell}`);

                    if (counterOpenCell === wordLength) {
                        cells.forEach((cell) => {
                            cell.classList.add('_win');
                        });
                        buttonsKey.forEach((key) => {
                            key.setAttribute('disabled', 'disabled');
                        });
                        gallows.classList.add('_win');
                        gallows.style.backgroundImage = `url(${currentImage})`;
                        gallowsParts.classList.add('_win');
                        bodyParts.classList.add('_win');
                        displayCounter.classList.add('_win');
                        setTimeout(() => {
                            popup.classList.add('_active');
                        }, 3000);
                        popupTitle.innerHTML = 'You Survived!';
                        popupTitle.classList.add('_win');
                        popupSubtitle.innerHTML = `
                        You found all <span class="accent-color counter-letters">${wordLength}</span> letters of the hidden word <span class="accent-color popup__hidden-word">${currentWord}</span>. <br>
                        (You lost <span class="accent-color counter-lost-lives">${counterKeyFalse - counterKeyTrue}</span> lives.)`;
                    }
                } else {
                    key.classList.add('button-key_false');
                    key.setAttribute('disabled', 'disabled');
                }
            });

            if (key.classList.contains('button-key_true')) {
                counterKeyTrue++;
            }
            console.log(`counter Key-True: ${counterKeyTrue}`);

            if (key.classList.contains('button-key_false')) {
                counterKeyFalse++;
                displayCounter.innerHTML = `${counterKeyFalse - counterKeyTrue} / ${maxIncorrectGuesses}`

                console.log(`counter Key-False: ${counterKeyFalse}`);
            }

            if ((counterKeyFalse - counterKeyTrue) === 1) {
                gallowsPart5.classList.add('_active');
            }
            if ((counterKeyFalse - counterKeyTrue) === 2) {
                gallowsPart6.classList.add('_active');
            }
            if ((counterKeyFalse - counterKeyTrue) === 3) {
                gallowsPart8.classList.add('_active');
            }
            if ((counterKeyFalse - counterKeyTrue) === 4) {
                gallowsPart7.classList.add('_active');
            }
            if ((counterKeyFalse - counterKeyTrue) === 5) {
                gallowsPart10.classList.add('_active');
            }
            if ((counterKeyFalse - counterKeyTrue) === 6) {
                gallowsPart9.classList.add('_active');

                buttonsKey.forEach((key) => {
                    key.setAttribute('disabled', 'disabled');
                });
                setTimeout(() => {
                    popup.classList.add('_active');
                }, 2000);
                popupTitle.innerHTML = 'You Lose!';
                popupTitle.classList.add('_lose');
                popupSubtitle.innerHTML = `
                You found <span class="accent-color counter-letters">${counterOpenCell}</span> letters of the hidden word <span class="accent-color popup__hidden-word">${currentWord}</span>. <br> 
                (You lost <span class="accent-color counter-lost-lives">${counterKeyFalse - counterKeyTrue}</span> lives.)`;
            }
        });
    });
}

window.addEventListener('load', play);
// play();

document.addEventListener('keydown', function (event) {

    counter++;
    console.log(`counter Physical-Key-Click: ${counter}`);

    cells.forEach((cell) => {
        if (event.key === cell.innerHTML) {
            // cell.innerHTML = key.innerHTML;
            cell.classList.add('_active');
            buttonsKey.forEach((virtualKey) => {
                if (event.key === virtualKey.innerHTML) {
                    virtualKey.classList.add('button-key_true');
                    virtualKey.setAttribute('disabled', 'disabled');
                    // if (virtualKey.getAttribute("disabled") === "disabled") {
                    //     event.preventDefault();
                    //     return false;
                    //   }
                    counterKeyTrue++;
                    // event.key.preventDefault();
                    // return false;
                }
                // if (virtualKey.classList.contains('button-key_true')) {
                //     counterKeyTrue++;
                // };
                console.log(`counter Key-True: ${counterKeyTrue}`);

            });

            counterOpenCell++;
            console.log(`counter Open Cell: ${counterOpenCell}`);

            if (counterOpenCell === wordLength) {
                cells.forEach((cell) => {
                    cell.classList.add('_win');
                });
                buttonsKey.forEach((key) => {
                    key.setAttribute('disabled', 'disabled');
                });
                gallows.classList.add('_win');
                gallows.style.backgroundImage = `url(${currentImage})`;
                gallowsParts.classList.add('_win');
                bodyParts.classList.add('_win');
                displayCounter.classList.add('_win');
                setTimeout(() => {
                    popup.classList.add('_active');
                }, 3000);
                popupTitle.innerHTML = 'You Survived!';
                popupTitle.classList.add('_win');
                popupSubtitle.innerHTML = `
                        You found all <span class="accent-color counter-letters">${wordLength}</span> letters of the hidden word <span class="accent-color popup__hidden-word">${currentWord}</span>. <br>
                        (You lost <span class="accent-color counter-lost-lives">${counter - counterKeyTrue}</span> lives.)`;
            }
        } else {
            buttonsKey.forEach((virtualKey) => {
                if (event.key === virtualKey.innerHTML) {
                    virtualKey.classList.add('button-key_false');
                    virtualKey.setAttribute('disabled', 'disabled');
                }

                if (virtualKey.classList.contains('button-key_false')) {
                    counterKeyFalse++;

                    // console.log(`counter Key-False: ${counterKeyFalse}`);
                }

            });
            displayCounter.innerHTML = `${counter - counterKeyTrue} / ${maxIncorrectGuesses}`

        }
        // document.addEventListener('keydown', function (event) {
        // event.preventDefault();
        // event.stopPropagation();
        // return false;
        // });

    });

    if ((counter - counterKeyTrue) === 1) {
        gallowsPart5.classList.add('_active');
    }
    if ((counter - counterKeyTrue) === 2) {
        gallowsPart6.classList.add('_active');
    }
    if ((counter - counterKeyTrue) === 3) {
        gallowsPart8.classList.add('_active');
    }
    if ((counter - counterKeyTrue) === 4) {
        gallowsPart7.classList.add('_active');
    }
    if ((counter - counterKeyTrue) === 5) {
        gallowsPart10.classList.add('_active');
    }
    if ((counter - counterKeyTrue) === 6) {
        gallowsPart9.classList.add('_active');

        buttonsKey.forEach((key) => {
            key.setAttribute('disabled', 'disabled');
        });
        setTimeout(() => {
            popup.classList.add('_active');
        }, 2000);
        popupTitle.innerHTML = 'You Lose!';
        popupTitle.classList.add('_lose');
        popupSubtitle.innerHTML = `
    You found <span class="accent-color counter-letters">${counterOpenCell}</span> letters of the hidden word <span class="accent-color popup__hidden-word">${currentWord}</span>. <br> 
    (You lost <span class="accent-color counter-lost-lives">${counter - counterKeyTrue}</span> lives.)`;
    }
});



// keyboard.addEventListener('keydown', event => {
//     console.log(`User pressed: ${event.key}`);

//     if (event.key === 'a' || event.key === 'b') {
//         event.preventDefault();
//         return false;
//     }
// });

function startNewGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('_active');
        cells[i].classList.remove('_win');
    }

    for (let i = 0; i < buttonsKey.length; i++) {
        // for (const button of buttons) {
        buttonsKey[i].classList.remove('button-key_true');
        buttonsKey[i].classList.remove('button-key_false');
        buttonsKey[i].removeAttribute('disabled');
    }
    popup.classList.remove('_active');

    document
        .querySelectorAll('.body-part')
        .forEach((part) => (part.classList.remove('_active')));

    gallows.classList.remove('_win');
    gallows.style.backgroundImage = 'none';
    gallowsParts.classList.remove('_win');
    bodyParts.classList.remove('_win');
    displayCounter.classList.remove('_win');
    counter = 0;
    counterOpenCell = 0;
    counterLostLives = 0;
    counterKeyTrue = 0;
    counterKeyFalse = 0;
    displayCounter.innerHTML = `${incorrectGuesses} / ${maxIncorrectGuesses}`;
    hiddenWord.innerHTML = '';
    getRandomWord();
    play();
}

buttonPlayAgain.addEventListener('click', (e) => {
    startNewGame();
    console.log(`The hidden word is "${currentWord.toLowerCase().split()}".`);
});

