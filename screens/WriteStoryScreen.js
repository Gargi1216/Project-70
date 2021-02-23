import React from 'react';
import { StyleSheet, Text, View, Image, Header, TextInput, TouchableOpacity } from 'react-native';


export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Header><Text>Write Story Screen</Text></Header>
                </View>
                <View styles={styles.inputView}>
                    <TextInput 
                    style={styles.inputBox}
                    placeholder="Title"/>
                </View>
                <View styles={styles.inputView}>
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Author"/>
                </View>
                <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputBox}
                    placeholder="content"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


                    