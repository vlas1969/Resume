// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Develope',
  salary: '600$ в місяць',
  address: 'Ukraine, Kyiv, Nabereghno-Lugova, 29',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    Linkedin: {
      text: 'Linkedin',
      href: 'https://www.Linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ==================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume / Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ==================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Resume / Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'Handlebars & VS Code',
          point: 10,
        },
        {
          name: 'Git & terminal',
          point: 9,
        },
        {
          name: 'NPM',
          point: 7,
        },
      ],
      hobbies: [
        {
          name: 'Fishing',
          isMain: true,
        },
        {
          name: 'Hanter',
          isMain: 'true',
        },
        {
          name: 'Football',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================//

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume /Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'school 13',
          isEnd: true,
        },
        {
          name: 'LMU economic',
          isEnd: true,
        },
        {
          name: 'LMU lawyer',
          isEnd: true,
        },
        {
          name: 'IT-Brans',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'diplom',
          ID: 234156,
        },
        {
          name: 'Atestate',
          ID: 2341001,
        },
        {
          name: 'Svidoctvo',
          ID: 000056,
        },
      ],
    },

    footer,
  })
})

// ================================================================//

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: {
      title: 'Resume / Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'It Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/',

              about: 'Dsgcb fcjfbncjb wzeufhx',

              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML | CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],

              awards: [
                {
                  name: 'shgxwejhcvqx oqwidwg ojhmwgdis ohqudgwxn wo',
                },
                {
                  name: 'Vddffgg jxwdwsb xwqouxhqixbq zsqxiuoxwx',
                },
              ],
              stackAmount: 3,
              awardAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
