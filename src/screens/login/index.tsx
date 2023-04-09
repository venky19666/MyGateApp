import React, { useState } from 'react';
import styled from '@emotion/native';
import { View, ScrollView, Text } from 'react-native';
import ToolsPattern from '../../components/svg/images/tools-pattern';
import Logo from '../../components/svg/logo';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import CurvedCity from '../../components/svg/images/curved-city';
import TextInput from '../../components/form/text-input';
import Button from '../../components/form/button';
import OTPInput from '../../components/form/OTPInput';
import { mobileNumRegex } from '../../utils/regex';

const Scrollable = styled(ScrollView)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.primary
}));

const Container = styled(View)(() => ({
  position: 'relative',
  flex: 1
}))

const LogoContainer = styled(View)(() => ({
  height: hp("40%"),
  alignItems: 'center',
  justifyContent: 'center',
}))

const PatternBG = styled(ToolsPattern)(({ }) => ({
  position: 'absolute',
  opacity: 0.4,
}));

const Form = styled(View)(() => ({
  height: hp("60%"),
}));

const CCBox = styled(View)(({ }) => ({
  position: 'relative',
  height: 150,
  overflow: 'hidden'
}));

const CCContainer = styled(CurvedCity)(() => ({
  transform: [{ scaleX: 1.08 }],
  position: 'absolute',
  bottom: 0,
  top: 0,
  left: 0,
  right: 0
}));

const FormTitleContainer = styled(View)(() => ({
  position: 'absolute',
  width: wp("100%"),
  bottom: 20
}));

const FormTitle = styled(Text)(() => ({
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
}));

const FieldsContainer = styled(View)(() => ({
  gap: 8,
  backgroundColor: '#333',
  paddingHorizontal: 32,
  height: (hp("60%") - 150),
  justifyContent: 'center',
}))

const LoginScreen = () => {
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({
    otp: {
      hasError: false,
      message: ''
    },
    mobile: {
      hasError: false,
      message: ''
    }
  })
  const [mobile, setMobile] = useState('')
  const onOtpChange = (text: string) => {
    setOtp(text);
    setErrors(prev => ({
      ...prev,
      otp: {
        hasError: !/[0-9]{4,}/.test(text),
        message: /[0-9]{4,}/.test(text) ? '' : 'Enter valid OTP number!'
      }
    }))
  }
  const onMobileChange = (text: string) => {
    setMobile(text);
    setErrors(prev => ({
      ...prev,
      mobile: {
        hasError: !mobileNumRegex.test(text),
        message: mobileNumRegex.test(text) ? '' : 'Invalid mobile number!'
      }
    }))
  }

  return (
    <Scrollable>
      <Container>
        <PatternBG />
        <LogoContainer>
          <Logo size={120} />
        </LogoContainer>
        <Form>
          <CCBox>
            <CCContainer width={"100%"} />
            <FormTitleContainer>
              <FormTitle>LOGIN</FormTitle>
            </FormTitleContainer>
          </CCBox>
          <FieldsContainer>
            <TextInput
              label='Phone number'
              placeholder='9845652578'
              keyboardType='phone-pad'
              onChangeText={onMobileChange}
            />
            <OTPInput
              variant={'error'}
              message={errors.otp.message}
              label="OTP" onOtpChange={onOtpChange} value={otp} />
            <Button
              title='Send OTP'
              variant='primary'
            />
          </FieldsContainer>
        </Form>
      </Container>
    </Scrollable>
  )
}

export default LoginScreen;