import type { MarkdownInstance } from 'astro'
import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'ima blog',
  description: '個人blog',
  author: {
    name: 'IMAMURA Shohei',
    twitter: '',
    url: 'https://ima-blog.netlify.app/',
    email: '',
    summary: '個人blog',
  },
  org: {
    name: '',
    twitter: '',
    url: '',
    email: '',
    summary:
      '',
  },
  location: 'Tokyo, Japan',
  latlng: [35.630, 139.647] as [number, number],
  repository: 'https://github.com/hellotham/hello-astro',
  social: [
    {
      name: 'Email',
      link: 's3imamura@gmail.com',
      icon: 'envelope',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/sho45122498',
      icon: 'twitter',
    },
  ],
  buildTime: new Date(),
}

export const Logo = '../images/svg/astro/logomark-light.svg'
export const LogoImage = '../images/astro/full-logo-light.png'
export const FeaturedSVG = '../images/svg/undraw/undraw_design_inspiration.svg'
export const DefaultSVG = '../images/svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '../images/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'doc/introduction' },
]

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: '../images/svg/undraw/undraw_instruction_manual.svg',
    socialImage: '../images/undraw/undraw_instruction_manual.png',
    description: 'Guidelines on using this starter.'
  },
  {
    category: 'information',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Information articles.'
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Category ' + category,
  }
}
export const AuthorDetail = [
  {
    name: ' ',
    description: ' ',
    contact: ' ',
    image: '../images/authors/Chris Tham.jpg'
  }
]

export const DefaultAuthor = {
  name: 'IMAMURA Shohei',
  image: '../images/authors/default.png',
  contact: '',
  description: 'ima blog'
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = ` `

export const COMMUNITY_INVITE_URL = ` `

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'RDRA2.0': [
    { text: 'RDRA2.0', link: 'doc/rdra2' },
    { text: 'システムコンテキスト図', link: 'doc/rdra2/system-context' },
    { text: '要求モデル図', link: 'doc/rdra2/requirement-model' },
    { text: 'ビジネスコンテキスト図', link: 'doc/rdra2/business-context' },
    { text: 'ビジネスユースケース', link: 'doc/rdra2/business-usecase' },
    { text: '業務フロー図', link: 'doc/rdra2/business-flow' },
    { text: 'ユースケース複合図', link: 'doc/rdra2/usecase-complex' },
    { text: '情報モデル', link: 'doc/rdra2/information-model' },
    { text: '状態モデル', link: 'doc/rdra2/status-model' },
  ],
}
