const fs = require('fs');

const content = 'JWT class went really well!!!';
    fs.writeFile('/Users/mk/Documents/private/GUVI/GUVIB46/node-file-rw/new.txt', content, err => {
        if(err) {
            console.log(error);
            return;
        }
    })

    