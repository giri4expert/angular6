import { Sku } from '../sku';

export class Product{
    pid
    pname
    skuList: Sku[] = []
    csku
    constructor(frmData: {prdId:'',prdName:'', skills:{skuId:'',skuName:''}}){
        
        this.pid = frmData.prdId
        this.pname = frmData.prdName
        this.csku = new Sku()
        this.csku.id = frmData.skills['skuId']
        this.csku.name = frmData.skills['skuName']
        this.skuList.push(this.csku)
    }
    
}
