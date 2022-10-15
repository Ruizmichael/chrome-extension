if (document.querySelector(".popup")) {
// Select all tags on html
    const contentArray = document.querySelectorAll('body');
    const button = document.querySelector('.switch');
    let buttonOn = false;


    
    if (!buttonOn) {
     button.addEventListener('click', () => {
         buttonOn = true;
            console.log('darkmode on')
            chrome.tabs.executeScript({
                file: 'darkMode.js'
            })
        })
    } else if (buttonOn) {
      button.addEventListener('click', () => {
         buttonOn = false;
         console.log('lightmode on')
         chrome.tabs.executeScript({
             file: 'lightMode.js'
         })
      })
    }
}




// stretch goals - can adjust color / toggle on-off
