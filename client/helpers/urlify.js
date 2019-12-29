const urlify = text => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, '<a href="$1">$1</a>');
};

export default urlify;
