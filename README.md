<p>
  <h1 align="center">Bayon Snippets (Visual Studio Code)</h1>
</p>

<p align="center">
  <a href="https://github.com/Gabrieloczust/bayon-snippets">
    <img src="https://img.shields.io/github/repo-size/Gabrieloczust/bayon-snippets?style=plastic&color=4ac51c">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=gabrieloczust.vscode-bayon-snippets">
    <img src="https://vsmarketplacebadge.apphb.com/version-short/gabrieloczust.vscode-bayon-snippets.svg?style=plastic&color=61dafb">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=gabrieloczust.vscode-bayon-snippets">
    <img src="https://vsmarketplacebadge.apphb.com/installs-short/gabrieloczust.vscode-bayon-snippets.svg?style=plastic&color=4ac51c">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=gabrieloczust.vscode-bayon-snippets">
    <img src="https://vsmarketplacebadge.apphb.com/rating-short/gabrieloczust.vscode-bayon-snippets.svg?style=plastic&color=4ac51c">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=gabrieloczust.vscode-bayon-snippets">
    <img src="https://img.shields.io/github/license/Gabrieloczust/bayon-snippets?maxAge=2592000&style=plastic&color=4ac51c">
  </a>
</p>

## Snippets

- Imports
- Create Component
- Create Styles
- Create Component Test
- Create Util Test
- Create Hook Test

### Imports

| prefix | body                                             | description                         |
| ------ | ------------------------------------------------ | ----------------------------------- |
| `iba`  | <code>import { } from '@bayon/analytics';</code> | **i**mport @**b**ayon/**a**nalytics |
| `ibc`  | <code>import { } from '@bayon/commons';</code>   | **i**mport @**b**ayon/**c**ommons   |
| `ibd`  | <code>import { } from '@bayon/date';</code>      | **i**mport @**b**ayon/**d**ate      |
| `ibfe` | <code>import { } from '@bayon/fetch';</code>     | **i**mport @**b**ayon/**fe**tch     |
| `ibf`  | <code>import { } from '@bayon/form';</code>      | **i**mport @**b**ayon/**f**orm      |
| `ibi`  | <code>import { } from '@bayon/i18n';</code>      | **i**mport @**b**ayon/**i**18n      |
| `ibs`  | <code>import { } from '@bayon/svg-icons';</code> | **i**mport @**b**ayon/**s**vg-icons |
| `ibt`  | <code>import { } from '@bayon/testing';</code>   | **i**mport @**b**ayon/**t**esting   |
| `ipt`  | <code>import PropTypes from 'prop-types';</code> | **i**mport **p**rop-**t**ypes       |

### Create Component

- `cbc` || `bc` - **C**reate **B**ayon **C**omponent

```javascript
// cbc  ???
import React from 'react';

// import * as S from './FileName.styles';

const FileName = () => {
  return (
    <>
      <div>"cursor"</div>
    </>
  );
};

export default FileName;

```

### Create Styles

- `cbs` || `bs` - **C**reate **B**ayon **S**tyles

```javascript
// cbs  ???
import { styled } from '@bayon/commons';

export const Container = styled('div')(() => ({
  "cursor"
}));

```

### Create Component Test

- `cbct` || `cbt` || `bt` - **C**reate **B**ayon **C**omponent **T**est

```javascript
// cbct  ???
import React from 'react';
import { render, TestProvider } from '@bayon/testing';

import FileName from '.';

describe('<FileName />', () => {
  it('should render component', () => {
    const { container } = createComponent();
    expect(container.firstChild).toBeDefined();
  });
});

const createComponent = (props = {}) => {
  return render(
    <TestProvider>
      <FileName {...props} />
    </TestProvider>
  );
};

```

### Create Hook Test

- `cbht` || `bht` || `bh` - **C**reate **B**ayon **H**ook **T**est

```javascript
// cbht  ???
import { renderHook } from '@testing-library/react-hooks';
import FileName from '.';

describe('FileName hook', () => {
  it('should return a function', () => {
    const { result } = renderHook(() => FileName("cursor"));
    expect(typeof result.current.FileName).toBe('function');
  });
});

```

### Create Util Test

- `cbut` || `but` || `bu` - **C**reate **B**ayon **U**til **T**est

```javascript
// cbut  ???
import FileName from '.';

describe('FileName util', () => {
  it('should "cursor 1"', () => {
    expect(FileName("cursor 2")).toEqual("cursor 3");
  });
});

```
