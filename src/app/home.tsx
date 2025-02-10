import { Alert, Text, View } from "react-native";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import MapView from "react-native-maps";

export default function Home() {

  type PlacesProps = PlaceProps

  const currentLocation = {
    latitude: -23.561187293883442,
    longitude: -46.656451388116494,
  }

  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");
  const [places, setPlaces] = useState<PlacesProps[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias","Erro ao buscar categorias");
    }
  }

  async function fetchPlaces() {
    try {
      if(!category) {
        return;
      }

      const { data } = await api.get("/markets/category/" + category);      
      setPlaces(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Lugares","Não foi possível encontrar os lugares");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPlaces();
  }, [category]);

  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories data={categories} onSelect={setCategory} selected={category} />

      <MapView style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}/>
      <Places data={places} />
    </View>
  );
}