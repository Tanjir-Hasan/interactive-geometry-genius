function getTextElement(id) {     
    const element = document.getElementById(id).innerText;
    return element;
}

function resultField(serial, title, problemResult) {
    const calculationField = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${title}</td>
    <td>${problemResult}cm<sup>2</sup></td>
    <td><button class="text-white bg-cyan-600 hover:bg-cyan-700 w-full my-3 px-2 rounded-md">Convert to m<sup>2</sup></button></td>
    `
    calculationField.appendChild(tr);
}