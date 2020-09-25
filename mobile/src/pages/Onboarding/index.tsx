import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'; //@ts-ignore
import Onboarding from 'react-native-onboarding-swiper';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

function Onboarding1() {
  const Done = () => (
    <RectButton onPress={handleNavigateToLandingPage} style={styles.done}>
      <Feather name='check' size={20} color='#6A6180' />
    </RectButton>
  );

  const Next = () => (
    <RectButton style={styles.next}>
      <Feather name='arrow-right' size={20} color='#6A6180' />
    </RectButton>
  );

  const { navigate } = useNavigation();

  function handleNavigateToLandingPage() {
    navigate('Landing');
  }
  return (
    <Onboarding
      DoneButtonComponent={Done}
      NextButtonComponent={Next}
      bottomBarColor={'white'}
      showSkip={false}
      containerStyles={styles.container}
      imageContainerStyles={styles.topContainer}
      titleStyles={styles.title}
      subTitleStyles={styles.subtitle}
      pages={[
        {
          backgroundColor: '#8257e5',
          image: (
            <Image
              source={require('../../../assets/images/Onboarding1.png')}
              style={styles.image}
            />
          ),
          title: '01.',
          subtitle: 'Encontre vários professores para ensinar você',
        },
        {
          backgroundColor: '#04d361',
          image: (
            <Image
              source={require('../../../assets/images/Onboarding2.png')}
              style={styles.image}
            />
          ),
          title: '02.',
          subtitle: 'Ou dê aulas sobre o que você mais conhece',
          onDone: { handleNavigateToLandingPage },
        },
      ]}
    />
  );
}

export default Onboarding1;
