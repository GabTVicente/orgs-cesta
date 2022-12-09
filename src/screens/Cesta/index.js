import React from 'react'
import { View, StyleSheet } from 'react-native'
import Topo from './components/Topo'
import Details from './components/Details'


export default function Cesta({topo, detalhes}) {
    return (
        <>
            <Topo {...topo}/>
            <View style={styles.cesta}>
                <Details {...detalhes} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cesta: {
        display: 'flex',
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
})