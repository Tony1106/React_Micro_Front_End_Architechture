import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import css from "rollup-plugin-import-css";
import dts from 'rollup-plugin-dts'

export default [{
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' },
    ],
    plugins: [
        css(),
        typescript(),
        // dts(),
        external(),
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
}, {
    input: pkg.source,
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts(),  css()],
  }];