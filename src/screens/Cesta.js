import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import topo from '../../assets/images/topo.png'
import logo from '../../assets/images/logo.png'

const width1 = Dimensions.get('screen').width;

export default function Cesta() {
    return (
    <>
        <Image style={styles.topo} source={topo} />
        <Text style={styles.title}>Detalhes da cesta</Text>
        <View style={styles.cesta}>
            <Text style={styles.nome}>Cesta de verduras</Text>
            <View style={styles.fornecedor}>
                <Image style={styles.imagemFornecedor} source={logo}></Image>
                <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text> 
            </View>
            <Text style={styles.descricao}>Uma cesta com produtos selecionados da 
                fazendo direto para sua cozinha</Text>
            <Text style={styles.price}>R$40,00</Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width1,
    },
    title:{
        position: "absolute",
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        padding: 16,
    },
    cesta:{
        display: 'flex',
        paddingVertical: 8, 
        paddingHorizontal: 16,
    },
    nome:{
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: 'bold',
        fontFamily: "MontserratBold"
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price:{
        color: "#2A9F85",
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },

    imagemFornecedor:{
        width: 32,
        height: 32,
    },
    fornecedor:{
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 12,
    }
})