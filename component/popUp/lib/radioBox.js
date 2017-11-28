import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, Image} from 'react-native';
import hasChoose from '../image/addrepair_rb_pre.png';
import choose from '../image/addrepair_rb.png';
import {screen} from '../../util';

export default class RadioBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasChoose: []};
    }
    // 选择一个
    _choose = (position) => {
        // 定义了函数就执行
        if (this.props.confirm) {
            this.props.confirm({position: position});
        }
    };
    // 初始值
    componentDidMount() {
        let ls = [];
        // 循环
        for (let key in this.props.dataList) {
            ls.push(false);
        }
        if (this.props.choose !== undefined) {
            ls[this.props.choose] = true;
        } else {
            ls[0] = true;
        }
        this.setState({
            hasChoose: ls
        });
    }
    // 返回头部
    header() {
        if (this.props.headText) {
            return (
                <View style={styles.header}>
                    <Text style={styles.headerText}>{this.props.headText}</Text>
                </View>
            );
        }
    }
    //
    showList = () => {
        if (Array.isArray(this.props.dataList)) {
            return this.props.dataList.map((item, i) => (
                <TouchableNativeFeedback
                    onPress={this._choose.bind(this, i)}
                    key={i}
                >
                    <View  style={[styles.baseItem, i === this.props.dataList.length - 1 ? styles.lastItem: {}]}>
                        <Text style={styles.itemText}>{item.text}</Text>
                        <Image source={this.state.hasChoose[i] ? hasChoose : choose} style={styles.baseIcon}/>
                    </View>
                </TouchableNativeFeedback>
            ))
        }
    };
    //
    render() {
        return (
            <View style = {styles.box}>
                <View>
                    {
                        this.header()
                    }
                </View>
                {
                    this.showList()
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        width: screen.pxToDp(445),
        backgroundColor: '#ffffff',
        borderRadius: screen.pxToDp(6)
    },
    header: {
        height: screen.pxToDp(80),
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: "#666666",
        fontFamily: "SourceHanSansCN-Normal",
        fontSize: screen.pxToDp(36)
    },
    baseItem: {
        paddingLeft: screen.pxToDp(30),
        paddingRight: screen.pxToDp(30),
        height: screen.pxToDp(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: screen.pxToDp(1),
        borderBottomColor: '#ccc'
    },
    lastItem: {
        borderBottomWidth: screen.pxToDp(1)
    },
    baseIcon: {
        width: screen.pxToDp(40),
        height: screen.pxToDp(40)
    },
    itemText: {
        fontFamily: "SourceHanSansCN-Normal",
        fontSize: screen.pxToDp(36),
        color: "#333333"
    }
});