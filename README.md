# stylelint-formatter-markdown
Format your stylelint results as Markdown tables with helpful links!

## Example output

| rule | path | text |
| :--- | :--- | :--- |
| [color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex) | [test.css](https://github.com/stylelint-formatter-markdown/shawnbot/blob//test.css#L1) | Unexpected invalid hex color "#asldfkjas" (color-no-invalid-hex) |

## Install
```
npm install -D stylelint-formatter-markdown
```

## Usage
You've got two options:

1. Run the `stylelint` CLI with `--custom-formatter=node_modules/stylelint-formatter-markdown`.
2. Create your own `formatter.js` that looks like this:

    ```js
    // markdown-formatter.js
    module.exports = require('stylelint-formatter-markdown')
    ```

    And then run the `stylelint` CLI with `--custom-formatter=markdown-formatter.js`.
