if (document.querySelector(".popup")) {
// Select all tags on html
    const contentArray = document.querySelectorAll('body');
    const button = document.querySelector('.switch');
    let buttonOn = false;


// loop through contentArray and style backgroundColor
// const startDarkMode = (array) => {
//     array.forEach(element => {
//         element.style.backgroundColor = "black";
//         element.style.color = 'rgb(201, 201, 201)';

//     });
// };

// const startLightMode = (array) => {
//     array.forEach(element => {
//         element.style.backgroundColor = 'rgb(201, 201, 201)';
//         element.style.color = 'black';

//     });
// };

button.addEventListener('click', () => {
    if (!buttonOn) {
        buttonOn = true;
        console.log('darkmode on')
        chrome.tabs.executeScript({
            file: 'darkMode.js'
        })
    } else {
        button = false;
        console.log('lightmode on')
        chrome.tabs.executeScript({
            file: 'lightMode.js'
        })
    }
})
}
// const checkbox = chrome.runtime.onInstalled.getElementById("myCheck");
// console.log(checkbox);
// checkbox.addEventListener('change', (event) => {
//     const checked  = checkbox;
//     toggleContent(checked);
//     startDarkMode(contentArray);
//     });


// declare a state variable 
// let state = false;
// chrome.browserAction.onClicked.addListener(function(tab) {
//     if(!state){
//         // startDarkMode(contentArray);
//         startDarkMode(contentArray);
//         state = !state;
//         return;
//     }
// })



// stretch goals - can adjust color / toggle on-off
