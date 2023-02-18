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

// 3rd card
document.getElementById("card-three-btn").addEventListener("click", function () {
    const element = getTextElement("problem-three-title");
    const cardThreeBase = document.getElementById("card-three-base").value;
    const cardThreeHeight = document.getElementById("card-three-height").value;

    if (isNaN(cardThreeBase) || isNaN(cardThreeHeight) || cardThreeBase <= 0 || cardThreeHeight <= 0) {
        alert("Please provide a positive number");
    } else {
        const cardThreeSum = parseFloat((cardThreeBase * cardThreeHeight).toFixed(2));
        serial += 1;
        resultField(serial, element, cardThreeSum);
    }
})

// 4th card
document.getElementById("card-four-btn").addEventListener("click", function () {
    const element = getTextElement("problem-four-title");
    const cardFourBase = document.getElementById("card-four-base").value;
    const cardFourHeight = document.getElementById("card-four-height").value;

    if (isNaN(cardFourBase) || isNaN(cardFourHeight) || cardFourBase <= 0 || cardFourHeight <= 0) {
        alert("Please provide a positive number");
    } else {
        const cardFourSum = parseFloat((cardFourBase * cardFourHeight).toFixed(2));
        serial += 1;
        resultField(serial, element, cardFourSum);
    }
})

// 5th card
document.getElementById("card-fifth-btn").addEventListener("click", function () {
    const element = getTextElement("problem-fifth-title");
    const cardFifthBase = document.getElementById("card-fifth-base").value;
    const cardFifthHeight = document.getElementById("card-fifth-height").value;

    if (isNaN(cardFifthBase) || isNaN(cardFifthHeight) || cardFifthBase <= 0 || cardFifthHeight <= 0) {
        alert("Please provide a positive number");
    } else {
        const cardFifthSum = parseFloat((cardFifthBase * cardFifthHeight).toFixed(2));
        serial += 1;
        resultField(serial, element, cardFifthSum);
    }
})

// 6th card
document.getElementById("card-six-btn").addEventListener("click", function () {
    const element = getTextElement("problem-six-title");
    const cardSixthBase = document.getElementById("card-six-base").value;
    const cardSixthHeight = document.getElementById("card-six-height").value;

    if (isNaN(cardSixthBase) || isNaN(cardSixthHeight) || cardSixthBase <= 0 || cardSixthHeight <= 0) {
        alert("Please provide a positive number");
    } else {
        const cardSixthSum = parseFloat((3.14 * cardSixthBase * cardSixthHeight).toFixed(2));
        serial += 1;
        resultField(serial, element, cardSixthSum);
    }
})

// Random Hover
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

// blog
document.getElementById("blog-btn").addEventListener('click', function () {
    window.location.href = 'blog.html';
})