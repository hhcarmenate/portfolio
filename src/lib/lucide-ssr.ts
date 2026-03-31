import type { IconNode } from 'lucide';

/**
 * Serialize Lucide icon nodes to static SVG (SSR-safe; no document).
 */

function escapeAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function attrsToString(attrs: Record<string, string | number | undefined>): string {
  return Object.entries(attrs)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${k}="${escapeAttr(String(v))}"`)
    .join(' ');
}

export function lucideToSvg(
  icon: IconNode,
  options: { size?: number; class?: string; strokeWidth?: number } = {}
): string {
  const size = options.size ?? 24;
  const cls = options.class ?? '';
  const strokeWidth = options.strokeWidth ?? 2;
  const inner = icon
    .map(([tag, attrs]) => `<${tag} ${attrsToString({ ...attrs })} />`)
    .join('');

  const classAttr = cls ? ` class="${escapeAttr(cls)}"` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"${classAttr}>${inner}</svg>`;
}
