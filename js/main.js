/* ═══════════════════════════════════════
   松葉畳店 ― JavaScript
   控えめなフェードイン
   ═══════════════════════════════════════ */

;(function () {
  'use strict'

  // Fade-in on scroll
  const targets = document.querySelectorAll(
    '.omoi__line, .omoi__attribution, .shigoto__item, .shigoto__types, .tenpo__info, .tenpo__map'
  )

  targets.forEach(function (el) {
    el.classList.add('fade-target')
  })

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach(function (el) {
      observer.observe(el)
    })
  } else {
    // Fallback: show all immediately
    targets.forEach(function (el) {
      el.classList.add('is-visible')
    })
  }
})()
