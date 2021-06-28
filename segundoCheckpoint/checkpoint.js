let comidas = ['pipoca', 'macarrao', 'carne', 'feijao', 'brigadeiro' ];
let tempoPadrao = [10,8,15,12,8];

function comid (op)
{
    console.log()
    console.log(comidas[op-1] + " - Tempo padrão "+ tempoPadrao[op-1]+ " segundos. Deseja alterar o tempo? s/n")
    let resp = 's';

    if (resp=='s')
    {
          if (tempo < tempoPadrao[op-1])
        {
            console.log("Preparando..."+ tempo + " segundos. TEMPO INSUFICIENTE")
        }

          else if (tempo >= tempoPadrao[op-1] && tempo < tempoPadrao[op-1]*2)
        {
            function tempoPreparo(){console.log(tempo + " segundos. Prato Pronto, bom apetite")}
            setTimeout(tempoPreparo, 1000*tempo);
        }

          else if (tempo >= tempoPadrao[op-1]*2 && tempo < tempoPadrao[op-1]*3)
        {
            function tempoPreparo(){console.log(tempo + " segundos. A comida queimou.")}
            setTimeout(tempoPreparo, 1000*tempo);
    
        }

          else if (tempo >= tempoPadrao[op-1]*3)
        {
            function tempoPreparo(){console.log(tempo + " segundos. Preparando... KABUMM")}
            setTimeout(tempoPreparo, 1000*tempo);
        }
    }
    else
    {
          console.log("Preparando...")
          function oitoSegundos(){console.log("8 segundos. Prato Pronto, bom apetite")}
          setTimeout(oitoSegundos, 1000*8);
    }
}

var tempo = 11; // Variável para teste
let menu = 1; // Variável para teste
switch (menu)
{
      case 1:
        comid(1)
        break

      case 2:
        comid(2)
        break

      case 3:
        comid(3)
        break

      case 4:
        comid(4)
        break

      case 5:
        comid(5)
        break

      default:
            console.log()
            console.log("Prato Inexistente.")
}
