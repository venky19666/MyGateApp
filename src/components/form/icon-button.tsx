import { MotiPressable } from 'moti/interactions';
import React, { FunctionComponent } from 'react';
import styled from '@emotion/native'
import { SvgProps } from 'react-native-svg';
import { useTheme } from '@emotion/react';


interface IconButtonProps {
    size?: number;
    variant: "primary" | "secondary";
    icon: FunctionComponent<SvgProps & { size: number }>
    onPress?: () => {}
}

const Pressable = styled(MotiPressable)<{
    variant: "primary" | "secondary";
}>(({ theme, variant }) => ({
    backgroundColor: variant === "primary" ? theme.secondary : variant === "secondary" ? theme.primary : theme.background,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9
}))

const IconButton = ({ size = 20, icon: Icon, variant, onPress }: IconButtonProps) => {
    const theme = useTheme()
    return (
        <Pressable variant={variant} onPress={onPress}>
            <Icon size={size} color={variant === "primary" ? theme.primary : variant === "secondary" ? theme.secondary : theme.color} />
        </Pressable>
    )
}

export default IconButton