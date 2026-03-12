import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeScreens } from './components/screens/HomeScreens';
import { colors } from './themes/colors';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <HomeScreens />
    </SafeAreaView>
  );
}