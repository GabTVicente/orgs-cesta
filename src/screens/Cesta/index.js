import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Topo from './components/Topo'
import Details from './components/Details'
import Item from './components/Item'
import Texto from '../../components/Texto'


export default function Cesta({ topo, detalhes, itens }) {
    return (
        <>
            <FlatList
                data={itens.lista}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return <>
                        <Topo {...topo} />
                        <View style={styles.cesta}>
                            <Details {...detalhes} />
                            <Texto style={styles.titulos}>{itens.titulo}</Texto>
                        </View>
                    </>
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    cesta: {
        display: 'flex',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulos: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
})