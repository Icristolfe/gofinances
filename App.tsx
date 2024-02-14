import React, { useEffect, useCallback } from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import { Dashboard } from './src/screens/Dashboard'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
      } catch (e) {
        console.warn(e)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <Dashboard />
      </ThemeProvider>
    </SafeAreaView>
  )
}
