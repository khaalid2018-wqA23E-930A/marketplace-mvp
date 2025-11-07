const fs = require('fs');
const postcss = require('postcss');
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

const input = './src/styles/tailwind.css';
const output = './dist/styles.css';

(async () => {
    try {
        const css = fs.readFileSync(input, 'utf8');
        const result = await postcss([tailwindcss('./tailwind.config.cjs'), autoprefixer])
            .process(css, { from: input, to: output });
        fs.mkdirSync('dist', { recursive: true });
        fs.writeFileSync(output, result.css);
        if (result.map) fs.writeFileSync(output + '.map', result.map.toString());
        console.log('Built', output);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
