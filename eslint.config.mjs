import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import js from '@eslint/js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended
})

const config = [
    {
        ignores: [
            'node_modules',
            'dist',
            '.idea',
            'eslint.config.mjs',
            'postcss.config.mjs',
            'vite.config.ts'
        ]
    },

    ...compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ),

    {
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                browser: true,
                es2020: true
            },
            parserOptions: {
                warnOnUnsupportedTypeScriptVersion: false
            }
        },
        plugins: {
            '@typescript-eslint': eslintPluginTypescript,
            'react': eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            'react-refresh': eslintPluginReactRefresh,
            'simple-import-sort': eslintPluginSimpleImportSort
        },
        rules: {
            // Rules from .eslintrc.cjs
            'no-empty-pattern': 'off',
            'react-refresh/only-export-components': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',

            // Additional rules from eslint.config.mjs
            '@typescript-eslint/no-unused-expressions': 'error',
            'react/no-unescaped-entities': 'warn',

            // Import sorting rules
            'simple-import-sort/imports': ['warn', {
                groups: [
                    // 1. React imports (always first)
                    ['^react$', '^react-dom$'],

                    // 2. Third-party packages (not starting with @ or .)
                    ['^[^@.]'],

                    // 3. Third-party @-scoped packages
                    ['^@(?!/)'],

                    // 4. Custom imports (@/*) - grouped by subdirectory
                    ['^@/types'],
                    ['^@/components'],
                    ['^@/hooks'],
                    ['^@/lib'],
                    ['^@/utils'],
                    ['^@/services'],
                    ['^@/constants'],
                    ['^@/config'],
                    ['^@/context'],
                    ['^@/handlers'],
                    ['^@/pages'],
                    ['^@/'],

                    // 5. Relative imports (parent directories)
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

                    // 6. Relative imports (same directory)
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

                    // 7. Style imports (CSS files) - always last
                    ['^.+\\.css$']
                ]
            }],
            'simple-import-sort/exports': 'warn'
        }
    }
]

export default config
