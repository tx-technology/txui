import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, Image,} from 'react-native';
import hasChoose from '../image/addrepair_rb_pre.png';
import choose from '../image/addrepair_rb.png';
import {screen} from '../../util';
import Button from '../../button/RButton';

export default class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasChoose: [],
            dataList: this.props.dataList
        };
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
    // 选中一项
    _choose = (position) => {
        let ls = this.state.hasChoose;
        // 取反
        ls[position] = !ls[position];
        this.setState({
           hasChoose: ls
        });
    };
    // 确认选择后
    _sureChoose = () => {
        this.props.confirm({position: this.state.hasChoose});
    };
    // 取消
    _cancel = () => {
      this.props.cancel();
    };
    // 初始化
    componentWillMount() {
        let ls = [];
        // 循环
        for (let key in this.props.dataList) {
            ls.push(false);
        }
        if (this.props.choose !== undefined) {
            for (let key in this.props.choose) {
                if (this.props.choose[key]) {
                    ls[key] = true;
                }
            }
        }
        this.setState({
            hasChoose: ls
        });
    }
    // show list
    showList = () => {
        if (Array.isArray(this.state.dataList)) {
            return this.state.dataList.map((item, i) => (
                <TouchableNativeFeedback
                    onPress={this._choose.bind(this, i)}
                    key={i}
                >
                    <View  style={styles.baseItem}>
                        <Image source={this.state.hasChoose[i] ? hasChoose : choose} style={styles.baseIcon}/>
                        <Text style={styles.itemText}>{item.text}</Text>
                    </View>
                </TouchableNativeFeedback>
            ))
        }
    };
    // 是否需要更新
    // 显示
    render () {
        return(
            <View style={styles.box}>
                {/*头部*/}
                <View>
                    {this.header()}
                </View>
                {/*具体*/}
                <View style={styles.contentBox}>
                    {
                       this.showList()
                    }
                </View>
                {/*底部按钮*/}
                <View style={styles.bottomBox}>
                    {/*取消按钮*/}
                    <Button
                        buttonStyle={styles.outButton}
                        textStyle={styles.outText}
                        title='取消'
                        press={this._cancel}
                    />
                    {/*确定按钮*/}
                    <Button
                        buttonStyle={styles.sureButton}
                        textStyle={styles.sureText}
                        title="确认"
                        press={this._sureChoose}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        width: screen.pxToDp(550),
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
    contentBox: {
        width: screen.pxToDp(550),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    baseItem: {
        width: screen.pxToDp(550) / 2,
        paddingLeft: screen.pxToDp(30),
        paddingRight: screen.pxToDp(30),
        height: screen.pxToDp(100),
        flexDirection: 'row',
        alignItems: 'center',
    },
    baseIcon: {
        width: screen.pxToDp(40),
        height: screen.pxToDp(40)
    },
    bottomBox: {
        height: screen.pxToDp(100),
        marginBottom: screen.pxToDp(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    outButton: {
        width: screen.pxToDp(210),
        height: screen.pxToDp(80),
        backgroundColor: "#cccccc",
        borderStyle: "solid",
        borderWidth: screen.pxToDp(1),
        borderColor: "#999999",
        borderRadius: screen.pxToDp(4)
    },
    outText: {
        fontFamily: "SourceHanSansCN-Normal",
        fontSize: screen.pxToDp(36),
        color: "#333333"
    },
    sureButton: {
        width: screen.pxToDp(210),
        height: screen.pxToDp(80),
        backgroundColor: "#ff5e61",
        borderRadius: screen.pxToDp(4)
    },
    sureText: {
        fontFamily: "SourceHanSansCN-Normal",
        fontSize: screen.pxToDp(36),
        color: "#fff"
    },
    itemText: {
        fontFamily: "SourceHanSansCN-Normal",
        fontSize: screen.pxToDp(36),
        color: "#333333",
        marginLeft: screen.pxToDp(10)
    }
});