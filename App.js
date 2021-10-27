import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const Name = (props) => {
  return(
   <Text style={styles.sep}>{props.name}</Text>
  )
}
const MainComp = ()=>{
  const [getTurn,setTurn] = React.useState(true)
  const [getPlayer,setPlayer] = React.useState("")
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
      <Button title={getPlayer} onPress = {()=> abc()} disabled={getOn}/>
      <Button title="" onPress = {()=> {}}/>
      <Button title="" onPress = {()=> {}}/>

      </View>
      <View style={{flexDirection:'row'}}>

      <Button title="" onPress = {()=> {}}/>
      <Button title="" onPress = {()=> {}}/>
      <Button title="" onPress = {()=> {}}/>
      </View>
      <View style={{flexDirection:'row'}}>

      <Button title="" onPress = {()=> {}}/>
      <Button title="" onPress = {()=> {}}/>
      <Button title="" onPress = {()=> {}}/>
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
  }
});

export default App