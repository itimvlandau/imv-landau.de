import { VariantType } from "notistack";

interface INotifierState {
    message?: string | null;
    error?: any | null;
    isNetworkError: boolean;
    type?: VariantType;
}

export { INotifierState };