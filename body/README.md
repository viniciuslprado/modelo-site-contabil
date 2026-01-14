
# Prado Contabilidade

Projeto React + Vite + TypeScript + Tailwind para o site da Prado Contabilidade.

## Como rodar o projeto

1. Acesse a pasta `body`:
	```sh
	cd body
	```
2. Instale as dependências (npm ou pnpm):
	```sh
	npm install
	# ou
	pnpm install
	```
3. Rode o servidor de desenvolvimento:
	```sh
	npm run dev
	# ou
	pnpm dev
	```
4. Para build de produção:
	```sh
	npm run build
	# ou
	pnpm build
	```

## Scripts disponíveis

- `dev`: inicia o servidor de desenvolvimento
- `build`: gera o build de produção
- `lint`: executa o lint nos arquivos do projeto
- `preview`: visualiza o build de produção localmente

## Estrutura principal

- `src/components/` — componentes reutilizáveis
- `src/components/site2/` — componentes específicos do novo site
- `src/constants.ts` — dados estáticos (depoimentos, conquistas, equipe)
- `src/pages/` — páginas principais
- `tailwind.config.ts` — configuração do Tailwind


## Observações

- O projeto está padronizado para uso com npm ou pnpm.
- Certifique-se de rodar os comandos sempre dentro da pasta `body`.
- Dependências React, ReactDOM e principais libs estão atualizadas.
- Dependências incompatíveis (next-themes, react-day-picker, vaul) foram removidas.
- ESLint e Tailwind estão configurados e funcionais.
- Build e lint passam sem erros críticos.


## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
