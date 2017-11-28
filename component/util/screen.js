import { Dimensions, PixelRatio } from 'react-native';

// UI 默认给图是 720
const uiWidthPx = 720;
const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
const onePixel=1 / PixelRatio.get();
const ratio = PixelRatio.get() / 2 ;
const pageHeader=50;

function pxToDp(uiElementPx) {
    return (uiElementPx *  width / uiWidthPx) ;
}
export default {
    width: width,
    height: height,
    onePixel: onePixel,
    pageHeader: pageHeader,
    pxToDp: pxToDp,
}
