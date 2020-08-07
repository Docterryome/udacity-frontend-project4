//Use the fetch command to get the input from the user and calculate the message
function checkStatement(event) {
    const form = document.querySelector('.blog-entry');
    form.addEventListener('submit', displayData);
}

function displayData(event) {
    event.preventDefault();
    const tohttp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    const input = document.getElementById('name').value;
    const dataObj = {
        input
    }
    console.log(dataObj);
    if (dataObj.input.match(tohttp)) {
        console.log("This is an http post!");
        postData('http://localhost:8080/classify-url', dataObj).then(data => printData(dataObj, data));
    } else {
        postData('http://localhost:8080/classify-text', dataObj).then(data => printData(dataObj, data));
    }
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

function printData(dataObj, data) {
    const results = document.getElementById('results');
    const languageSystem = document.createDocumentFragment();
    const p = document.createElement('p');
    p.innerHTML = `Text Data: ${dataObj.input}`;
    languageSystem.appendChild(p);
    if (data.categories.length == 0) {
        const label = document.createElement('p');
        label.innerHTML = `Label: None`;
        languageSystem.appendChild(label);
    } else {
        data.categories.forEach(element => {
            const label = document.createElement('p');
            label.innerHTML = `Label: ${element.label}`;
            languageSystem.appendChild(label);
        });
    }

    console.log(data);
    results.appendChild(languageSystem);

}


export {
    checkStatement,
    printData
}
