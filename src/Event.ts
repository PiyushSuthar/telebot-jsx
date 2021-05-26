import React from "react";
import { Context } from "telegraf";
import { MessageSubType, UpdateType } from "telegraf/typings/telegram-types";
import { Update } from "typegram";
import { useBotContext } from "./context";

// These were not exported by telegraf package. I had to copy them from source
type MatchedContext<
  C extends Context,
  T extends UpdateType | MessageSubType
  > = NarrowedContext<C, MountMap[T]>

type MountMap = {
  [T in UpdateType]: Extract<Update, Record<T, object>>
} &
  {
    [T in MessageSubType]: {
      message: Extract<Update.MessageUpdate['message'], Record<T, unknown>>
      update_id: number
    }
  }
export type NarrowedContext<
  C extends Context,
  U extends Update
  > = Context<U> & Omit<C, keyof Context>
// ___end___

interface Props<T extends UpdateType | MessageSubType> {
  on: T,
  handle: (ctx: MatchedContext<Context, T>) => void
}

export function Event<T extends UpdateType | MessageSubType>(props: Props<T>): JSX.Element {
  const context = useBotContext()
  context.client.on(props.on, props.handle)
  return null
}