import languages from '../../../_data/languages.js'

//grab the first, second or third pipe..
let templates = {
  p1: 0,
  p2: 1,
  p3: 2,
  resize: 1, //https://en.wikipedia.org/wiki/Template:Resize
  lang: 1,
  'rtl-lang': 1,
  l: 2,
  h: 1, //https://en.wikipedia.org/wiki/Template:Hover_title
  sort: 1, //https://en.wikipedia.org/wiki/Template:Sort
}

//templates that we simply grab their insides as plaintext
let zeros = [
  'defn',
  'lino', //https://en.wikipedia.org/wiki/Template:Linum
  'finedetail', //https://en.wikipedia.org/wiki/Template:Finedetail
  'nobold',
  'noitalic',
  'nocaps',
  'vanchor', //https://en.wikipedia.org/wiki/Template:Visible_anchor
  'rnd',
  'date', //Explictly-set dates - https://en.wikipedia.org/wiki/Template:Date
  'taste',
  'monthname',
  'baseball secondary style',
  'lang-de',
  'nowrap',
  'nobr',
  'big',
  'cquote',
  'pull quote',
  'smaller',
  'midsize',
  'larger',
  'big',
  'kbd',
  'bigger',
  'large',
  'mono',
  'strongbad',
  'stronggood',
  'huge',
  'xt',
  'xt2',
  '!xt',
  'xtn',
  'xtd',
  'dc',
  'dcr',
  'mxt',
  '!mxt',
  'mxtn',
  'mxtd',
  'bxt',
  '!bxt',
  'bxtn',
  'bxtd',
  'delink', //https://en.wikipedia.org/wiki/Template:Delink
  'pre',
  'var',
  'mvar',
  'pre2',
  'code',
  'char',
  'angle bracket',
  'angbr',
  'symb',
  'key press', //needs work - https://en.m.wikipedia.org/wiki/Template:Key_press
]
zeros.forEach((k) => {
  templates[k] = 0
})

//https://en.wikipedia.org/wiki/Category:Lang-x_templates
Object.keys(languages).forEach((k) => {
  templates['lang-' + k] = 0
})

export default templates
