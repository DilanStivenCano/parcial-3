import { Product } from "../types/product";
import { Actions, SomeActions } from "../types/store";

const saveProduct = (product: Product): Actions =>{
    return{
        action: SomeActions.SAVE_PRODUCT,
        payload: product,

    };
};