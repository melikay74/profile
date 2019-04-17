document.getElementById('getjokes').addEventListener('click', getJokes);
document.getElementById('gj-cn').addEventListener('click', getCat);
document.getElementById('gj-sci').addEventListener('click', getCat);
document.getElementById('gj-dad').addEventListener('click', getCat);
document.getElementById('gj-tech').addEventListener('click', getCat);


function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `jokes.json`, true);
    xhr.onload = function() {
        if (this.status === 200) {
            const jokes = JSON.parse(this.responseText).slice(0, number);
            let output = '';

            jokes.forEach(function(joke) {
                output += `<li>${joke.joke} <br />Category: ${joke.category}</li>`
            })

            //insert joke into dom
            showJoke(output);
            if (number > jokes.length) {
                const message = "Sorry, more no jokes."
                document.querySelector('.message').textContent = message;
            }
        }
    }

    xhr.send();
    e.preventDefault();
}

function getCat(e) {
    const currcat = this.id;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `jokes.json`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const jokes = JSON.parse(this.responseText);
            let output = '';
            let cat = '';
            switch (currcat) {
                case 'gj-cn':
                    cat = 'Chuck Norris';
                    output = cat;
                    break;
                case 'gj-sci':
                    cat = 'Science'
                    output = cat;;
                    break;
                case 'gj-dad':
                    cat = 'Dad';
                    output = cat;
                    break;
                case 'gj-tech':
                    cat = 'Tech';
                    output = cat;
                    break;
            }

            jokes.forEach(function(joke) {
                if (cat === joke.category) {
                    output += `<li>${joke.joke}</li>`
                }

            })

            showJoke(output);
        }
    }

    xhr.send();
    e.preventDefault();
}

function showJoke(output) {
    document.querySelector('.jokes').innerHTML = output;
}