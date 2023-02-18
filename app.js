let serial = 0;
document.getElementById("card-one-btn").addEventListener("click", function () {
    const element = getTextElement("problem-one-title");
    const cardOneBase = document.getElementById("card-one-base").value;
    const cardOneHeight = document.getElementById("card-one-height").value;

    const cardOneSum = parseFloat((0.5 * cardOneBase * cardOneHeight).toFixed(2));
    serial += 1;

    resultField(serial, element, cardOneSum)
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