import * as React from 'react'
import { View,Text,Image,SectionList ,StyleSheet} from 'react-native';
import {observer} from 'mobx-react/native'
interface ItemProps {
index:number;
item;
}
@observer
export default class ShopCartIndexItem extends React.Component<ItemProps> {
    render() {
        const {index,item}=this.props;
        return (
            <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                <Text key={index} onPress={()=>item.setSelected()}>{item.isSelected ? "selected":item.name}</Text>
                <Text onPress={()=>item.countAdd()}>+</Text>
                <Text onPress={()=>item.countJian()}>-</Text>
            </View>
        );
    }
}

