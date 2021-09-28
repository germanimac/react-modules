import React from 'react';
import { NativeModules, Button } from 'react-native';
const { CalendarModule } = NativeModules;
const NewModuleButton = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
    console.log('teste no node server');
    CalendarModule.createCalendarEvent('123 teste', '456 teste');
  };
  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};
export default NewModuleButton
