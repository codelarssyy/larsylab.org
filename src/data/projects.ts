import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'ven.earth',
    description:
      "The website you're currently on! Made with Next.js and utilises serverless functions.",
    href: 'https://github.com/ven/ven-earth',
    icon: ['fas', 'globe-europe'],
  },
  {
    title: 'Lookup',
    description: 'Easily get data about a Discord account from an ID.',
    href: 'https://lookup.larslab.org',
    icon: ['fas', 'search'],
  },
  {
    title: 'Spotify Dashboard',
    description:
      'A minimalistic dashboard for Spotify, allowing you to view your top songs and artists and play music from the application.',
    icon: ['fab', 'spotify'],
  },
]
