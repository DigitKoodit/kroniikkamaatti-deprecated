const USER_COMMENTED = 'commented';

const initialState = {
  'digit': [
    {
      'tutors': 'A&J',
      'students': [
        {'name':'Juha'},
        {'name':'Kalle'},
        {'name':'Heimo'}
      ]
    }
  ],
  'asteriski': [
    {
      'tutors': 'P&K',
      'students': [
        {'name':'Jenni'},
        {'name':'Kiia'},
        {'name':'Helmi'}
      ]
    }
  ]
}


// Possibly not required, need to figure this out later.
export const changeState = (state = initialState, action) => {
  console.log(action)
  switch(action.type){
    case USER_COMMENTED:
      return state[action.guild][action.fuksi]
  }
}