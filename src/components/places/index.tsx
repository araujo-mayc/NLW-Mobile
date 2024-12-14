import { useRef } from "react"
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { Text, useWindowDimensions } from "react-native"
import { Place, PlaceProps } from "../place"
import { style } from "./style"


type Props = {
  data: PlaceProps[]
}

export function Places({ data }: Props) {
  const dimension = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = {
    min: 278,
    max: dimension.height - 128,
  }

  return (
    <BottomSheet
    ref={bottomSheetRef}
    snapPoints={[snapPoints.min, snapPoints.max]}
    handleIndicatorStyle = {style.indicator}
    backgroundStyle = {style.container}
    enableOverDrag = {false}
    >
      <BottomSheetFlatList 
        data = {data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
        contentContainerStyle={style.content}
        ListHeaderComponent={() => <Text style={style.title}>Explore Lugares perto de você</Text>}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  )
}