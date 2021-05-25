import TelegramBot from "node-telegram-bot-api";
import React from "react";
import { useBotContext } from "./context";

interface Props {
  chatId: string | number,
  options?: TelegramBot.SendMessageOptions
  children: string
}

export const SendMessage: React.FC<Props> = (props) => {
  const context = useBotContext()
  context.client.sendMessage(props.chatId, props.children, props.options)
  return null
}