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
      imv.vm.synced_folder ".", "/vagrant", disabled: true
      if Vagrant::Util::Platform.windows?
        # https://github.com/adrienkohlbecker/vagrant-fsnotify
        # vagrant plugin install vagrant-fsnotify
        imv.vm.synced_folder ".", "/var/www/imv-landau", fsnotify: true, mount_options: ["dmode=770,fmode=770"]
      else
        imv.vm.synced_folder ".", "/var/www/imv-landau"
      end

      ####### Resources #######
      imv.vm.provider "virtualbox" do |vb|
         vb.gui = false
         vb.name = "imv-landau"
         vb.memory = 3000
         vb.cpus = 4
      end

      # ####### Provision #######
      imv.vm.provision "shell", run: "always", privileged: false, inline: <<-SHELL
         # sudo echo "deb http://ppa.launchpad.net/ansible/ansible/ubuntu focal main" | sudo tee -a /etc/apt/sources.list
         # sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 93C4A3FD7BB9C367
         # sudo apt-get update

         export DEBIAN_FRONTEND=noninteractive && sudo apt-get update && sudo apt-get upgrade --quiet --yes --allow-unauthenticated -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" && sudo apt-get dist-upgrade --quiet --yes --allow-unauthenticated -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold"

         # https://docs.ansible.com/ansible/latest/installation_guide intro_installation.html#confirming-your-installation
         sudo apt install software-properties-common ansible -y
         cd /var/www/imv-landau
         sudo ansible-playbook ansible/client.yml --extra-vars "user=$USER home_path=/home/$USER"
         sudo ansible-playbook ansible/api.yml --extra-vars "user=$USER home_path=/home/$USER"
      SHELL

      VAGRANT_DISABLE_RESOLV_REPLACE=1
      imv.vm.box = "generic/ubuntu2004"
      imv.vm.network "private_network", ip: "10.0.0.10"
      imv.vm.network "forwarded_port", host: 5432, guest: 5432, host_ip: "127.0.0.1"
      imv.vm.network "forwarded_port", host: 2222, guest: 22, host_ip: "127.0.0.1", id: "ssh"
      imv.vm.network "forwarded_port", host: 80,   guest: 80, host_ip: "127.0.0.1"
      imv.vm.network "forwarded_port", host: 443,  guest: 443, host_ip: "127.0.0.1"
      imv.vm.network "forwarded_port", host: 4443, guest: 4443, host_ip: "127.0.0.1"
      imv.vm.network "forwarded_port", host: 3000, guest: 3000, host_ip: "127.0.0.1"
      for i in 8000..8100
          imv.vm.network "forwarded_port", host: i, guest: i, host_ip: "127.0.0.1"
      end
    end

    #if Vagrant::Util::Platform.windows?
    #  # start fsnotify on host after the guest starts or reloads/provisions
    #  config.trigger.after :up, :reload, :provision do |trigger|
    #    trigger.info = "********* start fsnotify in background *********"
    #    trigger.run = {inline: "bash -c 'vagrant fsnotify > ~/fsnotify.log 2>&1 &'"}
    #  end
    #
    #  # remove fsnotify.log file
    #  config.trigger.after :destroy do |trigger|
    #    trigger.info = "********* removing fsnotify.log *********"
    #    trigger.run = {inline: "rm fsnotify.log"}
    #  end
    #end
end
