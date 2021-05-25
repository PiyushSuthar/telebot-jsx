import TelegramBot from 'node-telegram-bot-api'
import { createContext, useContext } from 'react'
import { Telegraf } from 'telegraf'

type ContextType = {
  client: Telegraf
}

export const Context = createContext<ContextType | null>(null)

export const Provider = Context.Provider

export const useBotContext: () => ContextType = () => {
  const context = useContext(Context)
  // if (context === null) {
  //   throw new Error("Provider Not Found");
  // }
  return context
}