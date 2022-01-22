import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textDesign}>CodeTribe Sanitary Pads</Text>

            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/BackGround.png")} />
                <Image style={styles.img} source={require("../assets/BackGround2.png")} />
            </View>
            <Text style={styles.textDesign3}>Welcome Back</Text>
            <TextInput style={styles.fieldText_Design} placeholder='Enter your email address' />
            <TextInput style={styles.fieldText_Design} placeholder='Password' />
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.loginButton}>Login</Text>
                </TouchableOpacity>

            </View >
            <View style={styles.viewDirection}>
                <Text style={styles.textDesign5}>Don't have an account sign up ?</Text>
                <TouchableOpacity>
                    <Text style={styles.textDesign4}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View >
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

export default Login;
