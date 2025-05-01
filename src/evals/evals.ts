//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const mcpToolNameEval: EvalFunction = {
  name: "mcpToolName Evaluation",
  description: "Tests the functionality of the toolDefinition implementation",
  run: async () => {
    const result = await grade(openai("gpt-4"), "How do I properly call this tool with the required input schema to access the mcpDescriptionName endpoint?");
    return JSON.parse(result);
  }
};

const AVAILABLE_FILES: EvalFunction = {
    name: "AVAILABLE_FILES Tool Evaluation",
    description: "Evaluates the correctness and completeness of listing all available files and resources",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please list all available files with their resource URI, name, size, last modified date, and MIME type in a markdown table format");
        return JSON.parse(result);
    }
};

const SEARCH_FOR_SPACEEvaluation: EvalFunction = {
    name: "SEARCH_FOR_SPACE Tool Evaluation",
    description: "Evaluates the tool's ability to search for a Hugging Face Space based on a semantic query",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Find me a Hugging Face Space that can remove backgrounds from images.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [mcpToolNameEval, AVAILABLE_FILES, SEARCH_FOR_SPACEEvaluation]
};
  
export default config;
  
export const evals = [mcpToolNameEval, AVAILABLE_FILES, SEARCH_FOR_SPACEEvaluation];