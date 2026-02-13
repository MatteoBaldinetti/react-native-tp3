import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import lyceeData from "../../data/lycees-donnees-generales-v1.json";

export default function NombreLyceeTotal() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        setData(lyceeData);
    }, []);

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
                Nombre total de lycées
            </Text>

            <View
                style={{
                    padding: 12,
                    marginBottom: 10,
                    backgroundColor: "#f0f0f0",
                    borderRadius: 8,
                }}
            >
                <Text style={{ fontSize: 16 }}>Total : {data.length}</Text>
            </View>
        </View>
    );
}