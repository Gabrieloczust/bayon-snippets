<p>
  <h1 align="center">Bayon Snippets (Visual Studio Code)</h1>
</p>

## Snippets

- Imports
- Create Component
- Create Component TypeScript
- Create Hook
- Create Hook TypeScript
- Create Styles
- Create Component Test
- Create Component Test Typescript
- Create Util Test
- Create Hook Test
- Create Hook Test TypeScript

### Imports

| prefix | body                                                 | description                                  |
| ------ | ---------------------------------------------------- | -------------------------------------------- |
| `iba`  | <code>import { } from '@bayon/analytics';</code>     | **i**mport @**b**ayon/**a**nalytics          |
| `ibc`  | <code>import { } from '@bayon/commons';</code>       | **i**mport @**b**ayon/**c**ommons            |
| `ibd`  | <code>import { } from '@bayon/date';</code>          | **i**mport @**b**ayon/**d**ate               |
| `ibfe` | <code>import { } from '@bayon/fetch';</code>         | **i**mport @**b**ayon/**fe**tch              |
| `ibf`  | <code>import { } from '@bayon/form';</code>          | **i**mport @**b**ayon/**f**orm               |
| `ibi`  | <code>import { } from '@bayon/i18n';</code>          | **i**mport @**b**ayon/**i**18n               |
| `ibs`  | <code>import { } from '@bayon/svg-icons';</code>     | **i**mport @**b**ayon/**s**vg-icons          |
| `ibt`  | <code>import { } from '@bayon/testing';</code>       | **i**mport @**b**ayon/**t**esting            |
| `impt` | <code>import { } from '@mp/testing-frontend';</code> | **i**mport @**m**p/**t**esting-frontend      |
| `iutl` | <code>import { } from '${USER_LIBRARY}';</code>      | **i**mport @**u**ser/**t**esting-**l**ibrary |
| `ipt`  | <code>import PropTypes from 'prop-types';</code>     | **i**mport **p**rop-**t**ypes                |

### Create Component

- `cbc` || `bc` - **C**reate **B**ayon **C**omponent

```javascript
// cbc  ↵
import React from 'react';

import * as Styles from './FileName.styles';

export const FileName = () => {
  return (
    <Styles.Container>
      <div>$cursor</div>
    </Styles.Container>
  );
};
```

#### Typescript

```typescript
// cbc  ↵
import React from 'react';

import * as Styles from './FileName.styles';

export type TFileNameProps = {
  $cursor1;
};

export const FileName = (props: TFileNameProps) => {
  return (
    <Styles.Container>
      <div>$cursor2</div>
    </Styles.Container>
  );
};
```

### Create Hook

- `cbh` || `bh` - **C**reate **B**ayon **H**ook

```javascript
// cbh  ↵
export const FileName = () => {
  const $cursor = () => {};

  return { $cursor };
};
```

#### Typescript

```typescript
// cbh  ↵
export type TFileNameArgs = {
  $cursor1;
};

export const FileName = (args: TFileNameArgs) => {
  const $cursor2 = () => {};

  return { $cursor3 };
};
```

### Create Styles

- `cbs` || `bs` - **C**reate **B**ayon **S**tyles

```javascript
// cbs  ↵
import { styled } from 'styled-components';

export const Container = styled('div')(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  $cursor,
}));
```

### Create Component Test

- `cbct` || `cbt` || `bt` - **C**reate **B**ayon **C**omponent **T**est

```javascript
// cbct  ↵
import React from 'react';
import { render, screen } from '${USER_LIBRARY}';

import { FileName } from './FileName';

describe('<FileName />', () => {
  it('should render component', () => {
    createComponent();
    expect(screen.getByText($cursor)).toBeInTheDocument();
  });
});

const createComponent = (props = {}) => {
  const defaultProps = {
    ...props,
  };

  return render(<FileName {...defaultProps} />);
};
```

#### Typescript

```typescript
// cbct  ↵
import React from 'react';
import { render, screen } from '${USER_LIBRARY}';

import { FileName, type TFileNameProps } from './FileName';

describe('<FileName />', () => {
  it('should render component', () => {
    createComponent();
    expect(screen.getByText($cursor)).toBeInTheDocument();
  });
});

const createComponent = (props: Partial<TFileNameProps> = {}) => {
  const defaultProps: TFileNameProps = {
    ...props,
  };

  return render(<FileName {...defaultProps} />);
};
```

### Create Hook Test

- `cbht` || `bht` || `bh` - **C**reate **B**ayon **H**ook **T**est

```javascript
// cbht  ↵
import { renderHook, act } from '${USER_LIBRARY}';
import { FileName } from './FileName';

describe('FileName hook', () => {
  it('$cursor1', () => {
    const { result } = createHook();

    act(() => {
      result.current.$cursor2();
    });

    expect($cursor3).$cursor4();
  });
});

const createHook = (props = {}) => {
  const defaultProps = {
    ...props,
  };

  return renderHook(() => useFileName(defaultProps));
};
```

#### Typescript

```typescript
// cbht  ↵
import { renderHook, act } from '${USER_LIBRARY}';
import { FileName, type TFileNameArgs } from './FileName';

describe('FileName hook', () => {
  it('$cursor1', () => {
    const { result } = createHook();

    act(() => {
      result.current.$cursor2();
    });

    expect($cursor3).$cursor4();
  });
});

const createHook = (args: Partial<TFileNameArgs> = {}) => {
  const defaultArgs: TFileNameArgs = {
    ...args,
  };

  return renderHook(() => useFileName(defaultArgs));
};
```

### Create Util Test

- `cbut` || `but` || `bu` - **C**reate **B**ayon **U**til **T**est

```javascript
// cbut  ↵
import { FileName } from './FileName';

describe('FileName util', () => {
  it('should $cursor1', () => {
    expect(FileName($cursor2)).toEqual($cursor3);
  });
});
```
