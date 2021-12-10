module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "no-mixed-spaces-and-tabs": "error",
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false
        }],
        "import/no-unresolved": "off",
        "one-var": "off",
        "global-require": "off",
        "no-restricted-syntax": "off",
        "no-use-before-define": "off",
        "no-case-declarations": "off",
        "no-await-in-loop": "off",
        "guard-for-in": "off",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "off",
        "consistent-return": "off",
        "no-unsafe-negation": "error",
        "default-case": "off",
        "no-continue": "off",
        "block-scoped-var": "error",
        "no-plusplus": "off",
        "no-param-reassign": "off",
        "no-warning-comments": "warn",
        "one-var-declaration-per-line": "off",
        "vars-on-top": "error",
        "no-shadow": "error",
        "no-bitwise": "error",
    }
};