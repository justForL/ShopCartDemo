import * as React from 'react'
import { View,Text,Image,SectionList ,StyleSheet} from 'react-native';
import {observer} from 'mobx-react/native'
import {shopCartStore} from '../../Stores/ShopCart'
import ShopCartStore from '../../Stores/ShopCart'
interface ShopCartIndexBottomCartInfoProps {
    shopCartStore:ShopCartStore
}
@observer
export default class ShopCartIndexBottomCartInfo extends React.Component<ShopCartIndexBottomCartInfoProps> {
    state = {  }
    constructor(props){
        super(props);
    }
    render() {
        const {shopCartStore} = this.props;
        return (
            <View>
                <Text onPress={()=>shopCartStore.setAllSelected()}>{shopCartStore.isAllSelected ? "selected": "no selected"}</Text>
                <Text>商品个数:{shopCartStore.totalCount}</Text>
                <Text>总价:{shopCartStore.totalPrice}</Text>
            </View> 
        );
    }
}