# hicetnunc UI

hicetnunc UI is intended to experiment with different smart contracts designs.

## How to deploy your own fork/clone
There are many services you can use. Currently in the discord there are instructions for different services in the pinned messages in the #general-dev channel

```
link to pinned message: https://discord.com/channels/908672304236625970/908710947412140082/911347676258369597
discord invite: https://discord.gg/EeDgYwh2tH
```
## How to deploy your own fork on render.com

Make an account on render.com, choose your forked/cloned github HEN repository

Settings Configurations (without quotation marks):

```
build command: "npm run build"
publish dir: "./build"
set your ENV variables (env variables are in the .env folder)
```

go to the Redirects/Rewrites tab and add the following details:

```
source: "/*" 
destination: "/index.html"
action "Rewrite"
```

## other commands

```
npm i
npm start
```

`MIT license`
