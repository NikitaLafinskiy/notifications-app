import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { defaultConfig } from '@tamagui/config/v4'

export const config = createTamagui(defaultConfig)

type Conf = typeof config

declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends Conf {}
}