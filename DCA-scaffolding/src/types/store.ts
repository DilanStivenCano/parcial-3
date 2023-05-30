import { Product } from "./product";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  products: Product[];
};

export enum SomeActions {
  "SAVE_PRODUCT" = "SAVE_PRODUCT",
}

export interface SaveProductActions {
  action: SomeActions.SAVE_PRODUCT;
  payload: Product;
}

export type Actions = SaveProductActions;
