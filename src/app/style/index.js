// Импорт всех .css файлов из папки style
const cssContext = import.meta.webpackContext("../../", {
  recursive: true,
  regExp: /\.css$/,
  mode: "sync",
});

// Применить все импорты
cssContext.keys().forEach(cssContext);
