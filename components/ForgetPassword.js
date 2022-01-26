import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { resetPassword } from '../services';

const ForgetPassword = () => {
    const reset = () => {
        resetPassword(email)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textDesign}>CodeTribe Sanitary Pads</Text>
            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/BackGround.png")} />
                <Image style={styles.img} source={require("../assets/BackGround2.png")} />
            </View>
            <Text style={styles.textDesign3}>Forgot password</Text>
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Enter your email address'
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={reset}>
                    <Text style={styles.loginButton}>Submit</Text>
                </TouchableOpacity>

            </View >

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
    loginButton: {
        height: 30,
        width: 250,
        color: 'Grey',
        paddingHorizontal: 100,
        paddingVertical: 5,
        backgroundColor: 'pink',
        borderRadius: 60,
    },
    img: {
        height: 150,
        width: 150,
        marginBottom: 50,

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
    textDesign: {
        color: 'pink',
        fontSize: 30,
        fontFamily: 'brush-script mt',
    },
    textDesign3: {
        color: 'pink',
        fontSize: 15,
        fontFamily: 'brush-script mt',
        marginRight: 150,
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
    signUpText_Design: {
        color: 'pink',
        marginTop: 55,
        fontSize: 15,
        fontFamily: 'brush-script mt',
        marginTop: 10,

    },
    viewDirection: {
        flexDirection: 'row',
        // marginTop:100,
    },
    controlView: {
        marginTop: 350,
    },
});
export default ForgetPassword;
