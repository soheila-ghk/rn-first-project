import React from 'react';
import { View,StyleSheet, Text, Image, Platform, StatusBar } from 'react-native';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/background.jpg')} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
            </View>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/logo-red.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }}/>
                <Text style={styles.TextMessage}>Sell what you don't need</Text>
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.TextMessage} onPress={() => navigation.navigate("Main")}>Welcome!</Text>
            </View>
            {/* <View style={styles.signupContainer} >
                <Text style={styles.TextMessage} onPress={() => navigation.navigate("Signup Page")}>SignUp</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",

    },
    imageContainer: {
        flex: 10,
        width: "100%",
        height:" 100%"
    },
    loginContainer: {
        flex: 1,
        backgroundColor: "gold",
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    signupContainer: {
        flex: 1,
        backgroundColor: "tomato",
        width: "100%",
        alignContent: "center",
        alignItems: 'center',
        justifyContent: "center"
    },
    logoContainer: {
        position: "absolute",
        top: "40%",
        width: 200,
        height: 100,
        left: "25%",
        justifyContent: "center",
        alignItems: 'center',
        alignContent: "center",
    },
    TextMessage: { 
        fontSize: 16,
        fontWeight: "bold"
    }

})
export default Welcome;