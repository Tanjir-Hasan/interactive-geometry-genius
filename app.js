let serial = 0;
// 1st card
document.getElementById("card-one-btn").addEventListener("click", function () {
    const element = getTextElement("problem-one-title");
    const cardOneBase = document.getElementById("card-one-base").value;
    const cardOneHeight = document.getElementById("card-one-height").value;

    if (isNaN(cardOneBase) || isNaN(cardOneHeight) || cardOneBase <= 0 || cardOneHeight <= 0) {
        alert("Please provide a positive number");
    } else {
        const cardOneSum = parseFloat((0.5 * cardOneBase * cardOneHeight).toFixed(2));
        serial += 1;
    
        resultField(serial, element, cardOneSum);
    }
})

// 2nd card
document.getElementById("card-two-btn").addEventListener("click", function () {
    const element = getTextElement("problem-two-title");
    const cardTwoBase = document.getElementById("card-two-base").value;
    const cardTwoHeight = document.getElementById("card-two-height").value;

    if (isNaN(cardTwoBase) || isNaN(cardTwoHeight) || cardTwoBase <= 0 || cardTwoHeight <= 0) {
        alert("Please provide a positive number");
    } else {
        const cardTwoSum = parseFloat((cardTwoBase * cardTwoHeight).toFixed(2));
        serial += 1;
    
        resultField(serial, element, cardTwoSum);
    }
})

document.getElementById("card-id-one").addEventListener("mouseenter", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("card-id-one").style.background = "#" + randomColor;
})
document.getElementById("card-id-two").addEventListener("mouseenter", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("card-id-two").style.background = "#" + randomColor;
})
document.getElementById("card-id-three").addEventListener("mouseenter", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("card-id-three").style.background = "#" + randomColor;
})
document.getElementById("card-id-four").addEventListener("mouseenter", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("card-id-four").style.background = "#" + randomColor;
})
document.getElementById("card-id-five").addEventListener("mouseenter", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("card-id-five").style.background = "#" + randomColor;
})
document.getElementById("card-id-six").addEventListener("mouseenter", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("card-id-six").style.background = "#" + randomColor;
})