import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';


const MainComp = ()=>{
  const [getTurn,setTurn] = React.useState(true)
  const [getPlayer,setPlayer] = React.useState("NaN")
  const [getOn,setOn] = React.useState(false)
  const abc = ()=> {
  if(getTurn===true){
    setPlayer("X")
    setTurn(false)
  }
  else{
    setPlayer("O")
    setTurn(true)  
  }
  setOn(true)
  }
  return(
    <View style={{width:'100%'}}>
      <View style={{flexDirection:'row',width:'100%'}}>
      <Pressable style={styles.but} onPress = {()=> abc()} disabled={getOn}> <Text> {getPlayer}</Text> </Pressable>
      <Pressable style={styles.but} onPress = {()=> abc()} disabled={getOn}> <Text>{getPlayer}</Text> </Pressable>
      <Pressable style={styles.but} onPress = {()=> abc()} disabled={getOn} > <Text>{getPlayer}</Text> </Pressable>

      </View>
      <View style={{flexDirection:'row'}}>

      <Pressable style={styles.but} onPress = {()=> abc()} disabled={getOn}> <Text>{getPlayer}</Text> </Pressable>
      <Pressable style={styles.but} onPress = {()=> abc()} disabled={getOn}> <Text>{getPlayer}</Text> </Pressable>
      <Pressable style={styles.but} onPress = {()=> abc()} disabled={getOn}> <Text>{getPlayer}</Text> </Pressable>
      </View>
      <View style={{flexDirection:'row'}}>

      <Pressable style={styles.but} onPress = {()=> abc()} disabled={getOn}> <Text>{getPlayer}</Text> </Pressable>
      <Pressable style={styles.but} onPress = {()=> abc()} disabled={getOn}> <Text>{getPlayer}</Text> </Pressable>
      <Pressable style={styles.but} onPress = {()=> abc()} disabled={getOn}> <Text>{getPlayer}</Text> </Pressable>
      </View>
    </View>

  )
}

const StartComp = ()=>{
  return(
    <View style={styles.lefte}>
      <Button title="Start" onPress = {()=> {}}/>
    </View>

  )
}
 const App = () => {

  const [isStarted,Start] = React.useState(false)
  const but =   <Button title="Start" onPress = {()=> {Start(true)}}/>

  const calc =   <MainComp/>

  return (
      <View style={styles.container}>
      {/* <StartComp/> */}
        <View style={styles.lefte}>
          {!isStarted && <Button title="Start" onPress = {()=> {Start(true)}}/>}
          {isStarted && <MainComp/>}
        {/* {!isStarted? but:null}
        {isStarted? calc:null} */}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    color: 'red',
    fontSize: 25
  },
  lefte: {
    // justifyContent: 'flex-start',
    marginTop: 30
  },
  sep: {
    marginBottom: 10,
    fontSize: 20    
  },
  but:{
    borderWidth:1, backgroundColor:'blue',width:50, borderColor:'white', alignItems:'center'
  }
});

export default App