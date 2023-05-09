# EME - Entrega Médica Expressa
Um site que conecta hospitais e vendedores para entregas rápidas de material médico descartável.

# Entities
Cotacao
- Tipo do produto
- Quantidade
Submissao
- Marca
- Preço unitário
- Preço total
- data de entrega

Cotacao  (1)->(n) Submissao

# Use cases
- CriarCotacao
- PegarCotacoes
- PegarSubmissoes
- SubmeterProduto
- EntregarPedido
- AceitarSubmissao