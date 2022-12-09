import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/screens/Cesta';
import { useFonts } from 'expo-font'
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loadedFonts] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if (!loadedFonts) {
    return <AppLoading />
  }
  return (
    <SafeAreaView>
      <StatusBar animated={true} hidden={true} />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}