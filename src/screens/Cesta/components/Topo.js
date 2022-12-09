import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import topo from '../../../../assets/images/topo.png';
import Texto from '../../../components/Texto'

const width = Dimensions.get('screen').width;

export default function Topo({titulo}) {
    return (
        <>
            <Image style={styles.topo} source={topo} />
            <Texto style={styles.title}>{titulo}</Texto>
        </>
    )
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
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
})