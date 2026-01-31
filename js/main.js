/* ═══════════════════════════════════════
   松葉畳店 ― JavaScript
   控えめなフェードイン（Progressive Enhancement）
   ═══════════════════════════════════════ */

;(function () {
  'use strict'

  // JSが動かなくてもコンテンツは見える設計（CSSではopacity:1がデフォルト）
  // JSが動く場合のみ、フェードインを適用する

  var targets = document.querySelectorAll(
    '.omoi__line, .omoi__attribution, .shigoto__item, .shigoto__types, .tenpo__info, .tenpo__map'
  )

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    return // フォールバック：何もしない（全部見える状態）
  }

  // まずopacityを下げる（JSが有効な場合のみ）
  for (var i = 0; i < targets.length; i++) {
    targets[i].style.opacity = '0'
    targets[i].style.transform = 'translateY(16px)'
    targets[i].style.transition = 'opacity 700ms ease-out, transform 700ms ease-out'
  }

  var observer = new IntersectionObserver(
    function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) {
          entries[j].target.style.opacity = '1'
          entries[j].target.style.transform = 'translateY(0)'
          observer.unobserve(entries[j].target)
        }
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
  )

  for (var k = 0; k < targets.length; k++) {
    observer.observe(targets[k])
  }
})()
