# Telebot JSX 🚢

Highly experimental way to create Telegram Bots in JSX syntax.

## Usage

```sh
npm i telebot-jsx
```
BTW, It's a react app, so you'll need to compile it... I'll prefer using typescript... You may even use babel...

> You may check `tsconfig.json` on this project for reference...

Example Code:-
```ts
import React from "react";
import { Command, start, Bot, Event } from "telebot-jsx";

function Example() {
  return (
    <Bot token={process.env.TOKEN}>
      <Command command="test">
        {(ctx) => {
          ctx.reply("Test Done", {
            reply_to_message_id: ctx.message.message_id,
          });
        }}
      </Command>
      <Command command="ping">
        {(ctx) => {
          ctx.reply("pong");
        }}
      </Command>
      <Event
        on="dice"
        handle={(ctx) => {
          ctx.reply("Bingo");
        }}
      />
    </Bot>
  );
}

start(<Example />);
```

You may even just do this...
```sh
git clone https://github.com/PiyushSuthar/telebot-jsx.git

cd telebot-jsx

yarn # Install deps
yarn test # Run example file
```

Don't forget to add `TOKEN` in `.env` file,

Look `example` folder for example app.

---

Made with ♥ by Piyush Suthar
