# 🔥 todo list

> todo list made with [lit](https://lit.dev/), library to develop fast web components

## Quick start

### Dev mode

```
npm run dev
```

Compiling typescript (watch mode) and run the application:

### Production mode

```
npm run build
```

The compiled application can be found at `/build/index.js` and used with `<todo-list></todo-list>` in the HTML template

To watch the built application, replace `<script src="./main.js" type="module"></script>` by `<script src="./build/index.js" type="module"></script>` in the HTML template and run :

```
npm start
```

### See the result

Locally at: http://localhost:3000/

## Customization

You can configure the design of your Todo List by setting the css variables in the `styles.css`

- `--color-primary`: main color theme for your todo list - default: `red`
- `--color-complementary`: complementary color - default: `white`
- `--color-secondary`: mainly used for the background - default: `black`

You can also define a custom font in the `styles.css`
And you can set a custom title by setting the `title` property of the webcomponent
