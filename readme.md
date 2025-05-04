# Базовая сборка Webpack для верстки

## Сборка стилей

- `CssMinimizerPlugin` - минификация css. Минифицируется в `production` моде. Чтобы включить минификацию в `dev` режиме нужно:
```javascript     
{
  optimization: {
    minimize: true,
  },
}
```
