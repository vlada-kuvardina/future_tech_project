import pxxToRem from './utils/pxToRem.js'

const MatchMedia = {
    mobile: window.matchMedia(`(width <= ${pxxToRem(767.98)}px)`),
}

export default MatchMedia