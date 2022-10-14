// Select all tags on html
const contentArray = document.querySelectorAll('*');
// loop through contentArray and style backgroundColor

const startDarkMode = (array) => {
    array.forEach(element => {
        element.style.backgroundColor = "rgb(45, 45, 45)";
        element.style.color = 'rgb(201, 201, 201)';

    });
};

const colorOptions = [];

const checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener('change', (event) => {
    const { checked } = checkbox;
    toggleContent(checked);
    startDarkMode(contentArray);
    });


//declare a state variable 
// let state = false;
// chrome.browserAction.onClicked.addListener(function(tab) {
//     if(!state){
//         // startDarkMode(contentArray);
//         chrome.tabs.insertCSS(null, { file: "styles.css"})
//         state = !state;
//         return;
//     }
// })



// stretch goals - can adjust color / toggle on-off
