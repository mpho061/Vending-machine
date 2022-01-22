import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const signUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textDesign}>CodeTribe Sanitary Pads</Text>
            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/BackGround.png")} />
                <Image style={styles.img} source={require("../assets/BackGround2.png")} />
            </View>
            <Text style={styles.textDesign3}>Sign Up</Text>
            <TextInput style={styles.fieldText_Design} placeholder='Enter your email address' />
            <TextInput style={styles.fieldText_Design} placeholder='Password' />
            <TextInput style={styles.fieldText_Design} placeholder='Confirm Password' />
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity>
                    <Text style={styles.loginButton}>Register</Text>
                </TouchableOpacity>
            </View >
            <View style={styles.viewDirection}>
                <Text style={styles.textDesign5}>Have an account sign in ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.textDesign4}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    fieldText_Design: {
        backgroundColor: '#fff',
        width: 250,
        height: 30,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    loginButton: {
        height: 30,
        width: 250,
        color: 'Grey',
        paddingHorizontal: 100,
        paddingVertical: 5,
        backgroundColor: 'pink',
        borderRadius: 60,
    },
    textDesign: {
        color: 'pink',
        marginBottom: 60,
        fontSize: 30,
        fontFamily: 'brush-script mt',
    },
    textDesign3: {
        color: 'pink',
        fontSize: 15,
        fontFamily: 'brush-script mt',
        marginRight: 165,
        marginTop: 20,
    },
    textDesign4: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    textDesign5: {
        color: 'pink',
        fontSize: 15,
        fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    viewDirection: {
        flexDirection: 'row',
        // marginTop:100,
    },
    img: {
        height: 150,
        width: 150,
        marginBottom: 50,
    },
    
    

});
export default signUp;
