export function scrollTop () {
  let scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
  return {
    top: scroll
  }
}
