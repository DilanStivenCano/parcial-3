export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  something: {};
};

export enum SomeActions {
  "SAVE_PRODUCT" = "SAVE_PRODUCT",
}

export interface SomeActionsProduct {
  action: SomeActions.SAVE_PRODUCT;
  payload: Pick<AppState, "something">;
}

export type Actions = SomeActionsProduct;
