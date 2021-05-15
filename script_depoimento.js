document.getElementById("botaoEnviar_depoimento").addEventListener("click", validaFormulario)
function validaFormulario(){

  if(document.getElementById("nomesobrenome").value != "" &&
     document.getElementById("mensagem").value != "" ){
    
    alert("Estaremos avaliando e publicando seu depoimento. Muito obrigado!")
  }else{
    alert("Por favor, preencha os campos indicados")
  }
}