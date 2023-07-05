import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

type Props = {
  toValue: number;
  duration: number;
  children: React.ReactNode;
  className?: Object;
};

const FadeInView = ({toValue, duration, children, className}: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: toValue,
      duration: duration, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration, toValue]);

  return (
    <Animated.View style={[styles.container, className, {opacity: fadeAnim}]}>
      {/* Content of the fading view */}
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FadeInView;
