import { View, Text, useColorScheme } from 'react-native'
import { useEffect } from 'react'

export default function App() {
  const colorScheme = useColorScheme()

  useEffect(() => {
    console.log(colorScheme)
  }, [])

  return <View></View>
}
