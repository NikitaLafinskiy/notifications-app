import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import {Href, Link, Stack} from 'expo-router'
import {Pressable, useColorScheme} from 'react-native'
import {TamaguiProvider} from 'tamagui'
import AntDesign from '@expo/vector-icons/AntDesign';

import { config } from '@/config/tamagui.config'
import {Provider} from "react-redux";
import {persistor, store} from "@/store/store";
import {PersistGate} from "redux-persist/integration/react";

export default function RootLayout() {
    const colorScheme = useColorScheme()

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <TamaguiProvider config={config} defaultTheme={colorScheme!}>
                    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                        <Stack>
                            <Stack.Screen name="index" options={{
                                title: "Home",
                                headerBackVisible: false,
                                headerRight: () => {
                                    return <Link href={"/create" as Href} asChild>
                                        <Pressable hitSlop={22}>
                                            <AntDesign name="pluscircleo" size={22} color="white" />
                                        </Pressable>
                                    </Link>
                                }
                            }} />
                            <Stack.Screen name="create" options={{
                                presentation: "modal",
                                headerShown: false
                            }} />
                        </Stack>
                    </ThemeProvider>
                </TamaguiProvider>
            </PersistGate>
        </Provider>
    )
}