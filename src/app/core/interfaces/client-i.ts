import { StateClient } from '../enums/state-client';

export interface ClientI {
  state: StateClient;
  taux_tva: number;
  total_ca_ht: number;
  id: number;
  name: string;
  email: string;
}
