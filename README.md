<p>
  <h1 align="center">Bayon Snippet (Visual Studio Code)</h1>
</p>

## Snippets

- Import
- Create Const Component
- Create Test
- Create Styles


### Import

| prefix    | body                                               | description                       |
| --------- | -------------------------------------------------- | --------------------------------- |
| `ibc`     | <code>import {  } from '@bayon/commons';</code>    | **i**mport @**b**ayon/**c**ommons |
| `ibf`     | <code>import {  } from '@bayon/form';</code>       | **i**mport @**b**ayon/**f**orm    |
| `ibi`     | <code>import {  } from '@bayon/i18n';</code>       | **i**mport @**b**ayon/**i**18n    |
| `ipt`     | <code>import PropTypes from 'prop-types';</code>   | **i**mport **p**rop-**t**ypes     |

### Create

- `cbc` - **C**reate **B**ayon **C**onst **C**omponent
- `cbt` - **C**reate **B**ayon **T**est
- `cbs` - **C**reate **B**ayon **S**tyles

```javascript
// cbc  ↵
import React from 'react';

// import * as S from './.styles';

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
