const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      // Preserve JSONP as all uppercase
      if (word.toUpperCase() === 'JSONP') {
        return 'JSONP';
      }
      // Preserve other all-uppercase words (like API, OO, NaN)
      if (word === word.toUpperCase()) {
        return word;
      }
      // Handle camelCase words (like stopPropagation)
      if (word !== word.toLowerCase()) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      // Default title case conversion
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
};