import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
    container:{
       backgroundColor:'#3498db',
       height:'100%',
       paddingTop:240,
       paddingLeft:30,
       paddingRight:30

    },
    subcontainer:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#d9eaf8',
        borderRadius:12,
       
    },
    item:{
        display:'flex',
        flexDirection:'column',
        flexGrow:1,
        paddingLeft:16,
        paddingRight:16,
        paddingTop:10,
        paddingBottom:10,
        //alignItems:'stretch'
        
    },
    title:{
        fontWeight:'700',
        fontSize:24,
        
    },
    inputItem:{
        display:'flex'
    },
    input:{
        backgroundColor:'white',
        borderColor:'red',
        borderRadius:8,
        padding:4,
        paddingLeft:8,
        paddingRight:8,
        marginTop:12,
        height:40,
        textAlign:'center'
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonLogin:{
        backgroundColor:'#2096f3',
        height:40,
        borderRadius:4,
        display:'flex',
        alignItem:'center',
        justifyContent:'center',
        marginTop:16,
    },
    textLogin:{
        fontSize:22,
        textAlign:'center',
        color:'white',
        textTransform:'uppercase'
    }
});