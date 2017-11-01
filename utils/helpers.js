export const makeTitle = (str) => {
  let title;
  if (str.indexOf("-") === -1 ) {
    title = str.charAt(0).toUpperCase() + str.slice(1)
  } else {
    title = str.split("-").map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(" ")
  }
  return title
}

export const makeSlug = (str) => {
  if (str.indexOf(" ") === -1) {
    return str.toLowerCase()
  } else {
    return str = str.replace(/\s+/g, '-').toLowerCase();
  }
}
