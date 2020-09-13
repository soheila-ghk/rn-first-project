import React from 'react';
import { View, Text, StyleSheet, StatusBar,Platform } from 'react-native';

const Home = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.TextMessage} >
                Home sweet home
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    TextMessage: { 
        fontSize: 16,
        fontWeight: "bold"
    }
}) 

export default Home;