export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerShown: false,
            headerTitle: () => (
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Название страницы
                </Text>
              </View>
            ),
            headerRight: () => (
              <HeaderButtons>
                <Item
                  title="Кнопка"
                  iconName="add"
                  onPress={() => {
                    // Действие при нажатии на кнопку
                  }}
                />
              </HeaderButtons>
            ),
          })}
        />
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
