import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function Rootlayout() {
    return (
        <View style={{ display: "flex", width: "100%", flexDirection: "col", alignItems: "start", justifyContent: "center" }}>
            <View style={{ backgroundColor: "black" }}>
                <Text style={{ color: "white" }}>
                    Go Back
                </Text>
            </View>
            <Slot />
        </View>
    )
}