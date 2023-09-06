// script.js
setTimeout(function() {
    document.getElementById('imagemDemorada').setAttribute('src', document.getElementById('imagemDemorada').getAttribute('data-delayed-src'));
}, 2000);

setTimeout(function() {
    document.getElementById('imagemDemorada2').setAttribute('src', document.getElementById('imagemDemorada2').getAttribute('data-delayed-src'));
}, 4000);
