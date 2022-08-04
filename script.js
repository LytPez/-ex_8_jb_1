const botao= document.getElementById('numeros')

function valores(valorCaixa){
  
  for(let i=1;i<=valorCaixa;i++){
    console.log('Aia '+i)
  }
}

botao.addEventListener('click',function(){
  const caixa= document.getElementById('caixa')
  let valorCaixa=caixa.value
  valores(valorCaixa)
})
  