import type { Decision } from '@/components/VueUse/models'

export const GAME_STEPS: Decision[] = [
  {
    instruction: 'Best sport',
    choices: ['Badminton', 'Tennis']
  },
  {
    instruction: 'Working',
    choices: ['Office', 'Remote']
  },
  {
    instruction: 'Favorite food',
    choices: ['Vietnamese', 'French']
  },
  {
    instruction: 'My favorite framework',
    choices: ['React', 'Vue']
  }
]

export const GAME_SOLUTION = ['Badminton', 'Remote', 'Vietnamese', 'Vue']
