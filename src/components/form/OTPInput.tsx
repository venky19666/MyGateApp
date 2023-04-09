import { Text, View, TextInput } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react';
import styled from '@emotion/native';
import FormMessage from './FormMessage';
import { getColor } from './helpers';

const Container = styled.Pressable(() => ({
    position: 'relative'
}));

const Label = styled(Text)(() => ({
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 12
}));

const SplitBoxContainer = styled(View)(() => ({
    justifyContent: 'space-between',
    flexDirection: 'row',
}));

const HiddenInput = styled(TextInput)(() => ({
    position: 'absolute',
    backgroundColor: 'white',
    right: 0,
    bottom: 0,
    opacity: 0
}));

const SplitBox = styled(View)<{
    variant?: 'success' | 'error' | 'warning' | 'info',
    isFocused?: boolean
}>(({ theme, isFocused, variant }) => ({
    borderColor: isFocused ? theme.primary : variant ? getColor(theme, variant) : '#868585',
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
}));

const SplitBoxText = styled(Text)(() => ({
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
}));

interface OTPInputProps {
    label: string;
    message?: string;
    variant?: 'success' | 'error' | 'warning' | 'info';
    value?: string;
    onOtpChange?: (value: string) => void
}

const OTPInput = ({ label, message, variant, value, onOtpChange }: OTPInputProps) => {
    const otpRef = useRef<TextInput>(null);
    const [isFocused, setIsFocused] = useState(false);

    const onOTPInputPress = () => {
        otpRef.current?.focus()
    }

    const getValue = (pos: number, str?: string) => {
        if (str) {
            return str[pos]
        }
        return ''
    }

    const isBoxFocused = useCallback((pos: number, value?: string,) => {
        if (isFocused) {
            if (pos === 0 && value?.length === 0) {
                return true;
            } else if (pos === 1 && value?.length === 1) {
                return true;
            } else if (pos === 2 && value?.length === 2)
                return true;
            else if (pos === 3 && value && value?.length >= 3)
                return true;
        }
        return false;
    }, [isFocused])


    return (
        <Container onPress={onOTPInputPress}>
            <Label>{label}</Label>
            <SplitBoxContainer>
                <SplitBox isFocused={isBoxFocused(0, value)}>
                    <SplitBoxText>{getValue(0, value)}</SplitBoxText>
                </SplitBox>
                <SplitBox isFocused={isBoxFocused(1, value)}>
                    <SplitBoxText>{getValue(1, value)}</SplitBoxText>
                </SplitBox>
                <SplitBox isFocused={isBoxFocused(2, value)}>
                    <SplitBoxText>{getValue(2, value)}</SplitBoxText>
                </SplitBox>
                <SplitBox isFocused={isBoxFocused(3, value)}>
                    <SplitBoxText>{getValue(3, value)}</SplitBoxText>
                </SplitBox>
            </SplitBoxContainer>
            <HiddenInput
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                maxLength={4} ref={otpRef} onChangeText={onOtpChange} value={value} />
            <FormMessage
                variant={variant}
                text={message}
            />
        </Container>
    )
}

export default OTPInput