import type { AnyCircuitElement } from "circuit-json"
import { BasePipelineSolver } from "@tscircuit/solver-utils"
import type { PipelineStep } from "@tscircuit/solver-utils"

export type SolverInput = AnyCircuitElement[]

export interface CreatedDimension {
  /** The two points on the PCB being dimensioned */
  from: { x: number; y: number }
  to: { x: number; y: number }
  /** The axis the dimension is measuring */
  axis: "x" | "y"
  /**
   * The distance from the furthest point to the dimension line.
   *
   * If axis is "x", this is the y-distance from the top-most point to the
   * dimension line.
   * If axis is "y", this is the x-distance from the right-most point to the
   * dimension line.
   */
  offset: number
}

export type SolverOutput = CreatedDimension[]

export class DimensionPlacementSolver extends BasePipelineSolver<SolverInput> {
  pipelineDef: PipelineStep<any>[] = []

  constructor(inputProblem: SolverInput) {
    super(inputProblem)
  }

  override getOutput(): SolverOutput {
    // TODO.
    return []
  }
}
