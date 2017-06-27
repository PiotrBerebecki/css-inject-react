# CSS-in-JS - Inject CSS using JavaScript

A function that injects CSS styles into your React component

## Example use:

```javascript
import React, { Component } from 'react';
import CSSinJS from './CSSinJS';

const titleClassName = CSSinJS({
  color: 'tomato',
  borderStyle: 'solid',
  borderWidth: 10,
  borderColor: 'tomato',
  textAlign: 'center',
});

const paraClassName = CSSinJS({
  color: 'purple',
  backgroundColor: 'pink',
  textAlign: 'center',
  padding: '1rem',
  fontSize: 20,
});

class App extends Component {
  render() {
    return (
      <div>
        <h1 className={titleClassName}>Title</h1>
        <p className={paraClassName}>Para</p>
      </div>
    );
  }
}

export default App;
```
