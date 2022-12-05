fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(resp =>{
    return resp.json()
}).then(corpo =>{
    console.log(corpo.USDBRL) //para melhor visualização durante a construção do código (desnecessário)
    document.getElementById("codein").innerHTML=corpo.USDBRL.codein
    document.getElementById("code").innerHTML=corpo.USDBRL.code
    document.getElementById("ask").innerHTML=corpo.USDBRL.ask
    document.getElementById("menor").innerHTML=corpo.USDBRL.low
    document.getElementById("maior").innerHTML=corpo.USDBRL.high
})

fetch('https://economia.awesomeapi.com.br/last/BRL-USD').then(resp =>{
    return resp.json()
}).then(corpo =>{
    console.log(corpo.USDBRL) //para melhor visualização durante a construção do código (desnecessário)
    document.getElementById("codein1").innerHTML=corpo.BRLUSD.codein
    document.getElementById("code1").innerHTML=corpo.BRLUSD.code
    document.getElementById("ask1").innerHTML=corpo.BRLUSD.ask
    document.getElementById("menor1").innerHTML=corpo.BRLUSD.low
    document.getElementById("maior1").innerHTML=corpo.BRLUSD.high
})

