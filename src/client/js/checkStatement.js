//Use the fetch command to get the input from the user and calculate the message
function checkInput(event) {
    const form = document.querySelector('.blog-entry-text');
    form.addEventListener('submit', displayData);
}

function displayData(event) {
    event.preventDefault();
    const input = document.getElementById('text-input').value;
    const dataObj = {
        input
    }
    postData('http://localhost:8081/classify-text', dataObj).then(data => printData(dataObj, data));
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
    console.log(`Data: ${data} DataObj: ${dataObj}`);
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
            console.log(element);
            const label = document.createElement('p');
            label.innerHTML = `Label: ${element.label}`;
            languageSystem.appendChild(label);
            console.log(`${label.innerHTML}`);
        });
    }

    console.log(data);
    console.log(`Results: ${languageSystem.innerHTML}`);
    results.appendChild(languageSystem);

}


export {
    checkInput,
    postData,
    printData
}
