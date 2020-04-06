import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import jsonscript from 'react-syntax-highlighter/dist/esm/languages/prism/json';
const prismjs = require('prismjs/components/prism-core');

export const SyntaxHighlighter = require('react-syntax-highlighter').PrismLight;
export const highlight = prismjs.highlight;

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('json', jsonscript);

export const tsxReactive = tsx;
export const jsxReactive = jsx;
export const typescriptReactive = typescript;
export const javascriptReactive = javascript;
export const jsonscriptReactive = jsonscript;