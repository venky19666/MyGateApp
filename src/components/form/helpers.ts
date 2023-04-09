import { Theme } from "@emotion/react";

export const getColor = (theme: Theme, variant: 'success' | 'error' | 'warning' | 'info') => {
    switch (variant) {
        case 'success':
            return theme.success
        case 'error':
            return theme.error
        case 'warning':
            return theme.warning
        case 'info':
            return theme.primary

        default:
            return theme.primary;
    }
}