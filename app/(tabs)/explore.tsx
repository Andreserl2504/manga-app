import { useColorScheme } from '@/hooks/useColorScheme'
import { View, Text, Pressable, ScrollView, Image } from 'react-native'
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
  // console.log(data)
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
        <View className='flex flex-wrap flex-row justify-center py-5 gap-5'>
          {!isLoading
            ? data?.map((e) => (
                <>
                  <View key={e.title} className='relative'>
                    <Image
                      source={{ uri: e.thumbnail }}
                      width={110}
                      height={190}
                      className={' rounded-md'}
                    />
                    <Text
                      className={
                        'absolute color-light-text bg-light-border m-1 rounded-md px-2'
                      }
                    >
                      {e.type}
                    </Text>
                    <Text className={'absolute bottom-0'}>{e.title}</Text>
                  </View>
                </>
              ))
            : <Text>Loading...</Text>}
        </View>
      </ScrollView>
    </>
  )
}
function useTuMangaOnline(): { data: any } {
  throw new Error('Function not implemented.')
}
