const fs = require('fs');

fs.writeFile("./text.txt", "Hello world", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created");
    }
});

fs.readFile("./text.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});