import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';

const win = (show)=>{
  
  var winner=null
  if(show[0]!=" " && show[0]==show[3] && show[3]==show[6]){
    winner=show[0]
    return winner
  }
  else if(show[1]!=" " && show[1]==show[4] && show[4]==show[7]){
    winner=show[1]
    return winner
  }
  else if(show[2]!=" " && show[2]==show[5] && show[5]==show[8]){
    winner = show[2]
    return winner
  }
  
  else if(show[0]!=" " && show[0]==show[1] && show[1]==show[2]){
    winner= show[0]
    return winner
  }
  else if(show[3]!=" " && show[3]==show[4] && show[4]==show[5]){
    winner = show[3]
    return winner
  }
  else if(show[6]!=" " && show[6]==show[7] && show[7]==show[8]){
    winner= show[6]
    return winner
  }
  
  
  else if(show[0]!=" " && show[0]==show[4] && show[4]==show[8]){
    winner=show[0]
    return winner
  }
  else if(show[2]!=" " && show[2]==show[4] && show[4]==show[6]){
    winner=show[2]
    return winner
  }
  return winner
}

const MainComp = (props)=>{
  const [getTurn,setTurn] = React.useState(true)
  const [board,setBoard] = React.useState([" "," "," "," "," "," "," "," "," "])
  const [getOn1,setOn1] = React.useState([false,false,false,false,false,false,false,false,false])
  
  const abc = (n)=> {

  let arr = board.slice()
  let dis = getOn1.slice()
  if(getTurn===true){
    arr[n]="X"
    setTurn(false)
  }
  else{
    arr[n] = "O"
    setTurn(true)  
  }
  setBoard(arr)
  dis[n] = true
  setOn1(dis)

  }
  var show = board.slice()
  var on = getOn1.slice()
  var winner = null
  
  return(
    <View style={{width:'100%'}}>
      <Text>Player 1: X</Text>
      <Text>Player 2: O</Text>
      <View style={{flexDirection:'row',width:'100%'}}>
        <Pressable style={styles.but} onPress = {()=> abc(0)} disabled={on[0]}>
           <Text> {show[0]}</Text>
        </Pressable>
        <Pressable style={styles.but} onPress = {()=> abc(1)} disabled={on[1]}>
          <Text> {show[1]}</Text> 
        </Pressable>
        <Pressable style={styles.but} onPress = {()=> abc(2)} disabled={on[2]}>
          <Text>{show[2]}</Text>
        </Pressable>
      </View>
      <View style={{flexDirection:'row'}}>
        <Pressable style={styles.but} onPress = {()=> abc(3)} disabled={on[3]}>
          <Text>{show[3]}</Text>
        </Pressable>
        <Pressable style={styles.but} onPress = {()=> abc(4)} disabled={on[4]}>
          <Text>{show[4]}</Text>
        </Pressable>
        <Pressable style={styles.but} onPress = {()=> abc(5)} disabled={on[5]}>
          <Text>{show[5]}</Text>
        </Pressable>
      </View>
      <View style={{flexDirection:'row'}}>
        <Pressable style={styles.but} onPress = {()=> abc(6)} disabled={on[6]}>
          <Text>{show[6]}</Text>
        </Pressable>
        <Pressable style={styles.but} onPress = {()=> abc(7)} disabled={on[7]}>
          <Text>{show[7]}</Text>
        </Pressable>
        <Pressable style={styles.but} onPress = {()=> abc(8)} disabled={on[8]}>
          <Text>{show[8]}</Text>
        </Pressable>
      </View>
      <Text>{win(show)=="X" ? props.func("X"): win(show)=="O"? props.func("O"):null}</Text>
    </View>

  )
}

const Winscreen = (props)=>{
  return(
    <Text style={{fontSize:30}}> {props.winner} Wins!</Text>
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
  const [won,setWon] = React.useState(false)
  const [winner,setWinner] = React.useState(null)

  const passfunc = (winner)=>{
    setWinner(winner)
    setWon(true)
  }
  return (
      <View style={styles.container}>
        <View style={styles.lefte}>
          {!isStarted ? <Button title="Start" onPress = {()=> {Start(true)}}/>:null}
          {isStarted ? <MainComp func={passfunc}/>:null}
          {won ? <Winscreen winner={winner}/>:null}
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
    marginTop: 30
  },
  sep: {
    marginBottom: 10,
    fontSize: 20    
  },
  but:{
    borderWidth:1, backgroundColor:'white',width:50, borderColor:'black', alignItems:'center'
  }
});

export default App