import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
const cheerio = require('react-native-cheerio')

export function useScrapping() {
  const { data, isLoading } = useQuery({
    queryKey: ['TuMangaOnlineScrapping'],
    queryFn: async () => {
      const response = await axios.get('https://zonatmo.com/populars')
      const html: string = await response.data
      const $ = cheerio.load(html)
      const titles: string[] = []
      $('h4.text-truncate').each((i: number, el: object) => {
        return (titles[i] = $(el).text())
      })
      const type: string[] = []
      $('.book-type').each((i: number, el: object) => {
        return (type[i] = $(el).text())
      })
      const demography: string[] = []
      $('.demography').each((i: number, el: object) => {
        return (demography[i] = $(el).text())
      })
      const thumbnail: string[] = []
      $('.thumbnail').each((i: number, el: object) => {
        const style = $(el).children().first().html()
        return (thumbnail[i] = style.slice(
          style.indexOf('https://'),
          style.indexOf(`')`)
        ))
      })
      const mangas = Array.from({ length: titles.length }, (_, i) => {
        // const aElement = mangasContainer[i].children[0]
        return {
          title: titles[i],
          type: type[i],
          demography: demography[i],
          thumbnail: thumbnail[i]
        }
      })
      return mangas
    }
  })
  useEffect(() => {
    // console.log(data)
  }, [data])
  return { data, isLoading }
}

// const browser = await puppeteer.launch({
//   headless: true
// })
// const page = await browser.newPage()
// await page.goto('https://zonatmo.com/populars')
// const content = await page.evaluate(() => {
//   const mangasContainer = document.querySelectorAll('.element')
//   const titles = document.querySelectorAll('.text-truncate')
//   const type = document.querySelectorAll('.book-type')
//   const demography = document.querySelectorAll('.demography')
//   const thumbnail = document.querySelectorAll('.thumbnail')
//   const mangas = Array.from(
//     { length: mangasContainer.length },
//     (_, i) => {
//       const aElement = mangasContainer[i].children[0]
//       return {
//         url: aElement.href,
//         title: titles[i].innerHTML,
//         type: type[i].innerHTML,
//         demography: demography[i].innerHTML,
//         thumbnail: thumbnail[i].children[0].innerHTML.slice(
//           thumbnail[i].children[0].innerHTML.indexOf('https://'),
//           thumbnail[i].children[0].innerHTML.indexOf(`')`)
//         )
//       }
//     }
//   )
//   return mangas

// await browser.close()
// return content
