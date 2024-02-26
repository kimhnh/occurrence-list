// https://honkai-star-rail.fandom.com/wiki/Simulated_Universe/Occurrence

export const initialData = [
  {
    id: 0,
    title: 'Ace Trash Digger',
    prompt_1: {
      choice: "Quickly, take it while he's not paying attention!",
      result: 'Discard 1 random Curio and obtain 3 random Normal Curios.',
    },
    prompt_2: {
      choice: 'You recall the past lives of these discarded objects.',
      result: 'Discard 1 random Curio and select 2 Normal Curios.',
    },
    prompt_3: {
      choice: 'Even trash has its unique "value"...',
      result: 'Obtain 3 destroyed Curios.',
    },
    prompt_4: {
      choice: 'Toss your trash in!',
      result: 'Discard 1 Curio and obtain 2 random Normal Curios.',
    },
    prompt_5: {
      choice: 'Leave.',
      result: 'You are not interested in the trash cans.',
    },
  },
  {
    id: 1,
    title: 'Aha Stuffed Toy',
    prompt_1: {
      choice: "Twist the switch on the doll's bottom!",
      result: [
        '(50%) Lose 50% of currently possessed Cosmic Fragments.',
        '(50%) Obtain 500 Cosmic Fragments.',
      ],
    },
    prompt_2: {
      choice: 'Dismantle it.',
      result: 'Obtain 300 Cosmic Fragments.',
    },
    prompt_3: {
      choice: 'Any, after the counter reaches 299',
      result: ['(60%) Obtain 0 Cosmic Fragments.', '(40%) Obtain 400 Cosmic Fragments.'],
    },
    prompt_4: {
      choice: 'Any, after the counter does not react',
      result: [
        '(70%) Obtain 150 Cosmic Fragments.',
        '(20%) Obtain 0 Cosmic Fragments.',
        '(10%) Obtain 400 Cosmic Fragments.',
      ],
    },
  },
  {
    id: 2,
    title: 'Beast Horde: Voracious Catastrophe',
    prompt_1: {
      choice: 'Release them together from the "pain."',
      result:
        'Enter battle against two "Bug" elite enemies at once. After achieving victory, obtain two 3-star Blessings and 1 Curio.',
    },
    prompt_2: {
      choice: 'Give the adult beast a "send-off."',
      result:
        'Enter battle against a Bug-type Elite Enemy with increased ATK and Max HP. After achieving victory, obtain one 3-star Blessing and 2 Curios.',
    },
    prompt_3: {
      choice: 'Help the young beasts "get free."',
      result: 'Enter battle. After achieving victory, obtain a 2-star Blessing.',
    },
    prompt_4: {
      choice: `Take care of the adult beast's "pain."`,
      result: 'Enter battle. After achieving victory, obtain a 3-star Blessing and 1 Curio.',
    },
  },
];
