
//Use the fetch command to get the input from the user and calculate the message
async function checkStatement(input){
    const results = document.getElementById('results');
    const languageSystem = document.createElement('p');
    console.log("What is the word?")
    await fetch("http://localhost:8080/entity").then(response => response.json())
    .then(data => {
        languageSystem.innerHTML = data;
        results.appendChild(languageSystem);
    });
}

export { checkStatement }