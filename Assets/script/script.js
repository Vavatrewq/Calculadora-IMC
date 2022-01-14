function cancelarEnvio(){
    const form = document.querySelector('.form');
    const resulte = document.querySelector('.trans-imc-resulte');

    form.addEventListener('submit', (ev)=>{
        ev.preventDefault()
    })
    
    function btnAddEvent(){
        const btn = document.querySelector('.btn');
        
        btn.addEventListener('click', ()=>{

            const peso = Number(form.querySelector('#input-peso').value);
            const altura = Number(form.querySelector('#input-altura').value);
            
            const imcResulte = peso / altura;
            const resposta = (imcResulte / altura).toFixed(2);
            const respostaFlood = Math.floor(resposta);

            const htmlPresent = `
                <br><br>
                <h2>Resultado:</h2>
                <div class="imc-img-icon"></div><br>
            `;
            const htmlPresentCancel = `
                <br><br>
                <h2>Resultado:</h2>
                <div class="imc-img-icon-cancel"></div><br>
            `;

            resulte.innerHTML = '';
            
                if(resposta === 'Infinity' || respostaFlood === 0){
                    resulte.innerHTML += `${htmlPresentCancel} <p class="resulte-imc">(Faltou um Valor a Completar!!!)</p>`
                }else if(peso === 0 && altura === 0){
                    resulte.innerHTML += `${htmlPresentCancel} <p class="resulte-imc">(Complete os Valores!!!)</p>`
                }else if(respostaFlood < 18){
                    resulte.innerHTML += `${htmlPresent} <p class="resulte-imc">Seu IMC é: ${resposta} (A Baixo do Peso)</p>`
                }else if(respostaFlood >= 18 && respostaFlood <= 24){
                    resulte.innerHTML += `${htmlPresent} <p class="resulte-imc">Seu IMC é: ${resposta} (Peso Normal)</p>`
                }else if(respostaFlood >= 25 && respostaFlood <= 29){
                    resulte.innerHTML += `${htmlPresent} <p class="resulte-imc">Seu IMC é: ${resposta} (Sobrepeso)</p>`
                }else if(respostaFlood >= 30 && respostaFlood <= 34){
                    resulte.innerHTML += `${htmlPresent} <p class="resulte-imc">Seu IMC é: ${resposta} (Obesidade grau 1)</p>`
                }else if(respostaFlood >=34 && respostaFlood <=39){
                    resulte.innerHTML += `${htmlPresent} <p class="resulte-imc">Seu IMC é: ${resposta} (Obesidade grau 2)</p>`
                }else if(respostaFlood >= 40){
                    resulte.innerHTML += `${htmlPresent} <p class="resulte-imc">Seu IMC é: ${resposta} (Obesidade grau 3)</p>`
                }else{
                    resulte.innerHTML += `${htmlPresentCancel} <p class="resulte-imc">(Esse Valor é Invalido!!!)</p>`
                }
        })
    }
    btnAddEvent()
}

cancelarEnvio()
