module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018, 
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-inferrable-types": 0,
    }
}
