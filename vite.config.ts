import { defineConfig } from 'vitest/config'
import { alias } from './vitest.alias'

export default defineConfig({
  test: {
    // ...
    globals: true,
    // include: ['src/tests/*.{test,spec}.ts}'],
    exclude: ['database/**', '**/node_modules/**', '**/dist/**', 'coverage/**','.vscode/**', '.husky/**'],
    alias
  }
})
