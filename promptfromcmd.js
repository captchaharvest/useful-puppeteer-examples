var prompt = require("prompt");
prompt.start();
    var variable = await new Promise((resolve, reject) => {
        prompt.get(['value'], (error, result) => {
        resolve(result);
        });
    });
    var promptReturn = variable.value;