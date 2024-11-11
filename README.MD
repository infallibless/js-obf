# JS-OBF - JavaScript Obfuscator

JS-OBF is a simple yet effective JavaScript obfuscation tool designed to help protect your JavaScript code from unauthorized access, analysis, or tampering. This tool allows you to obfuscate your JavaScript code by reading configuration options from a JSON file, obfuscating the input JavaScript file, and then saving the obfuscated code to a new file.

## Features

- **Obfuscate JavaScript Code**: Easily obfuscate any JavaScript code.
- **Customizable Options**: Configure the obfuscation process using an external JSON file.
- **CLI-based**: Command-line interface for simplicity and flexibility.

## Requirements

- **Node.js**: This tool is built using Node.js. Make sure you have it installed on your system.
- **JavaScript Obfuscator**: The tool uses the `javascript-obfuscator` package to perform the obfuscation.

## Installation

To get started with JS-OBF, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/infallibless/js-obf.git
   cd js-obf
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

To obfuscate a JavaScript file, use the following command in the terminal:

```bash
node obfuscator.js <inputfile> <outputfile> <optionfile>
```

- `<inputfile>`: The JavaScript file you want to obfuscate. (default: `x.txt`)
- `<outputfile>`: The name of the obfuscated file to be generated. (default: `obf.js`)
- `<optionfile>`: The JSON configuration file that defines the obfuscation options. (default: `options.json`)

### Example

```bash
node obfuscator.js input.js obfuscated.js options.json
```

This will obfuscate `input.js` using the settings defined in `options.json` and save the result to `obfuscated.js`.

## Configuration (`options.json`)

You can customize the obfuscation behavior by defining various options in a `JSON` configuration file. Here’s an example of what the `options.json` file might look like:

```json
{
    "compact": true,
    "controlFlowFlattening": true,
    "controlFlowFlatteningThreshold": 1,
    "deadCodeInjection": true,
    "deadCodeInjectionThreshold": 0.4,
    "debugProtection": true,
    "debugProtectionInterval": 1000,
    "identifierNamesGenerator": "mangled",
    "identifierNamesBlacklist": ["pedo", "child"],
    "numbersToExpressions": true,
    "renameGlobals": false,
    "rotateStringArray": true,
    "stringArray": true,
    "stringArrayEncoding": ["base64"],
    "stringArrayThreshold": 0.75,
    "simplify": true,
    "selfDefending": true,
    "sourceMap": true,
    "sourceMapMode": "separate",
    "unicodeEscapeSequence": false
}
```

For more information on available options, refer to the [JavaScript Obfuscator documentation](https://github.com/javascript-obfuscator/javascript-obfuscator#options).

## Contribution

Feel free to contribute to this project! Open an issue or submit a pull request if you have any improvements, fixes, or ideas.

---

Happy coding and stay secure! 🎉
