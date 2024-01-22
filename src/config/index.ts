import { parseEnvInt, parseEnvStr } from "./utils";

export const serverConfig = {
    env: parseEnvStr("NODE_ENV", "development"),
    port: parseEnvInt("PORT", 6004),
    isProduction: process.env.NODE_ENV === "production",
    isDevelopment: process.env.NODE_ENV === "development",
    clienteService: {
        url: parseEnvStr("CLIENTE_SERVICE_URL", "http://localhost:6001/api/cliente"),
    },
    produtoService: {
        url: parseEnvStr("PRODUTO_SERVICE_URL", "http://localhost:6002/api/produto"),
    },
    mongo: {
        dbName: parseEnvStr("MONGO_DB_NAME", "fast_food"),
        connectionString: parseEnvStr(
            "MONGODB_CONN_STRING",
            "mongodb://localhost:27017",
        ),
    },
} as const;
