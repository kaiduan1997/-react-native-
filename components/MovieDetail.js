import React, { Component } from 'react';
import {View,Text,ActivityIndicator,Image,ScrollView} from "react-native"

export default class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isloading:true,
            mInfo:{}
         }
    }
    componentWillMount() {
        this.getMovieDetail()
    }
    
    render() { 
        return ( 
            <View style={{height:"100%"}}>
                <ScrollView style={{flex:1}}>
                    {this.renderMovieDetail(this.state.mInfo)}
                </ScrollView>
            </View>
         );
    }
    // 定义一个函数获取数据
    getMovieDetail= async()=>{
       const res=await fetch(this.baseUrl+`/api/v2/movie/subject/${this.props.id}`)
       const data=await res.json()
        this.setState({
            isloading:false,
            mInfo:data
        })
       
    }
    renderMovieDetail=(mInfo)=>{
        if(this.state.isloading){
            return <ActivityIndicator size="large"/>
        }else{
            return <View style={{paddingTop:20,alignItems:"center"}}>
                <Image source={{uri:mInfo.images.large}} style={{width: 200,height: 300}}/>
                <Text style={{lineHeight:30}}>        {mInfo.summary}</Text>
            </View>
        }
    }
}
 