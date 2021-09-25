//Para acessar esse arquivo, importar nos outros arquivos JS, o seguinte modulo:
//Import calendarModule from './CalendarModule';
//CalendarModule.createCalendarEvent('foo', 'bar');
import React from 'react';
import { NativeModules, Button } from 'react-native';
const { CalendarModule } = NativeModules;
const NewModuleButton = () => {
  
  const onPress = () => {
    console.log('teste1');
    CalendarModule.createCalendarEvent('Dinner Party', 'My House');
    CalendarModule.createCalendarEvent('Dinner Party', 'My House');
    console.log('teste2');
  };
  return (
    <Button title="Click to invoke your native module!" color="#841584" onPress={onPress}/>
  );
};

export default NewModuleButton;

