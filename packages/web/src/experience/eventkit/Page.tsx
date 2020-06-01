import * as React from 'react'
import Page from 'src/experience/common/Page'
import menu, { hashNav } from 'src/shared/menu-items'

export const ROOT = menu.EVENTS_KIT.link

export const FLAVOR_PATH = `${ROOT}/flavor`
export const RESOURCES_PATH = `${ROOT}/resources`

export const EXAMPLES_PATH = `${ROOT}/examples`
export const CIRCLES_PATH = `${ROOT}/circles`

const PAGES = [
  {
    title: 'Introduction',
    href: ROOT,
    sections: [
      { title: 'Overview', href: `${ROOT}#${hashNav.eventsIntro.overview}` },
      { title: 'Brand Voice', href: `${ROOT}#${hashNav.eventsIntro.brandVoice}` },
    ],
  },
  {
    title: 'Celo Flavor',
    href: FLAVOR_PATH,
    sections: [
      { title: 'Overview', href: `${FLAVOR_PATH}#${hashNav.eventsFlavor.overview}` },
      {
        title: 'Code of Conduct',
        href: `${FLAVOR_PATH}#${hashNav.eventsFlavor.codeOfConduct}`,
      },
      {
        title: 'Foster Growth',
        href: `${FLAVOR_PATH}#${hashNav.eventsFlavor.foster}`,
      },
      { title: 'Unique Gifts', href: `${FLAVOR_PATH}#${hashNav.eventsFlavor.uniqueGifts}` },
      { title: 'Rituals', href: `${FLAVOR_PATH}#${hashNav.eventsFlavor.rituals}` },
      { title: 'Tenets', href: `${FLAVOR_PATH}#${hashNav.eventsFlavor.tenets}` },
    ],
  },
  {
    title: 'Event Resources',
    href: RESOURCES_PATH,
    sections: [
      { title: 'Overview', href: `${RESOURCES_PATH}#${hashNav.eventsResources.overview}` },
      { title: 'Quick Tips', href: `${RESOURCES_PATH}#${hashNav.eventsResources.quickTips}` },
      { title: 'Planning', href: `${RESOURCES_PATH}#${hashNav.eventsResources.planning}` },
      { title: 'Social Media', href: `${RESOURCES_PATH}#${hashNav.eventsResources.social}` },
    ],
  },
  {
    title: 'Example Content',
    href: EXAMPLES_PATH,
    sections: [
      { title: 'Slide Decks', href: `${EXAMPLES_PATH}#${hashNav.eventExamples.slideDecks}` },
      { title: 'Videos', href: `${EXAMPLES_PATH}#${hashNav.eventExamples.videos}` },
    ],
  },
  {
    title: 'Celo Circles',
    href: CIRCLES_PATH,
    sections: [
      { title: 'Sponsorship', href: `${CIRCLES_PATH}#${hashNav.eventCircles.sponsorship}` },
    ],
  },
]

export const ROUTE_TO_TITLE = PAGES.reduce((mapping, page) => {
  mapping[page.href] = page.title
  return mapping
}, {})

interface Section {
  id: string
  children: React.ReactNode
}

interface Props {
  sections: Section[]
  title: string
  path: string
  metaDescription: string
}

export default function BrandKitPage({ sections, title, path, metaDescription }: Props) {
  return (
    <Page
      pages={PAGES}
      sections={sections}
      title={`EventsKit / ${title}`}
      path={path}
      metaDescription={metaDescription}
      ogImage={require('src/experience/brandkit/images/ogimage-brandkit.png')}
    />
  )
}
