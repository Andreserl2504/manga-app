// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import { type IconProps } from '@expo/vector-icons/build/createIconSet'
import { type ComponentProps } from 'react'

export function TabBarIcon({
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} {...rest} />
}

export function TabBarIconFeather({
  ...rest
}: IconProps<ComponentProps<typeof Feather>['name']>) {
  return <Feather size={28} {...rest}/>
}
