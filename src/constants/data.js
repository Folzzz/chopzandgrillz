import images from './images';

const chops = [
  {
    title: 'Basic Fill',
    price: '#1000',
    tags: 'Puffs | Samosa',
  },
  {
    title: 'Step-Up Pack',
    price: '#1500',
    tags: 'Puffs | Samosa | Springroll',
  },
  {
    title: 'Jumbo Pack',
    price: '#2000',
    tags: 'Puffs | Samosa | Spring | Pie',
  },
  {
    title: 'EX-Jumbo Pack',
    price: '#2500',
    tags: 'Puffs | Samosa | Spring X2 | Pie',
  },
  {
    title: 'Ultimate Fill',
    price: '#3000',
    tags: 'Puffs | Samosa | Spring | Pie | Fries',
  },
];

const grills = [
  {
    title: 'Snails',
    price: '#700',
    tags: 'Onions | Tomatoes | Pepper',
  },
  {
    title: "Gizzard",
    price: '#700',
    tags: 'Onions | Tomatoes | Pepper',
  },
  {
    title: 'Asun',
    price: '#1000',
    tags: 'Onions | Tomatoes | Pepper | Slice of lime',
  },
  {
    title: 'Chicken',
    price: '#1500',
    tags: 'Onions | Tomatoes | Pepper | Carrot | Cucumber',
  },
  {
    title: 'Turkey',
    price: '#2000',
    tags: 'Onions | Tomatoes | Pepper | Slice of lime | Cucumber',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { chops, grills, awards };
