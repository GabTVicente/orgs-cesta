import logo from '../../assets/images/logo.png';
import tomate from '../../assets/images/frutas/tomate.png'
import brocolis from '../../assets/images/frutas/brocolis.png'
import batata from '../../assets/images/frutas/batata.png'
import pepino from '../../assets/images/frutas/pepino.png'
import abobora from '../../assets/images/frutas/abobora.png'

const cesta = {
    topo: {
        titulo: "Detalhes da cesta",
    },
    detalhes: {
        nome: 'Cesta de verduras',
        nomeFazenda: 'Jenny Jack Farm',
        descricao: "Uma cesta com produtos selecionados da fazenda direto para sua cozinha",
        preco: "R$40,00",
        logoFazenda: logo,
        botao: 'Comprar',
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default cesta;