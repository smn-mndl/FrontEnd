import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Complaints {
  readonly id: string;
  readonly Name?: string;
  readonly Email?: string;
  readonly Message?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Complaints>);
  static copyOf(source: Complaints, mutator: (draft: MutableModel<Complaints>) => MutableModel<Complaints> | void): Complaints;
}