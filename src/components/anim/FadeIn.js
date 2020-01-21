import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

export const FadeIn = props => {
  const {children} = props;
  const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  });
  return (
    <Animated.View style={{opacity: fadeAnimation}}>{children}</Animated.View>
  );
};
