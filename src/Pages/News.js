import React, {useState, useEffect} from 'react'
import Header from './../Components/Header'
import { Item, Label, Icon, Form, Input, Button, Text, Spinner } from "native-base";
import CardComp from '../Components/Card'
import {View, ScrollView} from 'react-native' 
import axios from 'react-native-axios'
import CustomCard from './../Components/CustomCard'
import { toastShow } from '../Utility/Common'

const News = (props) => {
    const API_KEY = '0dc8ac7f0e564f7a98de3c56a0d9c640';
    let url = 'http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey='+API_KEY;

    let [data, setData] = useState([]);
    let [search, setSearch] = useState('');
    let [showSpinner, setShowSpinner] = useState(false);

    const getNews = ()=>{

        let searchText = search?'&q='+search:'';
        url = url+searchText;
        setShowSpinner(true);

        axios.get(url)
        .then((resp)=>{
            let toastType = resp.data.articles.length > 0?'success':'danger';

            toastShow(`${resp.data.articles.length} Articles loaded`, toastType);
            setData(resp.data.articles);
            setShowSpinner(false);
        })
        .catch((e)=>{
           alert(e);
           setShowSpinner(false);
        });
    };
    
    const onSubmit = ()=>{
        getNews();
    } 

    const noNews = !data || data.length == 0? <CustomCard text='Search to start' />:<Text></Text>;
    
    return(
        <View>
        <Header />
        <View>
          <Form>
            <Item fixedLabel>
              <Input placeholder="Search" onChangeText={val=>{setSearch(val)}} />
              <Button transparent onPress={onSubmit}>
                <Icon name="search"></Icon>
              </Button>
            </Item>
          </Form>
        </View>

        {showSpinner?
        <Spinner />
        :
        <ScrollView  >
        {noNews}
        {data.map((res)=>(
            <View  key={res.title}>
                <CardComp navigation={props.navigation} data={res}  title={res.title} desc={res.description} />
            </View>
        ))}
         </ScrollView>
        }
      </View>
    );
}

export default News;