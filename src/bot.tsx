import TelegramBot from "node-telegram-bot-api";
import * as React from "react";
import { Provider } from "./context";

type Props = {
  token: string;
};
export const Bot: React.FC<Props> = (props) => {
  return (
    <Provider
      value={{
        client: new TelegramBot(props.token, {
          polling: true,
        }),
      }}
    >
      {props.children}
    </Provider>
  );
};
