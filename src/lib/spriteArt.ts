export function spriteArtSrc(id: string): string {
  return `/sprites/${id}.svg?v=3`;
}

const glowById: Record<string, string> = {
  bush: '#4FD07A',
  adventure: '#7EB6E8',
  '8-bit': '#3DDC84',
  jonesy: '#8BB4D9',
  killswitch: '#E24B4B',
  sonic: '#64B5F6',
  tails: '#FFB74D',
  shadow: '#EF5350',
  jackrabbit: '#D7CCC8',
  crown: '#F5C542',
  klombo: '#9CCC65',
  's3-batman': '#F4E7C3',
  's3-air': '#81D4FA',
  's3-aura': '#CE93D8',
  's3-earth': '#81C784',
  's3-fire': '#FF8A50',
  's3-water': '#4FC3F7',
  's3-ghost': '#B0BEC5',
  's3-llama': '#D7CCC8',
  's3-peeky-peely': '#FFD54F',
  's3-zero-point': '#7C4DFF',
  's3-storm-scout': '#FFD54F',
  's3-fishy': '#4FC3F7',
  's3-demon': '#CE93D8',
  's3-king': '#FFD54F',
};

export function spriteGlow(id: string): string {
  return glowById[id] ?? '#50e3c2';
}

export function spriteMotionDelay(id: string): string {
  const n = [...id].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return `${(n % 18) * 120}ms`;
}
