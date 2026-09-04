export function spriteArtSrc(id: string, variantId?: string): string {
  const suffix = variantId && variantId !== 'normal' ? `-${variantId}` : '';
  return `/sprites/${id}${suffix}.svg?v=4`;
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
  's3-ghost': '#90A4AE',
  's3-llama': '#D7CCC8',
  's3-peeky-peely': '#FFD54F',
  's3-zero-point': '#7C4DFF',
  's3-storm-scout': '#FFD54F',
  's3-fishy': '#4FC3F7',
  's3-demon': '#CE93D8',
  's3-king': '#FFD54F',
  'v4-blaze': '#FF6B35',
  'v4-frostbite': '#00BFFF',
  'v4-thunder': '#FFD700',
  'v4-phantom': '#9370DB',
  'v4-vortex': '#00CED1',
  'v4-echo': '#FF69B4',
  'v4-pulse': '#00FF7F',
  'v4-steelguard': '#708090',
  'v4-wraith': '#483D8B',
  'v4-nova': '#FF4500',
  'v4-zenith': '#E0E0FF',
  'v4-drift': '#FFA500',
  'v4-ember': '#DC143C',
  'v4-shockwave': '#7B68EE',
  'v4-mirage': '#DDA0DD',
  'v4-volt': '#00FFFF',
  'v4-rift': '#9932CC',
  'v4-chronoshift': '#4169E1',
  'v4-entropy': '#2F4F4F',
  'v4-overdrive': '#FF1493',
  'v4-specter': '#B0C4DE',
  'v4-catalyst': '#32CD32',
  'v4-onyx': '#2C2C2C',
  'v4-prism': '#FF6EB4',
  'v4-meridian': '#98FB98',
  xray: '#00e5ff',
  'mega-man': '#2196f3',
  overshield: '#4caf50',
  onigiri: '#f5f5dc',
  'loot-hacker-xray': '#00e5ff',
  'loot-hacker-tails': '#ffb74d',
  'loot-hacker-sonic': '#64b5f6',
  'loot-hacker-shadow': '#ef5350',
  'loot-hacker-8bit': '#3ddc84',
  'loot-hacker-bushranger': '#4fd07a',
  'loot-hacker-adventure': '#7eb6e8',
  'loot-hacker-jonesy': '#8bb4d9',
  'loot-hacker-overshield': '#66bb6a',
  'loot-hacker-onigiri': '#f5f5dc',
  'loot-hacker-storm-scout': '#ffd54f',
};

export function spriteGlow(id: string): string {
  return glowById[id] ?? '#50e3c2';
}

export function spriteMotionDelay(id: string): string {
  const n = [...id].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return `${(n % 18) * 120}ms`;
}
