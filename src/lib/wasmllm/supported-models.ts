import { WebGPUModel } from './wasmllm';

export const SUPPORTED_LOCAL_MODELS: {
  [key: string]: WebGPUModel;
} = {
  "ANIMA": {
    simpleName: "ANIMA",
    modelName: "ANIMA-Phi-Neptune-Mistral-7B-q4f32_1",
    rootUrl:
      "https://huggingface.co/hrishioa/wasm-ANIMA-Phi-Neptune-Mistral-7B-q4f32_1",
    modelParamsUrl:
      "https://huggingface.co/hrishioa/wasm-ANIMA-Phi-Neptune-Mistral-7B-q4f32_1/resolve/main/params/",
    wasmUrl:
      "https://huggingface.co/hrishioa/wasm-ANIMA-Phi-Neptune-Mistral-7B-q4f32_1/resolve/main/ANIMA-Phi-Neptune-Mistral-7B-q4f32_1-webgpu.wasm",
  },
};
