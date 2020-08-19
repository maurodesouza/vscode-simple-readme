<h1>Simple Readme</h1>

Generate readme fastly and simply with Simple Readme

<br>

<div align="center">
  <img src="./.github/vscode-simple-readme.gif" alt="Simple Readme Gif"/>
</div>

<br>

## Features

- Includes one template based on this [article](https://blog.rocketseat.com.br/como-fazer-um-bom-readme);
- Support En and pt-BR languages;
- Generates title and  badges by reading the name of the project on the package.json or the root folder;
- Generates a link to your Github profile;

## Settings

You can add these settings in your settings.json

```js
 "simple.readme.settings.github": "YOUR GITHUB USERNAME"

 "simple.readme.settings.name": "YOUR GITHUB NAME"

 "simple.readme.settings.lang": "THE TEMPLATE LANGUAGE" // Default en
```

<br>

* `simple.readme.settings.github`: To add links for you Github profile and to get your repository badges;
* `simple.readme.settings.name`: To put your name on the file end;
* `simple.readme.settings.lang`: The template language;

## Template

- App gif/image;
- Title;
- Badges;
- Status;
- Menu content;

- sections
  - About your project;
  - Features;
  - Technologies;
  - Requirements;
  - Starting;
  - License;

To see the markdown template, [click here](./templates/en/default.md)

To see how the resulting final looks like,  [click here](https://github.com/maurodesouza/weather-react-app);
