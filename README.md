# React.js Demo

This repository contains the demo project that I'll be building to explain the React.js library. Unlike our previous projects, this project depends on a tool, Vite, for building the application.

## Using This Repository

If you make a new copy of these files, you'll need to install the packages it depends on. Open the folder in VS Code, open a terminal, and run the following command:

```bash
npm install
```

If it installs correctly (doesn't give you any errors), then it should have created a `node_modules` subfolder. Once that's done, then you can run a development version of the project by running the following command in a terminal:

```bash
npm run dev
```

## Useful Files

Feel free to download the entire repository and follow along or play with the code. However, if you want to copy individual files into your own project, the following are the most useful:

* `.gitignore`: This file prevents GitHub from archiving files we don't want to save (like the node_modules folder)
* `package.json`: This lists the packages that `npm install` knows to install

And, of course, the site itself is stored in `index.html` as well as all of the files in the `src` folder.