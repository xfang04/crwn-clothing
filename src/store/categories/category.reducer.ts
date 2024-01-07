import { Category } from "./category.types";
import { UnknownAction } from "redux";
import {
  fetchCategoriesFailure,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./category.action";

export type CategoryState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as UnknownAction,
) => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  } else if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  } else if (fetchCategoriesFailure.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  } else {
    return state;
  }
};
