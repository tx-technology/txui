import React, { PureComponent } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../button/RButton';
import {screen} from '../../util';

export default class BottomDialog extends PureComponent{
    // 退出
    _cancel = () => {
        if (this.props.cancel) {
            this.props.cancel();
        }
    };
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
        console.log(this.props.dataList);
        console.log(Array.isArray(this.props.dataList));
        if (Array.isArray(this.props.dataList)) {
            return this.props.dataList.map((item, i) => (
                <Button
                    key={i}
                    buttonStyle={[styles.listItem, i === this.props.dataList.length - 1 ? styles.lastItem: {}]}
                    textStyle={styles.itemText}
                    title={item.text}
                    press={item.press ? item.press : {}}
                />
            ))
        }
    };
    render() {
        return(
            <View >
                <View style={styles.allBox}>
                    {/*头部*/}
                    <View >
                        {this.header()}
                    </View>
                    {/*具体区块*/}
                    <View style={styles.contentBox}>
                        {
                            this.showList()
                        }
                    </View>
                </View>
                {/*底部*/}
                <Button
                    buttonStyle={styles.bottom}
                    textStyle={styles.bottomText}
                    title="取消"
                    press={this._cancel}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        minHeight: screen.pxToDp(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: "SourceHanSansCN-Normal",
        fontSize: screen.pxToDp(22),
        color: "#999999"
    },
    allBox: {
      backgroundColor: '#ffffff',
      borderRadius: screen.pxToDp(8),
      overflow: 'hidden'  
    },
    contentBox: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    listItem: {
      width: screen.pxToDp(670),
      height: screen.pxToDp(100),
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: screen.pxToDp(1),
      borderColor: '#cccccc'
    },
    itemText: {
        fontFamily: "SourceHanSansCN-Medium",
        fontSize: screen.pxToDp(36),
        color: "#448aca"
    },
    lastItem: {
      borderWidth: 0
    },
    bottom: {
        width: screen.pxToDp(670),
        height: screen.pxToDp(100),
        marginTop: screen.pxToDp(20),
        marginBottom: screen.pxToDp(16),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: screen.pxToDp(8)
    },
    bottomText: {
        borderRadius: screen.pxToDp(8),
        fontFamily: "SourceHanSansCN-Normal",
        fontSize: screen.pxToDp(36),
        color: "#ff5e61"
    }
});