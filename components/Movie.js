import React, { Component } from 'react';
import {View,Text,ActivityIndicator,FlatList,Image,TouchableNativeFeedback} from 'react-native'
export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading:true,
            mList:[],
            pageSize:10,
            pageStart:1,
            total:0,
            isOver:false
         }
    }
    componentWillMount() {
        this.getMovieListByMtype()
    }

    render() { 
        return ( 
            <View>
               {this.renderContent()}
            </View>
         );
    }

    renderContent=()=>{
        if(this.state.isLoading){
            return <ActivityIndicator size="large"/>
        }else{
            return <View>
                    <FlatList
                    data={this.state.mList}
                    renderItem={({item,index})=>this.renderItem(item)} //渲染每一项
                    keyExtractor={(item)=>item.id+""} //获得key 一定是一个字符串
                    ItemSeparatorComponent={()=><View style={{borderTopColor:"#ccc",borderTopWidth:1,marginHorizontal:6}}></View>}
                    //实现上拉加载的效果
                        onEndReachedThreshold={0.2}
                        onEndReached={()=>this.getMoreData()}
                        ListFooterComponent={()=>this.state.isOver ? null:<ActivityIndicator size="large"/>} //列表末尾可以加的组件
                    />
                </View>
        }
    }
       
    //根据获取到的参数请求数据
    getMovieListByMtype=async()=>{
        //app和小程序一样没有跨域的概念
        //console.warn("ok")
        const start=(this.state.pageStart-1)*this.state.pageSize
        const res= await fetch(this.baseUrl+`/api/v2/movie/${this.props.mtype}?start=${start}&count=${this.state.pageSize}`)
        const data=await res.json()
      
        this.setState({
            isLoading:false,
            mList:this.state.mList.concat(data.subjects),//实现上拉加载的时候原数据还在
            total:data.total
        })
    }
    //渲染电影列表
    renderItem=(item)=>{
        return <TouchableNativeFeedback 
        // 使用编程式导航传递参数中间是一个对象的形式 也可以设置导航条的title
        onPress={()=>this.Actions.movieDetail({id:item.id,title:item.title})}
        background={TouchableNativeFeedback.SelectableBackground()}>
         <View style={{flexDirection:"row",padding:6}}>
            <Image source={{uri:item.images.small}} style={{width:160,height:200,marginRight:6}}/>
            <View style={{justifyContent:"space-around"}}>
                <Text>电影名称：{item.title}</Text>
                <Text>电影类型：{item.genres.join(",")}</Text>
                <Text>上映年份：{item.year}</Text>
                <Text>豆瓣评分：{item.rating.average}</Text>
            </View>
        </View>
    </TouchableNativeFeedback>
    }
    //获取下一页的数据
    getMoreData=()=>{
        //判断 是否还有数据
        if(this.state.pageSize*this.state.pageStart >= this.state.total){
            this.setState({
                isOver:true
            })
            return 
        }
        this.setState({
            pageStart:this.state.pageStart+1
        },function(){//修改完数据后重新调用一下函数
            this.getMovieListByMtype()
        })
    }
}