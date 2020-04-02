import React, { Component } from 'react'
import { View, Text,Image, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';
import {Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
const { width} = Dimensions.get('window');
const s = width / 640;
const styles = StyleSheet.create({
    header: {
        height: 70 * s,

        justifyContent: 'center',
        marginLeft: 15
    },
    search: {
        width: 544 * s,
        height: 50 * s,
        backgroundColor: '#fbb8b8',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50
    },
    same: {
        width: '100%',
        height: 85,
        marginTop: 8,
        backgroundColor: '#ffffff',
        flexDirection: 'row'
    },
    pa:{
        marginTop: 25, 
        marginLeft: 40, 
        fontSize: 17, 
        color: '#4f4e4e' 
    }
})
export default class Home extends Component {

    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: 'red', width: '100%', height: 60 }}>
                    <View style={styles.header}>
                        <View style={styles.search}>
                            <Icon name='search' style={{ color: 'white', marginLeft: 20, fontSize: 30 }} />
                            <TextInput
                                placeholder="请输入您要搜索的关键字"
                                style={{
                                    width: 490 * s, height: 50 * s,
                                    padding: 0,
                                    paddingLeft: 10,
                                    color: 'white'
                                }}
                            />
                            <Image source={require('../../assets/buy.png')} />
                        </View>
                    </View>
                </View>
                <Swiper style={{ height: 190 }} >
                    <View>
                        <Image style={{ width: '100%' }} source={require('../../assets/lun.png')} />
                    </View>
                    <View>
                        <Image style={{ width: '100%' }} source={require('../../assets/lun.png')} />
                    </View>
                    <View>
                        <Image style={{ width: '100%' }} source={require('../../assets/lun.png')} />
                    </View>
                </Swiper>
                <View style={{ width: '100%', height: 85, backgroundColor: '#ffffff', flexDirection: 'row' }}>
                    <Image source={require('../../assets/she.png')} />
                    <Text style={styles.pa}>居家维修保养</Text>
                    <Text style={{ marginTop: 20, fontSize: 25, color: 'gray', marginLeft: 200 }}>></Text>
                </View>
                <View style={styles.same}>
                    <Image source={require('../../assets/she.png')} />
                    <Text style={styles.pa}>住宿优惠</Text>
                    <Text style={{ marginTop: 20, fontSize: 25, color: 'gray', marginLeft: 235 }}>></Text>
                </View>
                <View style={styles.same}>
                    <Image source={require('../../assets/she.png')} />
                    <Text style={styles.pa}>出行接送</Text>
                    <Text style={{ marginTop: 20, fontSize: 25, color: 'gray', marginLeft: 235 }}>></Text>
                </View>
                <View style={styles.same}>
                    <Image source={require('../../assets/she.png')} />
                    <Text style={styles.pa}>E族活动</Text>
                    <Text style={{ marginTop: 20, fontSize: 25, color: 'gray', marginLeft: 240 }}>></Text>
                </View>
                <View style={{ width: '80%', height: 50, backgroundColor: '#f23030', borderRadius: 4, marginTop: 30, marginLeft: 45 }}>
                    <Text style={{ color: 'white', fontSize: 17, marginLeft: 160, marginTop: 10 }}>发布需求</Text>
                </View>
                <View style={{ marginTop: 20, marginLeft: '40%' }}>
                    <Text style={{ color: 'gray', fontSize: 13 }}>
                        E族之家 版权所有
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

