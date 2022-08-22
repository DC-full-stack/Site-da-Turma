
// import { resumeClass } from "./resumeClasses";
const resumeClass = [
    {
        title: 'introducao',
        content: [
            'Github', 'Git', 'W3school', 'W3C', 'Developed', 'Mozilla' , 'MDN', 'Web', 'Docs', 'Hackathon', 'UI', 'UX', 'criador', 'designer', 'CAN I USE', 'FIGMA', 'HTTPS', 'DNS', 'IP', 'Cmd', 'Dir', 'windows', 'linux' , 'apple', 'cd', 'code .', 'Ipconfig' ,'gateway', 'developed', 'tools', 'domain'
        ]

    },
    {
        title: 'modelos portas IP mascaras',
        content: [
            'Slido', 'Deploy', 'Modelo', 'OSI', 'Padrão MVC', 'Model', 'View', 'Controller ','TCP/IP', 'transmission', 'Control', 'Protocol IP', 'Internet Protocol','Máscaras e Gateway', 'Portas', 'HTTPs', 'Get', 'Post', 'Put', 'Delete', 'Options ','Patch', 'Códigos de status de respostas HTTP', 'Response', 'Charset', 'UTF 8',  'TAGs', 'body',  'H1',  'P',  'Button',  'Binário'
        ]

    },
    {
        title: 'tags iniciais',
        content: [
            'Indentação', 'SEO', 'Lorem', 'P', 'H1', 'h2',' img - imagem', 'src', 'Acessibilidade', 'Width', 'anchor', 'Target', 'blank', 'Head' ,'cabeçalho' ,'configurações' ,'Body' ,'Autocomplete' 
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
// ============================================================================
// atualiza hora
// ============================================================================

    const horaAtual = new Date().toLocaleTimeString();
    const dataAtual = new Date().toLocaleDateString();

    document.getElementById("dataAtual").innerHTML = `Hora atual: ${horaAtual} do dia: ${dataAtual}`

// ============================================================================
// renderiza Quadro lateral
// ============================================================================


    let classes = document.querySelectorAll('.aula');
    let classBoard = document.querySelector('.module01__main-content');
    let content = document.querySelector('.update-board');
    // import { resumeClass } from "./resumeClasses";

// ============================================================================
    // const contentRender = (i) => {
    //     for (let j = 0; j < resumeClass[i].content.length; j++) {
    //         return resumeClass[i].content[j];
    //         // console.log(resumeClass[i].content[j]);
    //     }
            

    //                 // return resumeClass[i].content


    //         // resumeClass[i].content.forEach(function(element) {
    //         //     return element.value
    //         // });

        
    // }
// ============================================================================

    for (let i = 0; i < classes.length; i++) {
        var iclass = classes[i];        
        iclass.addEventListener('mouseover', () => {
            content.innerHTML = `
            <div class="module1__resume_board ">
                <div class="resume-title">
                    <ul class="resume">const Aula${i+2} = () => { ${resumeClass[i].title} }</ul>
                </div>
                <div class="resume-content">
                    <p >palavras chaves da aula:  [ 
                        <br> <br>
                        ${resumeClass[i].content} 
                        <br> <br>
                        ]
                    </p>
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
