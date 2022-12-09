import React from 'react';
import Texto from '../../../components/Texto';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../../components/Button';

export default function Details({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
        <Texto style={styles.nome}>{nome}</Texto>
        <View style={styles.fornecedor}>
            <Image style={styles.imagemFornecedor} source={logoFazenda}></Image>
            <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={styles.descricao}>{descricao}</Texto>
        <Texto style={styles.price}>{preco}</Texto>
        <Button>{botao}</Button>
    </>
}

const styles = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: 'bold',
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },

    imagemFornecedor: {
        width: 32,
        height: 32,
    },
    fornecedor: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 12,
    },
})