import { useSelector, TypedUseSelectorHook } from 'react-redux';
import reducer from "../store/reducer";
export type RootState = ReturnType<typeof reducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
