
const storage=(load)=>{
  return  localStorage.setItem('mensagens', load)
}

const salvar=(msg)=>{
    let save = msg
   storage(msg)
   return document.querySelector('#table').innerHTML += save
}

const mensagem =()=>{fetch('https://api.adviceslip.com/advice')
.then(res=>res.json())
.then(ret=>{
    const div = document.createElement('div')
    div.innerHTML += ret.slip.advice + ret.slip.id
    div.setAttribute('class','msg')
    document.querySelector('#salvar').addEventListener('click',()=>{
        localStorage.clear()
        document.querySelector('#table').innerHTML = ''
        salvar(ret.slip.advice + ret.slip.id)
        }) 

   document.querySelector('#table').innerHTML =  localStorage.getItem('mensagens')

    return document.querySelectorAll('#result')[0].appendChild(div)
})

}
mensagem()

document.querySelector('#msg').addEventListener('click',()=>{
    document.querySelector('#result').innerHTML= ''
    mensagem()
})


document.querySelector('#open').addEventListener('click',()=>{
    let menu = document.querySelector('#table')
    menu.classList.toggle('close')

})