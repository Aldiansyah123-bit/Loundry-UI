import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconPesananActive, IconPesananAktif } from '../../assets'
import { WARNA_ABU_ABU, WARNA_DARK, WARNA_UTAMA, WARNA_WARNING } from '../../utils/constant'

const PesananAktif = ({ title, status }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <IconPesananAktif />
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.status(status)}>{status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PesananAktif


const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginVertical: windowHeight * 0.02,
        alignItems: 'center'
    },
    text: {
        marginLeft: windowWith * 0.02
    },
    title: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-SemiBold',
        color: WARNA_DARK
    },
    status: (status) => ({
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Light',
        color: status === 'Sudah Selesai' ? WARNA_UTAMA : status === "Masih Dicuci" ? WARNA_WARNING : WARNA_ABU_ABU,
    })
})