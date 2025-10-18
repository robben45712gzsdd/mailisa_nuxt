import AOS from 'aos'
import 'aos/dist/aos.css'

export default () => {
  if (process.client) {
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        offset: 100,
        delay: 200,
        //responsive disable
        disable: function () {
          var maxWidth = 768
          return window.innerWidth < maxWidth
        },
      })
    })
  }
}
