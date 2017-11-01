export const makeTitle = (str) => {
  let title;
  if (str.indexOf("-") === -1 ) {
    title = str.charAt(0).toUpperCase() + str.slice(1)
  } else {
    title = str.split("-").map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(" ")
  }
  return title
}

