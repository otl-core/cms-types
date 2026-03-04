/**
 * Block types (public/engine-facing)
 */

export interface BlockInstance {
  id: string;
  type: string;
  config: Record<string, unknown>;
}
