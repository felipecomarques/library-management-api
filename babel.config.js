module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views',
        '@routes': './src/interfaces/routes',
        '@entities': './src/core/entities/*',
        '@repository': '/src/domain/repository/*',
        '@useCases': './src/application/useCases/*',
        '@shared': './src/core/shared/*'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}