import { config } from "dotenv";
config();
import React from "react";
import { Command, start, Bot, SendMessage } from "../src";
import { useBotContext } from "../src/context";

function Example() {
  const context = useBotContext();

  return (
    <Bot token={process.env.TOKEN}>
      <Command command={/\/up/}>
        {(msg, match) => {
          console.log(msg.chat.id);
        }}
      </Command>
    </Bot>
  );
}

start(<Example />);
