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


export const generateID = () => {
  const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const  ID_LENGTH = 8;
  let rtn = '';
  for (var i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return rtn;
}
