
    function calculoRankeadas (vitorias, derrotas ) {
        let saldoVitorias = (vitorias - derrotas)
        let nivelJogador;   
            if (saldoVitorias >= 101 ) { nivelJogador = "Imortal"}
                    else if (saldoVitorias >= 92 && saldoVitorias <= 100) {nivelJogador = "Lendário"}
                            else if (saldoVitorias >= 82 && saldoVitorias <= 91) {nivelJogador = "Diamante"}
                                else if (saldoVitorias >= 52 && saldoVitorias <= 81) {nivelJogador = "Ouro"}
                                    else if (saldoVitorias >= 22 && saldoVitorias <= 51) {nivelJogador = "Prata"}
                                        else if (saldoVitorias >= 12 && saldoVitorias <= 21) {nivelJogador = "Bronze"}
                                            else if (saldoVitorias <= 11) {nivelJogador = "Ferro"}  
        
        console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível " + nivelJogador);
                                        
    }


calculoRankeadas (70,10)

calculoRankeadas (100,0)

calculoRankeadas (200,153)