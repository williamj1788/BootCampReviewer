var http = require('http');
var url = require('url');
var multiparty = require('multiparty');
var fs = require('fs');


var server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');

    var q = url.parse(req.url,true);
    var data = q.query;
    if(data.type === 'signup'){
        fs.readFile('Users.json', (err,content) => {
            if (err) throw err
            let form = new multiparty.Form();
            form.parse(req, function(err, fields, files) {
                var userDatabase = JSON.parse(content);
                let newUser = fields.signupUser[0];
                let newPass = fields.signupPass[0];
                var taken = false
                userDatabase.users.forEach(user => {
                    if(user.username === newUser){
                        taken = true;
                        res.end("Taken");
                    }
                });
                if(!taken){
                    let user = {
                        username: newUser,
                        password: newPass,
                    }
                    userDatabase.users.push(user);
                    fs.writeFile('Users.json', JSON.stringify(userDatabase,null,2), (error) => {
                        if (err) throw err;
                    })
                    res.writeHead(200, {'content-type': 'text/plain'});
                    res.end(newUser);  
                }
                
            }); 
        })
    }else if(data.type === 'login'){
        fs.readFile('Users.json', (err,content) => {
            if(err) throw err;
            let form = new multiparty.Form();
            form.parse(req, function(err, fields, files) {
                if(err) throw err;
                var userDatabase = JSON.parse(content);
                let newUser = fields.loginUser[0];
                let newPass = fields.loginPass[0];
                var found = false
                userDatabase.users.forEach(user => {
                    if(user.username === newUser && user.password === newPass){
                        found = true;
                        res.writeHead(200, {'content-type': 'text/plain'});
                        res.end(newUser);
                    }
                });
                if(!found){
                    res.writeHead(200, {'content-type': 'text/plain'});
                    res.end('not found');  
                }
                
            }); 
        })
    }else{
        res.end("we got nothing");
    }
    
    
});

var port = 8080;

server.listen(port);