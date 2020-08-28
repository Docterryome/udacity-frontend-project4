
import { printData } from './checkStatement';
import { postData } from './checkStatement';

function checkUrl(event){
    const form = document.querySelector('.blog-entry-url');
    form.addEventListener('submit', addUrlData);
}

 const urlValidation =  (inputText, callback) => {
    const inputData = {input: inputText};
    callback("http://localhost:8081/classify-url", inputData).then(data =>{
        console.log(data);
        printData(inputData, data);
    });
};



function addUrlData(event) {
    event.preventDefault();
    const getInput = document.getElementById('text-url').value;
    urlValidation(getInput, postData);
}


export { urlValidation, checkUrl }
