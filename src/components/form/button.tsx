import React from 'react';
import styled from '@emotion/native'
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import { MotiPressable } from 'moti/interactions';
import { useTheme } from '@emotion/react';

interface ButtonProps {
    title: string;
    isLoading?: boolean;
    variant: "primary" | "secondary"
}

const Pressable = styled(MotiPressable)<{
    variant: "primary" | "secondary"
}>(({ theme, variant }) => ({
    backgroundColor: variant === 'primary' ? theme.primary : variant === 'secondary' ? theme.secondary : theme.color,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10
}));

const TitleText = styled.Text<{
    variant: "primary" | "secondary"
}>(({ theme, variant }) => ({
    fontWeight: 'bold',
    fontSize: 18,
    color: variant === 'primary' ? theme.secondary : variant === 'secondary' ? theme.primary : theme.background,
}));

const LoadingIndicator = styled(ActivityIndicator)(() => ({
    marginRight: 10,
}))

const Button = ({ title, isLoading, variant }: ButtonProps) => {
    const theme = useTheme()
    return (
        <Pressable variant={variant} onPress={()=>{}} disabled={isLoading}>
            {isLoading && <LoadingIndicator color={variant === 'primary' ? theme.secondary : variant === 'secondary' ? theme.primary : theme.background} size={24} />}
            <TitleText variant={variant}>{title}</TitleText>
        </Pressable>
    )
}

export default Button