/* document.getElementById('').addEventListener('focus',function(){

  const inputDepartamento = document.getElementById('departamento');
  inputDepartamento.style.backgroundColor="green";
});

document.getElementById('').addEventListener('blur',function(){

  const inputDepartamento = document.getElementById('departamento');
  inputDepartamento.style.backgroundColor="white";
}); */

function adicionarCoraoFocarInput(){

  const listInput = document.querySelectorAll("input[type=text]");
  console.log(listInput.length);
  console.log(listInput);

  listInput[1].style.backgroundColor = "green"

}
adicionarCoraoFocarInput();
