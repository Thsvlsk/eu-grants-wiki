# EU Grants Wiki (nome provisório): protótipo do site

Protótipo de um site **em inglês** que explica, em linguagem simples, as regras dos programas europeus de financiamento, para quem gere projetos europeus. Cada regra aponta para a página do documento oficial de onde vem (o *Annotated Grant Agreement*, AGA v2.0, da Comissão Europeia), e só se escreve o que esse documento diz.

> **Estado: protótipo e rascunhos.** Não há site publicado. Os dois artigos que existem não foram revistos linha a linha e estão marcados como `DRAFT`. Não é um site oficial da UE e não tem qualquer ligação à Comissão Europeia.

Este repositório tem **só o site**, em páginas estáticas, aberto para recolher **ideias e críticas**.

## Como ver

O GitHub mostra os ficheiros, não as páginas. Para ver o site:

1. Botão verde **Code** → **Download ZIP**.
2. Abrir a pasta descarregada e abrir **`index.html`** no browser.

(O filtro "Your programme" usa um pouco de JavaScript do próprio site; sem ele a página mostra tudo.)

## O que ver

- **Página inicial** (`index.html`): as 9 caixas "How to…". Só a de *personnel costs* tem artigos; as outras dizem "Coming soon".
- **Dois artigos em rascunho**, na caixa *personnel costs*:
  - *How to calculate the daily rate for personnel costs*;
  - *How to work out the maximum declarable day-equivalents*.
- **Filtro "Your programme"** no topo: os 37 programas da lista do AGA. Os blocos "Depends on your programme" mostram-se ou escondem-se conforme a escolha.
- **Modo escuro** automático, e leitura em telemóvel.

## Perguntas em que as ideias ajudam mais

1. **Estrutura.** 9 caixas "How to…" e um artigo por pergunta. Faz sentido? Falta alguma caixa? Há perguntas que as pessoas fazem e que a lista não cobre?
2. **Modelo do artigo.** Definição, resposta curta, como funciona (com um exemplo do próprio AGA), atenção, depende do programa, aprofundar. Está bom, ou faltam peças?
3. **Leitura.** As páginas estão mais leves com os cartões, os passos e os ícones? O que ainda cansa?
4. **Filtro por programa.** Funciona onde o AGA marca o programa. Onde a regra depende do contrato ("if selected for the grant"), só dá para mandar ver o Data Sheet. Há melhor solução?
5. **Qualidade.** Que controlos esperarias ver antes de um artigo ser publicado?
6. **Alcance.** Além do SEO tradicional, como ser citado em respostas de IA e chegar a quem gere projetos europeus?
7. **Estética.** A identidade visual (logo, paleta, tipografia) fica para depois do nome e do domínio. Alguma referência?

## Notas

- Os extratos do AGA que aparecem nos artigos têm a página e a fonte indicadas. O aviso de reutilização da Comissão ainda está por confirmar.
- Sem licença definida: valem os direitos de autor por omissão.
- As decisões de desenho até agora estão em [`docs/decisoes.md`](docs/decisoes.md).
