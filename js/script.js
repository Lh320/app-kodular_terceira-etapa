function gerarCartao() {

  let nome = document.getElementById('nome').value;
  let data = document.getElementById('data').value;
  let email = document.getElementById('email').value;
  let planoSelecionado = document.getElementById('plano').value;
  
  
  
  


  let salario = document.getElementById('salario').value;
  
  
  if(salario <= 500){
     alert(`nós recomendamos o plano simples pra você ${nome} `)

     let cartao = document.createElement('div');
     cartao.classList.add('carta1');
     
     
     let containerCartao = document.getElementById('cartao');
     containerCartao.appendChild(cartao);


     cartao.innerHTML = `
    <h2>Cartão de Internet</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Data de Aniversário:</strong> ${data}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Plano Escolhido:</strong> ${planoSelecionado}</p>
   
  `



  } else if (salario <= 1000){
    alert(`nós recomendamos o plano Intermediário pra ${nome}`)

    let cartao = document.createElement('div');
    cartao.classList.add('carta2');
    
    
    let containerCartao = document.getElementById('cartao');
    containerCartao.appendChild(cartao);


    cartao.innerHTML = `
    <h2>Cartão de Internet</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Data de Aniversário:</strong> ${data}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Plano Escolhido:</strong> ${planoSelecionado}</p>
   
  `



  } else {
    alert(`nós recomendamos o plano Premium pra ${nome}`)


    let cartao = document.createElement('div');
    cartao.classList.add('carta3');
    
    
    let containerCartao = document.getElementById('cartao');
    containerCartao.appendChild(cartao);


    cartao.innerHTML = `
    <h2>Cartão de Internet</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Data de Aniversário:</strong> ${data}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Plano Escolhido:</strong> ${planoSelecionado}</p>
   
  `


  }

  




}



