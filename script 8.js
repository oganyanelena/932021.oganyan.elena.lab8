let elements = [];

function createNewElement() {
    const container = document.querySelector('.elements-container');
    const newElement = document.createElement('div');
    newElement.className = 'element';

    newElement.innerHTML = `
                <label>
                    <input type="text">
                </label>
                <label>
                    <input type="number">
                </label>
                <button onclick="upElement(this.parentNode)" value="up">↑</button>
                <button onclick="downElement(this.parentNode)" value="down">↓</button>
                <button onclick="deleteElement(this.parentNode)" value="delete">x</button>
            `;

    container.appendChild(newElement);
}

function printResults() {
    const result = {};
    document.querySelectorAll('.element').forEach((element) => {
        const label = element.querySelector('input[type="text"]').value;
        const number = element.querySelector('input[type="number"]').value;
        result[`${label}`] = `${number}`;
    });

    const resultOutput = document.querySelector('.result-output');
    resultOutput.textContent = JSON.stringify(result);
}

function upElement(element) {
    const previousElement = element.previousElementSibling;
    if (previousElement) {
        element.parentNode.insertBefore(element, previousElement);
        updateElementsArray();
    }
}

function downElement(element) {
    const nextElement = element.nextElementSibling;
    if (nextElement) {
        element.parentNode.insertBefore(nextElement, element);
        updateElementsArray();
    }
}

function deleteElement(element) {
    element.parentNode.removeChild(element);
}

function updateElementsArray() {
    elements = [];
    document.querySelectorAll('.element').forEach(element => {
        const label = element.querySelector('input[type="text"]').value;
        const number = element.querySelector('input[type="number"]').value;
        elements.push({ label, number });
    })
}

document.addEventListener('DOMContentLoaded', createNewElement);