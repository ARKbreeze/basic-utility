import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const extensions = ['.js'];

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'baseUtility'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      extensions
    }),
    resolve(),
    commonjs(),
    terser()
  ]
};
