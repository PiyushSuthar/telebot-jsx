import React from "react";
import { ExtraReplyMessage } from "telegraf/typings/telegram-types";
import { useBotContext } from "./context";

interface Props {
  chatId: string | number,
  options?: ExtraReplyMessage
  children: string
}

export const SendMessage: React.FC<Props> = (props) => {
  const context = useBotContext()
  context.client.telegram.sendMessage(props.chatId, props.children, props.options)
  return null
}