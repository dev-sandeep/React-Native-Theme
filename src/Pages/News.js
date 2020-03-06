import React, {useState, useEffect} from 'react'
import Header from './../Components/Header'
import { Container, Content, Card, CardItem, Text, Body, Grid, Col } from "native-base";
import CardComp from '../Components/Card'
import {SafeAreaView, StatusBar, View, ScrollView} from 'react-native' 

const News = () => {
    const API_KEY = '0dc8ac7f0e564f7a98de3c56a0d9c640';
    const url = 'http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey='+API_KEY;
    
    let [data, setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then((resp)=>{
            setData(resp.articles);
        })
        .catch((e)=>{
            console.log(e);
        });
    }, []);
    
    console.log(data);
    
    return(
        <View>
        <Header />
        {/* <View style={{height:900}}> */}
             
        <ScrollView  >
        
                {/* <Container> */}
                    {data.map((res)=>(
                        <View  key={res.title}>
                            <CardComp  title={res.title} desc={res.description} />
                        </View>
                    ))}
                {/* </Container> */}
        </ScrollView>
      {/* </View> */}
      </View>
    );
}

export default News;