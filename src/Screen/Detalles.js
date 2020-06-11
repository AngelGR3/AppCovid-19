import React, { Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator, 
    Image,
    ScrollView
  } 
from 'react-native';
import CovidService from '../Service/CovidData';

export default class CovidData extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            isLoading: true,
            date: ""
            
        }
    }
   
    componentDidMount(){
        CovidService.getMexico().then((results) => {
            if(results.data[0].provinces[0]){
                this.setState({
                    isLoading:false,
                    data: results.data[0].provinces[0],
                    date: results.data[0].date
                })
                console.log(results.data[0]);
                
            }
                }).catch((err) => {
                    console.log(err);
        });
          
    }
    render(){

        if(this.state.isLoading){
            return(
                <ActivityIndicator/>
            )
        }else{
        return (
            
            <View>
                <Text style={ styles.Titulo2 }>COVID-19</Text>
                <Text style={ styles.Titulo3 }> Pais: {this.state.data.province}</Text>
                <Text style={ styles.Fecha }> Fecha: {this.state.date}</Text>
            <ScrollView>
              <Image source={{uri: 'https://fotografias.antena3.com/clipping/cmsimages01/2011/05/01/E5160795-979A-41F9-8EE7-A226DB31ADB3/58.jpg'}} style={styles.Imagenes} ></Image>
               <View style={{backgroundColor: '#EEA60B', width:'100%', height: 100 }} >
                <Text style={ styles.Categoria } >Contagiados: </Text>
                <Text style={ styles.Numero }> {this.state.data.active}</Text>   
               </View>
                
              <Image source={{uri: 'https://elmanana.com.mx/wp-content/uploads/2020/04/defuncion-1280x720.jpg'}} style={styles.Imagenes} ></Image>      
                 <View style={{backgroundColor: '#EE0B38', width:'100%', height: 100 }}>
                <Text style={ styles.Categoria }>Defunciones: </Text>
                <Text style={ styles.Numero }> {this.state.data.deaths} </Text>
                </View>
             <Image source={{uri: 'https://www.infobae.com/new-resizer/5qVxUqgbeJxbZN9ZrDcPoYEWW6M=/420x280/filters:format(jpg):quality(100)//cloudfront-us-east-1.images.arcpublishing.com/infobae/UEM7J4T7OBFRTJKFW6YVLGWPFA.jpeg'}} style={styles.Imagenes} ></Image>      
                <View style={{backgroundColor: '#2969E9', width:'100%', height: 100 }}>
                <Text style={ styles.Categoria }>Recuperados: </Text>
                <Text style={ styles.Numero }> {this.state.data.recovered} </Text>   
                </View>
            <Image source={{uri: 'https://www.soyunamarca.com/wp-content/uploads/2015/06/fondo-gris.jpg'}} style={styles.Imagenes} ></Image>      
   
                
               
                
            </ScrollView>
            </View>
        
            
        );
        }
    }
}



const styles= StyleSheet.create({
    Imagenes:{
        width : '100%',
        height: 300,
        resizeMode: 'contain',
        borderWidth: 2
    },
   Titulo2 :{
      fontSize : 30,
      fontWeight: "bold",
      textAlign: "center",
    },
    Titulo3:{
        fontSize: 25,
        fontStyle: 'italic'

    },
    Fecha:{
       fontSize:15,

    },
    Categoria:{
        fontSize:25,
        textAlign: "center"
    },
    Numero:{
        fontSize:35,
        fontStyle:"italic",
        textAlign: "center"
    }
});