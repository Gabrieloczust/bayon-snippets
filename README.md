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

- Import
- Create Const Component
- Create Styles
- Create Test
- Create Bayon Setup Tests

### Import

| prefix | body                                             | description                       |
| ------ | ------------------------------------------------ | --------------------------------- |
| `ibc`  | <code>import { } from '@bayon/commons';</code>   | **i**mport @**b**ayon/**c**ommons |
| `ibf`  | <code>import { } from '@bayon/form';</code>      | **i**mport @**b**ayon/**f**orm    |
| `ibi`  | <code>import { } from '@bayon/i18n';</code>      | **i**mport @**b**ayon/**i**18n    |
| `ipt`  | <code>import PropTypes from 'prop-types';</code> | **i**mport **p**rop-**t**ypes     |

### Create

- `cbc` - **C**reate **B**ayon **C**onst **C**omponent
- `cbs` - **C**reate **B**ayon **S**tyles
- `cbt` - **C**reate **B**ayon **T**est
- `cbst` - **C**reate **B**ayon **S**etup **T**ests

```javascript
// cbc  ↵
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

```javascript
// cbt  ↵
import React from 'react';
import { render } from '@bayon/testing';

import FileName from '.';

describe('<FileName />', () => {
  it('should render component', () => {
    const { container } = createComponent();
    expect(container.firstChild).toBeDefined();
  });
});

const createComponent = (props = {}) => {
  return render(<FileName {...props} />);
};
```

```javascript
// cbs  ↵
import { styled } from '@bayon/commons';

export const Container = styled('div')(() => ({
  "cursor"
}))

```

```javascript
// cbst  ↵
import { bayonSetupTests } from '@bayon/testing';
bayonSetupTests();

```
