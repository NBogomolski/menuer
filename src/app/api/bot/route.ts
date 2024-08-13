export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import { NextResponse } from 'next/server';
import TelegramBot, { } from 'node-telegram-bot-api';

const menuerBot = new TelegramBot(process.env.MENUER_BOT_TOKEN ?? "", {
  // webHook: true,
  polling: true,
});

menuerBot.onText(/.*/, async (message) => {
  const chatId = message.chat.id;
  const userName = message.from
  menuerBot.sendMessage(chatId, `Hi, ${userName}!`)
})


export const GET = async () => new NextResponse((await menuerBot.getWebHookInfo()).url);
export const POST = (data: any) => {
  return new NextResponse()
};