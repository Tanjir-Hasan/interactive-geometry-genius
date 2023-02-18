function getTextElement(id) {     
    const element = document.getElementById(id).innerText;
    return element;
}

function resultField(serial, title, problemResult) {
    const calculationField = document.getElementById("table-container");
    const li = document.createElement("li");
    li.innerHTML = `
    <div>
    ${serial}. 
    ${title}
    ${problemResult}cm<sup>2</sup>
     <button class="text-white bg-cyan-600 hover:bg-cyan-700 my-3 px-2 rounded-md">Convert to m<sup>2</sup></button>
    </div>
    `
    calculationField.appendChild(li);
}