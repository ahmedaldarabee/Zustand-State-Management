import tseslint from 'typescript-eslint'


export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // تعطيل كل القواعد
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
]);
