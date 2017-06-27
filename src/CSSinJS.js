function hyphenateStyleName(key) {
  return key.replace(
    /([a-z])([A-Z])/g,
    (all, lower, upper) => `${lower}-${upper.toLowerCase()}`
  );
}

function addUnit(value) {
  return typeof value === 'number' ? `${value}px` : value;
}

export default function(styleObj) {
  // check if style tag has already been creted
  let styleTag = document.head.querySelector('[data-nice-components]');

  // add style tag
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.setAttribute('data-nice-components', 'true');
    document.head.appendChild(styleTag);
  }

  // transform object with styles into a string
  const cssRules = Object.keys(styleObj)
    .map(key => `${hyphenateStyleName(key)}: ${addUnit(styleObj[key])}`)
    .join(';');

  const randomClassName = `nc-${Math.floor(Math.random() * 10000)}`;

  const styles = `/* ${randomClassName} */
.${randomClassName} {${cssRules}}
`;
  styleTag.textContent += styles;

  return randomClassName;
}
