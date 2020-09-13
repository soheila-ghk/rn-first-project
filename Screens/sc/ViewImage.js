import React from 'react';
import { View, StyleSheet, Platform, StatusBar,Image } from 'react-native'; 

// This component not being shown either    
const ViewImage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.closeIcon}></View>
                <View style={styles.deleteIcon}></View>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('./../assets/chair.jpg')} style={{width:"100%", height:"100%", resizeMode :"cover" }} />
            </View>
            <View style={styles.emptyContainer}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        width: "100%",
        height: "100%",
    },
    iconContainer: {
        width: "100%",
        height: 50,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        alignContent: 'center',
        backgroundColor:"black",

    },
    closeIcon: {
        backgroundColor: "white",
        width: 50,
        height: 50,
        marginLeft: 20
    },
    deleteIcon: {
        backgroundColor: "red",
        width: 50,
        height: 50,
        color: "red",
        marginRight: 20

    },
    imageContainer:{
        width: "100%",
        flex: 3
    },
    emptyContainer: {
        flex: 1,
        width: "100%",
        backgroundColor:"black",
    }

})

export default ViewImage