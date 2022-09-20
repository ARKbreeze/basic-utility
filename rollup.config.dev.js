import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import pkg from './package.json';

const extensions = ['.js'];

export default {
  input: 'src/index.js',
  output: [
    {
      file: `./example/${pkg.main}`,
      format: 'umd',
      name: 'baseUtility',
      sourcemap: true
    },
    {
      file: `./example/${pkg.module}`,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      extensions
    }),
    resolve(),
    commonjs(),
    serve({
      open: true,
      openPage: '/',
      host: 'localhost',
      port: 3003,
      contentBase: ['./example']
    }),
    livereload({
      watch: ['./example'],
      exts: ['html', 'js', 'css']
    })
  ]
};
