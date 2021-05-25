import { config } from "dotenv";
config();
import React from "react";
import { Command, start, Bot } from "../src";

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
    </Bot>
  );
}

start(<Example />);
