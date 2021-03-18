# CavaQuintanilla Shopify Theme

Use a modern JavaScript and Sass build system with Shopify.

- Webpack compiles
- Themekit uploads to your Shopify store
- Prepros gives you proxying and live reloading

## Dependencies

- Node 10.x
- Shopify Themekit
- Prepros

## Setup

- Fork repo
- Create a Private App in your Shopify store with read/write access to theme files. Then put the password of that app in the `./theme/config.yml` file.
- Update the `./theme/config.yml` file with your Shopify store and theme id. _Be sure you have the correct theme id listed, if you don't you run the risk of overwriting files of another theme!_
- Add the theme folder to Prepros as a new project. Update the project name in the theme's Prepros settings.
- Update the Prepros `Live Preview > Server URL`. If you are editing a published and active theme you can just use the URL to your Shopify store. If you're not then in the Shopify theme admin click the dropdown next to your theme and select `Preview Theme`. In the info bar fixed to the bottom of the browser click on `Share Preview`. Use the link provided as your Server URL in Prepros.

## Workflow

_DO NOT SKIP THIS!_

This is important b/c Shopify allows users and developers to edit code direclty in the store, but we use Git as our source of truth.

- Each time you come back to a project first make sure you're working with the latest code from Git and Shopify.
- First run `git pull` and then run `yarn pull:theme`.
- Run `git log` to see if any files have changed. If they have commit and push them in git.

## Development

- Open Prepros, click on the browser icon to view your store in the browser. Prepros will watch your files and reload on changes.
- Run `yarn start` in the terminal. This will run themekit and upload any file changes to your store.
- Feel free to add any build system you want ontop of this (you could even use Prepros for this). Just make sure the source files aren't located within the theme folder or you will get errors from themekit. Just send your dist files direclty in the `./theme/assets` directory (no nested directories).
