import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class Person extends Component {
    exit=()=>{
        AsyncStorage.clear();
        Actions.login();
    }
    render() {
        return (
            <View>
                <View
                    style={{ width: '100%', height: '29%', backgroundColor: '#f23030' }}
                >
                    <Image
                        source={require('../../assets/touxiang.png')}
                        style={{ height: 70, width: 70, marginTop: '10%', marginLeft: '43%' }}
                    />
                    <Text style={{ marginLeft: '36%', fontSize: 20, color: 'white' }}>
                        BINNU DHILLON
                    </Text>
                </View>
                <View
                    style={{ backgroundColor: '#ffffff', width: '100%', height: '7%', flexDirection: 'row' }}
                >
                    <Image
                        source={require('../../assets/guai.png')}
                        style={{ marginTop: 18, marginLeft: 10, width: 30, height: 29 }}
                    />
                    <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 15, color: '#4f4e4e' }}>
                        我的个人中心
                    </Text>
                </View>
                <View style={styles.one}>
                    <View style={{ width: '100%', marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 45, height: 45, marginLeft: 50 }}
                                source={require('../../assets/1.png')}
                            />
                            <Image style={{ width: 45, height: 45, marginLeft: 120 }}
                                source={require('../../assets/1.png')}
                            />
                            <Image style={{ width: 45, height: 45, marginLeft: 130 }}
                                source={require('../../assets/1.png')}
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, marginLeft: 35, color: '#4f4e4e' }}>账户管理</Text>
                            <Text style={{ fontSize: 15, marginLeft: 108, color: '#4f4e4e' }}>收货地址</Text>
                            <Text style={{ fontSize: 15, marginLeft: 120, color: '#4f4e4e' }}>我的信息</Text>
                        </View>
                        <View style={{ width: '100%', marginTop: 5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: 45, height: 45, marginLeft: 50, }}
                                    source={require('../../assets/1.png')}
                                />
                                <Image style={{ width: 45, height: 45, marginLeft: 120 }}
                                    source={require('../../assets/1.png')}
                                />
                                <Image style={{ width: 45, height: 45, marginLeft: 130 }}
                                    source={require('../../assets/1.png')}
                                />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 15, marginLeft: 35, color: '#4f4e4e' }}>我的订单</Text>
                                <Text style={{ fontSize: 15, marginLeft: 105, color: '#4f4e4e' }}>我的二维码</Text>
                                <Text style={{ fontSize: 15, marginLeft: 105, color: '#4f4e4e' }}>我的积分</Text>
                            </View>
                        </View>

                        <View style={{ width: '100%', }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: 45, height: 45, marginLeft: 50 }}
                                    source={require('../../assets/1.png')}
                                />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 15, marginLeft: 35, color: '#4f4e4e' }}>我的收藏</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.two}>
                    <Image
                        source={require('../../assets/e.png')}
                        style={{ marginTop: 11, marginLeft: 10, width: 30, height: 29 }}
                    />
                    <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 15, color: '#4f4e4e' }}>
                        E族活动
                    </Text>
                </View>

                <View style={styles.three}>
                    <View style={{ width: '100%', marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 45, height: 45, marginLeft: 50 }} source={require('../../assets/1.png')} />
                            <Image style={{ width: 45, height: 45, marginLeft: 120 }} source={require('../../assets/1.png')} />
                            <Image style={{ width: 45, height: 45, marginLeft: 130 }} source={require('../../assets/1.png')} />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, marginLeft: 25, color: '#4f4e4e' }}>居家维修保养</Text>
                            <Text style={{ fontSize: 15, marginLeft: 88, color: '#4f4e4e' }}>出行接送</Text>
                            <Text style={{ fontSize: 15, marginLeft: 107, color: '#4f4e4e' }}>我的受赠人</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 5 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 45, height: 45, marginLeft: 50 }} source={require('../../assets/1.png')} />
                            <Image style={{ width: 45, height: 45, marginLeft: 120 }} source={require('../../assets/1.png')} />
                            <Image style={{ width: 45, height: 45, marginLeft: 130 }} source={require('../../assets/1.png')} />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, marginLeft: 25, color: '#4f4e4e' }}>我的住宿优惠</Text>
                            <Text style={{ fontSize: 15, marginLeft: 88, color: '#4f4e4e' }}>我的活动</Text>
                            <Text style={{ fontSize: 15, marginLeft: 115, color: '#4f4e4e' }} onPress={()=>Actions.fabu()} title="我的发布">我的发布</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 15, marginLeft: '40%',width:100,height:30,backgroundColor:'red',borderRadius:50}}>
                    <Text style={{color: 'white',fortSize:'15',marginLeft:15,marginTop:5}}
                        onPress={this.exit}
                    >
                        退出登录
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    one: {
        backgroundColor: '#ffffff', width: '100%',
        borderBottomColor: '#ffffff', borderLeftColor: '#ffffff',
        borderTopColor: '#e8e8e8', borderRightColor: '#ffffff', borderWidth: 1
    },
    two: {
        marginTop: 5, width: '100%',
        height: '7%', flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    three: {
        backgroundColor: '#ffffff', width: '100%',
        height: 170, borderBottomColor: '#ffffff',
        borderLeftColor: '#ffffff', borderTopColor: '#e8e8e8',
        borderRightColor: '#ffffff', borderWidth: 1
    }
})