import { fromJS } from 'immutable';

const initialState = {
  'active':'',
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