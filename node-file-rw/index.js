const fs = require('fs');


fs.readFile('/Users/mk/Documents/private/GUVI/GUVIB46/node-file-rw/demo.txt', 'utf8', (err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})