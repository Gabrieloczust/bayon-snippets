# VS Code Extension Quickstart - Bayon Snippets

Este guia rápido ajuda você a instalar, configurar, desenvolver e publicar a extensão Bayon Snippets para VS Code.

---

## 🚀 Instalação

### Requisitos

- VS Code instalado
- Node.js (versão 16+ recomendada)
- [pnpm](https://pnpm.io/) como gerenciador de pacotes

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/Gabrieloczust/bayon-snippets.git
cd bayon-snippets
````

2. Instale as dependências usando pnpm:

```bash
pnpm install
```

3. Gere os snippets e crie o pacote da extensão:

```bash
pnpm build
```

4. Instale localmente a extensão gerada:

```bash
pnpm run install-extension
```

---

## ⚙️ Configuração

Você pode configurar a biblioteca usada nos snippets modificando a propriedade no settings do VS Code:

```json
"bayonSnippets.library": "@mp/testing-frontend"
```

Altere para a biblioteca que desejar usar nos seus snippets.

---

## 🛠 Desenvolvimento

* Os snippets estão localizados nas pastas `src/commons`, `src/javascript` e `src/typescript`.
* O script `scripts/generate-snippets.ts` gera os arquivos finais de snippet em `snippets/`.
* Modifique os arquivos `.json` originais e rode `pnpm build` para atualizar a extensão.

---

## 📦 Publicação

Para publicar uma nova versão no marketplace:

```bash
pnpm publish
```

Este comando executa o build e publica a extensão automaticamente.

---

## 🔍 Testando a extensão no VS Code

* Após instalar a extensão localmente, abra um arquivo `.js`, `.ts`, `.jsx` ou `.tsx`.
* Comece a digitar um prefixo de snippet, como `cbc` para criar um componente Bayon.
* Utilize o snippet para acelerar o desenvolvimento.

---

## 📚 Recursos úteis

* [Documentação oficial do VS Code para extensões](https://code.visualstudio.com/api/get-started/your-first-extension)
* [Guia oficial de snippets do VS Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
* [VSCE - ferramenta oficial para empacotar e publicar extensões](https://github.com/microsoft/vscode-vsce)

---

## 🧑‍💻 Contato

Dúvidas ou contribuições? Abra uma issue no [GitHub](https://github.com/Gabrieloczust/bayon-snippets).

---

## 📝 Licença

MIT © Gabriel Oczust

```

---

Quer que eu gere esse arquivo pronto para você baixar?
```
