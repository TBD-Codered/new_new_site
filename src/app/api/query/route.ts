import OpenAI from 'openai';
import  { NextResponse } from "next/server";

const chat_modifiers = [
    ["admissions","Focus on admission criteria, application process, and deadlines."],
    ["programs","List and describe available academic programs, including undergraduate and graduate options."],
    ["financial aid","Explain the financial aid process, types of aid available, and eligibility criteria"],
    ["campus","Describe campus faciliities, student housing, and recreational opportunities."],
    ["student life","Provide information on student organizations, events, and support services."],
  ]

export const POST = async (request: any, context: any) => {
  const { body } = context;
  console.log(body);
  const messages = [
    {role: "system", content: "You are a knowledgeable assistant about the University of Houston, providing information on admissions, programs, campus life, and more. Your responses should be consise, accurate, and helpful. Only provice information about the University of Houston and nothing else. If you're able to. Provide a link to relevant infomration on the offical univesity of houston's website." },
    {role: "user", content: body.message }
  ]

  for ( let modifier in chat_modifiers) { 
      if (!user_message.toLowerCase().includes(chat_modifiers[modifier][0])) { continue; }
      messages.splice(1,0,{role: "system", content: chat_modifiers[modifier][1]});
    }
    
    const openai = new OpenAI();
    const chatCompletion = await openai.chat.completions.create({
      messages: messages, 
      model: 'gpt-3.5-turbo',
  });

    return NextResponse.josoin(chatCompletion)
}