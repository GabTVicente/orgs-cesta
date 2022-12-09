import React from 'react'
import { Image, Text, StyleSheet, Dimensions } from 'react-native'
import topo from '../../assets/images/topo.png'


const width = Dimensions.get('screen').width;

export default function Cesta() {
    return (
    <>
        <Image style={styles.topo} source={topo} />
        <Text style={styles.title}>Detalhes da cesta</Text>
    </>
    )
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
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
    }
})