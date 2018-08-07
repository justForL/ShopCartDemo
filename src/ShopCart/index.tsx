import * as React from 'react'
import { View,Text,Image,SectionList ,StyleSheet} from 'react-native';

import {observer} from 'mobx-react/native'
import {shopCartStore} from '../Stores/ShopCart'
import ShopCartIndexItem from './Views/ShopCartIndexItem'
import ShopCartIndexSectionHeader from './Views/ShopCartIndexSectionHeader'
import ShopCartIndexBottomCartInfo from './Views/ShopCartIndexBottomCartInfo'
@observer
export default class ShopCart extends React.Component <any> {
    state = {  }
    public setStatusBarColor(): { color?: string; imgAsStatusBar?: boolean; } {
        return {}
    }
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        shopCartStore.getShopCartData();
    }
    _renderSectionHeader({section,index}) {
        return(
           <ShopCartIndexSectionHeader   
           section={section}
           key={index}
           />
        );
    }
    _keyExtractor = ()=> Math.random();
    _renderItem({item}, index){
        return(
            <ShopCartIndexItem index={index} item={item}/>
        )
        
    }
    render() {
        return (
            <View style={styles.container}>
                <SectionList  
                  sections={shopCartStore.dataSource}
                  renderItem={this._renderItem.bind(this)}
                  renderSectionHeader={this._renderSectionHeader.bind(this)}
                  stickySectionHeadersEnabled={false}
                  keyExtractor={this._keyExtractor.bind(this)}
                />
                <ShopCartIndexBottomCartInfo 
                    shopCartStore={shopCartStore}/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 44,
    }
});