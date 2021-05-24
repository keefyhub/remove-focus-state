# Remove focus state

## Usage
### JS
```
import RemoveFocusState from "remove-focus-state";
new RemoveFocusState();
```

### CSS (well scss)
```
body {
  ...
  
  &.user-is-clicking *:focus {
    box-shadow: none;
    outline: 0
  }
}
```
