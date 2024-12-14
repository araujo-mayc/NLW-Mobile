import { View, Text } from "react-native"

import { Welcome } from "@/components/welcome"
import { Steps } from "@/components/steps"
import { router } from "expo-router"
import { Button } from "@/components/button"

export default function App() {
  return (
    <View style={{ flex: 1, paddingVertical: 40, paddingHorizontal: 16, gap: 40 }}>
      <Welcome />
      <Steps />

      <Button onPress={ () => router.navigate("/home") }>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  )
}