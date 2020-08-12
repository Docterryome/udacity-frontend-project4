import { printData } from '../client/js/checkStatement';
import { postData } from '../client/js/checkStatement';
import { urlValidation } from '../client/js/urlValidation';


test('Testing priting data', () => {
    document.body.innerHTML = `
    <main>
        <section class="form-section">
            <form class="blog-entry" onsubmit="return Client.checkStatement(event)">
                <input id="name" type="text" name="input" value="" placeholder="Enter Text">            
                <button onclick="return Client.checkStatement(event)">Click Me please</button>
            </form>
        <section>

        <section class="form-results">
            <strong>Form Results:</strong>
            <div id="results"></div>
        </section>
    </main>`

    printData({input: "Testing Input"}, {
        text: 'Hello',
        language: 'en',
        categories: [
          {
            label: 'religious festival or holiday - easter',
            code: '12014002',
            confidence: 0.54
          }
        ]
      });

      expect(document.querySelector('#results').innerHTML).toEqual(`<p>Text Data: Testing Input</p><p>Label: religious festival or holiday - easter</p>`);
});