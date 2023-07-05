import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

type Props = {
  toValue: number;
  duration: number;
  children: React.ReactNode;
  className?: object;
};

const SlideInView = ({toValue, duration, children, className}: Props) => {
  const slideAnim = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: toValue,
      duration: duration, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
  }, [slideAnim, toValue, duration]);

  return (
    <Animated.View
      style={[
        styles.container,
        className,
        {transform: [{translateY: slideAnim}]},
      ]}>
      {/* Content of the sliding view */}
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SlideInView;
