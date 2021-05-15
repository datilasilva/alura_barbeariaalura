document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)
function validaFormulario(){

  if(document.getElementById("nomesobrenome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != "" ){

    alert("Prontinho! Em breve entraremos em contato")
  }else{
    alert("Por favor, preencha os campos indicados")
  }
}

