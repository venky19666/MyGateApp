import { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput as NativeTextInput,
    TextInputProps as NativeTextInputProps,
    StyleSheet
} from 'react-native';
import styled from '@emotion/native'
import FormMessage from './FormMessage';
import { getColor } from './helpers';

interface TextInputProps extends NativeTextInputProps {
    label: string;
    message?: string;
    variant?: 'success' | 'error' | 'warning' | 'info'
}

const Root = styled.View(() => ({
    zIndex: 1
}));

const Label = styled.Text(() => ({
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 12
}));

const TextBox = styled.TextInput<{
    isFocused: boolean;
    variant: TextInputProps['variant']
}>(({ isFocused, theme, variant }) => ({
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    zIndex: 1000,
    borderColor: isFocused ? theme.primary : variant ? getColor(theme, variant) : '#868585',
    borderWidth: 2,
    height: 50,
    paddingHorizontal: 16
}));

export const TextInput = ({ label, message, variant, ...props }: TextInputProps) => {
    const ref = useRef<NativeTextInput>(null);
    const [{ isFocused }, setTextboxState] = useState({
        isFocused: false,
    });
    const onPress = () => {
        ref.current?.focus()
    }
    const onFocus = () => {
        setTextboxState({ isFocused: true })
    };
    const onBlur = () => {
        setTextboxState({ isFocused: false })
    }
    return (
        <Root>
            <Label onPress={onPress}>{label}</Label>
            <TextBox
                {...props}
                ref={ref}
                onFocus={onFocus}
                onBlur={onBlur}
                isFocused={isFocused}
                placeholderTextColor={'#9b9b9b'}
                variant={variant}
            />
            <FormMessage
                text={message}
                variant={variant}
            />
        </Root>
    )
}

export default TextInput