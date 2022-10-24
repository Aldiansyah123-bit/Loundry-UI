import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Logo, SplashBackground } from '../../assets'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation]);

    return (
        <ImageBackground source={SplashBackground} style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={Logo} style={styles.logo} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    logo: {
        width: 222,
        height: 105,
        alignSelf: 'center'
    }
})