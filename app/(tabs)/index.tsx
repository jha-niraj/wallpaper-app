import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYouPage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="suggested" component={Suggested} />
      <Tab.Screen name="liked" component={Liked} />
      <Tab.Screen name="library" component={Library} />
    </Tab.Navigator>
  );
}

function Suggested() {
    return (
        <View>
            <Text>Suggested Page - Niraj Jha</Text>
        </View>
    )
}
function Liked() {
    return (
        <View>
            <Text>Liked Screen</Text>
        </View>
    )
}
function Library() {
    return (
        <View>
            <Text>Library Screen</Text>
        </View>
    )
}