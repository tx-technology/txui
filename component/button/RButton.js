//import liraries
import React, {PureComponent} from 'react';
import {View, TouchableNativeFeedback, Text,StyleSheet} from 'react-native';
import {screen} from '../util';
// create a component
class RButton extends PureComponent {
    // _onPressButton = () => {
    //     this.navigation.navigate('Main')
    //     console.log('hello world');
    // };

    render() {
        //let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <TouchableNativeFeedback
                onPress={this.props.press}
                background={TouchableNativeFeedback.SelectableBackground()}
            >
                <View style={[baseStyle.baseButton, this.props.buttonStyle]}>
                    <Text style={[baseStyle.baseText, this.props.textStyle]}>{this.props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
const baseStyle = StyleSheet.create({
   baseButton: {
       alignItems: 'center',
       justifyContent: 'center',
       width: screen.pxToDp(210),
       height: screen.pxToDp(80)
   },
    baseText: {
        fontFamily: "SourceHanSansCN-Normal",
        fontSize: screen.pxToDp(36),
        color: "#333333"
    }
});
//make this component available to the app
export default RButton;
