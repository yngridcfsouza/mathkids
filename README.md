# MathKids

Pequeno app para treinar operações básicas (adição, subtração, multiplicação). Feito com React + Vite + Tailwind.

## Como rodar
1. `npm install`
2. `npm run dev`

Abra `http://localhost:5173` no navegador.

## Funcionalidades
- Geração aleatória de problemas
- Pontuação simples
- Estado salvo em `localStorage`

## Como apresentar
- Tela inicial: selecione a operação desejada.
- Exercício: resolva os problemas, veja pontuação e acertos/erros em tempo real.
- Encerrar: clique em “Encerrar” para ver o resultado final e reiniciar.

## Screenshots (opcional)
Você pode adicionar imagens em `docs/screenshots` e referenciá-las abaixo:

<p align="center">
  <img src="docs/screenshots/home.png" alt="Tela inicial do MathKids" width="720" />
</p>

`![Exercício](docs/screenshots/exercise.png)`

## Deploy (GitHub Pages)
- Certifique-se de que o branch padrão é `main`.
- Faça commit e push destas alterações.
- A Action em `.github/workflows/pages.yml` irá:
  - instalar dependências
  - rodar `npm run build` em `mathkids`
  - publicar o conteúdo de `mathkids/dist` no GitHub Pages
- Acesse a aba “Settings → Pages” para ver a URL publicada.


## Autor
Yngrid — Projeto de extensão
