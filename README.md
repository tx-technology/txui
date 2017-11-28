#UI组件
@(UI)
### 1, 导入
@(npm install txui --save)
#####或
@(yarn add  txui --save)

### 2, 使用
``` javascript
import {PopUp} from "txui"
........
<PopUp
     animationType="slide"
     dataList = {this.state.dataList}
     visible = {this.state.visible}
     type = {this.state.type}
     cancel = {this.cancel}
     confirm = {this.confirm}
     choose = {this.state.choose}
 />
```
目前组件:  弹窗组件 PopUp
弹窗参数说明:  
| 参数     |作用 |
| :-------- | :--------|
| anmiationType | 弹出动画类型(none, slide, fade)|
| dataList | 显示的数据数组 ,一般形式: [{text: '1234'}] , 底部弹出需要加press字段|
| visible | 控制弹出窗口显示, 隐藏|
| type | 弹窗类型: radio(单选), checkBox(多选), bottom(底部弹出), text(文字提醒)|
| title| 文字标题 |
|cancel| 必须。 关闭弹窗 需设置visible为false|
|confirm| 确认回调，单选弹窗时，会返回选择数据下标,多选返回下标数组|
|choose| 选中项，为数组下标。多选时，需要传入数组|

