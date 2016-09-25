import { fromJS } from 'immutable';

const testState = {
'active':'',
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
            "name": "Tuutori Tiina"
          },
          {
            "name": "Tuutori Jesse"
          },
          {
            "name": "Haapalinna Katri"
          },
          {
            "name": "Karppinen Valtter"
          },
          {
            "name": "Katajisto Akseli"
          },
          {
            "name": "Le Phuong"
          },
          {
            "name": "Loponen Marko"
          },
          {
            "name": "Oravainen Markus"
          },
          {
            "name": "Sainio Tuuli"
          },
          {
            "name": "Tahtonen Patrick"
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
            "name": "El-Khatib Amro"
          },
          {
            "name": "Hyrkäs Emmi"
          },
          {
            "name": "Kuisma Jere"
          },
          {
            "name": "Lytz Jere"
          },
          {
            "name": "Mariani Giacomo"
          },
          {
            "name": "Piispa Kasimir"
          },
          {
            "name": "Saukkonen Ida"
          },
          {
            "name": "Taipaleenmäki Juuso"
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
            "name": "Baumgartner Axel"
          },
          {
            "name": "Ikonen Pasi"
          },
          {
            "name": "Kosunen Maria"
          },
          {
            "name": "Kyläniemi Minna"
          },
          {
            "name": "Malinen Roope"
          },
          {
            "name": "Porkola Janne"
          },
          {
            "name": "Rinne Joni"
          },
          {
            "name": "Salopää Tero"
          },
          {
            "name": "Tökkäri Atte"
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
            "name": "Baran Nelli"
          },
          {
            "name": "Karlberg Jessina"
          },
          {
            "name": "Hyryläinen Henri"
          },
          {
            "name": "Lahdenoja Juha"
          },
          {
            "name": "Mäkelä Joel"
          },
          {
            "name": "Rantala Joakim"
          },
          {
            "name": "Savonen Sanni"
          },
          {
            "name": "Tervo Aki"
          },
          {
            "name": "Vähä-Mäkilä Juhani"
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
            "name": "Cronvall Markus"
          },
          {
            "name": "Adamsson Antti"
          },
          {
            "name": "Järvilehto Janne"
          },
          {
            "name": "Nesa Aksirun"
          },
          {
            "name": "Niukkanen Anniina"
          },
          {
            "name": "Porkola Jenni"
          },
          {
            "name": "Spets Sami"
          },
          {
            "name": "Toivonen Harttu"
          },
          {
            "name": "Vuorio Topi"
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
          "Saku Reunanen",
          "Marko Silander"
        ],
        "students": [
          {
            "name": "Hoikka Ville"
          },
          {
            "name": "Jousjärvi Niko"
          },
          {
            "name": "Laine Heidi"
          },
          {
            "name": "Lyytikäinen Pauliina"
          },
          {
            "name": "Metsäranta Mikko"
          },
          {
            "name": "Rastas Iiro"
          },
          {
            "name": "Rusanen Markus"
          },
          {
            "name": "Suonpää Sami"
          },
          {
            "name": "Uotinen Mikko"
          }
        ]
      },
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
          "Niklas Niemelä ja Tero Yrjölä"
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
      }
    ]
  },
  {
    "guild": "Nucleus",
    "groups": [
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
      },
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
      }
    ]
  }
]
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

export const immutableState = fromJS(initialState);
