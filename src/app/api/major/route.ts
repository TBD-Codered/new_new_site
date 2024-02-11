import OpenAI from 'openai';
import  { NextResponse } from "next/server";

export const POST = async (request: any, context: any) => {
  const { params } = context;
  const user_message = await request.json();

  const messages = [
    {role: "system", content: `
You are a helpful college major assessment chat bot. You will be supplied with 6 numbers in the format
R:
I:
A:
S:
E:
C:

These numbers corresspond to RIASES scores in the holland code caeer assessment text. Output five college majors based on the RIASES scores. Do not say anythig but the recommended majors. Attach a link to each major's degree plan from the university of houston. Seperate each major by a new line.
    ` },
    {role: "user", content: `The Scores Are:
R: ${user_message["R"]}
I: ${user_message["I"]}
A: ${user_message["A"]}
S: ${user_message["S"]}
E: ${user_message["E"]}
C: ${user_message["C"]}
`}
  ]

    
    const openai = new OpenAI();
    const chatCompletion = await openai.chat.completions.create({
      messages: messages, 
      model: 'gpt-3.5-turbo',
  });

    return NextResponse.json(chatCompletion.choices[0].message.content)
}