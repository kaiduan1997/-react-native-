import React, { Component } from 'react';
import {View,Text} from "react-native";
//导入导航
import TabNavigator from "react-native-tab-navigator";
//导入字体图标
import Icon from 'react-native-vector-icons/Ionicons'

//导入组件
import Home from './tab/Home'
import ShopCar from './tab/ShopCar'
import User from './tab/User'
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedName:"home"
          }
    }
    render() { 
        return ( 
            <View style={{flex:1}}>
               <TabNavigator >
                    <TabNavigator.Item title="首页"
                    selected={this.state.selectedName==="home"}
                    onPress={()=>this.setState({selectedName:"home"})}
                    renderIcon={() => <Icon name="md-home" size={22} color="#900" />}
                    renderSelectedIcon={() => <Icon name="md-home" size={22} color="#0078D7" />}
                    >
                        <Home></Home>
                    </TabNavigator.Item>
                    <TabNavigator.Item title="购物车"
                     selected={this.state.selectedName==="shopCar"}
                     onPress={()=>this.setState({selectedName:"shopCar"})}
                     renderIcon={() => <Icon name="md-cart" size={22} color="#900" />}
                     renderSelectedIcon={() => <Icon name="md-cart" size={22} color="#0078D7" />}
                     badgeText="0"
                     >
                        <ShopCar></ShopCar>
                    </TabNavigator.Item>
                    <TabNavigator.Item title="会员"
                    selected={this.state.selectedName==="user"}
                    onPress={()=>this.setState({selectedName:"user"})}
                    renderIcon={() => <Icon name="md-contact" size={22} color="#900" />}
                    renderSelectedIcon={() => <Icon name="md-contact" size={22} color="#0078D7" />}
                    >
                        <User></User>
                    </TabNavigator.Item>
               </TabNavigator>
            </View>
         );
    }
}
 