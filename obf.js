const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');
const inputfile = process.argv[2] || 'x.txt';
const outputfile = process.argv[3] || 'obf.js';
const optionfile = process.argv[4] || 'options.json';

fs.readFile(optionfile, 'utf8', (err, data) => {
    if (err) { console.error(err);
        return;
    }

    let options;
    try {options = JSON.parse(data);
    } catch (error) {console.error(error);
        return;
    }

    fs.readFile(inputfile, 'utf8', (err, code) => {
        if (err) { console.error(err);
            return;
        }

        try {
            const obfcode = JavaScriptObfuscator.obfuscate(code, options).getObfuscatedCode();
            fs.writeFile(outputfile, obfcode, (err) => {
                if (err) { console.error(err);
                } else { console.log(`encryptedddddddddd -> ${outputfile}`);
                }
            });
        } catch (e4) {console.error(e4);
        }
    });
});
