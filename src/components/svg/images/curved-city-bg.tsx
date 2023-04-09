import { View } from 'react-native'
import React from 'react';
import styled from "@emotion/native"
import CurvedCity from './curved-city';

const Root = styled(View)<{ width: number | string, height: number | string }>
    (({ width,height }) => ({
        width: width,
        height:height
    }));

const CCBox = styled(View)(({ }) => ({
    position: 'relative',
    height: 150,
    overflow:'hidden'
}));

const CCContainer = styled(CurvedCity)(() => ({
    transform: [{ scaleX: 1.08 }],
    position: 'absolute',
    bottom: 0,
    top:0,
    left:0,
    right: 0
}));

const BlackBG = styled(View)<{ width: number, height: number }>
    (({ theme, width, height }) => ({
        backgroundColor: '#333',
        width: width,
        height: height-150
    }))

interface CurvedCityProps {
    width: number;
    height: number;
}

export const CurvedCityBG = ({ width, height }: CurvedCityProps) => {
    return (
        <Root width={width} height={height} style={{ justifyContent: 'center' }}>
            <CCBox>
                <CCContainer width={"100%"} />
            </CCBox>
            <BlackBG height={height} width={width}>

            </BlackBG>
        </Root>
    )
}

export default CurvedCityBG