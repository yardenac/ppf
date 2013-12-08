var form = document.querySelector('form#create');
var hyperquest = require('hyperquest');
var url = require('url');

form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var user = form.elements.user.value;
    var hq = hyperquest.post('/' + user + '/timeline.json');
    hq.end(JSON.stringify({
        text: form.elements.text.value,
        time: form.elements.time.value
    }));
});
