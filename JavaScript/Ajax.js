
///   Fetch   \\\

let fetchBtn = document.getElementById('fetch');
fetchBtn.addEventListener('click', fetchHandler)

function fetchHandler()
{
    console.log('You have clicked the btn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // what to do on progress (optional)
    xhr.onprogress = function() {
        console.log('On Progress');
    }

    xhr.onreadystatechange = function() {
        console.log('Ready State is ', xhr.readyState);
    }

    // What to do when response is ready
    xhr.onload = function() {
        if(this.status === 200)
        {
            console.log(this.responseText);
        }
        else
        {
            console.log('Some error has occurred');
        }
    }

    // send the request
    xhr.send();

    console.log('we are done');  // this will shown before data is fetched cause of Asynchronous JS is True

}


///   Paste  \\\

let pasteBtn = document.getElementById('paste');
pasteBtn.addEventListener('click', pasteHandler)

function pasteHandler()
{
    console.log('You have clicked the btn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('POST', 'https://api.instantwebtools.net/v1/airlines', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    // what to do on progress (optional)
    xhr.onprogress = function() {
        console.log('On Progress');
    }

    xhr.onreadystatechange = function() {
        console.log('Ready State is ', xhr.readyState);
    }

    // What to do when response is ready
    xhr.onload = function() {
        if(this.status === 200)
        {
            console.log(this.responseText);
        }
        else
        {
            console.log('Some error has occurred');
        }
    }

    // send the request
    params = `{
        "id": 1388565,
        "name": "Sri Lankan Airways",
        "country": "Sri Lanka",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
        "slogan": "From Sri Lanka",
        "head_quaters": "Katunayake, Sri Lanka",
        "website": "www.srilankaairways.com",
        "established": "1990"
    }`;
    xhr.send(params);

    console.log('we are done');  // this will shown before data is fetched cause of Asynchronous JS is True

}


///   Fetch and Paste on the website   \\\

let fpBtn = document.getElementById('fandp');
fpBtn.addEventListener('click', fpHandler)

function fpHandler()
{
    console.log('You have clicked the Pop handler btn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);


    // What to do when response is ready
    xhr.onload = function() {
        if(this.status === 200)
        {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for(key in obj)
            {
                str += `<li>${obj[key].userId}</li>`;
            }
            list.innerHTML = str;
        }
        else
        {
            console.log('Some error has occurred');
        }
    }

    // send the request
    xhr.send();

    console.log('We are done fetching Employees');  // this will shown before data is fetched cause of Asynchronous JS is True

}