import { NativeModules } from 'react-native';

type ProjetointegradoType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Projetointegrado } = NativeModules;

export default Projetointegrado as ProjetointegradoType;
