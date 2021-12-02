let keyCodeElem = document.querySelector('#keyCode')

let keyElem = document.querySelector('#key')

let codeElem = document.querySelector('#code')

let locationElem = document.querySelector('#location')

let infosElem = document.querySelector('#infos')

let asciiElem = document.querySelector('#ascii')

let whichElem = document.querySelector('#which')

let starterText = document.querySelector('#starter')

let descriptions = document.querySelector('.description')

document.body.addEventListener('keydown', function (event) {

    event.preventDefault();


    starterText.style.display = 'none'

    ascii.style.display = 'flex'

    infos.style.display = 'flex'

    let keyCodes = event.keyCode

    let locations = event.location

    let keys = event.key

    let codes = event.code

    keyCodeElem.innerHTML = keyCodes

    keyElem.innerHTML = keys

    locationElem.innerHTML = locations

    whichElem.innerHTML = keyCodes

    codeElem.innerHTML = codes

    document.title = keyCodes + ' KeyCode'

    // switch (locations) {

    //     case 0:
    //         descriptions.innerHTML = '0 (General keys)'
    //         break;

    //     case 1:
    //         descriptions.innerHTML = '(Left-side modifier keys)'
    //         break;

    //     case 2:
    //         descriptions.innerHTML = '(Right-side modifier keys)'
    //         break;

    //     case 3:
    //         descriptions.innerHTML = '(Numpad)'
    //         break;
    // }


})