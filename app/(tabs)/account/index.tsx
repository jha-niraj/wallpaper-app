import { Link } from "expo-router";
import {  Text, View } from "react-native";

export default function Account() {
    return (
        <View>
            <Text>Account Page</Text>
            <Link href={"/accountinfo"}>
                <Text>Account Info</Text>
            </Link>
        </View>
    )
}