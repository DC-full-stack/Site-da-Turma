    const horaAtual = new Date().toLocaleTimeString();
    const dataAtual = new Date().toLocaleDateString();

    document.getElementById("dataAtual").innerHTML = `Hora atual: ${horaAtual} do dia: ${dataAtual}`