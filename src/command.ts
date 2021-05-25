import TelegramBot from "node-telegram-bot-api";
import React from "react";
import { Context } from "telegraf";
import { Update } from "typegram";
import { useBotContext } from "./context";

interface Props {
  command: string,
  children: (ctx: Context<Update>) => void
}

export const Command: React.FC<Props> = (props) => {
  const context = useBotContext()
  context.client.command(props.command, props.children)
  return null
}