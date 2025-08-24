import { SetCallback } from "@shared/store";

export interface IProductsInitialState {
  favoriteProducts: string[];
}

export const initialState: IProductsInitialState = {
  favoriteProducts: [],
};

const actions = (set: SetCallback<IProductsInitialState>) => ({
  addFavoriteProduct: (productId: string) =>
    set((state: IProductsInitialState) => {
      state.favoriteProducts.push(productId);
    }),

  removeFavoriteProduct: (productId: string) =>
    set((state: IProductsInitialState) => {
      state.favoriteProducts = state.favoriteProducts.filter(
        (id) => id !== productId
      );
    }),

  resetProductsSlice: () => set(() => initialState),
});

const slice = (set: SetCallback<IProductsInitialState>) => ({
  ...initialState,
  ...actions(set),
});

export type TProductsActions = ReturnType<typeof actions>;

export default {
  slice,
  initialState,
};
