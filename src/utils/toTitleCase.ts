export default (text: string) => {
  const words = text.split(/[\. ~*-]/g);

  const wordsCapialized = words.map(word => {
    if (word.length === 1) { return word; }

    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const finalText = wordsCapialized.join(' ').trim();

  return finalText;
};
