import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Bienvenue
      </Text>
      <Image
        source={require("../assets/images/home_image.jpg")}
        style={{ width: 250, height: 250, marginBottom: 20 }}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={() => router.push("/lyceeCreteil")}
        style={{
          padding: 12,
          backgroundColor: "#4F46E5",
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Lycées de l'académie de Créteil
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/lyceePriveParis")}
        style={{
          padding: 12,
          backgroundColor: "#4F46E5",
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Lycées privés en région parisienne
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/nombreTypeLycee")}
        style={{
          padding: 12,
          backgroundColor: "#4F46E5",
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Nombre de chaque type de lycées
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/mailLyceeVersailles")}
        style={{
          padding: 12,
          backgroundColor: "#4F46E5",
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Mail lycées de l'académie de Versailles
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/nombreLyceeParis")}
        style={{
          padding: 12,
          backgroundColor: "#4F46E5",
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Nombre de lycée en région parisienne
        </Text>
      </TouchableOpacity>
    </View>
  );
}