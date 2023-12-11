/* document.getElementById('').addEventListener('focus',function(){

  const inputDepartamento = document.getElementById('departamento');
  inputDepartamento.style.backgroundColor="green";
});

document.getElementById('').addEventListener('blur',function(){

  const inputDepartamento = document.getElementById('departamento');
  inputDepartamento.style.backgroundColor="white";
}); */

function adicionarCoraoFocarInput(){

  const listInput = document.querySelectorAll("input");
  console.log(listInput.length);
  console.log(listInput);

  for(let i = 0;i<listInput.length;i++){

    listInput[i].style.backgroundColor = "green"


  }

}
adicionarCoraoFocarInput();
