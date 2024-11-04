const fs = require('fs');

fs.readFile('../NODE JS/File_System/test.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
