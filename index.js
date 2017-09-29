const window = require('global/window')

module.exports = IsWebApp

function IsWebApp () {
  if (window.navigator && window.navigator.standalone === true) {
    // is loaded from iOS home screen
    return true
  } else if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
    // is loaded from android home screen
    return true
  } else {
    return false
  }
}

