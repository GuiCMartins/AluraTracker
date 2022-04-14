import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
import { obterId } from '../../utils';
import { listaDeEventosState } from '../Atom';

const useAdicionarEvento = () => {
  const setListaDeEvento = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();

    if (evento.inicio < hoje) {
      throw new Error(
        'Eventos não podem ser cadastrados com data menor do que a atual'
      );
    }

    evento.id = obterId();
    return setListaDeEvento((listaAntiga) => [...listaAntiga, evento]);
  };
};

export default useAdicionarEvento;
