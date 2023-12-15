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

  listInput.forEach(function(item){

    item.addEventListener('focus',function(){

      item.style.backgroundColor="green";

    });

    item.addEventListener('blur',function(){

      item.style.background="none";

    });

  })

}

function carregarCategorias(){

  const selectCategoria = document.getElementById('categoriaMotivo');
  selectCategoria.innerHTML="";


  categorias.forEach(function(categoria){

    var opt = document.createElement('option');
    opt.value=categoria.idCategoria;
    opt.text = categoria.Descricao;
    selectCategoria.add(opt);

  })

}

function carregarMotivos(){

  const selectMotivo = document.getElementById('Motivo');
  selectMotivo.innerHTML="";

  const optFirst = document.createElement('option');
  optFirst.value=-1;
  optFirst.text="";
  selectMotivo.add(optFirst);

  const valorCategoria = document.getElementById('categoriaMotivo').value;
  const motivosFiltrados = motivos.filter((m)=>m.idCategoria==valorCategoria) 

  motivosFiltrados.forEach(function(motivo){

    var opt = document.createElement('option');
    opt.value= motivo.idMotivo;
    opt.text = motivo.Descricao;
    selectMotivo.add(opt);

  })

}

function carregarProduto(){

  const selectProduto = document.getElementById('tabelaItens');
  selectProduto.innerHTML="";

/*   const optFirst = document.createElement('option');
  optFirst.value=-1;
  optFirst.text="";
  selectMotivo.add(optFirst); */

  const valorId = document.getElementById('CodigoProduto').value;
  const produtoFiltrado = produtos.filter((m)=>m.idProduto==valorId) 

  if(produtoFiltrado.length>0){
    produtoFiltrado.forEach(function(produto){

      /* var opt = document.createElement('p');
      // opt.value= motivo.idMotivo;
      opt.text =  produto.Descricao + " - " + produto.Estoque + " - " + produto.EstoqueMinimo;*/
      selectProduto.innerHTML = selectProduto.innerHTML + produto.Descricao + " - " + produto.Estoque + " - " + produto.EstoqueMinimo; ;

    })
  }

}

document.getElementById('btnGravar').addEventListener('click',function(){
    const elementosObrigatorios = document.querySelectorAll('[data-obrigatorio="true"]');
    // console.log(elementosObrigatorios);
    
    let validadoCamposPreenhcidos=true;

    setTimeout(function(){ 
        // validadoCamposPreenhcidos=true;           
        if(validadoCamposPreenhcidos){
            document.getElementById('modalSucesso').style.display='block';
        }
    },1000);

    elementosObrigatorios.forEach(function(item){
        
        if (item.value=="" || item.value==-1){
            item.style.backgroundColor='red';
            validadoCamposPreenhcidos=false;
        } 
    })

    const chkUrgenteValue = document.getElementById('urgente').checked;
    const chkMedioValue = document.getElementById('medio').checked;
    const chkBaixoValue = document.getElementById('baixo').checked;
    if (chkUrgenteValue==false && chkMedioValue==false && chkBaixoValue==false){
        const divPrioridade = document.getElementById("radioPrioridade");
        divPrioridade.classList.remove('radioPrioridade');
        divPrioridade.classList.add('radioPrioridadeDesabilitado');        
        document.getElementById('urgente').classList.remove('chkPrioridade');
        document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.remove('chkPrioridade');
        document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.remove('chkPrioridade');
        document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
        validadoCamposPreenhcidos=false;
    }   
});

function adicionarRegraCamposSomenteNumeros(){
    const elementosAceitaSoNumeros = document.querySelectorAll('[data-only-number="true"]');
    elementosAceitaSoNumeros.forEach(function(item){
        item.addEventListener('keypress', function(e){  
               
                if (e.keCode<48 || e.keyCode>59){
                    e.preventDefault();
                };
        });        
    })
}

function eventoClickPrioridadeHabilitarCor(){
    const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade');    
    console.log(checkboxesPrioridade);
    checkboxesPrioridade.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {    
            const divPrioridade = document.getElementById("radioPrioridade");
            divPrioridade.classList.add('radioPrioridade');
            divPrioridade.classList.remove('radioPrioridadeDesabilitado');        
            document.getElementById('urgente').classList.add('chkPrioridade');
            document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('medio').classList.add('chkPrioridade');
            document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('baixo').classList.add('chkPrioridade');
            document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado');
        });
    });
}

document.getElementById('BtnInserirItens').addEventListener('click',function(){

    const tabelaItens = document.getElementById('tabelaItens');
    const campoDescricaoProduto = document.geElementById('DescricaoProduto');
    const campoQuantidade = document.geElementById('Quantidade');
    const totalRequisicao = document.geElementById('total');

    const linha = document.createElement('tr');

    const tdCodigo = document.createElement('td');
    const tdDescricao = document.createElement('td');
    const tdQuantidade = document.createElement('td');
    const tdUnd = document.createElement('td');
    const tdPreco = document.createElement('td');
    const tdTotalLinha = document.createElement('td');
    const tdBtnRemover = document.createElement('td');

    const produtoPesquisado = produtos.filter((p)=>p.idProduto==campoProduto.value);

    tdCodigo.innerHTML = campoProduto.value;
    tdDescricao.innerHTML = campoDescricaoProduto.value;
    tdQuantidade.innerHTML = campoQuantidade.value;
    tdUnd.innerHTML = produtoPesquisado[0].Unidade;
    tdPreco.innerHTML = produtoPesquisado[0].Preco;
    tdTotalLinha.innerHTML = campoQuantidade.value * produtoPesquisado[0].Unidade;

    linha.appendChild(tdCodigo);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdQuantidade);
    linha.appendChild(tdUnd);
    linha.appendChild(tdPreco);
    linha.appendChild(tdTotalLinha);
    tabelaItens.appendChild(linha);

    totalRequisicao.value = parseFloat(totalRequisicao.value) + parseFloat(campoQuantidade.value*produtoPesquisado[0].Preco);

 tdBtn&eæover.appendChild(criarBtnRemaver(tabelaItens, linha,qtdLinhasAtualsaTabela));
linha.appendChild(tdstnRemover);
tæbelaltens.æppendChild(linha);   
});

function criarstnRenover(tabela, objlinha, numeroLinha)(
const btnRemoverIten = dotument.createtlement("div");
btmRemoveritem.classMane = "BtnRerover";
'btnRenover' + merot inha;
btn&esoveritem.id
btrRemoveritem,innerllTHL = '<span>Renoverc/span>";
btr&cmoveritem.addtventListener('click', function () f
if (ob]linha &5 tabelaItens.contains(ob]Linha)) (
tabelaltens.renovechild(objLinha)
const tatalRequisicaa - document.getElenentById('total'):
const colunas = objlinha.getElementsByTagNane("td'))
let valorlinha - colunas[$].innerText;
totalRequisicao.value-parseFloat(totalRequisicao.value-parseFloat(valorLinha)):
return btrRemoverites;

adicionarCoraoFocarInput();
carregarCategorias();
// carregarMotivos();

console.log(categorias)
