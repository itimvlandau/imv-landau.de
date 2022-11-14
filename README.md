# useful commands

##installation for production (after checking out this project):

```
sudo apt-get install -y git software-properties-common
sudo apt-add-repository --yes ppa:ansible/ansible
sudo apt update
sudo apt install ansible -y
www
ansible-playbook ansible/client.yml
ansible-playbook ansible/api.yml
```

##run playbook (ansible 2.9):

```
ansible-playbook ansible/client.yml
```

##debug:

```
tasks:
    - debug:
        var: npm_run_command
```

##install new role (go to project root):

```
ansible-galaxy install geerlingguy.certbot
```

## installation for development (after checking out this project + cd into project root)

```sh
vagrant up
vagrant ssh
www
npm run dev
```

## destroy vagrant box

```sh
vagrant destroy -f
```