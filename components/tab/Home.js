import React, { Component } from 'react';
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native'
//导入轮播图
import Swiper from 'react-native-swiper'

//样式一般写在页面的前面 
const styles=StyleSheet.create({
    gridList:{
       flexDirection:"row",
       flexWrap:"wrap"
    },
    gridItem:{
        width:"33.3%",
        paddingVertical:16,
        alignItems:"center"
    },
    gridImg:{
        width: 60,
        height:60
    },
    gridText:{
        paddingVertical:10
    }
})

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
    <ScrollView style={{flex:1,backgroundColor:"#fff"}}>
        <View>
            {/* 轮播图区域 */}
            <View style={{ height: 180 }}>
                <Swiper showsButtons={false}
                autoplay={true}
                showsPagination={true}>
                    <Image source={{uri:"http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg"}} 
                    style={{width:"100%",height:"100%"}}
                    resizeMode="stretch"
                    />
                <Image source={{uri:"http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg"}} 
                style={{width:"100%",height:"100%"}}
                resizeMode="stretch"/>
                <Image source={{uri:"http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg"}} 
                style={{width:"100%",height:"100%"}}
                resizeMode="stretch"/>
                </Swiper>
            </View>
            {/* 六宫格区域 */}
                <View style={styles.gridList}>
                    <View style={styles.gridItem}>
                        <Image style={styles.gridImg} source={require("../../images/menu1.png")}/>
                        <Text style={styles.gridText}>新闻资讯</Text>
                    </View>

                    <View style={styles.gridItem}>
                        <Image style={styles.gridImg} source={require("../../images/menu2.png")}/>
                        <Text style={styles.gridText}>图片分享</Text>
                    </View>

                    <View style={styles.gridItem}>
                        <Image style={styles.gridImg} source={require("../../images/menu3.png")}/>
                        <Text style={styles.gridText}>商品购买</Text>
                    </View>

                    <View style={styles.gridItem}>
                        <Image style={styles.gridImg} source={require("../../images/menu4.png")}/>
                        <Text style={styles.gridText}>视频专区</Text>
                    </View>
                    {/* 使用编程式导航跳转 */}
                    <TouchableOpacity style={styles.gridItem} onPress={()=>this.Actions.in_theaters()}>
                        <View>
                            <Image style={styles.gridImg} source={require("../../images/menu5.png")}/>
                            <Text style={styles.gridText}>热映电影</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.gridItem}>
                        <Image style={styles.gridImg} source={require("../../images/menu6.png")}/>
                        <Text style={styles.gridText}>联系我们</Text>
                    </View>
                    
                </View>
            </View>
    </ScrollView>
         );
    }
}
 
