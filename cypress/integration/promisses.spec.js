//const { reject, resolve, some } = require("cypress/types/bluebird")
it('sem testes, ainda', () => { })

const getSomething = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(13);
  }, 1000)
})
}

const system = () => {
  console.log('init');
  const prom = getSomething()
  prom.then(some => {
     console.log(`Something is ${some}`)

     console.log('end')
  })    // ou console.log("Something is" + something) da no mesmo
    
}
system();