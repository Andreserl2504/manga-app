import { useColorScheme } from '@/hooks/useColorScheme'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { useScrapping } from '@/hooks/useTuMangaOnline'

export default function TabTwoScreen() {
  const colorScheme = useColorScheme()
  const extensionsLayout = [
    {
      name: 'TuMangaOnline',
      url: ''
    },
    {
      name: 'TuMangaOnline2',
      url: ''
    },
    {
      name: 'TuMangaOnline3',
      url: ''
    },
    {
      name: 'TuMangaOnline4',
      url: ''
    },
    {
      name: 'TuMangaOnline5',
      url: ''
    },
    {
      name: 'TuMangaOnline6',
      url: ''
    }
  ]
  const { data, isLoading } = useScrapping()
  return (
    <>
      <View
        className={
          colorScheme == 'dark'
            ? ' border-dark-border border-b-2'
            : 'border-light-border border-b-2'
        }
      >
        <ScrollView horizontal className=' flex'>
          {extensionsLayout.map((extension) => (
            <View key={extension.name} className=' m-2'>
              <Pressable
                className={
                  colorScheme == 'dark'
                    ? 'bg-dark-secondBackground py-2 px-4 rounded-full'
                    : 'bg-light-secondBackground py-2 px-4 rounded-full'
                }
              >
                <Text
                  className={
                    colorScheme == 'dark'
                      ? 'color-dark-text'
                      : 'color-light-text'
                  }
                >
                  {extension.name}
                </Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        <Text className=' color-white'>{!isLoading ? data : 'Loading...'}</Text>
      </ScrollView>
    </>
  )
}
function useTuMangaOnline(): { data: any } {
  throw new Error('Function not implemented.')
}
