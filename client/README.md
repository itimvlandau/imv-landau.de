# useful commands

installation:

sudo apt-get install -y git software-properties-common 
sudo apt-add-repository --yes ppa:ansible/ansible
sudo apt update
sudo apt install ansible -y
cd /var/www/imv-landau.de
ansible-playbook ansible/client.yml
ansible-playbook ansible/api.yml

run playbook (ansible 2.9):

```ansible-playbook ansible/client.yml
```

debug:

```tasks:
    - debug:
        var: npm_run_command
```

install new role (go to project root):

```ansible-galaxy install geerlingguy.certbot
```

# my-vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
