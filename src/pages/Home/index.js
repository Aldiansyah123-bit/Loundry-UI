import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ImageHeader, Logo } from '../../assets'
import { ButtonIcon, PesananAktif, Saldo } from '../../components'
import { WARNA_ABU_ABU, WARNA_DARK } from '../../utils/constant'

const Home = () => {
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={ImageHeader} style={styles.header}>
                    <Image source={Logo} style={styles.logo}></Image>
                    <View style={styles.hello}>
                        <Text style={styles.selamat}>Selamat datang</Text>
                        <Text style={styles.username}>Aldiansyah</Text>
                    </View>
                </ImageBackground>
                <Saldo />
                <View style={styles.layanan}>
                    <Text style={styles.label}>Layanan Kami </Text>
                    <View style={styles.iconLayanan}>
                        <ButtonIcon title="Kiloan" type="layanan" />
                        <ButtonIcon title="Satuan" type="layanan" />
                        <ButtonIcon title="VIP" type="layanan" />
                        <ButtonIcon title="Karpet" type="layanan" />
                        <ButtonIcon title="Setrika Saja" type="layanan" />
                        <ButtonIcon title="Ekpress" type="layanan" />
                    </View>
                </View>
                <View style={styles.pesananAktif}>
                    <Text style={styles.label}>Pesanan Aktif</Text>
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
                    <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci" />
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        width: windowWith,
        height: windowHeight * 0.30,
        paddingHorizontal: 30,
        paddingTop: 10,
    },
    logo: {
        width: windowWith * 0.25,
        height: windowHeight * 0.06,
    },
    hello: {
        marginTop: windowHeight * 0.06,
    },
    selamat: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Regular',
        color: WARNA_DARK
    },
    username: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold',
        color: WARNA_DARK
    },
    layanan: {
        paddingLeft: 30,
        paddingTop: 15,
    },
    label: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold',
        color: WARNA_DARK
    },
    iconLayanan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap'
    },
    pesananAktif: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 30,
        backgroundColor: WARNA_ABU_ABU,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    }
})