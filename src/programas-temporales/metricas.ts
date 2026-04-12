import metricas from "./metricas.generated.json";

export type EscenarioClave = "desordenado" | "parcial" | "intercalado" | "invertido";
export type TamanoClave = "10" | "100" | "1000";

export type MetricaEscenario = {
  tiempoMs: number;
  memoriaKb: number;
  iteraciones: number;
  comparaciones: number;
  intercambios: number;
  entrada: string;
  salida: string;
  escenarioLabel: string;
};

export type ProgramaMetricas = {
  titulo: string;
  lenguaje: string;
  tipoDato: string;
  tipoAlgoritmo: string;
  escenarios: Record<EscenarioClave, Record<TamanoClave, MetricaEscenario>>;
};

export const metricasProgramas: Record<string, ProgramaMetricas> = metricas;
