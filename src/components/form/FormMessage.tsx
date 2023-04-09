import { Text, View } from 'react-native'
import React from 'react'
import styled from '@emotion/native';
import { getColor } from './helpers';

interface FormMessageProps {
    variant?: 'success' | 'error' | 'warning' | 'info',
    text?: string;
}

const MessageWrapper = styled(View)(()=>({
    height: 18,
    width: "100%",
    justifyContent:'center',
    paddingHorizontal: 5
}));

const MessageText = styled(Text)<{
    variant: FormMessageProps['variant']
}>(({theme,variant='error'})=>({
    color: getColor(theme,variant)
}));

const FormMessage = ({text,variant}:FormMessageProps) => {
  return (
    <MessageWrapper>
      {text!=='' && <MessageText variant={variant}>{text}</MessageText>}
    </MessageWrapper>
  )
}

export default FormMessage