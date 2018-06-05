<div align="center">
  <img src="demo.gif" alt="Logo" width="800">
  <br><br>
</div>

# react-scroll-shadow
| Pure CSS solution for adding shadows/keys to indicate more content above or bellow in scrollable area.

## Install 
`npm i react-scroll-shadow`

## Usage
```tsx
import ScrollShadow from 'react-scroll-shadow';

<ScrollShadow
  bottomShadowColors={{
    active: 'red',
    inactive: 'white'
  }}
  topShadowColors={{
    active: 'blue',
    inactive: 'white'
  }}
  shadowSize={2}
>
  Content
</ScrollShadow>
```

See `example/` for full example.