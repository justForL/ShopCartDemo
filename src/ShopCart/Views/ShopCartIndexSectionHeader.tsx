import * as React from 'react'
import { View,Text,Image,SectionList ,StyleSheet} from 'react-native';
import {observer} from 'mobx-react/native'

interface SectionHeaderProps {
section
}
@observer
export default class ShopCartIndexSectionHeader extends React.Component<SectionHeaderProps>{
    render(){
        const {section} = this.props;
        return(
            <Text key={section.title} onPress={()=>{section.setHeaderSelected()}} style={{ fontWeight: "bold" }}>{section.isSectionSelected ? "selected" : section.title}</Text>
        )
    }
}