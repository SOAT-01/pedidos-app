import axios from "axios";
import { serverConfig } from "config";

export const produtoServiceApi = axios.create({
    baseURL: serverConfig.clienteService.url,
});

export type ProdutoServiceApi = typeof produtoServiceApi;
