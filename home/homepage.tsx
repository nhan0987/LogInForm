import React,{Component} from "react";
import {StyleSheet, Text,View } from "react-native";
import {style} from './style/style';

function Homepage(){
    return <View style={style.container}>
    <Text style={style.title}> Today's Tasksdgdfg</Text>
</View>
}

/*
class Homepage extends Component {
    render (){
        return <View style={style.container}>
            <Text style={style.title}> Today's Tasksdgdfg</Text>
        </View>
    }
}
*/

export default Homepage