import Scrollbar from 'smooth-scrollbar'
import Snackbar from 'node-snackbar'
import Store from '../store/index'
import Route from '../router/index'
const $ = require('jquery')

if (typeof window !== 'undefined') {
  window.$ = $
  window.jQuery = $
  require('bootstrap/js/src/tab')
}

export const xray = {
  index () {
    this.loaderInit()
    this.activeRoute()
    this.SmoothScrollbar()
    this.Accordian()
    this.progressBar()
  },
  mainIndex () {
    this.ripple()
    this.fullscreen()
    this.navBarAction()
    this.AccordianInit()
    this.fixedHeader()
    this.chat()
  },
  loaderInit () {
    let load = document.getElementById('loading')
    animation.fadeOut(load, { duration: 0 })
    animation.fadeOut(load, { duration: 1400 })
    setTimeout(() => {
      load.classList.add('d-none')
    }, 1400)
    // $('#loading').delay(1000).fadeOut('slow')
  },
  activeRoute () {
    let obj = {
      name: Route.currentRoute.meta.name,
      breadCrumb: [
        {
          html: '<i class="ri-home-4-line mr-1 float-left"></i>Home',
          to: { name: 'mini.dashboard.home-1' }
        },
        {
          text: Route.currentRoute.meta.name,
          href: '#'
        }
      ],
      bookmark: true
    }
    Store.dispatch('Setting/activePageAction', obj)
  },
  progressBar () {
    $('.iq-progress-bar > span').each(function () {
      let progressBar = $(this)
      let width = $(this).data('percent')
      progressBar.css({
        'transition': 'width 2s'
      })

      setTimeout(function () {
        progressBar.css('width', width + '%')
      }, 100)
    })

    $('.progress-bar-vertical > span').each(function () {
      let progressBar = $(this)
      let height = $(this).data('percent')
      progressBar.css({
        'transition': 'height 2s'
      })

      setTimeout(function () {
        progressBar.css('height', height + '%')
      }, 100)
    })
  },
  fixedHeader () {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 75) {
        $('.iq-top-navbar').addClass('fixed-header')
      } else {
        $('.iq-top-navbar').removeClass('fixed-header')
      }
    })
  },
  ripple () {
    $(document).on('click', '.iq-waves-effect', function (e) {
      // Remove any old one
      $('.ripple').remove()
      // Setup
      let posX = $(this).offset().left
      let posY = $(this).offset().top
      let buttonWidth = $(this).width()
      let buttonHeight = $(this).height()

      // Add the element
      $(this).prepend("<span class='ripple'></span>")

      // Make it round!
      if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth
      } else {
        buttonWidth = buttonHeight
      }

      // Get the center of the element
      let x = e.pageX - posX - buttonWidth / 2
      let y = e.pageY - posY - buttonHeight / 2

      // Add the ripples CSS and start the animation
      $('.ripple').css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
      }).addClass('rippleEffect')
    })
  },

  fullscreen () {
    const elementExist = this.checkElement('class', 'iq-full-screen')
    if (elementExist) {
      $(document).on('click', '.iq-full-screen', function () {
        let elem = $(this)
        if (!document.fullscreenElement &&
          !document.mozFullScreenElement &&
          !document.webkitFullscreenElement &&
          !document.msFullscreenElement) {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen()
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen()
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        }
        elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line')
      })
    }
  },
  triggerSet () {
    const elementExist = this.checkElement('class', 'wrapper-menu')
    if (elementExist) {
      let wrapperMenu = document.querySelector('.wrapper-menu')
      let body = document.querySelector('body')
      this.sidebarMiniSetEvent(wrapperMenu, body)
      /* for (let i = 0; i < wrapperMenu.length; i++) {
      } */
    }
  },

  sidebarMiniSetEvent (element, target) {
    element.classList.toggle('open')
    target.classList.toggle('sidebar-main')
  },
  checkClass (ele, type, className) {
    switch (type) {
      case 'addClass':
        if (!ele.hasClass(className)) {
          ele.addClass(className)
        }
        break
      case 'removeClass':
        if (ele.hasClass(className)) {
          ele.removeClass(className)
        }
        break
      case 'toggleClass':
        ele.toggleClass(className)
        break
    }
  },

  sideBarToggle () {
    const element = document.querySelectorAll('.iq-sidebar-menu li')

    Array.from(element, (elem) => {
      elem.addEventListener('click', (e) => {
        const prevMenu = window.$('.iq-sidebar-menu li').has('.iq-submenu').find('ul.show').attr('id')
        window.$('.iq-sidebar-menu li').has('.iq-submenu').removeClass('active')
        // const collapsed = window.$(`#${prevMenu}`).closest('li').find('.not-collapsed')
        const prevMenuElem = document.getElementById(prevMenu)
        if (prevMenuElem !== null) {
          Array.from(prevMenuElem.closest('li').getElementsByClassName('not-collapsed'), (el) => {
            // el.classList.remove('not-collapsed')
            // el.classList.add('collapsed')
            // el.setAttribute('aria-expanded', 'false')
            // prevMenuElem.classList.remove('show')
            // prevMenuElem.style.display = 'none'
            this.$root.$emit('bv::toggle::collapse', prevMenu)
            prevMenuElem.closest('li').classList.remove('active')
          })
          console.log(prevMenuElem.closest('li').getElementsByClassName('not-collapsed'))
        }

        // collapsed.removeClass('not-collapsed')

        // collapsed.addClass('collapsed')

        // collapsed.attr('aria-expanded', 'false')

        // window.$(prevMenu).removeClass('show')

        // window.$('.iq-sidebar-menu li').has('.iq-submenu').removeClass('active')

        window.$(elem).has('.iq-submenu').addClass('active')
      })
    })
  },

  navBarAction () {
    $(document).on('click', '.iq-sub-dropdown', function (e) {
      e.stopPropagation()
    })
    $(document).on('click', function (e) {
      let myTargetElement = e.target
      let selector, mainElement
      if ($(myTargetElement).hasClass('search-toggle') || $(myTargetElement).parent().hasClass('search-toggle') || $(myTargetElement).parent().parent().hasClass('search-toggle')) {
        if ($(myTargetElement).hasClass('search-toggle')) {
          selector = $(myTargetElement).parent()
          mainElement = $(myTargetElement)
        } else if ($(myTargetElement).parent().hasClass('search-toggle')) {
          selector = $(myTargetElement).parent().parent()
          mainElement = $(myTargetElement).parent()
        } else if ($(myTargetElement).parent().parent().hasClass('search-toggle')) {
          selector = $(myTargetElement).parent().parent().parent()
          mainElement = $(myTargetElement).parent().parent()
        }
        if (!mainElement.hasClass('active') && $('.navbar-list li').find('.active')) {
          $('.navbar-list li').removeClass('iq-show')
          $('.navbar-list li .search-toggle').removeClass('active')
        }

        selector.toggleClass('iq-show')
        mainElement.toggleClass('active')

        e.preventDefault()
      } else if ($(myTargetElement).is('.search-input')) {} else {
        $('.navbar-list li').removeClass('iq-show')
        $('.navbar-list li .search-toggle').removeClass('active')
      }
    })
  },

  checkElement (type, element) {
    let found = false
    let elements
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element)
        if (elements !== undefined && elements !== null && elements.length > 0) {
          found = true
        }
        break

      case 'id':
        elements = document.getElementById(element)

        if (elements !== undefined && elements !== null) {
          found = true
        }
        break
    }
    return found
  },

  owlCarousel () {
  },

  SmoothScrollbar () {
    const elementExistMain = this.checkElement('id', 'sidebar-scrollbar')
    if (elementExistMain) {
      Scrollbar.init(document.querySelector('#sidebar-scrollbar'))
    }
    const elementExistRight = this.checkElement('id', 'right-sidebar-scrollbar')
    if (elementExistRight) {
      Scrollbar.init(document.querySelector('#right-sidebar-scrollbar'))
    }
  },

  Accordian () {
    $('.iq-accordion .iq-accordion-block .accordion-details').hide()
    $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow')
  },

  AccordianInit () {
    $(document).on('click', '.iq-accordion .iq-accordion-block', function () {
      if ($(this).children('div.accordion-details ').is(':hidden')) {
        $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow')
        $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow')
      }
    })
  },

  getActiveLink (item, activeRoute) {
    let active = false
    if (item.children !== undefined) {
      item.children.filter(function (child) {
        if (child.link.name === activeRoute) {
          active = true
        }
      })
    } else {
      if (item.link.name === activeRoute) {
        active = true
      }
    }
    return active
  },
  showSnackbar (type, data = {}) {
    if (type !== null) {
      switch (type) {
        case 'success':
          Snackbar.show({ text: data, backgroundColor: '#323232' })
          break
        case 'error':
          Snackbar.show({ text: data, backgroundColor: '#b21f2d', actionTextColor: '#ffffff' })
          break
      }
    } else {
      Snackbar.show(data)
    }
  },
  Snackbar (data) {
    Snackbar.show(data)
  },
  chat () {
    $('#chat-start').click(function () {
      $('.chat-data-left').toggleClass('show')
    })
    $('.close-btn-res').click(function () {
      $('.chat-data-left').removeClass('show')
    })
    $('.iq-chat-ui li').click(function () {
      $('.chat-data-left').removeClass('show')
    })
    $('.sidebar-toggle').click(function () {
      $('.chat-data-left').addClass('show')
    })
  },
  random (length) {
    let result = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  },
  applyDrag (arr, dragResult) {
    const { removedIndex, addedIndex, payload } = dragResult
    if (removedIndex === null && addedIndex === null) return arr

    const result = [...arr]
    let itemToAdd = payload

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0]
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd)
    }

    return result
  },
  generateItems (count, creator) {
    const result = []
    for (let i = 0; i < count; i++) {
      result.push(creator(i))
    }
    return result
  }
}

export const animation = {
  easing: {
    linear: function (progress) {
      return progress
    },
    quadratic: function (progress) {
      return Math.pow(progress, 2)
    },
    swing: function (progress) {
      return 0.5 - Math.cos(progress * Math.PI) / 2
    },
    circ: function (progress) {
      return 1 - Math.sin(Math.acos(progress))
    },
    back: function (progress, x) {
      return Math.pow(progress, 2) * ((x + 1) * progress - x)
    },
    bounce: function (progress) {
      // eslint-disable-next-line no-unused-vars
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (progress >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2)
        }
      }
    },
    elastic: function (progress, x) {
      return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress)
    }
  },
  animate: function (options) {
    let start = new Date()
    let id = setInterval(function () {
      let timePassed = new Date() - start
      let progress = timePassed / options.duration
      if (progress > 1) {
        progress = 1
      }
      options.progress = progress
      let delta = options.delta(progress)
      options.step(delta)
      if (progress === 1) {
        clearInterval(id)
      }
    }, options.delay || 10)
  },
  fadeOut: function (element, options) {
    let to = 1
    this.animate({
      duration: options.duration,
      delta: function (progress) {
        progress = this.progress
        return animation.easing.swing(progress)
      },
      step: function (delta) {
        element.style.opacity = to - delta
      }
    })
  },
  fadeIn: function (element, options) {
    let to = 0
    this.animate({
      duration: options.duration,
      delta: function (progress) {
        progress = this.progress
        return animation.easing.swing(progress)
      },
      step: function (delta) {
        element.style.opacity = to + delta
      }
    })
  }
}

export const flatpickerSetting = {
  wrap: true,
  altFormat: 'j M Y',
  altInput: true,
  dateFormat: 'Y-m-d'
}
