export const posts = [
  {
    slug: 'best-time-to-see-dolphins-in-lovina',
    title: 'The best time to see dolphins in Lovina',
    excerpt: 'What an early start really looks like, what to bring, and why every morning on the water is different.',
    category: 'Sea notes',
    date: '18 Sep 2026',
    readTime: '4 min read',
    image: '/images/lovina-dolphins-hero.webp',
    alt: 'Dolphins surfacing in the Lovina Sea at sunrise',
    body: [
      'Lovina mornings begin before the streets get busy. Boats usually leave while the horizon is still soft, giving you time to settle into the rhythm of the sea before the sun rises.',
      'Dolphins are wild animals, so no two trips are identical. Some mornings they appear close to shore; on others, the captain follows subtle signs further across the bay. That uncertainty is part of what makes the experience special.',
      'Bring a light layer, sun protection, and only what you need. A calm approach, a small boat, and an experienced local captain make the morning feel much more personal.',
    ],
  },
  {
    slug: 'a-slow-day-in-north-bali',
    title: 'A slow day in North Bali',
    excerpt: 'From sunrise at sea to waterfalls and a quiet late lunch—an unhurried route through the north.',
    category: 'Local guide',
    date: '10 Sep 2026',
    readTime: '5 min read',
    image: '/images/hidden-waterfall.png',
    alt: 'A forest path approaching a waterfall in North Bali',
    body: [
      'North Bali rewards travellers who leave room in the day. After a morning on the sea, head inland slowly instead of trying to fit every waterfall and temple into one route.',
      'Choose one natural stop, find lunch somewhere local, and let the drive itself become part of the experience. The roads pass rice fields, small villages, and cooler mountain landscapes.',
      'A local recommendation is especially useful here. Distances can look short on a map, but the best route depends on weather, traffic, and where you want the day to end.',
    ],
  },
  {
    slug: 'sharing-or-private-boat',
    title: 'Sharing boat or private boat?',
    excerpt: 'A simple guide to choosing the Lovina dolphin trip that fits your group, pace, and budget.',
    category: 'Trip planning',
    date: '02 Sep 2026',
    readTime: '3 min read',
    image: '/images/lovina-sunrise.png',
    alt: 'A traditional private boat on calm water near Lovina',
    body: [
      'A sharing boat is the straightforward choice for solo travellers and couples who want a good-value morning on the water. You join other guests and follow a set departure plan.',
      'A private boat gives your group more space and flexibility. It works well for families, photographers, or anyone who prefers a quieter pace without sharing the boat.',
      'The right choice is less about luxury and more about how you like to travel. Tell us your group size and plans, and we can explain the most practical option.',
    ],
  },
] as const;

export type Post = (typeof posts)[number];
