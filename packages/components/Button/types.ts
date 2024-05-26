import type {Component} from "vue";

export type ButtonType = "primary" |  "danger" | "warning" | "success" | "info"

export type ButtonSize = "large" | "medium" | "small"

export type NativeType = "button" | "submit" | "reset"


export interface ButtonProps {
    tag?: string | Component;
    type?: ButtonType;
    size?: ButtonSize;
    nativeType?: NativeType;
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    circle?: boolean;
    plain?: boolean;
    round?: boolean;
}
