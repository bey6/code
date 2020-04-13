# css 中的变量

## 声明一个变量

css 中的变量使用 `--` 前缀声明。

举个 🌰：`--font-color: crimson;`、`--font-size: 1em;`

## 使用一个变量

css 中使用变量需要用 `var()` 函数。

举个 🌰：`color: var(--font-color);`、`font-size: var(--font-size);`
