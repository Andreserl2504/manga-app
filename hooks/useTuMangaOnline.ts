import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import * as cheerio from 'cheerio'

export function useScrapping() {
  const { data, isLoading } = useQuery({
    queryKey: ['TuMangaOnlineScrapping'],
    queryFn: async () => {
      const response = await axios.get('https://zonatmo.com/populars')
      const html: string = await response.data
      // const $ = cheerio.load(html)
      // console.log($)
      // const mangasContainer = $('.element').html()
      // const titles = $('.text-truncate').html()
      // const type = $('.book-type').html()
      // const demography = $('.demography').html()
      // const thumbnail = $('.thumbnail').html()
      
      // const mangas = Array.from({ length: mangasContainer.length }, (_, i) => {
      //   const aElement = mangasContainer[i].children[0]
      //   return {
      //     title: titles[i].innerHTML,
      //     type: type[i].innerHTML,
      //     demography: demography[i].innerHTML,
      //     thumbnail: thumbnail[i].children[0].innerHTML.slice(
      //       thumbnail[i].children[0].innerHTML.indexOf('https://'),
      //       thumbnail[i].children[0].innerHTML.indexOf(`')`)
      //     )
      //   }
      // })
      // return {titles, type, demography, thumbnail}
      return ''
    }
  })
  useEffect(() => {
    console.log(data)
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
