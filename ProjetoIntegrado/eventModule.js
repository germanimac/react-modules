//Para acessar esse arquivo, importar nos outros arquivos JS, o seguinte modulo:
//Import calendarModule from './CalendarModule';
//CalendarModule.createCalendarEvent('foo', 'bar');

const { CalendarModule } = ReactNative.NativeModules;
const { CalendarModule } = NativeModules;
import { NativeModules } from 'react-native';
import React from 'react';
import { NativeModules, Button } from 'react-native';

const NewModuleButton = () => {
  const onPress = () => {console.log('We will invoke the native module here!');};
  return (
    <Button title="Click to invoke your native module!" color="#841584" onPress={onPress}/>
  );
};

export default NewModuleButton;

const onPress = () => {
    CalendarModule.createCalendarEvent('teste nome o porra', 'teste local o porra');
};

import {NativeModules} from 'react-native';
