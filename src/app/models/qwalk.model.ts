
export class Simulation {
  counts: number[][] | undefined;
  simulation_matrix: number[][] | undefined;
  simulator: string | undefined;

  static fromJson(json: any): Simulation {
    return new Simulation({
      ...json,
      counts: json.counts ? [...json.counts] : undefined,
      simulation_matrix: json.simulation_matrix ? [...json.simulation_matrix] : undefined
    });
  }

  constructor(init?: Partial<Simulation>) {
    Object.assign(this, init);
  }
}

export class SubGraph {
  adj: number[][] | undefined;
  describe: string | undefined;

  static fromJson(json: any): SubGraph {
    return new SubGraph({
      ...json,
      adj: json.adj ? [...json.adj] : undefined
    });
  }

  constructor(init?: Partial<SubGraph>) {
    Object.assign(this, init);
  }
}

export class QuantumWalk {
  N: number | undefined;
  coin_faces: number[][][] | undefined;
  filename: string | undefined;
  graph_adj: number[][] | undefined;
  simulations: Simulation[] | undefined;
  sub_graphs: SubGraph[] | undefined;
  subtitle: string | undefined;
  title: string | undefined;

  static fromJson(json: any): QuantumWalk {
    const simulations = json.simulations?.map((s: any) => Simulation.fromJson(s));
    const sub_graphs = json.sub_graphs?.map((sg: any) => SubGraph.fromJson(sg));

    return new QuantumWalk({
      ...json,
      simulations,
      sub_graphs,
      coin_faces: json.coin_faces ? [...json.coin_faces] : undefined,
      graph_adj: json.graph_adj ? [...json.graph_adj] : undefined
    });
  }

  constructor(init?: Partial<QuantumWalk>) {
    Object.assign(this, init);
  }
}
