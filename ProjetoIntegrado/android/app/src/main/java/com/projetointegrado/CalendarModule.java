package com.projetointegrado;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;

import javax.security.auth.callback.Callback;

import java.util.HashMap;
import android.util.Log;

public class CalendarModule extends ReactContextBaseJavaModule {
  CalendarModule(ReactApplicationContext context) {
    super(context);
  }
  //add para calendarModule.Java
  @Override 
  public String getName(){
    return "calendarModule";
  }
  @ReactMethod
  public void createCalendarEvent(String name, String location){
    Log.d("CalendarModule", "Create event called with name: " + name + "and location" + location);
  }
}

