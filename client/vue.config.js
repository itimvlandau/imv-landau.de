module.exports = {
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    client: {
      webSocketURL: 'auto://0.0.0.0:8080/ws'
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
