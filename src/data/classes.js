export const LEVELS = ['All', 'Basic', 'Intermediate', 'Advanced', 'Conversational'];

export const CLASSES = [
  {
    id: '1',
    title: 'English from Scratch',
    level: 'Basic',
    description:
      'Build your first sentences, greetings, and personal introductions. Ideal if you have never formally studied English.',
    teacher: {
      name: 'Laura Gomez',
      country: 'Colombia',
      photo: 'https://i.pravatar.cc/200?img=45',
    },
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    price: 32000,
    duration: 50,
    modality: 'Virtual',
    rating: 4.8,
    spots: 6,
    schedules: ['Mon 7:00 a.m.', 'Wed 7:00 a.m.', 'Fri 6:00 p.m.'],
  },
  {
    id: '2',
    title: 'Everyday Conversation',
    level: 'Conversational',
    description:
      'Oral practice in small groups with everyday topics: travel, food, work, and culture.',
    teacher: {
      name: 'Michael Reed',
      country: 'United States',
      photo: 'https://i.pravatar.cc/200?img=12',
    },
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
    price: 45000,
    duration: 60,
    modality: 'Virtual',
    rating: 4.9,
    spots: 4,
    schedules: ['Tue 6:00 p.m.', 'Thu 6:00 p.m.', 'Sat 10:00 a.m.'],
  },
  {
    id: '3',
    title: 'English for Interviews',
    level: 'Advanced',
    description:
      'Prepare your resume, answer technical questions, and practice mock interviews in English.',
    teacher: {
      name: 'Sofia Ramirez',
      country: 'Mexico',
      photo: 'https://i.pravatar.cc/200?img=32',
    },
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    price: 58000,
    duration: 60,
    modality: 'In-Person',
    rating: 4.7,
    spots: 3,
    schedules: ['Mon 8:00 p.m.', 'Wed 8:00 p.m.'],
  },
  {
    id: '4',
    title: 'Intermediate Grammar',
    level: 'Intermediate',
    description:
      'Verb tenses, conditionals, and passive voice explained with practical exercises and feedback.',
    teacher: {
      name: 'Andres Villa',
      country: 'Colombia',
      photo: 'https://i.pravatar.cc/200?img=68',
    },
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    price: 38000,
    duration: 50,
    modality: 'Virtual',
    rating: 4.6,
    spots: 8,
    schedules: ['Tue 7:00 a.m.', 'Thu 7:00 a.m.', 'Sat 9:00 a.m.'],
  },
  {
    id: '5',
    title: 'Pronunciation and Accent',
    level: 'Intermediate',
    description:
      'Work on difficult sounds, intonation, and rhythm so that people understand you the first time.',
    teacher: {
      name: 'Emma Clarke',
      country: 'United Kingdom',
      photo: 'https://i.pravatar.cc/200?img=24',
    },
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
    price: 42000,
    duration: 45,
    modality: 'Virtual',
    rating: 4.9,
    spots: 5,
    schedules: ['Mon 5:00 p.m.', 'Fri 5:00 p.m.'],
  },
  {
    id: '6',
    title: 'Business English',
    level: 'Advanced',
    description:
      'Meetings, emails, and corporate presentations. Technical vocabulary and formal expressions.',
    teacher: {
      name: 'Daniel Ortiz',
      country: 'Spain',
      photo: 'https://i.pravatar.cc/200?img=59',
    },
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    price: 65000,
    duration: 60,
    modality: 'In-Person',
    rating: 4.8,
    spots: 4,
    schedules: ['Wed 6:00 a.m.', 'Fri 6:00 a.m.'],
  },
  {
    id: '7',
    title: 'English Book Club',
    level: 'Conversational',
    description:
      'Read short stories and discuss them aloud. Expand your vocabulary without memorizing lists.',
    teacher: {
      name: 'Carolina Pena',
      country: 'Colombia',
      photo: 'https://i.pravatar.cc/200?img=47',
    },
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
    price: 28000,
    duration: 45,
    modality: 'Virtual',
    rating: 4.5,
    spots: 10,
    schedules: ['Thu 7:00 p.m.', 'Sat 11:00 a.m.'],
  },
  {
    id: '8',
    title: 'English for Travel',
    level: 'Basic',
    description:
      'Airport, hotel, restaurant, and emergencies. Ready-to-use phrases for your next trip.',
    teacher: {
      name: 'Julian Mesa',
      country: 'Colombia',
      photo: 'https://i.pravatar.cc/200?img=51',
    },
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    price: 30000,
    duration: 45,
    modality: 'Virtual',
    rating: 4.7,
    spots: 7,
    schedules: ['Tue 8:00 p.m.', 'Sat 8:00 a.m.'],
  },
];

export const formatPrice = (value) =>
  '$' + value.toLocaleString('en-US') + ' COP';