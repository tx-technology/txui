import React, { Component } from 'react';
import {Modal, View, StyleSheet,  TouchableOpacity} from 'react-native';
import RadioBox from './lib/radioBox';
import CheckBox from './lib/checkBox';
import BottomDialog from './lib/BottomDialog';
import TextBox from './lib/textBox';

export default class PopUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            animationTypes: ['fade', 'slide', 'none'],
            popStyle: {
                justifyContent: 'center',
                alignItems: 'center'
            },
            visible: false
        }
    }
    // 关闭蒙层
    closeModal = () => {
        // 点击空白关闭
        if (this.props.blankClose) {
            if (this.props.cancel) {
                this.props.cancel();
            }
        } else if (this.props.type === 'radio') { // 单选默认点击空白关闭
            if (this.props.cancel) {
                this.props.cancel();
            }
        }
    };

    //////蒙层显示时调用
    shows = () => {
        switch (this.props.type) {
            case 'radio':  // 显示单选按钮
            case 'checkBox':
            case 'text':
                this.setState({
                    popStyle: {
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                });
                break;
            case 'bottom':
                this.setState({
                    popStyle: {
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }
                });
                break;

        }
    };
    // 确定展示类型
    showType = () => {
        switch (this.props.type) {
            case 'radio':
                return (
                    <RadioBox
                        dataList = {this.props.dataList}
                        confirm = {this.props.confirm}
                        choose = {this.props.choose}
                        headText = {this.props.title}
                        cancel = {this.props.cancel}
                    />
                );
                break;
            case 'checkBox':
                return (
                    <CheckBox
                        dataList = {this.props.dataList}
                        confirm = {this.props.confirm}
                        choose = {this.props.choose}
                        headText = {this.props.title}
                        cancel = {this.props.cancel}
                    />
                );
                break;
            case 'bottom':
                return (
                    <BottomDialog
                        dataList={this.props.dataList}
                        cancel = {this.props.cancel}
                        headText = {this.props.title}
                    />
                );
                break;
            case 'text':
                return (
                    <TextBox
                        dataList = {this.props.dataList}
                        confirm = {this.props.confirm}
                        cancel = {this.props.cancel}
                        button = {this.props.button}
                        headText = {this.props.title}
                    />
                ); break;
        }
    };
    render() {
        return(
            <Modal
                animationType={this.state.animationTypes.indexOf(this.props.animationType) > -1 ? this.props.animationType: 'fade'}
                style={styles.container}
                transparent={true}
                visible={this.props.visible}
                onShow={this.shows}
                onRequestClose={() => {}}
            >
                < TouchableOpacity activeOpacity = {1} onPress = {this.closeModal} style = {{flex: 1}}>
                    <View style = {[styles.container, this.state.popStyle]}>
                        {
                            this.showType()
                        }
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    }
});
