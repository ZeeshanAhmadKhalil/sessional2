import React,{Component} from 'react'
import {View,Text} from 'react-native'

export class Outside_File_Component extends Component{
    render(){
        return(
            <View>
                <Text>
                    This Component is outside the file
                </Text>
            </View>
        )
    }
}