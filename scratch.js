import wtf from './src/index.js'
import plg from './plugins/i18n/src/index.js'
wtf.plugin(plg)
// let doc = await wtf.fetch('Toronto Raptors')
// let coach = doc.infobox().get('coach')
// coach.text() //'Nick Nurse'

let str = `
{{Escute
| título     = "Loverboy"
| arquivo    = Loverboy.ogg
| descrição = {{pequeno|Uma amostra de "[[Loverboy (canção)|Loverboy]]", o primeiro ''single'' do seu oitavo álbum de estúdio e também trilha sonora do filme ''Glitter'' (2001), tornando-se assim no lançamento de estreia da artista com a distribuidora fonográfica Virgin Records.}}
| posição    = esquerda
}}
`
let doc = wtf(str)
console.log(doc.templates()[0].json()['descrição'])



// str = ``
// let doc = wtf(str)
// console.log(doc.text())
// console.log(doc.infobox().json())



// console.log(doc.section('one').links())
// console.log(doc.templates('sustantivo masculino').map(t => t.json().template))
// console.log(doc.section('sustantivo masculino'))
// console.log(doc.json().sections)
// let f = doc.templates('sustantivo femenino')
// let m = doc.templates('sustantivo masculino')
// console.log(doc.text())

