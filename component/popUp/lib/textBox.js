import React, { PureComponent } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../button/RButton';
import {screen} from '../../util';

export default class TextBox extends PureComponent {
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
    //取消或者失败
    _cancel = () => {
        if (this.props.cancel) {
          this.props.cancel();
        }
    };
    // 确定
    _sureChoose = () => {
        if (this.props.confirm) {
          this.props.confirm();
        }
    };
    // 显示列表
    showList = () => {
        if (Array.isArray(this.props.dataList)) {
            return this.props.dataList.map((item, i) => (
                    <Text style={styles.contentText} key={i}>
                        {item.text}
                    </Text>
                )
            )
        }
    };
    // 显示
    render() {
        return (
            <View style={styles.box}>
                {/*头部*/}
                <View>
                    {this.header()}
                </View>
                {/*内容*/}
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
                        title={this.props.button ? this.props.button.cancel: '取消'}
                        press={this._cancel}
                    />
                    {/*确定按钮*/}
                    <Button
                        buttonStyle={styles.sureButton}
                        textStyle={styles.sureText}
                        title={this.props.button ? this.props.button.sure: '确定'}
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
        borderRadius: screen.pxToDp(6),
        overflow: 'hidden'
    },
    header: {
        height: screen.pxToDp(80),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    headerText: {
        color: "#666666",
        fontFamily: "SourceHanSansCN-Normal",
        fontSize: screen.pxToDp(36)
    },
    contentBox: {
        minHeight: screen.pxToDp(100),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    contentText: {
        fontFamily: "Roboto-Regular",
        fontSize: screen.pxToDp(30),
        color: "#333333"
    },
    bottomBox: {
        height: screen.pxToDp(100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: screen.pxToDp(20)
    },
    outButton: {
        width: screen.pxToDp(210),
        height: screen.pxToDp(80),
        backgroundColor: "#ffffff",
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
    }
});