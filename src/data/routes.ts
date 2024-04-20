import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Route {
  name: string
  href: string
  type?: string
  icon?: IconProp
}

export const RouteData: Route[] = [
  {
    name: 'home',
    href: '/',
    icon: ['fas', 'globe-europe'],
  },
  {
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'albums',
    href: '/albums',
    type: 'dropdown',
  },
]
