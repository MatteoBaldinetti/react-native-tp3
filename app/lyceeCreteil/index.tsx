import { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import lyceeData from "../../data/lycees-donnees-generales-v1.json";

export default function LyceeCreteil() {
    const router = useRouter();

    const [data, setData] = useState<any[]>([]);

    const filterData = (data: any[]) => {
        const filteredData = data.filter((lycee) => lycee.academie === "Créteil");
        setData(filteredData);
    };

    useEffect(() => {
        filterData(lyceeData);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={{
                        padding: 12,
                        backgroundColor: "#4F46E5",
                        borderRadius: 8,
                        marginBottom: 10,
                        paddingVertical: 8,
                        paddingHorizontal: 12,
                        alignSelf: "flex-start",
                    }}
                >
                    <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>← Retour</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
                    Lycées de l'académie de Créteil
                </Text>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.code_uai}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                padding: 12,
                                marginBottom: 10,
                                backgroundColor: "#f0f0f0",
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ fontSize: 16 }}>{item.nom_etablissement}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}