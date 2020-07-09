
//Use the fetch command to get the input from the user and calculate the message
function checkStatement(event){
    const form = document.querySelector('.blog-entry');
    form.addEventListener('submit', displayData);
}

function displayData(event){
    event.preventDefault();
    const input = document.getElementById('name').value;
    const results = document.getElementById('results');
    const languageSystem = document.createElement('p');
    const dataObj = { input }
    console.log(dataObj);
    postData('http://localhost:8080/entity', dataObj).then(data => {
        languageSystem.innerHTML = data;
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