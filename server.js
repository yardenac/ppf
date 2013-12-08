var http = require('http');
var level = require('level');
var db = level(__dirname + '/data', { encoding: 'json' });
var ecstatic = require('ecstatic')(__dirname + '/static');
var qs = require('querystring');
var dehumanize = require('dehumanize-date');
var lexi = require('lexicographic-integer');
var through = require('through');

var server = http.createServer(function (req, res) {
    var parts = req.url.split('?')[0].split('/').slice(1)
        .map(function (p) { return decodeURIComponent(p) })
    ;
    if (req.method === 'POST' && parts[1] === 'timeline.json') {
        req.pipe(concat(function (body) {
            try { var doc = JSON.parse(body) }
            catch (e) {
                res.statusCode = 400;
                return res.end(e.message + '\n');
            }
            if (!doc) {
                res.statusCode = 400;
                return res.end('unexpected document\n');
            }
            
            var t = String(doc.time).trim().toLowerCase() === 'now'
                ? new Date : dehumanize(doc.time)
            ;
            var user = parts[0];
            var key = user + '!' + lexi.pack(Math.floor(t / 1000));
            db.put(key, doc);
        });
    }
    else if (req.method === 'GET' && parts[1] === 'timeline.json') {
        res.setHeader('content-type', 'application/newline-delimited-json');
        var opts = {
            start: parts[0],
            end: parts[0] + '\uffff',
            encoding: 'utf8'
        };
        db.createReadStream(opts).pipe(through(function (row) {
            this.queue(row + '\n');
        })).pipe(res);
    }
    else ecstatic(req, res)
});
server.listen(process.env.PORT || 8000);
