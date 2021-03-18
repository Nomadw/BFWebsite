module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'BristolFurs: The Website!'
        return args
      })
      
    },
  }