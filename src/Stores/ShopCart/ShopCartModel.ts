import { observable,action,computed, runInAction, values} from "mobx";
// import PropTypes from 'prop-types'
import ShopCartStore from './index'
import ShopCartItem from './ShopCartItem'

export default class ShopCartModel {
    title:string
    data=[]
    @observable
    isSectionSelected =false;
    @observable
    shopCartStore:ShopCartStore

    constructor(title,data,shopCartStore){
        this.title = title;
        let temp = [];
        data.map((item,index)=>{
            temp.push(
                new ShopCartItem(index,item,3,this)
            )
        })
        this.data = temp;
        this.shopCartStore = shopCartStore;  
    }
    

    /**
     *
     *更改当前的section的选中状态
     * @memberof ShopCartModel
     */
    @action
    setHeaderSelected(){
        this.isSectionSelected = !this.isSectionSelected;
        this.changeFatherNodeSelectedAction();
        this.changeItemSelectedAction()
    }


    /**
     *更改bootomInfo的全选状态
     *
     * @memberof ShopCartModel
     */
    changeFatherNodeSelectedAction(){
        this.shopCartStore.isAllSelected = this.shopCartStore.sections.reduce((a,b)=>a&&b.isSectionSelected,true)
    }


    /**
     *
     *遍历所有的item,更改状态
     * @memberof ShopCartModel
     */
    changeItemSelectedAction(){
        this.data.reduce((a,b)=>b.isSelected=this.isSectionSelected,false);
        
    }


    /**
     *
     * 供全选处调用,改变当前section的选中状态与isAllSelected保持一致
     * 并调用changeItemSelectedAction更改item的选中状态
     * @param {boolean} isSelected
     * @memberof ShopCartModel
     */
    changeAllState(isSelected:boolean) {
        this.isSectionSelected=isSelected;
        this.changeItemSelectedAction();
    }

}