import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import lyceeData from "../../data/lycees-donnees-generales-v1.json";

export default function NombreTypeLycee() {
    const [counts, setCounts] = useState<{ sigle: string; count: number }[]>([]);

    useEffect(() => {
        // Filtrer les lycées de l'académie de Créteil
        const filteredData = lyceeData.filter((lycee) => lycee.academie === "Créteil");

        // Compter le nombre pour chaque sigle_uai
        const map: Record<string, number> = {};
        filteredData.forEach((lycee) => {
            const sigle = lycee.sigle_uai || "Inconnu";
            map[sigle] = (map[sigle] || 0) + 1;
        });

        // Transformer en tableau pour FlatList
        const countsArray = Object.keys(map).map((sigle) => ({
            sigle,
            count: map[sigle],
        }));

        setCounts(countsArray);
    }, []);

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
                Nombre de chaque type de lycées
            </Text>

            <FlatList
                data={counts}
                keyExtractor={(item) => item.sigle}
                renderItem={({ item }) => (
                    <View
                        style={{
                            padding: 12,
                            marginBottom: 10,
                            backgroundColor: "#f0f0f0",
                            borderRadius: 8,
                        }}
                    >
                        <Text style={{ fontSize: 16 }}>
                            {item.sigle} : {item.count}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}