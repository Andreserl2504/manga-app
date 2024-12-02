import { Tabs } from 'expo-router'
import React from 'react'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { View, TextInput, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


export default function TabLayout() {
  const colorScheme = useColorScheme()
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        height: '100%'
      }}
    >
      <View>
        <View>
          <View>
            <TextInput
              className={
                colorScheme == 'dark'
                  ? 'color-dark-text bg-dark-secondBackground rounded-full m-5 p-4 pl-6'
                  : 'color-light-text bg-light-secondBackground rounded-full m-5 p-4 pl-6'
              }
              placeholder='Search Manga'
            />
          </View>
        </View>
      </View>
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
        <Tabs.Screen
          name='more'
          options={{
            title: 'More',
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
    </View>
  )
}
