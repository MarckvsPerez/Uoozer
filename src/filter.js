const formatedTime = (number) => {
  const segundos = parseInt(number, 10);

  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
  const segundosFormateados = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;

  return minutosFormateados + ':' + segundosFormateados;
};

const formatedFansn = (number) => {
  return new Intl.NumberFormat().format(number);
};

export {formatedTime, formatedFansn};
