
// import { resumeClass } from "./resumeClasses";
const resumeClass = [
    {
        title: 'introducao',
        content: [

        ]

    },
    {
        title: 'modelos portas IP mascaras',
        content: [

        ]

    },
    {
        title: 'tags iniciais',
        content: [

        ]

    },
    {
        title: 'id class seletores',
        content: [

        ]

    },
    {
        title: 'cores margem hover',
        content: [

        ]

    },    
    {
        title: 'display',
        content: [

        ]

    },
    {
        title: 'aula revisão',
        content: [

        ]

    },
    {
        title: 'display block e flex',
        content: [

        ]

    },
    {
        title: 'início de GIT',
        content: [

        ]

    },
    {
        title: 'git + inicia github',
        content: [

        ]

    },
    {
        title: 'inicia branch',
        content: [

        ]

    },
    {
        title: 'checkout + merge git_github',
        content: [

        ]

    },
    {
        title: 'SCRUM',
        content: [

        ]

    },
    {
        title: 'MVP lean thinking',
        content: [

        ]

    },
    {
        title: 'inicia JavaScript',
        content: [

        ]

    },
    {
        title: 'array loop for',
        content: [

        ]

    },
    {
        title: ' exs + funções',
        content: [

        ]

    },
    {
        title: 'exs functions',
        content: [

        ]

    },
    {
        title: 'objeto',
        content: [

        ]

    },
    {
        title: 'objeto, função e interação do JS com o navegador',
        content: [

        ]

    },
    {
        title: 'manipula DOM',
        content: [

        ]

    },
    {
        title: 'revisão array.for.function',
        content: [

        ]

    },
    {
        title: 'eventos em JS',
        content: [

        ]

    },
    {
        title: 'inicia jogo da velha',
        content: [

        ]

    },
]
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
    // import { resumeClass } from "./resumeClasses";

    for (let i = 0; i < classes.length; i++) {
        var iclass = classes[i];        
        iclass.addEventListener('mouseover', () => {
            // console.log(resumeClass[i].title);
            content.innerHTML = `
            <div class="module1__resume_board ">
                <div class="resume-content">
                    <ul class="resume">Aula ${i+2} () => { ${resumeClass[i].title} }</ul>
                </div>
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
