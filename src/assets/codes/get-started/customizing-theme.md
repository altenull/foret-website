```jsx
import { Foret } from '@altenull/foret-react';

const App = () => {
  const customTheme = {
    colors: {
      primary: '#ffffff',
    },
  };

  return (
    <Foret theme={customTheme}>
      ...
    </Foret>
  );
};
```