import React,{Component} from 'react'
import {Text,Image,View,StyleSheet,ScrollView} from 'react-native'
import {Outside_File_Component} from './components/outside_file_component.js'
import eth from './images/eth.gif'
import { white } from 'ansi-colors'

export class Within_File_Component extends Component{
  render(){
    return(
      <View>
        <Text>This component is with in the file</Text>
        {/* <App></App> -----> server will crash without any error */}
      </View>
    )
  }
}
export class Url_Image extends Component{
  render(){
    return(
      <View>
        <Text>The following is eth image:</Text>
        <Image source={eth} style={styles.image}/>
        <Variable_Url_Image />
      </View>
    )
  }
}
export class Variable_Url_Image extends Component{
  render(){
    let pic = {uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
    return(
      <View>
        <Text>The following is ethereum wallpaper:</Text>
        <Image source={pic} style={styles.image}/>
      </View>
    )
  }
}
export class Hello_user extends Component{
  render(){
    return(
      <View>
        <Text>Hello {this.props.name}</Text>
      </View>
    )
  }
}
export class Blink extends Component{
  state={
    show_blinking_text:true
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState(state=>{
        return {show_blinking_text:!state.show_blinking_text}
      })
      // console.log(this.state.show_blinking_text)
    },1000)
  }
  render(){
    if(this.state.show_blinking_text){
      return(
        <View style={styles.blink_view}>
          <Text style={styles.blink_text}>
            Scroll Down
          </Text>
        </View>
      )
    }
    else{
      return(
        <View style={styles.blink_view}>
        </View>
      )
    }
  }
}

export default class App extends Component{
  render(){
    return(
      <ScrollView>
        <View style={styles.top_hello}>
          <Text>Hello</Text>
          <Hello_user name="Zeeshan Ahmad"></Hello_user>
          <Hello_user name="Faizan Khan"></Hello_user>
          <Hello_user name="Mubeen"></Hello_user>
        </View>    
        <Blink />
        <Within_File_Component></Within_File_Component>
        <Outside_File_Component></Outside_File_Component>    
        <Url_Image></Url_Image>
        <Variable_Url_Image></Variable_Url_Image>
        {/* {console.log("working")} */}
      </ScrollView>
    )
  }
}

const styles=StyleSheet.create({
  image:{
    width:200,
    height:200
  },
  top_hello:{
    textAlign:"center",
    marginBottom:10
  },
  blink_view:{
    height:100,
  },
  blink_text:{
    fontSize:50,
    textAlign:"center"
  }
})
