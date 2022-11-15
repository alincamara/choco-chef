import browserHistory from '../lib/browser-history'

import { ROUTE_PAGE_CONTACT, ROUTE_PAGE_ABOUT } from '../constants/routes'

export const goToContact = (): void => browserHistory.push(ROUTE_PAGE_CONTACT)

export const goToAbout = (): void => browserHistory.push(ROUTE_PAGE_ABOUT)
