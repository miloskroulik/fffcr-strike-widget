import './main.css'

const MS_PER_DAY = 86400000
const GOOGLE_ANALYTICS_DELAY_MS = 30

const ZAKLIMA_LIVE_URLS = {
  cs: 'https://zaklima.cz',
  //es: 'https://www.earthdaylive2020.org/es/?source=earthdaylivebanner',
  // de: 'https://www.earthdaylive2020.org/de/?source=earthdaylivebanner',
  // fr: 'https://www.earthdaylive2020.org/fr/?source=earthdaylivebanner',
  // nl: 'https://www.earthdaylive2020.org/nl/?source=earthdaylivebanner',
  // tr: 'https://www.earthdaylive2020.org/tr/?source=earthdaylivebanner',
  // pt: 'https://www.earthdaylive2020.org/pt/?source=earthdaylivebanner',
  // it: 'https://www.earthdaylive2020.org/it/?source=earthdaylivebanner',
}

const LOCALE_CODE_MAPPING = {
  en: 'en-EN',
  de: 'de-DE',
  es: 'es-ES',
  cs: 'cs-CZ',
  fr: 'fr-FR',
  nl: 'nl-NL',
  tr: 'tr-TR',
  pt: 'pt-BR',
  it: 'it-IT',
}

let isMaximizing = false
let language = 'cs'

function maximize() {
  if (isMaximizing) return
  isMaximizing = true
  postMessage('maximize')
  const stickyFooter = document.querySelector('.zk-footer')
  stickyFooter.style.display = 'none'

  const fullPage = document.querySelector('.zk-full-page')
  fullPage.style.display = 'flex'
}

function showCloseButtonOnFullPageWidget() {
  const fullPageWidget = document.querySelector('.zk-full-page')
  fullPageWidget.style.background = 'none'
  fullPageWidget.classList.add('show-close-button')

  const fullPageCloseButton = document.querySelector('.zk-full-page__close')
  fullPageCloseButton.style.display = 'flex'

  const fullPageCloseButtonContent = document.querySelector('.zk-close')
  fullPageCloseButtonContent.classList.add('zk-full-page-close')

  const fullPageFooter = document.querySelector('.zk-full-page__footer')
  fullPageFooter.style.display = 'none'
}

function isTruthy(str) {
  return typeof(str) === 'undefined' || `${str}` === 'true' || `${str}` === '1'
}

function parseQuery(queryString) {
  var query = {}
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&')
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=')
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return query
}

function postMessage(action, data) {
  data || (data = {})
  data.action = action
  data.ZAKLIMA_LIVE = true
  window.parent.postMessage(data, '*')
}

function handleCloseButtonClick(event) {
  event.preventDefault()
  event.stopPropagation()

  //adding delay to allow google analytics call to complete
  setTimeout(() => {
    postMessage('closeButtonClicked')
  }, GOOGLE_ANALYTICS_DELAY_MS)
}

function handleJoinEDLButtonClick(event) {
  event.preventDefault()
  event.stopPropagation()

  //adding delay to allow google analytics call to complete
  setTimeout(() => {
    postMessage('buttonClicked', { linkUrl: ZAKLIMA_LIVE_URLS[language] })
  }, GOOGLE_ANALYTICS_DELAY_MS)
}

function setEarthDayLiveLinkUrl(selector) {
  const element = document.querySelector(selector)
  element.setAttribute('href', ZAKLIMA_LIVE_URLS[language])
}

function attachEvent(selector, event, callback) {
  var elements = document.querySelectorAll(selector)
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener(event, callback)
  }
}

function initGoogleAnalytics() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga')

  if (typeof window.ga !== 'undefined') {
    window.ga('create', 'UA-162257314-2', 'auto')
    window.ga('send', 'pageview')
  }
}

function addTrackingEvents(hostname, forceFullPageWidget) {
  attachEvent('.zk-footer .zk-link', 'click', () => trackEvent('footer-join-button', 'click', hostname))
  attachEvent('.zk-footer .zk-close', 'click', () => trackEvent('footer-close-button', 'click', hostname))
  attachEvent('.zk-full-page .zk-link', 'click', () => trackEvent('full-page-join-button', 'click', hostname))
  attachEvent('.zk-full-page .zk-close', 'click', () => trackEvent('full-page-close-button', 'click', hostname))

  if (forceFullPageWidget) {
    trackEvent('full-page-widget', 'load', hostname)
  } else {
    trackEvent('footer-widget', 'load', hostname)
  }
}

function trackEvent(category, action, label, value) {
  if (!window.ga) return

  const params = {
    hitType: 'event',
    eventCategory: category,
    eventAction: action
  }

  if (label) {
    params.eventLabel = label
  }

  if (value) {
    params.eventValue = value
  }
  window.ga('send', params)
}

function todayIs(date) {
  var today = new Date()
  return date.getFullYear() === today.getFullYear()
    && date.getMonth() === today.getMonth()
    && date.getDate() === today.getDate()
}

function getFormattedDate(date, language) {
  return date.toLocaleDateString(LOCALE_CODE_MAPPING[language], { day: 'numeric', month: 'long' })
}

function appendPartnerReferrerToUrls(partnerReferrer) {
  if (!partnerReferrer) return

  for (let language in ZAKLIMA_LIVE_URLS) {
    ZAKLIMA_LIVE_URLS[language] += '&referrer=' + partnerReferrer
  }
}

function initializeInterface() {
  const query = parseQuery(location.search)
  const fullPageDisplayStartDate = new Date(Date.parse(query.fullPageDisplayStartDate))
  const fullPageDisplayStopDate = new Date(fullPageDisplayStartDate.getTime() + MS_PER_DAY)
  const isFullPage = query.forceFullPageWidget || todayIs(fullPageDisplayStartDate)

  appendPartnerReferrerToUrls(query.partnerReferrer || null)

  setEarthDayLiveLinkUrl('.zk-footer .zk-link__wrapper .zk-link')
  setEarthDayLiveLinkUrl('.zk-footer .zk-link__wrapper .zk-link__icon')
  setEarthDayLiveLinkUrl('.zk-footer__logo')
  setEarthDayLiveLinkUrl('.zk-full-page .zk-link__wrapper .zk-link')
  setEarthDayLiveLinkUrl('.zk-full-page .zk-link__wrapper .zk-link__icon')
  setEarthDayLiveLinkUrl('.zk-full-page__logo')
  attachEvent('.zk-close', 'click', handleCloseButtonClick)
  attachEvent('.zk-link', 'click', handleJoinEDLButtonClick)
  attachEvent('.zk-link__icon', 'click', handleJoinEDLButtonClick)
  attachEvent('.zk-footer__logo', 'click', handleJoinEDLButtonClick)
  attachEvent('.zk-full-page__logo', 'click', handleJoinEDLButtonClick)

  language = query.language ? query.language : language

  if (query.showCloseButtonOnFullPageWidget) {
    showCloseButtonOnFullPageWidget()
  }

  if (isTruthy(query.googleAnalytics) && !navigator.doNotTrack) {
    // Comment out
    // initGoogleAnalytics()
    // addTrackingEvents(query.hostname, query.forceFullPageWidget)
  }

  if (isFullPage) {
    maximize()
  }

  // Set display dates on full-size widget
  var fullscreenDateString = getFormattedDate(fullPageDisplayStartDate, language)
  var nextDayDateString = getFormattedDate(fullPageDisplayStopDate, language)
  document.getElementById('zk-strike-date').innerText = fullscreenDateString
  document.getElementById('zk-tomorrow-date').innerText = nextDayDateString
}

document.addEventListener('DOMContentLoaded', initializeInterface)
