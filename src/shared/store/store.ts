import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import productsSliceStore, {
  IProductsInitialState,
  TProductsActions,
} from "@features/Products/store/productsSliceStore";

export type TGlobalInitialState = IProductsInitialState;
// combine with other initial states as needed. Example: & HomeInitialState

export type TGlobalActions = TProductsActions;
// combine with other initial actions as needed: Example: & HomeActions

export type Store = ReturnType<(typeof slices)["productsSliceStore"]>;
// combine slices types. Example: & ReturnType<(typeof slices)["homeSliceStore"]>

export type StateCallback = (state: TGlobalInitialState) => TGlobalInitialState;
export type SetCallback<T> = (set: (state: T) => void) => void;

export const slices = {
  productsSliceStore: productsSliceStore.slice,
  // add other slices here.
  // Example: homeSliceStore: homeSliceStore.slice,
};

export const useStore = create(
  immer<Store>((set) => ({
    ...productsSliceStore.slice(set as SetCallback<IProductsInitialState>),
    // add other slices here.
    // ...homeSliceStore.slice(set as SetCallback<IHomeInitialState>),
  }))
);
