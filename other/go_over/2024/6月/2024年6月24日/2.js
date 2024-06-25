function highlight(strings, ...values) {
  console.log(strings, values);
  let result = "";
  strings.forEach((string, index) => {
    result += string;
    if (index < values.length) {
      result += `<span class="highlight">${values[index]}</span>`;
    }
  });
  return result;
}

const keyword = "JavaScript";
const description = "a versatile programming language";

const highlightedText = highlight`Learn ${keyword} - ${description} today!`;

console.log(highlightedText);