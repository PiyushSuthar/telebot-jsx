import TelegramBot from "node-telegram-bot-api";
import React from "react";
import { useBotContext } from "./context";

interface Props {
  command: RegExp,
  children: (msg: TelegramBot.Message, match: RegExpExecArray) => void
}

export const Command: React.FC<Props> = (props) => {
  const context = useBotContext()
  context.client.onText(props.command, props.children)
  return null
}