export default (text: string) => {
  const words = text.split(/[ ]/g);

  const wordsLowercase = words.map(word => word.toLowerCase());

  const finalText = wordsLowercase.join('');

  return finalText;
};