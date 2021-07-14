import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing} from '../../utils/sizes';
import {colors} from '../../utils/colors';
import {RoundedButton} from '../../components/RoundedButton';



export const Timing = ({onChangeTime}) => {
  return (
    <>
      <View style={{padding:20}}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />  
      </View>
      <View style={{padding:20}}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />  
      </View>
      <View style={{padding:20}}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />  
      </View>
    </>
  );
}
