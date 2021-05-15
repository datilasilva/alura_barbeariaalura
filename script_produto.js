document.getElementById("botaoEnviar_produto").addEventListener("click", validaFormulario)
function validaFormulario(){

  if(document.getElementById("nomesobrenome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != "" ){
    
    alert("Estaremos aguardando por você!. Fique tranquilo! Nosso pagamento é feito diretamente no estabelecimento")
  }else{
    alert("Por favor, preencha os campos indicados")
  }
}