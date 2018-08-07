import { observable,action,computed, values, observe } from "mobx";
import ShopCartModel from './ShopCartModel'



export default class ShopCartStore {
    @observable
    sections = [];
    
    @observable
    isAllSelected = false;
    @computed get dataSource (){
        return this.sections.slice()
    }


    /**
     *模拟获取数据
     *
     * @memberof ShopCartStore
     */
    @action 
    getShopCartData(){
        let data = [
            { title: "Title1", data: ["item1", "item2"] },
            { title: "Title2", data: ["item3", "item4"] },
            { title: "Title3", data: ["item5", "item6"] }
          ];
        
        let tempData = [];
        data.map((value,index)=>{
              tempData.push(
                  new ShopCartModel(value["title"],["item1","item2","item3"],this)
              )
        })
        this.sections = tempData;
    }


    /**
     * 全选所有商品 并且遍历所有子元素更改状态与isAllSelected一致
     *
     * @memberof ShopCartStore
     */
    @action 
    setAllSelected(){
        this.isAllSelected = !this.isAllSelected;
        this.sections.reduce((a,b)=>b.changeAllState(this.isAllSelected),false)
    }

    
    /**
     *计算总共的个数
     *
     * @readonly
     * @memberof ShopCartStore
     */
    @computed get totalCount(){
        return this.sections.reduce((a,b)=>a+b.data.reduce((a,b)=>b.isSelected?a+b.count:a,0),0)
    }

    /**
     *计算总共的价格
     *
     * @readonly
     * @memberof ShopCartStore
     */
    @computed get totalPrice(){
        return this.sections.reduce((a,b)=>a+b.data.reduce((a,b)=>b.isSelected?a+b.count * parseFloat(b.price):a,0),0)
    }




}

export  const shopCartStore = new ShopCartStore();
