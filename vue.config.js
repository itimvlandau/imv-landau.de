module.exports = {
  devServer: {
    /* use either poll or vagrant plugin install vagrant-fsnotify */
    /*
    watchOptions: {
        poll: 100
    },
    */
    port: 8080,
    host: '0.0.0.0',
    /* public: '0.0.0.0:8080' */
    public: 'http://10.0.0.10'
  },
  /* publicPath: "/", */
  transpileDependencies: [
    'vuetify'
  ]
}
