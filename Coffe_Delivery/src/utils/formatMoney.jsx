//Função para formatar Valores!

export function formatMoney(value) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
}
