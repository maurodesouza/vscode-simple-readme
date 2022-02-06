export class ParseString {
  text: string;
  words: string[];

  constructor(text: string) {
    this.text = text;
    this.words = text.split(/[ ]/g);
  }

  toContinuosLowerCase = () => {
    return this.words.map(word => word.toLowerCase()).join('');
  };

  toKebabLowerCase = () => {
    return this.words.map(word => word.toLowerCase()).join('-');
  };

  toTitleCase = () => {
    const words = this.text.split(/[\. ~*-]/g);

    return words.map(word => {
      if (word.length === 1)  { return word; } 
  
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ').trim();
  };
}