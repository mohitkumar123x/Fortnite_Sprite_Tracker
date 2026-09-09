import type { CatalogEntry, Rarity, Season } from './types';
import type { Locale } from './i18n';

const rarityTranslations: Record<Locale, Record<Rarity, string>> = {
  en: {
    rare: 'Rare',
    epic: 'Epic',
    legendary: 'Legendary',
    mythic: 'Mythic',
    special: 'Special',
  },
  es: {
    rare: 'Rara',
    epic: 'Épica',
    legendary: 'Legendaria',
    mythic: 'Mítica',
    special: 'Especial',
  },
  pt: {
    rare: 'Rara',
    epic: 'Épica',
    legendary: 'Lendária',
    mythic: 'Mítica',
    special: 'Especial',
  },
  fr: {
    rare: 'Rare',
    epic: 'Épique',
    legendary: 'Légendaire',
    mythic: 'Mythique',
    special: 'Spéciale',
  },
};

const variantLabelTranslations: Record<Locale, Record<string, string>> = {
  en: {
    Normal: 'Normal',
    Base: 'Normal',
    Gold: 'Gold',
    'Cheat Master': 'Cheat Master',
    'Loot Hacker': 'Loot Hacker',
    Gummy: 'Gummy',
    Galaxy: 'Galaxy',
    Holofoil: 'Holofoil',
    Holo: 'Holo',
    Gem: 'Gem',
    Cube: 'Cube',
    Quack: 'Quack',
  },
  es: {
    Normal: 'Normal',
    Base: 'Normal',
    Gold: 'Oro',
    'Cheat Master': 'Maestro de Trucos',
    'Loot Hacker': 'Loot Hacker',
    Gummy: 'Gominola',
    Galaxy: 'Galaxia',
    Holofoil: 'Holográfico',
    Holo: 'Holo',
    Gem: 'Gema',
    Cube: 'Cubo',
    Quack: 'Patito',
  },
  pt: {
    Normal: 'Normal',
    Base: 'Normal',
    Gold: 'Ouro',
    'Cheat Master': 'Mestre de Trapaça',
    'Loot Hacker': 'Loot Hacker',
    Gummy: 'Goma',
    Galaxy: 'Galáxia',
    Holofoil: 'Holográfico',
    Holo: 'Holo',
    Gem: 'Gema',
    Cube: 'Cubo',
    Quack: 'Patinho',
  },
  fr: {
    Normal: 'Normal',
    Base: 'Normal',
    Gold: 'Or',
    'Cheat Master': 'Maître de la Triche',
    'Loot Hacker': 'Loot Hacker',
    Gummy: 'Gummy',
    Galaxy: 'Galaxie',
    Holofoil: 'Holographique',
    Holo: 'Holo',
    Gem: 'Gemme',
    Cube: 'Cube',
    Quack: 'Canard',
  },
};

const bonusTranslations: Record<Locale, Record<string, string>> = {
  en: {
    '3× elimination XP': '3× elimination XP',
    'Button Mash': 'Button Mash',
  },
  es: {
    '3× elimination XP': '3× XP por eliminación',
    'Button Mash': 'Machacar Botones',
  },
  pt: {
    '3× elimination XP': '3× XP por eliminação',
    'Button Mash': 'Aperto de Botões',
  },
  fr: {
    '3× elimination XP': '3× XP par élimination',
    'Button Mash': 'Mélange de boutons',
  },
};

const spriteAbilityTranslations: Record<Locale, Record<string, string>> = {
  en: {},
  es: {
    bush: 'Otorga un arbusto tras cierto tiempo; al nivel máximo también otorga un arbusto por eliminación. El tiempo de espera se reduce con cada nivel.',
    adventure: 'Mejora un objeto aleatorio de tu inventario con cada subida de nivel.',
    '8-bit': 'Coloca una escopeta de 8 bits en tu primer cofre y otorga un multiplicador de puntuación para ella.',
    jonesy: 'Recupera salud o escudos poco después de recibir daño. La cantidad de curación aumenta en cada nivel.',
    killswitch: 'Apunta en el aire para frenar y mejorar la precisión. La precisión aumenta con los niveles.',
    sonic: 'Esprinta más rápido con cada subida de nivel.',
    tails: 'Doble salto para flotar en el aire. La velocidad de flotación aumenta con cada nivel.',
    shadow: 'Recarga automáticamente las armas no equipadas con el tiempo. Al nivel máximo también recarga el arma equipada.',
    jackrabbit: 'Otorga un segundo salto en el aire. El tiempo de recarga se reduce con cada nivel.',
    crown: 'Sube de nivel solo al ganar partidas (más rápido con Victorias Magistrales). Dominarlo desbloquea nuevas variantes.',
    klombo: 'Otorga objetos aleatorios en cada nivel. Sube de nivel consumiendo objetos; la calidad del objeto mejora en cada nivel.',
    xray: 'Periódicamente marca enemigos cercanos. La frecuencia y el radio aumentan con cada nivel.',
    'mega-man': 'Reduce la fricción al deslizarte, permitiéndote deslizarte más lejos con cada nivel.',
    overshield: 'Otorga Overshield, con la cantidad aumentando a medida que el Sprite sube de nivel.',
    onigiri: 'Otorga Overdrive después de usar un objeto consumible, durando más por nivel.',
    's3-batman': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego para ver valores en vivo.',
    's3-air': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-aura': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-earth': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-fire': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-water': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-ghost': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-llama': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-peeky-peely': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-zero-point': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-storm-scout': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-fishy': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-demon': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-king': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-john-wick': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-duck': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-dream': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-punk': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-vini-jr': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-burnt-peanut': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-striker': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-boss': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-grim': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-seven': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-ironmouse': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    's3-pollo': 'Habilidad de compañero de la temporada 3. Consulta la descripción del juego.',
    'storm-scout': 'Activa Overdrive después de recibir daño de la tormenta — otorga resistencia ilimitada y mejoras de movimiento. Al nivel máximo revela futuros círculos de tormenta.',
    'loot-hacker-xray': 'Variante Loot Hacker del Sprite X-Ray.',
    'loot-hacker-tails': 'Variante Loot Hacker del Sprite Tails.',
    'loot-hacker-sonic': 'Variante Loot Hacker del Sprite Sonic.',
    'loot-hacker-shadow': 'Variante Loot Hacker del Sprite Shadow.',
    'loot-hacker-8bit': 'Variante Loot Hacker del Sprite 8-Bit.',
    'loot-hacker-bushranger': 'Variante Loot Hacker del Sprite Bush.',
    'loot-hacker-adventure': 'Variante Loot Hacker del Sprite Adventure.',
    'loot-hacker-jonesy': 'Variante Loot Hacker del Sprite Jonesy.',
    'loot-hacker-overshield': 'Variante Loot Hacker del Sprite Overshield.',
    'loot-hacker-onigiri': 'Variante Loot Hacker del Sprite Onigiri.',
    'loot-hacker-storm-scout': 'Variante Loot Hacker del Sprite Storm Scout.',
    'loot-hacker-crown': 'Variante Loot Hacker del Sprite Crown.',
    'loot-hacker-klombo': 'Variante Loot Hacker del Sprite Klombo.',
    'loot-hacker-jackrabbit': 'Variante Loot Hacker del Sprite Jackrabbit.',
    'loot-hacker-killswitch': 'Variante Loot Hacker del Sprite Killswitch.',
  },
  pt: {
    bush: 'Concede um arbusto após uma duração; no nível máximo também concede um arbusto por eliminação. O tempo de espera diminui a cada nível.',
    adventure: 'Melhora um item aleatório do seu inventário a cada avanço de nível.',
    '8-bit': 'Coloca uma espingarda de 8 bits no seu primeiro baú e concede um multiplicador de pontuação para ela.',
    jonesy: 'Recupera vida ou escudos logo após sofrer dano. A quantidade de cura aumenta a cada nível.',
    killswitch: 'Mire no ar para desacelerar e obter mayor precisão. A precisão aumenta a cada nível.',
    sonic: 'Corra mais rápido a cada avanço de nível.',
    tails: 'Pule duas vezes para flutuar no ar. A velocidade de flutuação aumenta a cada nível.',
    shadow: 'Recarrega automaticamente armas não equipadas ao longo do tempo. No nível máximo também recarrega a arma equipada.',
    jackrabbit: 'Concede um segundo pulo no ar. O tempo de recarga diminui a cada nível.',
    crown: 'Avança de nível apenas ao vencer partidas (mais rápido com Vitórias de Coroa). Dominar desbloqueia novas variantes.',
    klombo: 'Concede itens aleatórios a cada nível. Avança de nível apenas consumindo itens; a qualidade melhora a cada nível.',
    xray: 'Marca periodicamente inimigos próximos. A frequência e o raio aumentam a cada nível.',
    'mega-man': 'Reduz a fricção ao deslizar, permitindo que você deslize mais longe a cada nível.',
    overshield: 'Concede Overshield, com a quantidade aumentando à medida que o Sprite sobe de nível.',
    onigiri: 'Concede Overdrive após usar um item consumível, durando mais por nível.',
    's3-batman': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo para os valores ao vivo.',
    's3-air': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-aura': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-earth': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-fire': 'Habilidade de companheiro da temporada 3. Veja a descripción no jogo.',
    's3-water': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-ghost': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-llama': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-peeky-peely': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-zero-point': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-storm-scout': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-fishy': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-demon': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-king': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-john-wick': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-duck': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-dream': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-punk': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-vini-jr': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-burnt-peanut': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-striker': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-boss': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-grim': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-seven': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-ironmouse': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    's3-pollo': 'Habilidade de companheiro da temporada 3. Veja a descrição no jogo.',
    'storm-scout': 'Ativa Overdrive após receber dano da tempestade — concede resistência ilimitada e melhorias de movimento. No nível máximo revela futuros círculos de tempestade.',
    'loot-hacker-xray': 'Variante Loot Hacker do Sprite X-Ray.',
    'loot-hacker-tails': 'Variante Loot Hacker do Sprite Tails.',
    'loot-hacker-sonic': 'Variante Loot Hacker do Sprite Sonic.',
    'loot-hacker-shadow': 'Variante Loot Hacker do Sprite Shadow.',
    'loot-hacker-8bit': 'Variante Loot Hacker do Sprite 8-Bit.',
    'loot-hacker-bushranger': 'Variante Loot Hacker do Sprite Bush.',
    'loot-hacker-adventure': 'Variante Loot Hacker do Sprite Adventure.',
    'loot-hacker-jonesy': 'Variante Loot Hacker do Sprite Jonesy.',
    'loot-hacker-overshield': 'Variante Loot Hacker do Sprite Overshield.',
    'loot-hacker-onigiri': 'Variante Loot Hacker do Sprite Onigiri.',
    'loot-hacker-storm-scout': 'Variante Loot Hacker do Sprite Storm Scout.',
    'loot-hacker-crown': 'Variante Loot Hacker do Sprite Crown.',
    'loot-hacker-klombo': 'Variante Loot Hacker do Sprite Klombo.',
    'loot-hacker-jackrabbit': 'Variante Loot Hacker do Sprite Jackrabbit.',
    'loot-hacker-killswitch': 'Variante Loot Hacker do Sprite Killswitch.',
  },
  fr: {
    bush: 'Donne un buisson après un certain temps ; au niveau maximum donne aussi un buisson par élimination. Le temps de recharge diminue à chaque niveau.',
    adventure: 'Améliore un objet aléatoire de votre inventaire à chaque passage de niveau.',
    '8-bit': 'Place un fusil à pompe 8 bits dans votre premier coffre et donne un multiplicateur de score pour celui-ci.',
    jonesy: 'Récupère de la vie ou des boucliers peu après avoir subi des dégâts. La quantité de soin augmente à chaque niveau.',
    killswitch: 'Visez en l\'air pour ralentir et améliorer la précision. La précision augmente à chaque niveau.',
    sonic: 'Sprintez plus vite à chaque passage de niveau.',
    tails: 'Double saut pour flotter en l\'air. La vitesse de flottaison augmente à chaque niveau.',
    shadow: 'Recharge automatiquement les armes non équipées avec le temps. Au niveau maximum recharge aussi l\'arme équipée.',
    jackrabbit: 'Donne un deuxième saut en l\'air. Le temps de recharge diminue à chaque niveau.',
    crown: 'Passe de niveau uniquement en gagnant des parties (plus vite avec les Victoires Couronnées). La maîtrise débloque de nouvelles variantes.',
    klombo: 'Donne des objets aléatoires à chaque niveau. Passez de niveau en consommant des objets ; la qualité augmente à chaque niveau.',
    xray: 'Marque périodiquement les ennemis proches. La fréquence et le rayon augmentent à chaque niveau.',
    'mega-man': 'Réduit la friction en glissant, vous permettant de glisser plus loin à chaque passage de niveau.',
    overshield: 'Donne un Overshield, la quantité augmentant à chaque passage de niveau du Sprite.',
    onigiri: 'Donne Overdrive après avoir utilisé un objet consommable, durant plus longtemps par niveau.',
    's3-batman': 'Capacité de compagnon de la saison 3. Consultez la description en jeu pour les valeurs en direct.',
    's3-air': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-aura': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-earth': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-fire': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-water': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-ghost': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-llama': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-peeky-peely': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-zero-point': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-storm-scout': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-fishy': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-demon': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-king': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-john-wick': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-duck': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-dream': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-punk': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-vini-jr': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-burnt-peanut': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-striker': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-boss': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-grim': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-seven': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-ironmouse': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    's3-pollo': 'Capacité de compagnon de la saison 3. Consultez la description en jeu.',
    'storm-scout': 'Déclenche Overdrive après avoir subi des dégâts de tempête — confère une endurance illimitée et des améliorations de mouvement. Au niveau maximum révèle les futurs cercles de tempête.',
    'loot-hacker-xray': 'Variante Loot Hacker du Sprite X-Ray.',
    'loot-hacker-tails': 'Variante Loot Hacker du Sprite Tails.',
    'loot-hacker-sonic': 'Variante Loot Hacker du Sprite Sonic.',
    'loot-hacker-shadow': 'Variante Loot Hacker du Sprite Shadow.',
    'loot-hacker-8bit': 'Variante Loot Hacker du Sprite 8-Bit.',
    'loot-hacker-bushranger': 'Variante Loot Hacker du Sprite Bush.',
    'loot-hacker-adventure': 'Variante Loot Hacker du Sprite Adventure.',
    'loot-hacker-jonesy': 'Variante Loot Hacker du Sprite Jonesy.',
    'loot-hacker-overshield': 'Variante Loot Hacker du Sprite Overshield.',
    'loot-hacker-onigiri': 'Variante Loot Hacker du Sprite Onigiri.',
    'loot-hacker-storm-scout': 'Variante Loot Hacker du Sprite Storm Scout.',
    'loot-hacker-crown': 'Variante Loot Hacker du Sprite Crown.',
    'loot-hacker-klombo': 'Variante Loot Hacker du Sprite Klombo.',
    'loot-hacker-jackrabbit': 'Variante Loot Hacker du Sprite Jackrabbit.',
    'loot-hacker-killswitch': 'Variante Loot Hacker du Sprite Killswitch.',
  },
};

export function localizeRarity(rarity: Rarity, locale: Locale): string {
  return rarityTranslations[locale]?.[rarity] ?? rarityTranslations.en[rarity] ?? rarity;
}

export function localizeVariantLabel(label: string, locale: Locale): string {
  return variantLabelTranslations[locale]?.[label] ?? label;
}

export function localizeBonus(bonus: string | undefined, locale: Locale): string | undefined {
  if (!bonus) return bonus;
  return bonusTranslations[locale]?.[bonus] ?? bonus;
}

export function localizeSpriteAbility(spriteId: string, originalAbility: string, locale: Locale): string {
  return spriteAbilityTranslations[locale]?.[spriteId] ?? originalAbility;
}

export function localizeCatalogEntry(entry: CatalogEntry, locale: Locale): CatalogEntry {
  return {
    ...entry,
    rarity: entry.rarity,
    ability: localizeSpriteAbility(entry.spriteId, entry.ability, locale),
    variantLabel: localizeVariantLabel(entry.variantLabel, locale),
    bonus: localizeBonus(entry.bonus, locale),
  };
}

export function localizeCatalog(catalog: CatalogEntry[], locale: Locale): CatalogEntry[] {
  return catalog.map((entry) => localizeCatalogEntry(entry, locale));
}

const seasonTranslations: Record<Locale, Record<string, { label?: string; patchNote?: string; archiveNote?: string | null }>> = {
  en: {},
  es: {
    'c7-s4': {
      label: 'Capítulo 7 Temporada 4 — Override',
      patchNote: 'Lista de verificación en vivo: extrae Sprites en partidas para marcar Obtenido y sube al nivel 5 para marcar Dominado.',
    },
    'c7-s3': {
      label: 'Capítulo 7 Temporada 3 — Archivo',
      patchNote: 'Lista de archivo de la Temporada 3: Batman y variantes clásicas.',
      archiveNote: 'Este tablero ya no aparece en partidas en vivo, pero tu lista de verificación sigue guardada localmente para esta temporada.',
    },
  },
  pt: {
    'c7-s4': {
      label: 'Capítulo 7 Temporada 4 — Override',
      patchNote: 'Lista da temporada ao vivo: extraia Sprites em partidas para marcar Obtido e suba ao nível 5 para marcar Dominado.',
    },
    'c7-s3': {
      label: 'Capítulo 7 Temporada 3 — Arquivo',
      patchNote: 'Lista de arquivo da Temporada 3: Batman e variantes clássicas.',
      archiveNote: 'Este painel não aparece mais em partidas ao vivo, mas sua lista permanece salva localmente para esta temporada.',
    },
  },
  fr: {
    'c7-s4': {
      label: 'Chapitre 7 Saison 4 — Override',
      patchNote: 'Liste de la saison en direct : extrayez des Sprites en matchs pour marquer Possédé et passez au niveau 5 pour marquer Maîtrisé.',
    },
    'c7-s3': {
      label: 'Chapitre 7 Saison 3 — Archive',
      patchNote: 'Liste d\'archive de la Saison 3 : Batman et variantes classiques.',
      archiveNote: 'Ce tableau n\'apparaît plus en matchs en direct, mais votre liste reste enregistrée localement pour cette saison.',
    },
  },
};

export function localizeSeason(season: Season, locale: Locale): Season {
  const trans = seasonTranslations[locale]?.[season.id];
  if (!trans) return season;
  const res: Season = {
    ...season,
    label: trans.label ?? season.label,
    patchNote: trans.patchNote ?? season.patchNote,
  };
  if (trans.archiveNote !== undefined && trans.archiveNote !== null) {
    res.archiveNote = trans.archiveNote;
  }
  return res;
}

export function localizeSeasons(seasons: Season[], locale: Locale): Season[] {
  return seasons.map((s) => localizeSeason(s, locale));
}
