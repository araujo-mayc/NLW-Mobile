import { Alert, Text, View } from "react-native";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";

export default function Home() {

  type PlacesProps = PlaceProps

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
      <Places data={places} />
    </View>
  );
}