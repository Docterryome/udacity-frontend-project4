
//Use the fetch command to get the input from the user and calculate the message
function checkStatement(event){
    const form = document.querySelector('.blog-entry');
    form.addEventListener('submit', displayData);
}

function displayData(event){
    event.preventDefault();
    const input = document.getElementById('name').value;
    const results = document.getElementById('results');
    const languageSystem = document.createDocumentFragment();
    const dataObj = { input }
    console.log(dataObj);
    postData('http://localhost:8080/entity', dataObj).then(data => {
        const p = document.createElement('p');
        p.innerHTML = `Text Data: ${data.text}`;
        languageSystem.appendChild(p);
        data.categories.forEach(element => {
            const label = document.createElement('p');
            label.innerHTML = `Label: ${element.label}`;
            languageSystem.appendChild(label);
        });
        console.log(data);
        results.appendChild(languageSystem);
    });
}

async function postData(url ='', data = {}){
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export { checkStatement }