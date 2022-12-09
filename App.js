import {StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/screens/Cesta';
import {  useFonts } from 'expo-font'
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [loadedFonts] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!loadedFonts){
    return <View />
  }
  return (
    <SafeAreaView>
      <StatusBar animated={true} hidden={true}/>
      <Cesta />
    </SafeAreaView>
  );
}