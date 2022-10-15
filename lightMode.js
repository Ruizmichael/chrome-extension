(function () {
    // const contentArray = document.querySelector('*')
    document.querySelector("*").style.filter = "invert(0) hue-rotate(180deg)";

    console.log('darkmode on');
    // contentArray.forEach(element => {
    //     element.style.backgroundColor = "black";
    //     element.style.color = 'rgb(201, 201, 201)';

    // });
    document.querySelectorAll("img, picture, video").forEach(el => el.style.filter = "invert(0) hue-rotate(180deg)");
})()