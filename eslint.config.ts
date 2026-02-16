import { defineSoftonixEslintConfig } from '@softonix/eslint-config-vue'
import eslintAutoImport from './.eslintrc-auto-import.json'

export default defineSoftonixEslintConfig({
  autoImports: eslintAutoImport,
  ignores: {
    extend: [
      'dts/*.d.ts',
      'src/api/types/axios.d.ts'
    ]
  }
}).append({
  files: ['src/task-1-type-challenges/**/*.ts'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-object-type': 'off'
  }
})
