# -*- mode: ruby -*-
# vi: set ft=ruby :

#############################
# Variables and configuration
#############################

Vagrant.configure("2") do |config|

    module OS
      def OS.windows?
          (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
      end

      def OS.mac?
          (/darwin/ =~ RUBY_PLATFORM) != nil
      end

      def OS.unix?
          !OS.windows?
      end

      def OS.linux?
          OS.unix? and not OS.mac?
      end
    end
    if OS.linux?
      $default_network_interface = `ip route | awk '/^default/ {printf "%s", $5; exit 0}'`
      config.vm.network "public_network", bridge: "#$default_network_interface"
    end

    config.vm.define "imv" do |imv|
      # Increase disk speed with nfs: true (Linux only)
      # imv.vm.synced_folder "./", "/home/vagrant/imv-landau", nfs: true
      # https://www.admin-wissen.de/tutorials/devops-mit-vagrant-und-chef/vagrant-und-chef-performanceoptimierung
      imv.vm.synced_folder "./", "/var/www/imv-landau"

      ####### Resources #######
      imv.vm.provider "virtualbox" do |vb|
         # important for being able to create symlinks
         # vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
         vb.gui = false
         vb.name = "imv-landau"
         vb.memory = 3000
         vb.cpus = 4
      end

      # ####### Provision #######
      imv.vm.provision "shell", run: "always", privileged: false, inline: <<-SHELL
         sudo apt update
         sudo apt install yamllint ansible-lint -y
         # mkdir ~/vagrant_node_modules
         # sudo mkdir -p /var/www/imv-landau/node_modules
         # sudo mount --bind ~/vagrant_node_modules /var/www/imv-landau/node_modules
         cd /var/www/imv-landau
         ansible-lint ansible/dev.playbook.yml
         ansible-playbook ansible/dev.playbook.yml
         # npm run serve
         # pm2 start pm2.config.dev.json
      SHELL

      # turn off the check if the plugin is installed
      # if Vagrant.has_plugin?("vagrant-vbguest")
      #   imv.vbguest.auto_update = false
      # end

      VAGRANT_DISABLE_RESOLV_REPLACE=1
      imv.vm.box = "generic/ubuntu2010"
      imv.vm.network "private_network", ip: "10.0.0.10"
      imv.vm.network "forwarded_port", guest: 5432, host: 5432, host_ip: "127.0.0.1"
      imv.vm.network "forwarded_port", guest: 22,   host: 22, host_ip: "127.0.0.1", id: "ssh"
      imv.vm.network "forwarded_port", guest: 80, host: 80, host_ip: "127.0.0.1"
      imv.vm.network "forwarded_port", guest: 443, host: 443, host_ip: "127.0.0.1"
      imv.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"
      for i in 8000..8100
          imv.vm.network "forwarded_port", guest: i, host: i, host_ip: "127.0.0.1"
      end
    end
end
