import { useStore } from "@shared/store";
import {
  IProductsInitialState,
  TProductsActions,
} from "../store/productsSliceStore";

export const useProductsAction = <K extends keyof TProductsActions>(
  actionName: K
) => {
  const action = useStore((state) => state[actionName]);
  return action;
};

export const useProductsState = <K extends keyof IProductsInitialState>(
  stateName: K
) => {
  const state = useStore((state) => state[stateName]);
  return state;
};
