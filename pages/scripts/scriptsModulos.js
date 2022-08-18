// ===============================================
// atualiza hora
// ===============================================

    const horaAtual = new Date().toLocaleTimeString();
    const dataAtual = new Date().toLocaleDateString();

    document.getElementById("dataAtual").innerHTML = `Hora atual: ${horaAtual} do dia: ${dataAtual}`

// ===============================================
// renderiza Quadro lateral
// ===============================================


    let classes = document.querySelectorAll('.aula');
    let classBoard = document.querySelector('.module01__main-content');
    let content = document.querySelector('.update-board');

    for (let i = 0; i < classes.length; i++) {
        var iclass = classes[i];        
        iclass.addEventListener('mouseover', () => {
            content.innerHTML = `
            <div class="module1__resume_board ">
                <ul class="resume-content"> aula ${i+2} </ul>
            </div>
            `
        });
    }

    classBoard.addEventListener('mouseout', () => {
        content.innerHTML = `
        <div class="img-content">
            <img class="resumeImg" src="../imgs/nick/resumeImg.jpg" alt="Site da Turma">
        </div>
        `
    })
