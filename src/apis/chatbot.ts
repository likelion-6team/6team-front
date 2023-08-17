import { chatBotDefaultInstance } from "./index";

export const chatBotApi = async (
  userMessages: string[],
  assistantMessages: string[]
) => {
  const { data } = await chatBotDefaultInstance.post(
    "/hannunet",
    {
      userMessages: userMessages,
      assistantMessages: assistantMessages,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  const d = data;
  return d;
};
