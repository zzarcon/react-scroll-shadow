# react-scroll-shadow [![Build Status](https://travis-ci.org/zzarcon/react-scroll-shadow.svg?branch=master)](https://travis-ci.org/zzarcon/react-scroll-shadow)
> Pure CSS solution for adding shadows/keys to indicate more content above or bellow in scrollable area.

<div align="center">
  <img src="demo.gif" alt="demo">
  <br><br>
</div>

# Demo

[https://zzarcon.github.io/react-scroll-shadow](https://zzarcon.github.io/react-scroll-shadow)

# Install 

```
$ yarn add react-scroll-shadow
```

# Usage

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