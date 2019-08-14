import { Sku } from '../sku';

export class Product{
    pid
    pname
    skuList: Sku[]
    csku
    constructor(){
        this.csku = new Sku()
    }
    
}
