module.exports = {
  devServer: {
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
