import {
    ClienteServiceGateway,
    PedidoMongoGateway,
    ProdutoServiceGateway,
} from "gateways";
import { PedidoUseCase } from "useCases";
import { PedidoModel } from "external/mongo/models";
import { clienteServiceApi } from "external/clienteService";
import { produtoServiceApi } from "external/produtoService";
import { PedidoController } from "./controller";

export class PedidoControllerFactory {
    public static create(): PedidoController {
        const pedidoGateway = new PedidoMongoGateway(PedidoModel);
        const produtoGateway = new ProdutoServiceGateway(produtoServiceApi);
        const clienteGateway = new ClienteServiceGateway(clienteServiceApi);

        const pedidoUseCase = new PedidoUseCase(
            pedidoGateway,
            produtoGateway,
            clienteGateway,
        );

        return new PedidoController(pedidoUseCase);
    }
}
