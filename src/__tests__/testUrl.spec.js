
import { urlValidation } from '../client/js/urlValidation';
import { printData } from '../client/js/checkStatement';


test('Testing url Validation', async () => {

    document.body.innerHTML = `
    <body>

    <header>
        <div class="log">
            Logo
        </div>
        <div class="title">
            Title
        </div>
        <div class="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li> <a href="#">Body</a></li>
                <li><a href="#">Footer</a></li>
            </ul>
        </div>
    </header>

    <main>
        <section class="form-section">
            <form class="blog-entry-text" onsubmit="return Client.checkStatement(event)">
                <input id="text-input" type="text" name="input" value="" placeholder="Enter Text">            
                <button onclick="return Client.checkInput(event)">SubmitInput</button>
            </form>
            <form class="blog-entry-url">
                <input id="text-url" type="text" name="input" value="" placeholder="Enter Text">            
                <button onclick="return Client.checkUrl(event)">SubmitURL</button>
            </form>
        <section>

        <section class="form-results">
            <strong>Form Results:</strong>
            <div id="results"></div>
        </section>
    </main>

    <footer>
        <p>This is a footer</p>
    </footer>
</body>`

     const postData = (input1, input2) => { return Promise.resolve({
        text: 'Hello',
        language: 'en',
        categories: [
            {
            label: 'religious festival or holiday - easter',
            code: '12014002',
            confidence: 0.54
            }
        ]
        })
    };
     //postData.mockReturnValue(Promise.resolve(json))
    //jest.spyOn(global, 'postData').mockImplementation(() => mockFetchPromise);
    //postData.mockReturnValue(mockJsonResposne);
  
    //postData("https://localhost:8989/blah", {}).then( data => { console.log(`What is going on here! ${data.categories[0].label}`) } );

    await urlValidation('What is going on', postData);
    expect(document.querySelector('#results').innerHTML).toEqual(`<p>Text Data: What is going on</p><p>Label: religious festival or holiday - easter</p>`)
  });