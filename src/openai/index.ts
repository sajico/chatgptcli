import * as openai from 'openai';
import { AxiosResponse } from 'openai/node_modules/axios';

const model: string = 'gpt-3.5-turbo';
const role: openai.ChatCompletionRequestMessageRoleEnum = openai.ChatCompletionRequestMessageRoleEnum.User;
const organization: string = '';
const apiKey: string = '';
const configuration: openai.Configuration = new openai.Configuration({ organization, apiKey });
const ai: openai.OpenAIApi = new openai.OpenAIApi(configuration);
const createChatCompletion = async <T>(content: string, onErrorReply: T): Promise<T> => {
    try {
        const completion: AxiosResponse<openai.CreateChatCompletionResponse, any> =
            await ai.createChatCompletion({ model, messages: [{ role, content }] });
        const reply: T = JSON.parse(completion.data.choices[0].message?.content!);
        return reply;
    } catch (error) {
        console.log(error);
        return onErrorReply;
    }
};

const checkNoEthicalIssueRiskQuestion: string = `
Check ethics risk in text after "--" symbol, reply in JSON.
"result" field = boolean of judgment,
"message" field = reason for judgment, examples, issue classification.
--
`;
export type CheckNoEthicalIssueRiskInTextReply = { result: boolean; message: string; };
export const checkNoEthicalIssueRiskInText = async (text: string):
    Promise<CheckNoEthicalIssueRiskInTextReply> =>
    createChatCompletion(checkNoEthicalIssueRiskQuestion + text,
        { result: false, message: 'Unknown error.' });

const extractInappropriateWordsFromArrayQuestion: string = `
Extract inappropriate words from word array after "--" symbol, reply in JSON.
"result" field = extracted word array,
"message" field = other information.
--
`;
export type ExtractInappropriateWordsFromArrayReply = { result: string[]; message: string; };
export const extractInappropriateWordsFromArray = async (words: string[]):
    Promise<ExtractInappropriateWordsFromArrayReply> =>
    createChatCompletion(extractInappropriateWordsFromArrayQuestion + words.join(),
        { result: [], message: 'Unknown error.' });