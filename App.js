import React, { Component } from 'react';
//在根组件中导入路由
import {Router,Stack,Scene,Actions,Tabs} from 'react-native-router-flux'
//可能会使用到编程式导航所以我们将Actions注册到组件的原型上
React.Component.prototype.Actions=Actions
//导入Main 组件
import Main from './components/Main';
//导入电影列表页面1
import Movie from './components/Movie'
//导入电影详情页面
import MovieDetail from './components/MovieDetail'
//配置根路径
React.Component.prototype.baseUrl="http://www.liulongbin.top:3005"

export default class App extends Component {
  render() { 
    return ( 
      <Router>
        <Stack>
          <Scene key="main" component={Main} hideNavBar={true}/>
          <Tabs tabBarPosition="top" lazy={true} hideNavBar={true}>
            {/* 这三个都是对应相同的组件只是参数不同而已 */}
             <Scene key="in_theaters" component={Movie} 
             title="正在热映" 
             hideNavBar={true}
             mtype="in_theaters"
             />
             <Scene key="coming_soon" component={Movie} 
             title="即将上映" 
             hideNavBar={true}
             mtype="coming_soon"
             />
             <Scene key="top250" component={Movie} 
             title="Top250" 
             hideNavBar={true}
             mtype="top250"
             />
          </Tabs>
          <Scene key="movieDetail" component={MovieDetail}
          navigationBarStyle={{backgroundColor:"#1F96F1"}}
          titleStyle={{color:"#fff",fontSize:18}}
          backButtonTintColor="red"/>
        </Stack>
      </Router>
     );
  }
}
 



