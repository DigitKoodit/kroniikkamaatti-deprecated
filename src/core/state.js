import { fromJS } from 'immutable';

const realState = {
'activeGuild':'',
'activeStudent':'',
'guilds': [
  {
    "guild": "Asteriski",
    "groups": [
      {
        "tutors": [
          "Tiina Nokelainen",
          "Jesse Rauha"
        ],
        "students": [
          {
            "name": "Nami Le"
          },
          {
            "name": "Tuuli Sainio"
          },
          {
            "name": "Meri-Salla Tuominen"
          },
          {
            "name": "Marko Loponen"
          },
          {
            "name": "Markus Oravainen"
          },
          {
            "name": "Patrick Tahtonen"
          },
          {
            "name": "Akseli Katajisto"
          },
          {
            "name": "Katri Haapalinna"
          },
          {
            "name": "Valtter Karppinen"
          },
          {
            "name": "Valtteri Rinne"
          }
        ]
      },
      {
        "tutors": [
          "Eemil Vainio",
          "Eero Suvanto"
        ],
        "students": [
          {
            "name": "Ville Vahtera"
          },
          {
            "name": "Kasimir Piispa"
          },
          {
            "name": "Juuso Taipaleenäki"
          },
          {
            "name": "Juuso Rytilahti"
          },
          {
            "name": "Jere Kuisma"
          },
          {
            "name": "Ida Saukkonen"
          },
          {
            "name": "Emmi Hyrkäs"
          },
          {
            "name": "Giacomo Mariani"
          },
          {
            "name": "Amro El-khatib"
          }
        ]
      },
      {
        "tutors": [
          "Teemu Tenkanen",
          "Ari-Pekka Jääskeläinen"
        ],
        "students": [
          {
            "name": "Juho Vieno"
          },
          {
            "name": "Atte Tökkäri"
          },
          {
            "name": "Axel Baumgartner"
          },
          {
            "name": "Joni Rinne"
          },
          {
            "name": "Pasi Ikonen"
          },
          {
            "name": "Janne Porkola"
          },
          {
            "name": "Tero Salopää"
          },
          {
            "name": "Laura Ross"
          },
          {
            "name": "Roope Malinen"
          },
          {
            "name": "Eero Nirhamo"
          }
        ]
      },
      {
        "tutors": [
          "Camilla Lähteenmäki",
          "Iina Siekkinen"
        ],
        "students": [
          {
            "name": "Aki Tervo"
          },
          {
            "name": "Henri Hyryläinen"
          },
          {
            "name": "Jessina Karlberg"
          },
          {
            "name": "Joel Mäkelä"
          },
          {
            "name": "Juhana Vähä-Mäkilä"
          },
          {
            "name": "Mirva Tapola"
          },
          {
            "name": "Nelli Baran"
          },
          {
            "name": "Sanni Savonen"
          },
          {
            "name": "Juha Lahdenoja"
          }
        ]
      },
      {
        "tutors": [
          "Valtteri Karttunen",
          "Sanni Koskinen"
        ],
        "students": [
          {
            "name": "Markus Cronvall"
          },
          {
            "name": "Jenni Porkola"
          },
          {
            "name": "Sami Spets"
          },
          {
            "name": "Topi Vuorio"
          },
          {
            "name": "Antti Adamsson"
          },
          {
            "name": "Jens Holmberg"
          },
          {
            "name": "Anniina Niukkanen"
          },
          {
            "name": "Janne Järvilehto"
          }
        ]
      },
      {
        "tutors": [
          "Saku Reunanen",
          "Marko Silander"
        ],
        "students": [
          {
            "name": "Heidi Laine"
          },
          {
            "name": "Ville-Pekka Hoikka"
          },
          {
            "name": "Mikko Metsäranta"
          },
          {
            "name": "Mikko Uotinen"
          },
          {
            "name": "Markus Rusanen"
          },
          {
            "name": "Niko Jousjärvi"
          },
          {
            "name": "Joonas Jäntti"
          },
          {
            "name": "Sami Suonpää"
          },
          {
            "name": "Isy Puttrys"
          }
        ]
      }
    ]
  },
  {
    "guild": "Digit",
    "groups": [
      {
        "tutors": [
          "Marko Niiranen",
          "Olli Valkki"
        ],
        "students": [
          {
            "name": "Tuutori Marko"
          },
          {
            "name": "Tuutori Olli"
          },
          {
            "name": "Emil Holsti"
          },
          {
            "name": "Santeri Mäntyniemi"
          },
          {
            "name": "Heidi Sjöholm"
          },
          {
            "name": "Jere Lehtinen"
          },
          {
            "name": "Santeri Vairio"
          },
          {
            "name": "Tuukka Maunu"
          },
          {
            "name": "Miika Peltotalo"
          }
        ]
      },
      {
        "tutors": [
          "Niklas Niemelä",
          "Tero Yrjölä"
        ],
        "students": [
          {
            "name": "Tuutori Niklas N"
          },
          {
            "name": "Tuutori Tero"
          },
          {
            "name": "Tijam Moradi"
          },
          {
            "name": "Matias Laukkanen"
          },
          {
            "name": "Emil Dahlberg"
          },
          {
            "name": "Niklas Kiuru"
          },
          {
            "name": "Konsta Purtsi"
          },
          {
            "name": "Jukka Tuominen"
          },
          {
            "name": "Niko Karjalainen"
          },
          {
            "name": "Jarkko Pietilä"
          },
          {
            "name": "Tino Lehtola"
          }
        ]
      },
      {
        "tutors": [
          "Jussi Wallin",
          "Niklas Luomala"
        ],
        "students": [
          {
            "name": "Tuutori Jussi"
          },
          {
            "name": "Tuutori Niklas L"
          },
          {
            "name": "Patrik Vahala"
          },
          {
            "name": "Mikael Remes"
          },
          {
            "name": "Riku Muuraisniemi"
          },
          {
            "name": "Samuel Leinonen"
          },
          {
            "name": "Ilari Lahtinen"
          },
          {
            "name": "Lauri Halla-aho"
          }
        ]
      },
      {
        "tutors": [
          "Tatu Heinonen",
          "Lauri Laakkonen"
        ],
        "students": [
          {
            "name": "Tuutori Tatu"
          },
          {
            "name": "Tuutori Lauri"
          },
          {
            "name": "Ilkka Luoma-aho"
          },
          {
            "name": "Mikko Sinisalo"
          },
          {
            "name": "Felix Vaura"
          },
          {
            "name": "Samuel Lindqvist"
          },
          {
            "name": "Tuomas Harju"
          },
          {
            "name": "Asad Ijaz"
          }
        ]
      },
      {
        "tutors": [
          "Joona Juusti",
          "Asser Junnila"
        ],
        "students": [
          {
            "name": "Tuutori Joona"
          },
          {
            "name": "Tuutori Asser"
          },
          {
            "name": "Juha-Ville Forssell"
          },
          {
            "name": "Onni Erjala"
          },
          {
            "name": "Rio Koskelo"
          },
          {
            "name": "Ilari Tilli"
          },
          {
            "name": "Matias Meri"
          },
          {
            "name": "Jaakko Oksanen"
          },
          {
            "name": "Oskari Vahala"
          },
          {
            "name": "Simo Vuorinen"
          },
          {
            "name": "Aleksi Lehtonen"
          },
          {
            "name": "Jaakko Viitanen"
          }
        ]
      }
    ]
  },
  {
    "guild": "Nucleus",
    "groups": [
      {
        "tutors": [
          "Kalle Henriksson",
          "Emma Mäkinen"
        ],
        "students": [
          {
            "name": "Tuutori Kalle"
          },
          {
            "name": "Tuutori Emma"
          },
          {
            "name": "Iida Ikonen"
          },
          {
            "name": "Karoliina Martikainen"
          },
          {
            "name": "Merimari Seppänen"
          },
          {
            "name": "Anna Tuominen"
          },
          {
            "name": "Amalia Aarnio"
          },
          {
            "name": "Antti Nuutinen"
          }
        ]
      },
      {
        "tutors": [
          "Tanja Honkala",
          "Niko Oksanen"
        ],
        "students": [
          {
            "name": "Tuutori Tanja"
          },
          {
            "name": "Tuutori Niko"
          },
          {
            "name": "Laura Forsman"
          },
          {
            "name": "Jarno Helminen"
          },
          {
            "name": "Sara Lassfolk"
          },
          {
            "name": "Selma Salonen"
          },
          {
            "name": "Ulla Vahtera"
          },
          {
            "name": "Emmi Varjonen"
          }
        ]
      },
      {
        "tutors": [
          "Piita Koivisto",
          "Jeremi Nyyssönen"
        ],
        "students": [
          {
            "name": "Tuutori Piita"
          },
          {
            "name": "Tuutori Jeremi"
          },
          {
            "name": "Vesa-Matti Veräjänkorva"
          },
          {
            "name": "Joonatan Mäkelä"
          },
          {
            "name": "Vilhelmiina Lehtinen"
          },
          {
            "name": "Heidi Toivonen"
          },
          {
            "name": "Nea Valtonen"
          },
          {
            "name": "Toni Sjöblom"
          },
          {
            "name": "Roni Pääkkönen"
          }
        ]
      }
    ]
  }
]}

const initialState = {
  'activeGuild':'',
  'activeStudent':'',
  'guilds': [
    {
      'guild': 'Digit',
      'groups': [
        {
          'tutors': ['Kille', 'Pertti'],
          'students': [
            {'name':'Juha'},
            {'name':'Kalle'},
            {'name':'Heimo'}
          ]
        }
      ]
    },
    {
      'guild': 'Asteriski',
      'groups': [
        {
          'tutors': ['Kalle', 'Pekka'],
          'students': [
            {'name':'Jenni'},
            {'name':'Kiia'},
            {'name':'Helmi'}
          ]
        },
        {
          'tutors': ['Kalle', 'Pekka'],
          'students': [
            {'name':'Jenni'},
            {'name':'Kiia'},
            {'name':'Helmi'}
          ]
        },
        {
          'tutors': ['Kalle', 'Pekka'],
          'students': [
            {'name':'Jenni'},
            {'name':'Kiia'},
            {'name':'Helmi'}
          ]
        },
        {
          'tutors': ['Kalle', 'Pekka'],
          'students': [
            {'name':'Jenni'},
            {'name':'Kiia'},
            {'name':'Helmi'}
          ]
        }
      ]
    }
  ]
}

export const immutableState = fromJS(realState);