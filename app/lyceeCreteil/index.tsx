import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import lyceeData from "../../data/lycees-donnees-generales-v1.json";

export default function LyceeCreteil() {
    const [data, setData] = useState<any[]>([]);

    const filterData = (data: any[]) => {
        const filteredData = data.filter((lycee) => lycee.academie === "Créteil");
        setData(filteredData);
    };

    useEffect(() => {
        filterData(lyceeData);
    }, []);

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
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
    );
}