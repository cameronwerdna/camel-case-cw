String.prototype.camelCase=function(){
  return this.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('')
}

const hW = new String('hello world')
const departure = new String('i must be leaving now')



console.log(hW.camelCase()) // => 'HelloThere'
console.log(departure.camelCase()) // => 'IMustBeLeavingNow'




