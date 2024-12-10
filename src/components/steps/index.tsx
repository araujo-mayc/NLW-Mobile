import { Text, View } from "react-native";
import { styles } from "./styles";
import { Step } from "@/components/step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
  return (
    <View style={styles.contaier}>
      <Text style={styles.title}>Veja como funciona:</Text>
      <Step
        icon={IconMapPin}
        title="Título 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.">
      </Step>
      <Step
        icon={IconQrcode}
        title="Título 2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.">
      </Step>
      <Step
        icon={IconTicket}
        title="Título 3"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.">
      </Step>
    </View>
  )
}