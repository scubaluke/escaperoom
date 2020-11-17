const button = document.querySelector('.check')

function checkResult() {
    const feeling = document.querySelector('#feeling').value;
    if(feeling === 'fear') {
        document.querySelector('.correct').classList.add('show')
    }
console.log(feeling);
}

button.addEventListener('click', checkResult)