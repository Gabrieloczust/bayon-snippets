# 🚀 Bayon Snippets

Snippets para desenvolvimento com React e testes no VS Code

---

## 📦 Sobre

Essa extensão oferece snippets prontos para acelerar o desenvolvimento com React, incluindo:

- Criação de componentes e hooks
- Testes automatizados (Component, Hook e Util)
- Estilos com styled-components
- Imports personalizados com suporte à configuração dinâmica via `bayonSnippets.library`

---

## ⚙️ Configuração

Você pode configurar a biblioteca de testes padrão diretamente nas configurações do VS Code:

```json
"bayonSnippets.library": "@mp/testing-frontend"
````

Todos os snippets que utilizam `${bayonSnippets.library}` se adaptarão a essa configuração.

---

## ✨ Snippets disponíveis

### 📁 Imports

| Prefixo | Código gerado              | Descrição                     |
| ------: | -------------------------- | ----------------------------- |
|   `iba` | `@bayon/analytics`         | Import Analytics              |
|   `ibc` | `@bayon/commons`           | Import Commons                |
|   `ibd` | `@bayon/date`              | Import Date                   |
|  `ibfe` | `@bayon/fetch`             | Import Fetch                  |
|   `ibf` | `@bayon/form`              | Import Form                   |
|   `ibi` | `@bayon/i18n`              | Import i18n                   |
|   `ibs` | `@bayon/svg-icons`         | Import SVG Icons              |
|   `ibt` | `@bayon/testing`           | Import Testing                |
|  `impt` | `@mp/testing-frontend`     | Import MP Testing             |
|  `iutl` | `${bayonSnippets.library}` | Import biblioteca configurada |
|   `ipt` | `prop-types`               | Import PropTypes              |

---

## 🧱 Criação de Estruturas

### 🔹 Componentes

**Prefixos**: `cbc`, `bc`

#### JavaScript

```js
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

#### TypeScript

```ts
import React from 'react';
import * as Styles from './FileName.styles';

export interface IFileNameProps {
  $cursor1;
}

export const FileName = (props: IFileNameProps) => {
  return (
    <Styles.Container>
      <div>$cursor2</div>
    </Styles.Container>
  );
};
```

---

### 🔹 Hooks

**Prefixos**: `cbh`, `bh`

#### JavaScript

```js
export const FileName = () => {
  const $cursor = () => {};

  return { $cursor };
};
```

#### TypeScript

```ts
export interface IFileNameArgs {
  $cursor1;
}

export const FileName = (args: IFileNameArgs) => {
  const $cursor2 = () => {};

  return { $cursor3 };
};
```

---

### 🔹 Estilos

**Prefixos**: `cbs`, `bs`

```js
import { styled } from 'styled-components';

export const Container = styled('div')(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  $cursor,
}));
```

---

## 🧪 Testes

### 🧩 Componentes

**Prefixos**: `cbct`, `cbt`, `bt`

#### JavaScript

```js
import React from 'react';
import { render, screen } from '${bayonSnippets.library}';
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

#### TypeScript

```ts
import React from 'react';
import { render, screen } from '${bayonSnippets.library}';
import { FileName, type IFileNameProps } from './FileName';

describe('<FileName />', () => {
  it('should render component', () => {
    createComponent();
    expect(screen.getByText($cursor)).toBeInTheDocument();
  });
});

const createComponent = (props: Partial<IFileNameProps> = {}) => {
  const defaultProps: IFileNameProps = {
    ...props,
  };

  return render(<FileName {...defaultProps} />);
};
```

---

### 🧩 Hooks

**Prefixos**: `cbht`, `bht`, `bh`

#### JavaScript

```js
import { renderHook, act } from '${bayonSnippets.library}';
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

#### TypeScript

```ts
import { renderHook, act } from '${bayonSnippets.library}';
import { FileName, type IFileNameArgs } from './FileName';

describe('FileName hook', () => {
  it('$cursor1', () => {
    const { result } = createHook();

    act(() => {
      result.current.$cursor2();
    });

    expect($cursor3).$cursor4();
  });
});

const createHook = (args: Partial<IFileNameArgs> = {}) => {
  const defaultArgs: IFileNameArgs = {
    ...args,
  };

  return renderHook(() => useFileName(defaultArgs));
};
```

---

### 🧩 Utils

**Prefixos**: `cbut`, `but`, `bu`

```js
import { FileName } from './FileName';

describe('FileName util', () => {
  it('should $cursor1', () => {
    expect(FileName($cursor2)).toEqual($cursor3);
  });
});
```

---

## 🧭 Contribuindo

Sinta-se à vontade para abrir Issues ou Pull Requests no [repositório no GitHub](https://github.com/Gabrieloczust/bayon-snippets).

---

## 📃 Licença

MIT © Gabriel Oczust

```
The MIT License (MIT)

Copyright (c) 2025 Gabriel Oczust

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
