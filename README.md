# hicetnunc UI

hicetnunc UI is intended to experiment with different smart contracts designs.

## How to deploy your own fork/clone
There are many services you can use. Currently in the discord there are instructions for different services in the pinned messages in the #general-dev channel

```
link to pinned message: https://discord.com/channels/908672304236625970/908710947412140082/911347676258369597
discord invite: https://discord.gg/EeDgYwh2tH
```
## How to deploy your own fork/clone on render.com

Make an account on render.com, choose your forked/cloned github HEN repository

Settings Configurations (without quotation marks):

```
build command: "npm run build"
publish dir: "./build"
set your ENV variables (env variables are in the .env file https://github.com/violetforest/hicetnunc/blob/main/.env)
```

go to the Redirects/Rewrites tab and add the following details:

```
source: "/*" 
destination: "/index.html"
action "Rewrite"
```

## running locally

```
npm i
npm start
```

You might need the following versions of node/npm but some people have success without these versions
```
node v12.18.3
npm 6.14.6
```

`MIT license`
