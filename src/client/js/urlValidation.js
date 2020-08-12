
import { printData } from './checkStatement';
import { postData } from './checkStatement';

function checkUrl(event){
    const form = document.querySelector('.blog-entry-url');
    form.addEventListener('submit', addUrlData);
}

const urlValidation = (inputText) => {
    const inputData = {input: inputText};
    postData("http://localhost:8080/classify-url", inputData).then(data =>{
        printData(inputData, data);
    });
};



function addUrlData(event) {
    event.preventDefault();
    const getInput = document.getElementById('text-url').value;
    urlValidation(getInput);
}


export { urlValidation, checkUrl }
