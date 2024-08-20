export default {
  horizontalMenuAction (context, payload) {
    if (context.state.horizontalMenu) {
      context.commit('horizontalMenuCommit', false)
    } else {
      context.commit('horizontalMenuCommit', true)
    }
  },
  miniSidebarAction (context, payload) {
    return new Promise((resolve, reject) => {
      if (context.state.miniSidebarMenu) {
        context.commit('miniSidebarCommit', false)
        resolve(false)
      } else {
        context.commit('miniSidebarCommit', true)
        resolve(true)
      }
    })
  },
  authUserAction (context, payload) {
    context.commit('authUserCommit', payload)
  },
  addUserAction (context, payload) {
    context.commit('addUserCommit', payload)
  },
  activePageAction (context, payload) {
    context.commit('activePageCommit', payload)
  },
  addBookmarkAction (context, payload) {
    context.commit('addBookmarkCommit', payload)
  },
  removeBookmarkAction (context, payload) {
    context.commit('removeBookmarkCommit', payload)
  },
  setLangAction (context, payload) {
    context.commit('setLangCommit', payload)
  },
  setRtlAction (context, payload) {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')
    let body = document.getElementsByTagName('body')
    body[0].classList.add('rtl')
    body[0].classList.remove('light')
  },
  removeRtlAction (context, payload) {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')
    let body = document.getElementsByTagName('body')
    body[0].classList.remove('rtl')
    body[0].classList.add('light')
  }
}
