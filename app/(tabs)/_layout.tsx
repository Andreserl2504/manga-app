import { Tabs } from 'expo-router'
import React from 'react'
import {
  TabBarIcon,
  TabBarIconFeather
} from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useReactQueryDevTools } from '@dev-plugins/react-query'
import { QueryClient } from '@tanstack/react-query'
import Feather from '@expo/vector-icons/Feather'

const queryClient = new QueryClient()

export default function TabLayout() {
  const colorScheme = useColorScheme()
  useReactQueryDevTools(queryClient)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Library',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'book' : 'book-outline'}
              size={20}
              color={color}
              className=''
            />
          )
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'compass-sharp' : 'compass-outline'}
              size={22}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  )
}
