import { observable,action,computed, values, observe } from "mobx";
import ShopCartModel from './ShopCartModel'
export default class ShopCartItem {
    id:number
    name:string
    price:string
    @observable
    count:number
    @observable
    isSelected: boolean
    sectionModel: ShopCartModel
    
    constructor(id,name,price,sectionModel){
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = 0;
        this.isSelected = false;
        this.sectionModel = sectionModel
    }

    
    /**
     *商品数量增加
     *
     * @memberof ShopCartItem
     */
    @action
    countAdd(){
        ++this.count;
    }



    /**
     *
     *商品数量减少
     * @memberof ShopCartItem
     */
    @action
    countSub(){
        if(this.count > 0) {
            --this.count;
        } 
    }



    /**
     *设置当前选中状态
     *
     * @memberof ShopCartItem
     */
    @action
    setSelected(){
        this.isSelected=!this.isSelected;
        this.changeSectionSelectedAction();
        this.changeAllSelectedAction();
    }


    /**
     *更改section选中状态
     *
     * @memberof ShopCartItem
     */
    changeSectionSelectedAction(){
        this.sectionModel.isSectionSelected = this.sectionModel.data.reduce((a,b)=>a&&b.isSelected,true)
    }


    /**
     *更改bottominfo的选中状态
     *
     * @memberof ShopCartItem
     */
    changeAllSelectedAction(){
        this.sectionModel.shopCartStore.isAllSelected = this.sectionModel.shopCartStore.sections.reduce((a,b)=>a&&b.isSectionSelected,true)
    }
}