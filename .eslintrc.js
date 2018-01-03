module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "rules": {
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};