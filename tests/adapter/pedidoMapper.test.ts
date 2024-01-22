import { PedidoMapper } from "adapters/mappers";
import { StatusPagamentoEnum, StatusPedidoEnum } from "entities/pedido";
import { ClienteDTO } from "external/clienteService";
import { PedidoDTO } from "useCases";

describe("Given PedidoMapper", () => {
    const ClienteDTOMock: ClienteDTO = {
        id: "1",
        nome: "John Doe",
        email: "john_doe@email.com.br",
        cpf: "111.111.111-11",
    };

    const PedidoDTOMock: PedidoDTO = {
        id: "1",
        valorTotal: 10,
        status: StatusPedidoEnum.Recebido,
        pagamento: StatusPagamentoEnum.Pagamento_pendente,
        itens: [
            {
                produtoId: "1",
                nome: "lanche",
                quantidade: 2,
                preco: 5,
            },
        ],
    };

    describe("When toDomain is called", () => {
        it("should parse a domain pedido DTO to domain format", async () => {
            const parsed = PedidoMapper.toDomain(PedidoDTOMock, ClienteDTOMock);

            expect(parsed.valorTotal).toEqual(PedidoDTOMock.valorTotal);
            expect(parsed.status).toEqual(PedidoDTOMock.status);
            expect(parsed.pagamento).toEqual(PedidoDTOMock.pagamento);
            expect(parsed.itens[0].produtoId).toEqual(
                PedidoDTOMock.itens[0].produtoId,
            );
            expect(parsed.itens[0].quantidade).toEqual(
                PedidoDTOMock.itens[0].quantidade,
            );
            expect(parsed.itens[0].nome).toEqual(PedidoDTOMock.itens[0].nome);
            expect(parsed.itens[0].preco).toEqual(PedidoDTOMock.itens[0].preco);
        });
        it("should parse a domain pedido with cliente DTOs to Domain format", async () => {
            const parsed = PedidoMapper.toDomain(PedidoDTOMock, ClienteDTOMock);

            expect(parsed.valorTotal).toEqual(PedidoDTOMock.valorTotal);
            expect(parsed.status).toEqual(PedidoDTOMock.status);
            expect(parsed.pagamento).toEqual(PedidoDTOMock.pagamento);
            expect(parsed.itens[0].produtoId).toEqual(
                PedidoDTOMock.itens[0].produtoId,
            );
            expect(parsed.itens[0].quantidade).toEqual(
                PedidoDTOMock.itens[0].quantidade,
            );
            expect(parsed.itens[0].nome).toEqual(PedidoDTOMock.itens[0].nome);
            expect(parsed.itens[0].preco).toEqual(PedidoDTOMock.itens[0].preco);

            expect(parsed.cliente.id).toEqual(ClienteDTOMock.id);
            expect(parsed.cliente.nome).toEqual(ClienteDTOMock.nome);
            expect(parsed.cliente.email.value).toEqual(ClienteDTOMock.email);
            expect(parsed.cliente.cpf.value).toEqual(ClienteDTOMock.cpf);
        });
    });
});
