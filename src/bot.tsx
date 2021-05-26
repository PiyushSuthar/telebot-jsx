import * as React from "react";
import { Provider } from "./context";
import { Telegraf } from "telegraf";

type Props = {
  token: string;
};
export const Bot: React.FC<Props> = (props) => {
  const bot = new Telegraf(props.token);

  React.useEffect(() => {
    bot.launch();
  }, []);
  return (
    <Provider
      value={{
        client: bot,
      }}
    >
      {props.children}
    </Provider>
  );
};
