// data.ts

import { navItem, testimonialsType } from "@/types";

export const navItems: navItem = [
  { name: 'Home', link: '/' },
  { name: 'Blogs', link: '/blogs' },
  // Add more items as needed
];

export const testimonials: testimonialsType[] = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jonathan Vallem',
    authorLocation: 'New York, USA',
    authorAvatar: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?t=st=1726598032~exp=1726601632~hmac=5a1227e9b20e48223ad9759f4f4e92e72dd31439ab4de60bcccd86191979fe98&w=740',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'John Doe',
    authorLocation: 'New York, USA',
    authorAvatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1726596470~exp=1726597070~hmac=55dd336cf3e901f8bd8003ed870d522816b73e736915f745e7b284ab52dfa555',
  }
]
export default testimonials

export const heroSectionContent = [
  {
    id: 'home',
    title: 'Your Journey\n Your Car\n Your Way',
    text: 'Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod aliquam. Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes varius amet vestibulum tellus facilisis consequat pretium. Et faucibus laoreet molestie diam semper fames diam eget.'

  }, {
    id: 'blogs',
    title: 'Your Journey\n Your Car\n Your Way2',
    text: 'Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod aliquam. Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes varius amet vestibulum tellus facilisis consequat pretium. Et faucibus laoreet molestie diam semper fames diam eget.2'
  }

]

export const blogs = [
  {
    id: 1,
    title: 'A Review of Cars with Advanced Infotainment Systems',
    publishDate: 'March 12, 2024',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.',
    blogImage: '/assets/blog.png'
  },
  {
    id: 2,
    title: 'A Review of Cars with Advanced Infotainment Systems2',
    publishDate: 'March 12, 2024',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.',
    blogImage: '/assets/blog.png'
  },
  {
    id: 3,
    title: 'A Review of Cars with Advanced Infotainment Systems3',
    publishDate: 'March 12, 2024',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.',
    blogImage: '/assets/blog.png'
  },
  {
    id: 4,
    title: 'A Review of Cars with Advanced Infotainment Systems4',
    publishDate: 'March 12, 2024',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.',
    blogImage: '/assets/blog.png'
  }
]
