import type { Locale } from '../lib/i18n';

type Paragraph = { type: 'p'; text: string };
type Heading = { type: 'h2'; text: string };
type TableHeader = { type: 'th'; text: string }[];
type TableRow = { type: 'td'; text: string; href?: string }[];
type TableBlock = { type: 'table'; caption: string; headers: TableHeader; rows: TableRow[] };
type ImageBlock = { type: 'img'; src: string; alt: string; width: number; height: number };
type BadgeBlock = { type: 'badge'; text: string };
type ContentBlock = Paragraph | Heading | TableBlock | ImageBlock | BadgeBlock;

type PostContent = {
  intro: string;
  sections: { heading: string; blocks: ContentBlock[] }[];
};

function h2(text: string): Heading { return { type: 'h2', text }; }
function p(text: string): Paragraph { return { type: 'p', text }; }
function img(src: string, alt: string, w: number, h: number): ImageBlock { return { type: 'img', src, alt, width: w, height: h }; }
function table(caption: string, headers: string[], rows: (string | { text: string; href?: string })[][]): TableBlock {
  return {
    type: 'table',
    caption,
    headers: headers.map((t) => ({ type: 'th' as const, text: t })),
    rows: rows.map((row) => row.map((cell) => (typeof cell === 'string' ? { type: 'td' as const, text: cell } : { type: 'td' as const, ...cell }))),
  };
}
function badge(text: string): BadgeBlock { return { type: 'badge', text }; }

const v42_10: Record<Locale, PostContent> = {
  en: {
    intro: `Chapter 7 Season 4 received its first major content drop on September 3, 2026. The v42.10 update added five new base companions and introduced the Loot Hacker variant system — a new category of collectible sprites found in high and mountainous areas.`,
    sections: [
      {
        heading: 'New base sprites',
        blocks: [
          img('/season-4-patch-timeline.svg', 'Fortnite Chapter 7 Season 4 patch timeline: launch August 24, Storm Scout added August 29, Loot Hacker system and four new sprites added September 3 in update v42.10', 720, 160),
          p('The patch also tweaked existing sprites: detection radius on X-Ray grows faster per level. Here is every new sprite, its rarity, ability, and whether it is live in-game right now.'),
          table('What\'s New in v42.10', ['Sprite Name', 'Type', 'Rarity', 'Ability', 'Status'], [
            ['X-Ray', 'New Base', 'Legendary', 'Periodically marks nearby enemies on screen', 'Available'],
            ['Mega Man', 'New Base', 'Rare', 'Reduces sliding friction', 'Available'],
            ['Overshield', 'New Base', 'Epic', 'Grants a shield buffer on top of regular HP', 'Available'],
            ['Onigiri', 'New Base', 'Rare', 'Triggers Overdrive after using a consumable', 'Available'],
            ['Storm Scout', 'New Base', 'Epic', 'Activates Overdrive after storm damage; max-level reveals future Storm Circles', 'Available'],
          ]),
          p('Five base sprites joined the live loot pool. X-Ray is the standout legendary — it periodically marks nearby enemies on your screen, and the detection radius increases each time you level it up. Mega Man is a rare companion that reduces sliding friction so you can slide farther across the map. Overshield grants a shield buffer on top of your regular HP, with the amount growing at each level. Onigiri triggers an Overdrive speed burst after you use a consumable item. And Storm Scout activates Overdrive after you take storm damage, with a max-level bonus that reveals future Storm Circle positions.'),
          img('/sprites/xray', 'X-Ray Sprite icon, Legendary, Normal variant — Fortnite Chapter 7 Season 4', 128, 128),
        ],
      },
      {
        heading: 'The Loot Hacker system',
        blocks: [
          p('Loot Hacker variants are separate sprites — not alternate skins of existing ones. Each Loot Hacker spawns in high-elevation areas and has a single variant tier. All Loot Hacker variants are now available in-game. Loot Hacker Crown tracks a modified version of the Crown sprite\'s win-progression ability.'),
          p('Loot Hacker sprites share the same roster slot as their base counterpart — for example, Loot Hacker X-Ray and X-Ray are both tied to the X-Ray companion, but they occupy separate cells on the tracker. This means you can own both and track them independently.'),
        ],
      },
      {
        heading: 'How to track v42.10 sprites',
        blocks: [
          p('Open the tracker on the home page. The new sprites appear in the "New Sprites" sidebar and are marked with a badge in the main grid. Mark each one as Owned once you extract it, then star Mastered when you hit the in-game mastery level. Use Hunt Mode to see only the v42.10 sprites you are still missing.'),
        ],
      },
    ],
  },
  es: {
    intro: `La Temporada 4 del Capítulo 7 recibió su primera gran actualización de contenido el 3 de septiembre de 2026. La actualización v42.10 agregó cinco nuevos compañeros base e introdujo el sistema de variantes Loot Hacker, una nueva categoría de sprites coleccionables que se encuentran en áreas altas y montañosas.`,
    sections: [
      {
        heading: 'Nuevos sprites base',
        blocks: [
          img('/season-4-patch-timeline.svg', 'Línea de tiempo de la Temporada 4 del Capítulo 7 de Fortnite: lanzamiento el 24 de agosto, Storm Scout agregado el 29 de agosto, sistema Loot Hacker y cuatro nuevos sprites agregados el 3 de septiembre en la actualización v42.10', 720, 160),
          p('El parche también ajustó sprites existentes: el radio de detección de X-Ray crece más rápido por nivel, y varias variantes Loot Hacker están marcadas como no disponibles pendiente de activación futura. Aquí está cada nuevo sprite, su rareza, habilidad y si está disponible en el juego ahora.'),
          table('Novedades en v42.10', ['Nombre del Sprite', 'Tipo', 'Rareza', 'Habilidad', 'Estado'], [
            ['X-Ray', 'Nuevo Base', 'Legendario', 'Marca periódicamente enemigos cercanos en pantalla', 'Disponible'],
            ['Mega Man', 'Nuevo Base', 'Raro', 'Reduce la fricción al deslizar', 'Disponible'],
            ['Overshield', 'Nuevo Base', 'Épico', 'Otorga un escudo adicional sobre el HP regular', 'Disponible'],
            ['Onigiri', 'Nuevo Base', 'Raro', 'Activa Overdrive después de usar un consumible', 'Disponible'],
            ['Storm Scout', 'Nuevo Base', 'Épico', 'Activa Overdrive después de daño de tormenta; nivel máximo revela futuros Círculos de Tormenta', 'Disponible'],
          ]),
          p('Cinco sprites base se unieron al pool de botín en vivo. X-Ray es el legendario destacado — marca periódicamente enemigos cercanos en tu pantalla, y el radio de detección aumenta cada vez que lo subes de nivel. Mega Man es un compañero raro que reduce la fricción al deslizarte para que puedas deslizarte más lejos por el mapa. Overshield otorga un escudo adicional sobre tu HP regular, con la cantidad creciendo en cada nivel. Onigiri activa una ráfaga de velocidad Overdrive después de usar un objeto consumible. Y Storm Scout activa Overdrive después de recibir daño de tormenta, con una bonificación de nivel máximo que revela las posiciones futuras del Círculo de Tormenta.'),
          img('/sprites/xray', 'Icono del Sprite X-Ray, Legendario, variante Normal — Fortnite Capítulo 7 Temporada 4', 128, 128),
        ],
      },
      {
        heading: 'El sistema Loot Hacker',
        blocks: [
          p('Las variantes Loot Hacker son sprites separados — no pieles alternativas de los existentes. Cada Loot Hacker aparece en áreas de alta elevación y tiene un solo nivel de variante. La mayoría están marcadas como no disponibles en los datos del juego, lo que significa que Epic los ha agregado a los archivos pero aún no los ha habilitado en partidas en vivo. Loot Hacker Crown es la excepción: está disponible ahora y rastrea una versión modificada de la habilidad de progreso de victoria del sprite Crown.'),
          p('Los sprites Loot Hacker comparten el mismo espacio de roster que su contraparte base — por ejemplo, Loot Hacker X-Ray y X-Ray están ambos ligados al compañero X-Ray, pero ocupan celdas separadas en el tracker. Esto significa que puedes tener ambos y rastrearlos independientemente.'),
        ],
      },
      {
        heading: 'Cómo rastrear sprites v42.10',
        blocks: [
          p('Abre el tracker en la página de inicio. Los nuevos sprites aparecen en la barra lateral "Nuevos Sprites" y están marcados con un badge en la cuadrícula principal. Marca cada uno como Obtenido una vez que lo extraigas, luego pon una estrella en Dominado cuando alcances el nivel de dominio en el juego. Usa el Modo Caza para ver solo los sprites v42.10 que aún te faltan.'),
        ],
      },
    ],
  },
  pt: {
    intro: `A Temporada 4 do Capítulo 7 recebeu sua primeira grande atualização de conteúdo em 3 de setembro de 2026. A atualização v42.10 adicionou cinco novos companheiros base e introduziu o sistema de variantes Loot Hacker — uma nova categoria de sprites coletáveis encontrados em áreas altas e montanhosas.`,
    sections: [
      {
        heading: 'Novos sprites base',
        blocks: [
          img('/season-4-patch-timeline.svg', 'Linha do tempo da Temporada 4 do Capítulo 7 do Fortnite: lançamento em 24 de agosto, Storm Scout adicionado em 29 de agosto, sistema Loot Hacker e quatro novos sprites adicionados em 3 de setembro na atualização v42.10', 720, 160),
          p('O patch também ajustou sprites existentes: o raio de detecção do X-Ray cresce mais rápido por nível, e várias variantes Loot Hacker estão marcadas como indisponíveis pendente de ativação futura. Aqui está cada novo sprite, sua raridade, habilidade e se está disponível no jogo agora.'),
          table('Novidades no v42.10', ['Nome do Sprite', 'Tipo', 'Raridade', 'Habilidade', 'Status'], [
            ['X-Ray', 'Novo Base', 'Lendário', 'Marca periodicamente inimigos próximos na tela', 'Disponível'],
            ['Mega Man', 'Novo Base', 'Raro', 'Reduz a fricção ao deslizar', 'Disponível'],
            ['Overshield', 'Novo Base', 'Épico', 'Concede um escudo adicional sobre o HP regular', 'Disponível'],
            ['Onigiri', 'Novo Base', 'Raro', 'Ativa Overdrive após usar um consumível', 'Disponível'],
            ['Storm Scout', 'Novo Base', 'Épico', 'Ativa Overdrive após dano de tempestade; nível máximo revela futuros Círculos de Tempestade', 'Disponível'],
          ]),
          p('Cinco sprites base entraram no pool de loot ao vivo. X-Ray é o lendário destaque — marca periodicamente inimigos próximos na sua tela, e o raio de detecção aumenta cada vez que você sobe de nível. Mega Man é um companheiro raro que reduz a fricção ao deslizar para que você possa deslizar mais longe pelo mapa. Overshield concede um escudo adicional sobre seu HP regular, com a quantidade crescendo em cada nível. Onigiri ativa uma rajada de velocidade Overdrive após usar um item consumível. E Storm Scout ativa Overdrive após receber dano de tempestade, com um bônus de nível máximo que revela as posições futuras do Círculo de Tempestade.'),
          img('/sprites/xray', 'Ícone do Sprite X-Ray, Lendário, variante Normal — Fortnite Capítulo 7 Temporada 4', 128, 128),
        ],
      },
      {
        heading: 'O sistema Loot Hacker',
        blocks: [
          p('As variantes Loot Hacker são sprites separados — não skins alternativas dos existentes. Cada Loot Hacker aparece em áreas de alta elevação e tem um único nível de variante. A maioria está marcada como indisponível nos dados do jogo, o que significa que a Epic os adicionou aos arquivos mas ainda não os habilitou em partidas ao vivo. Loot Hacker Crown é a exceção: está disponível agora e rastreia uma versão modificada da habilidade de progresso de vitória do sprite Crown.'),
          p('Os sprites Loot Hacker compartilham o mesmo espaço de roster que sua contraparte base — por exemplo, Loot Hacker X-Ray e X-Ray estão ambos ligados ao companheiro X-Ray, mas ocupam células separadas no tracker. Isso significa que você pode ter ambos e rastreá-los independentemente.'),
        ],
      },
      {
        heading: 'Como rastrear sprites v42.10',
        blocks: [
          p('Abra o tracker na página inicial. Os novos sprites aparecem na barra lateral "Novos Sprites" e são marcados com um badge na grade principal. Marque cada um como Obtido uma vez que você extraia, depois coloque uma estrela em Dominado quando atingir o nível de domínio no jogo. Use o Modo Caça para ver apenas os sprites v42.10 que ainda faltam.'),
        ],
      },
    ],
  },
  fr: {
    intro: `La Saison 4 du Chapitre 7 a reçu sa première grosse mise à jour de contenu le 3 septembre 2026. La mise à jour v42.10 a ajouté cinq nouveaux compagnons de base et introduit le système de variantes Loot Hacker — une nouvelle catégorie de sprites collectibles trouvés dans les zones élevées et montagneuses.`,
    sections: [
      {
        heading: 'Nouveaux sprites de base',
        blocks: [
          img('/season-4-patch-timeline.svg', 'Chronologie du patch de la Saison 4 du Chapitre 7 de Fortnite : lancement le 24 août, Storm Scout ajouté le 29 août, système Loot Hacker et quatre nouveaux sprites ajoutés le 3 septembre dans la mise à jour v42.10', 720, 160),
          p('Le patch a également ajusté les sprites existants : le rayon de détection de X-Ray augmente plus vite par niveau, et plusieurs variantes Loot Hacker sont marquées comme non disponibles en attente d\'activation future. Voici chaque nouveau sprite, sa rareté, sa capacité et s\'il est disponible en jeu maintenant.'),
          table('Nouveautés dans v42.10', ['Nom du Sprite', 'Type', 'Rareté', 'Capacité', 'Statut'], [
            ['X-Ray', 'Nouveau Base', 'Légendaire', 'Marque périodiquement les ennemis proches à l\'écran', 'Disponible'],
            ['Mega Man', 'Nouveau Base', 'Rare', 'Réduit le glissement', 'Disponible'],
            ['Overshield', 'Nouveau Base', 'Épique', 'Accorde un bouclier supplémentaire sur les HP réguliers', 'Disponible'],
            ['Onigiri', 'Nouveau Base', 'Rare', 'Déclenche Overdrive après avoir utilisé un consommable', 'Disponible'],
            ['Storm Scout', 'Nouveau Base', 'Épique', 'Active Overdrive après les dégâts de tempête ; bonus niveau max révèle les futurs Cercles de Tempête', 'Disponible'],
          ]),
          p('Cinq sprites de base ont rejoint le pool de loot en direct. X-Ray est le légendaire vedette — il marque périodiquement les ennemis proches sur votre écran, et le rayon de détection augmente à chaque fois que vous le montez de niveau. Mega Man est un compagnon rare qui réduit le glissement pour que vous puissiez glisser plus loin sur la carte. Overshield accorde un bouclier supplémentaire sur vos HP réguliers, avec la quantité qui augmente à chaque niveau. Onigiri déclenche une rafale de vitesse Overdrive après avoir utilisé un objet consommable. Et Storm Scout active Overdrive après avoir subi des dégâts de tempête, avec un bonus de niveau max qui révèle les positions futures des Cercles de Tempête.'),
          img('/sprites/xray', 'Icône du Sprite X-Ray, Légendaire, variante Normale — Fortnite Chapitre 7 Saison 4', 128, 128),
        ],
      },
      {
        heading: 'Le système Loot Hacker',
        blocks: [
          p('Les variantes Loot Hacker sont des sprites séparés — pas des skins alternatifs de sprites existants. Chaque Loot Hacker apparaît dans les zones de haute altitude et a un seul niveau de variante. La plupart sont actuellement marquées comme non disponibles dans les données du jeu, ce qui signifie que Epic les a ajoutées aux fichiers mais ne les a pas encore activées en matchs en direct. Loot Hacker Crown est l\'exception : il est disponible maintenant et suit une version modifiée de la capacité de progression de victoire du sprite Crown.'),
          p('Les sprites Loot Hacker partagent le même emplacement de roster que leur homologue de base — par exemple, Loot Hacker X-Ray et X-Ray sont tous deux liés au compagnon X-Ray, mais ils occupent des cellules séparées sur le tracker. Cela signifie que vous pouvez posséder les deux et les suivre indépendamment.'),
        ],
      },
      {
        heading: 'Comment suivre les sprites v42.10',
        blocks: [
          p('Ouvrez le tracker sur la page d\'accueil. Les nouveaux sprites apparaissent dans la barre latérale "Nouveaux Sprites" et sont marqués avec un badge dans la grille principale. Marquez chacun comme Possédé une fois que vous l\'extraites, puis mettez une étoile Maîtrisé lorsque vous atteignez le niveau de maîtrise en jeu. Utilisez le Mode Chasse pour ne voir que les sprites v42.10 qu\'il vous manque encore.'),
        ],
      },
    ],
  },
};

const howToTrack: Record<Locale, PostContent> = {
  en: {
    intro: `Every companion you extract in Chapter 7 Season 4 stays in your locker permanently, but keeping track of which ones you own — and which you have mastered — gets complicated fast once Gold, Cheat Master, and Loot Hacker variants enter the picture. This guide walks through the full workflow: marking sprites, backing up your progress, and sharing a read-only snapshot with friends.`,
    sections: [
      {
        heading: 'Marking sprites as Owned',
        blocks: [
          img('/sprite-variant-hierarchy.svg', 'Fortnite Sprite variant hierarchy: each base Sprite has Normal, Gold, Cheat Master, and Loot Hacker versions with increasing dust cost', 620, 220),
          p('Scroll to the tracker grid on the home page. Each cell represents one sprite-variant pair — for example, "Bush Normal" and "Bush Gold" are separate cells. When you extract a sprite in a match and the extraction animation completes, find its cell and tap the "Mark Owned" button. The cell shifts to a highlighted state so you can see at a glance which companions are already in your locker.'),
          p('If you extract a variant you have not seen before — say, a Gold Shadow from a chest — mark only that specific variant. The Normal variant stays unmarked until you extract it separately. This one-cell-per-variant approach means your tracker reflects exactly what is in your locker, not what you think you might have.'),
        ],
      },
      {
        heading: 'Marking sprites as Mastered',
        blocks: [
          p('Mastery is a separate mark from ownership. A sprite becomes mastered when you take it to level 5 through regular play, then complete the extraction requirement. On the tracker, star the Mastered button only after both conditions are met. The two-status system exists because extracting a Gold Crown is not the same as mastering it — mastery means you have fully leveled the companion and unlocked its bonus.'),
        ],
      },
      {
        heading: 'Backing up your collection',
        blocks: [
          p('All progress lives in your browser\'s localStorage. If you clear your browser data, switch computers, or want to move to a different device, export your collection as a JSON file. Open the share panel below the tracker, click "Export JSON," and save the file somewhere safe. To restore on a new device, open the same share panel and click "Import JSON" — your Owned and Mastered marks will be restored instantly.'),
        ],
      },
      {
        heading: 'Sharing with friends',
        blocks: [
          p('The share panel also generates a read-only URL. Copy it and send it to a friend — they will see your Owned and Mastered marks in their browser without being able to edit them. This is useful for coordinating who has which sprites before a squad session, or for showing off a near-complete collection. The URL encodes only your checklist bits, not your Epic account or any personal data.'),
        ],
      },
    ],
  },
  es: {
    intro: `Cada compañero que extraes en la Temporada 4 del Capítulo 7 permanece en tu locker permanentemente, pero llevar la cuenta de cuáles tienes — y cuáles has dominado — se complica rápido cuando las variantes Gold, Cheat Master y Loot Hacker entran en escena. Esta guía recorre todo el flujo de trabajo: marcar sprites, respaldar tu progreso y compartir una instantánea de solo lectura con amigos.`,
    sections: [
      {
        heading: 'Marcar sprites como Obtenido',
        blocks: [
          img('/sprite-variant-hierarchy.svg', 'Jerarquía de variantes de sprites de Fortnite: cada Sprite base tiene versiones Normal, Gold, Cheat Master y Loot Hacker con costo de polvo creciente', 620, 220),
          p('Desplázate hasta la cuadrícula del tracker en la página de inicio. Cada celda representa un par sprite-variante — por ejemplo, "Bush Normal" y "Bush Gold" son celdas separadas. Cuando extraes un sprite en una partida y la animación de extracción se completa, encuentra su celda y toca el botón "Marcar Obtenido". La celda cambia a un estado resaltado para que puedas ver de un vistazo qué compañeros ya están en tu locker.'),
          p('Si extraes una variante que no has visto antes — digamos, un Gold Shadow de un cofre — marca solo esa variante específica. La variante Normal queda sin marcar hasta que la extraigas por separado. Este enfoque de una-celda-por-variante significa que tu tracker refleja exactamente lo que hay en tu locker, no lo que crees que podrías tener.'),
        ],
      },
      {
        heading: 'Marcar sprites como Dominado',
        blocks: [
          p('El dominio es una marca separada de la propiedad. Un sprite se convierte en dominado cuando lo llevas al nivel 5 mediante juego regular, y luego completas el requisito de extracción. En el tracker, pon una estrella en el botón Dominado solo después de que ambas condiciones se cumplan. El sistema de dos estados existe porque extraer un Gold Crown no es lo mismo que dominarlo — dominar significa que has subido completamente al compañero y desbloqueado su bonificación.'),
        ],
      },
      {
        heading: 'Respaldar tu colección',
        blocks: [
          p('Todo el progreso vive en el localStorage de tu navegador. Si borras los datos de tu navegador, cambias de computadora o quieres moverte a un dispositivo diferente, exporta tu colección como un archivo JSON. Abre el panel de compartir debajo del tracker, haz clic en "Exportar JSON" y guarda el archivo en un lugar seguro. Para restaurar en un nuevo dispositivo, abre el mismo panel de compartir y haz clic en "Importar JSON" — tus marcas de Obtenido y Dominado se restaurarán instantáneamente.'),
        ],
      },
      {
        heading: 'Compartir con amigos',
        blocks: [
          p('El panel de compartir también genera una URL de solo lectura. Cópiala y envíamela a un amigo — verán tus marcas de Obtenido y Dominado en su navegador sin poder editarlas. Esto es útil para coordinar quién tiene cuáles sprites antes de una sesión de escuadra, o para presumir una colección casi completa. La URL codifica solo los bits de tu lista, no tu cuenta de Epic ni ningún dato personal.'),
        ],
      },
    ],
  },
  pt: {
    intro: `Cada companheiro que você extrai na Temporada 4 do Capítulo 7 permanece no seu locker permanentemente, mas acompanhar quais você tem — e quais você dominou — fica complicado rápido quando as variantes Gold, Cheat Master e Loot Hacker entram em cena. Este guia percorre todo o fluxo de trabalho: marcar sprites, fazer backup do seu progresso e compartilhar um snapshot somente leitura com amigos.`,
    sections: [
      {
        heading: 'Marcar sprites como Obtido',
        blocks: [
          img('/sprite-variant-hierarchy.svg', 'Hierarquia de variantes de sprites do Fortnite: cada Sprite base tem versões Normal, Gold, Cheat Master e Loot Hacker com custo de pó crescente', 620, 220),
          p('Role até a grade do tracker na página inicial. Cada célula representa um par sprite-variante — por exemplo, "Bush Normal" e "Bush Gold" são células separadas. Quando você extrai um sprite em uma partida e a animação de extração é concluída, encontre sua célula e toque no botão "Marcar Obtido". A célula muda para um estado destacado para que você possa ver de relance quais companheiros já estão no seu locker.'),
          p('Se você extrair uma variante que não viu antes — digamos, um Gold Shadow de um baú — marque apenas essa variante específica. A variante Normal fica sem marca até que você a extraia separadamente. Essa abordagem de uma-cela-por-variante significa que seu tracker reflete exatamente o que está no seu locker, não o que você acha que pode ter.'),
        ],
      },
      {
        heading: 'Marcar sprites como Dominado',
        blocks: [
          p('O domínio é uma marca separada da posse. Um sprite se torna dominado quando você o leva ao nível 5 por meio de jogo regular, e depois cumpre o requisito de extração. No tracker, coloque uma estrela no botão Dominado apenas depois que ambas as condições sejam atendidas. O sistema de dois estados existe porque extrair um Gold Crown não é o mesmo que dominá-lo — dominar significa que você subiu completamente o companheiro e desbloqueou seu bônus.'),
        ],
      },
      {
        heading: 'Fazer backup da sua coleção',
        blocks: [
          p('Todo o progresso fica no localStorage do seu navegador. Se você limpar os dados do navegador, trocar de computador ou quiser mudar para um dispositivo diferente, exporte sua coleção como um arquivo JSON. Abra o painel de compartilhar abaixo do tracker, clique em "Exportar JSON" e salve o arquivo em um lugar seguro. Para restaurar em um novo dispositivo, abra o mesmo painel de compartilhar e clique em "Importar JSON" — suas marcas de Obtido e Dominado serão restauradas instantaneamente.'),
        ],
      },
      {
        heading: 'Compartilhar com amigos',
        blocks: [
          p('O painel de compartilhar também gera uma URL somente leitura. Copie-a e envie para um amigo — eles verão suas marcas de Obtido e Dominado no navegador deles sem poder editá-las. Isso é útil para coordenar quem tem quais sprites antes de uma sessão de esquadrão, ou para exibir uma coleção quase completa. A URL codifica apenas os bits da sua lista, não sua conta da Epic nem nenhum dado pessoal.'),
        ],
      },
    ],
  },
  fr: {
    intro: `Chaque compagnon que vous extrayez au Chapitre 7 Saison 4 reste dans votre locker de manière permanente, mais garder une trace de ceux que vous possédez — et de ceux que vous avez maîtrisés — devient compliqué rapidement une fois que les variantes Gold, Cheat Master et Loot Hacker entrent en jeu. Ce guide parcourt le flux de travail complet : marquer les sprites, sauvegarder votre progression et partager un instantané en lecture seule avec des amis.`,
    sections: [
      {
        heading: 'Marquer les sprites comme Possédé',
        blocks: [
          img('/sprite-variant-hierarchy.svg', 'Hiérarchie des variantes de sprites Fortnite : chaque Sprite de base a des versions Normale, Gold, Cheat Master et Loot Hacker avec un coût de poussière croissant', 620, 220),
          p('Défilez jusqu\'à la grille du tracker sur la page d\'accueil. Chaque cellule représente une paire sprite-variante — par exemple, "Bush Normal" et "Bush Gold" sont des cellules séparées. Lorsque vous extrayez un sprite dans un match et que l\'animation d\'extraction se termine, trouvez sa cellule et appuyez sur le bouton "Marquer Possédé". La cellule passe à un état surligné pour que vous puissiez voir d\'un coup d\'œil quels compagnons sont déjà dans votre locker.'),
          p('Si vous extrayez une variante que vous n\'avez pas vue auparavant — disons, un Gold Shadow d\'un coffre — ne marquez que cette variante spécifique. La variante Normale reste non marquée jusqu\'à ce que vous l\'extrayiez séparément. Cette approche une-cellule-par-variante signifie que votre tracker reflète exactement ce qui est dans votre locker, pas ce que vous pensez pouvoir avoir.'),
        ],
      },
      {
        heading: 'Marquer les sprites comme Maîtrisé',
        blocks: [
          p('La maîtrise est une marque distincte de la possession. Un sprite devient maîtrisé lorsque vous le portez au niveau 5 par le jeu régulier, puis terminez l\'exigence d\'extraction. Sur le tracker, mettez une étoile sur le bouton Maîtrisé uniquement après que les deux conditions soient remplies. Le système à deux états existe parce qu\'extraire un Gold Crown n\'est pas la même chose que le maîtriser — maîtriser signifie que vous avez complètement élevé le compagnon et débloqué son bonus.'),
        ],
      },
      {
        heading: 'Sauvegarder votre collection',
        blocks: [
          p('Toute la progression vit dans le localStorage de votre navigateur. Si vous effacez les données de votre navigateur, changez d\'ordinateur ou voulez passer à un autre appareil, exportez votre collection en fichier JSON. Ouvrez le panneau de partage sous le tracker, cliquez sur "Exporter le JSON" et enregistrez le fichier quelque part en sécurité. Pour restaurer sur un nouvel appareil, ouvrez le même panneau de partage et cliquez sur "Importer le JSON" — vos marques Possédé et Maîtrisé seront restaurées instantanément.'),
        ],
      },
      {
        heading: 'Partager avec des amis',
        blocks: [
          p('Le panneau de partage génère également une URL en lecture seule. Copiez-la et envoyez-la à un ami — ils verront vos marques Possédé et Maîtrisé dans leur navigateur sans pouvoir les modifier. Ceci est utile pour coordonner qui possède quels sprites avant une session en équipe, ou pour afficher une collection presque complète. L\'URL encode uniquement les bits de votre liste, pas votre compte Epic ni aucune donnée personnelle.'),
        ],
      },
    ],
  },
};

const huntMode: Record<Locale, PostContent> = {
  en: {
    intro: `Hunt Mode is a board filter that hides every sprite you already own and shows only the missing ones, sorted by rarity. It turns a 42-sprite grid into a focused checklist of exactly what you still need to extract. Here is how to enable it and use it effectively.`,
    sections: [
      {
        heading: 'Enabling Hunt Mode',
        blocks: [
          img('/hunt-mode-flow-diagram.svg', 'Hunt Mode flow: extract a sprite, mark it Owned, enable Hunt Mode to filter the board to missing variants sorted by rarity', 700, 180),
          p('On the home page tracker, locate the filter bar above the sprite grid. Tap the "Hunt Mode" toggle. The grid instantly updates to hide every cell where you have already marked Owned. What remains is a shorter list of missing sprites, grouped by rarity tier — Mythic companions appear first, then Legendary, Epic, and Rare.'),
          p('Hunt Mode works in combination with other filters. If you toggle both Hunt Mode and the "Season 4 Only" filter, the board shows only Season 4 sprites you have not yet extracted. Adding the "Gold" variant filter narrows it further to Gold variants you are missing. Each filter stacks, so you can build a highly specific extraction plan.'),
        ],
      },
      {
        heading: 'Using rarity sorting',
        blocks: [
          p('Within the Hunt Mode results, sprites are sorted by rarity tier. This means the rarest missing companions appear at the top of the grid. If you are opening chests in a match and want to know which extraction has the highest priority, glance at the tracker — the first sprite in Hunt Mode results is the one you should grab if you find it.'),
          p('Mythic sprites like Crown and Klombo are the hardest to find in chests. If Hunt Mode shows one of these at the top of your list, you know that match\'s chest loot is particularly valuable for your collection. Conversely, if only Rare sprites remain, you can focus on other gameplay goals knowing the common companions are easy to pick up later.'),
        ],
      },
      {
        heading: 'Combining Hunt Mode with the Missing filter',
        blocks: [
          p('The "Missing" filter works similarly to Hunt Mode but without the rarity sort. Use Hunt Mode when you want priority ordering; use the plain Missing filter when you just want a quick count of how many sprites remain. Both can be toggled independently, and turning both on simultaneously is redundant — Hunt Mode already implies "show only missing."'),
        ],
      },
    ],
  },
  es: {
    intro: `El Modo Caza es un filtro de tabla que oculta todos los sprites que ya tienes y muestra solo los que faltan, ordenados por rareza. Convierte una cuadrícula de 42 sprites en una lista enfocada de exactamente lo que aún necesitas extraer. Así es como se activa y se usa efectivamente.`,
    sections: [
      {
        heading: 'Activar el Modo Caza',
        blocks: [
          img('/hunt-mode-flow-diagram.svg', 'Flujo del Modo Caza: extrae un sprite, márcalo como Obtenido, activa el Modo Caza para filtrar la tabla a variantes faltantes ordenadas por rareza', 700, 180),
          p('En el tracker de la página de inicio, ubica la barra de filtros encima de la cuadrícula de sprites. Toca el interruptor "Modo Caza". La cuadrícula se actualiza instantáneamente para ocultar cada celda donde ya marcaste Obtenido. Lo que queda es una lista más corta de sprites faltantes, agrupados por nivel de rareza — los compañeros Míticos aparecen primero, luego Legendarios, Épicos y Raros.'),
          p('El Modo Caza funciona en combinación con otros filtros. Si activas tanto el Modo Caza como el filtro "Solo Temporada 4", la tabla muestra solo los sprites de la Temporada 4 que aún no has extraído. Agregar el filtro de variante "Gold" lo reduce aún más a las variantes Gold que te faltan. Cada filtro se apila, para que puedas construir un plan de extracción muy específico.'),
        ],
      },
      {
        heading: 'Usar la clasificación por rareza',
        blocks: [
          p('Dentro de los resultados del Modo Caza, los sprites están ordenados por nivel de rareza. Esto significa que los compañeros más raros que faltan aparecen en la parte superior de la cuadrícula. Si estás abriendo cofres en una partida y quieres saber qué extracción tiene la prioridad más alta, mira el tracker — el primer sprite en los resultados del Modo Caza es el que debes agarrar si lo encuentras.'),
          p('Los sprites Míticos como Crown y Klombo son los más difíciles de encontrar en cofres. Si el Modo Caza muestra uno de estos en la parte superior de tu lista, sabes que el botín de cofres de esa partida es particularmente valioso para tu colección. Por el contrario, si solo quedan sprites Raros, puedes enfocarte en otros objetivos de juego sabiendo que los compañeros comunes son fáciles de conseguir después.'),
        ],
      },
      {
        heading: 'Combinar el Modo Caza con el filtro Faltantes',
        blocks: [
          p('El filtro "Faltantes" funciona de manera similar al Modo Caza pero sin la clasificación por rareza. Usa el Modo Caza cuando quieras un orden de prioridad; usa el filtro Faltantes simple cuando solo quieras un conteo rápido de cuántos sprites quedan. Ambos se pueden activar independientemente, y activar ambos simultáneamente es redundante — el Modo Caza ya implica "mostrar solo faltantes".'),
        ],
      },
    ],
  },
  pt: {
    intro: `O Modo Caça é um filtro de quadro que oculta todos os sprites que você já tem e mostra apenas os que faltam, ordenados por raridade. Converte uma grade de 42 sprites em uma lista focada de exatamente o que você ainda precisa extrair. Assim se ativa e se usa efetivamente.`,
    sections: [
      {
        heading: 'Ativar o Modo Caça',
        blocks: [
          img('/hunt-mode-flow-diagram.svg', 'Fluxo do Modo Caça: extraia um sprite, marque como Obtido, ative o Modo Caça para filtrar o quadro para variantes faltantes ordenadas por raridade', 700, 180),
          p('No tracker da página inicial, localize a barra de filtros acima da grade de sprites. Toque na alternância "Modo Caça". A grade é atualizada instantaneamente para ocultar toda célula onde você já marcou Obtido. O que resta é uma lista mais curta de sprites faltantes, agrupados por nível de raridade — os companheiros Míticos aparecem primeiro, depois Lendários, Épicos e Raros.'),
          p('O Modo Caça funciona em combinação com outros filtros. Se você ativar tanto o Modo Caça quanto o filtro "Apenas Temporada 4", o quadro mostra apenas os sprites da Temporada 4 que você ainda não extraiu. Adicionar o filtro de variante "Gold" reduz ainda mais para as variantes Gold que faltam. Cada filtro se acumula, para que você possa construir um plano de extração muito específico.'),
        ],
      },
      {
        heading: 'Usar a classificação por raridade',
        blocks: [
          p('Dentro dos resultados do Modo Caça, os sprites são ordenados por nível de raridade. Isso significa que os companheiros mais raros que faltam aparecem no topo da grade. Se você está abrindo baús em uma partida e quer saber qual extração tem a prioridade mais alta, olhe o tracker — o primeiro sprite nos resultados do Modo Caça é o que você deve pegar se encontrá-lo.'),
          p('Sprites Míticos como Crown e Klombo são os mais difíceis de encontrar nos baús. Se o Modo Caça mostra um desses no topo da sua lista, você sabe que o loot dos baús dessa partida é particularmente valioso para sua coleção. Por outro lado, se apenas sprites Raros restam, você pode focar em outros objetivos de jogo sabendo que os companheiros comuns são fáceis de conseguir depois.'),
        ],
      },
      {
        heading: 'Combinar o Modo Caça com o filtro Faltantes',
        blocks: [
          p('O filtro "Faltantes" funciona de maneira semelhante ao Modo Caça mas sem a classificação por raridade. Use o Modo Caça quando quiser uma ordenação por prioridade; use o filtro Faltantes simples quando só quiser uma contagem rápida de quantos sprites restam. Ambos podem ser alternados independentemente, e ativar ambos simultaneamente é redundante — o Modo Caça já implica "mostrar apenas faltantes".'),
        ],
      },
    ],
  },
  fr: {
    intro: `Le Mode Chasse est un filtre de tableau qui masque tous les sprites que vous possédez déjà et n'affiche que les manquants, triés par rareté. Il transforme une grille de 42 sprites en une liste ciblée de exactement ce qu'il vous reste à extraire. Voici comment l'activer et l'utiliser efficacement.`,
    sections: [
      {
        heading: 'Activer le Mode Chasse',
        blocks: [
          img('/hunt-mode-flow-diagram.svg', 'Flux du Mode Chasse : extrayez un sprite, marquez-le comme Possédé, activez le Mode Chasse pour filtrer le tableau aux variantes manquantes triées par rareté', 700, 180),
          p('Sur le tracker de la page d\'accueil, localisez la barre de filtres au-dessus de la grille des sprites. Appuyez sur le bouton "Mode Chasse". La grille se met à jour instantanément pour masquer chaque cellule où vous avez déjà marqué Possédé. Ce qui reste est une liste plus courte de sprites manquants, regroupés par niveau de rareté — les compagnons Mythiques apparaissent en premier, puis Légendaires, Épiques et Rares.'),
          p('Le Mode Chasse fonctionne en combinaison avec d\'autres filtres. Si vous activez à la fois le Mode Chasse et le filtre "Saison 4 uniquement", le tableau n\'affiche que les sprites de la Saison 4 que vous n\'avez pas encore extraits. Ajouter le filtre de variante "Gold" le réduit encore aux variantes Gold qui vous manquent. Chaque filtre s\'empile, vous pouvez donc construire un plan d\'extraction très spécifique.'),
        ],
      },
      {
        heading: 'Utiliser le tri par rareté',
        blocks: [
          p('Dans les résultats du Mode Chasse, les sprites sont triés par niveau de rareté. Cela signifie que les compagnons les plus rares qui manquent apparaissent en haut de la grille. Si vous ouvrez des coffres dans un match et voulez savoir quelle extraction a la priorité la plus élevée, jetez un œil au tracker — le premier sprite dans les résultats du Mode Chasse est celui que vous devez prendre si vous le trouvez.'),
          p('Les sprites Mythiques comme Crown et Klombo sont les plus difficiles à trouver dans les coffres. Si le Mode Chasse affiche l\'un d\'eux en haut de votre liste, vous savez que le loot des coffres de ce match est particulièrement précieux pour votre collection. À l\'inverse, si seuls des sprites Rares restent, vous pouvez vous concentrer sur d\'autres objectifs de jeu en sachant que les compagnons communs sont faciles à obtenir plus tard.'),
        ],
      },
      {
        heading: 'Combiner le Mode Chasse avec le filtre Manquants',
        blocks: [
          p('Le filtre "Manquants" fonctionne de manière similaire au Mode Chasse mais sans le tri par rareté. Utilisez le Mode Chasse quand vous voulez un ordre de priorité ; utilisez le filtre Manquants simple quand vous voulez juste un comptage rapide du nombre de sprites restants. Les deux peuvent être activés indépendamment, et activer les deux en même temps est redondant — le Mode Chasse implique déjà "n\'afficher que les manquants".'),
        ],
      },
    ],
  },
};

const compareLockers: Record<Locale, PostContent> = {
  en: {
    intro: `The Compare tool lets you see two sprite collections side by side using share codes. This is useful for coordinating with a squad member, checking what a friend has collected, or figuring out which sprites you both need to hunt together. No login is required — the comparison runs entirely in your browser.`,
    sections: [
      {
        heading: 'Generating your share code',
        blocks: [
          p('Open the tracker on the home page and scroll to the share panel. Click "Copy Share Link" to get a URL that encodes your Owned and Mastered marks. Send this link to anyone you want to compare with. They can open it to see your collection as a read-only view, or they can paste it into the Compare page to run a side-by-side analysis.'),
          table('Example locker comparison output', ['Sprite', 'You Own', 'Friend Owns', 'Status'], [
            ['Crown — Normal', 'Yes', 'Yes', 'Both'],
            ['X-Ray — Gold', 'Yes', 'No', 'Only You'],
            ['Shadow — Cheat Master', 'No', 'Yes', 'Only Friend'],
            ['Klombo — Gold', 'No', 'No', 'Neither'],
          ]),
        ],
      },
      {
        heading: 'Running a comparison',
        blocks: [
          p('Navigate to the Compare page and paste both share codes into the input fields. The tool decodes each URL, reads the Owned and Mastered bits, and generates a table showing every sprite-variant pair. Rows are color-coded: green means both players own it, blue means only you have it, gray means only your friend has it, and red means neither player has extracted that variant yet.'),
          p('The comparison is computed entirely in your browser. No data is sent to a server, and the share codes contain only checklist information — not your Epic username, email, or any account credentials. This is the same privacy model the tracker uses for individual progress storage.'),
        ],
      },
      {
        heading: 'Using the results',
        blocks: [
          p('The "Neither" rows are the most actionable. They tell you and your friend which sprites you both need to extract, which can guide your next squad session. The "Only Friend" rows show sprites your friend has that you do not — useful for knowing which chests to prioritize when playing together. And the "Both" rows confirm that neither of you needs to revisit those companions.'),
        ],
      },
    ],
  },
  es: {
    intro: `La herramienta Comparar te permite ver dos colecciones de sprites lado a lado usando códigos de compartir. Esto es útil para coordinar con un miembro de la escuadra, verificar qué ha coleccionado un amigo o descubrir qué sprites necesitan cazar juntos. No se requiere iniciar sesión — la comparación se ejecuta completamente en tu navegador.`,
    sections: [
      {
        heading: 'Generar tu código de compartir',
        blocks: [
          p('Abre el tracker en la página de inicio y desplázate hasta el panel de compartir. Haz clic en "Copiar Enlace de Compartir" para obtener una URL que codifica tus marcas de Obtenido y Dominado. Envía este enlace a cualquier persona con quien quieras comparar. Pueden abrirlo para ver tu colección como una vista de solo lectura, o pegarlo en la página Comparar para ejecutar un análisis lado a lado.'),
          table('Ejemplo de salida de comparación de lockers', ['Sprite', 'Tú tienes', 'Amigo tiene', 'Estado'], [
            ['Crown — Normal', 'Sí', 'Sí', 'Ambos'],
            ['X-Ray — Gold', 'Sí', 'No', 'Solo tú'],
            ['Shadow — Cheat Master', 'No', 'Sí', 'Solo amigo'],
            ['Klombo — Gold', 'No', 'No', 'Ninguno'],
          ]),
        ],
      },
      {
        heading: 'Ejecutar una comparación',
        blocks: [
          p('Navega a la página Comparar y pega ambos códigos de compartir en los campos de entrada. La herramienta decodifica cada URL, lee los bits de Obtenido y Dominado, y genera una tabla que muestra cada par sprite-variante. Las filas están codificadas por colores: verde significa que ambos jugadores lo tienen, azul significa que solo tú lo tienes, gris significa que solo tu amigo lo tiene, y rojo significa que ningún jugador ha extraído esa variante aún.'),
          p('La comparación se calcula completamente en tu navegador. No se envían datos a un servidor, y los códigos de compartir contienen solo información de la lista — no tu nombre de usuario de Epic, correo electrónico ni credenciales de cuenta. Este es el mismo modelo de privacidad que el tracker usa para el almacenamiento de progreso individual.'),
        ],
      },
      {
        heading: 'Usar los resultados',
        blocks: [
          p('Las filas "Ninguno" son las más accionables. Te dicen a ti y a tu amigo qué sprites necesitan extraer ambos, lo que puede guiar tu próxima sesión de escuadra. Las filas "Solo Amigo" muestran sprites que tu amigo tiene y tú no — útil para saber qué cofres priorizar cuando juegan juntos. Y las filas "Ambos" confirman que ninguno de los dos necesita revisar esos compañeros.'),
        ],
      },
    ],
  },
  pt: {
    intro: `A ferramenta Comparar permite ver duas coleções de sprites lado a lado usando códigos de compartilhar. Isso é útil para coordenar com um membro do esquadrão, verificar o que um amigo coletou ou descobrir quais sprites vocês precisam caçar juntos. Nenhum login é necessário — a comparação é executada inteiramente no seu navegador.`,
    sections: [
      {
        heading: 'Gerar seu código de compartilhar',
        blocks: [
          p('Abra o tracker na página inicial e role até o painel de compartilhar. Clique em "Copiar Link de Compartilhar" para obter uma URL que codifica suas marcas de Obtido e Dominado. Envie este link para qualquer pessoa com quem você queira comparar. Eles podem abri-lo para ver sua coleção como uma visualização somente leitura, ou colá-lo na página Comparar para executar uma análise lado a lado.'),
          table('Exemplo de saída de comparação de lockers', ['Sprite', 'Você tem', 'Amigo tem', 'Status'], [
            ['Crown — Normal', 'Sim', 'Sim', 'Ambos'],
            ['X-Ray — Gold', 'Sim', 'Não', 'Só você'],
            ['Shadow — Cheat Master', 'Não', 'Sim', 'Só o amigo'],
            ['Klombo — Gold', 'Não', 'Não', 'Nenhum'],
          ]),
        ],
      },
      {
        heading: 'Executar uma comparação',
        blocks: [
          p('Navegue até a página Comparar e cole ambos os códigos de compartilhar nos campos de entrada. A ferramenta decodifica cada URL, lê os bits de Obtido e Dominado e gera uma tabela mostrando cada par sprite-variante. As linhas são coloridas: verde significa que ambos os jogadores têm, azul significa que só você tem, cinza significa que só o amigo tem, e vermelho significa que nenhum jogador extraiu aquela variante ainda.'),
          p('A comparação é calculada inteiramente no seu navegador. Nenhum dado é enviado para um servidor, e os códigos de compartilham contêm apenas informações da lista — não seu nome de usuário da Epic, e-mail ou credenciais de conta. Este é o mesmo modelo de privacidade que o tracker usa para o armazenamento de progresso individual.'),
        ],
      },
      {
        heading: 'Usar os resultados',
        blocks: [
          p('As linhas "Nenhum" são as mais acionáveis. Elas dizem a você e ao seu amigo quais sprites vocês dois precisam extrair, o que pode guiar sua próxima sessão de esquadrão. As linhas "Só o Amigo" mostram sprites que o amigo tem e você não — útil para saber quais baús priorizar quando jogam juntos. E as linhas "Ambos" confirmam que nenhum dos dois precisa revisitar esses companheiros.'),
        ],
      },
    ],
  },
  fr: {
    intro: `L'outil Comparer vous permet de voir deux collections de sprites côte à côte en utilisant des codes de partage. Ceci est utile pour coordonner avec un membre de l'équipe, vérifier ce qu'un ami a collecté ou déterminer quels sprites vous devez chasser ensemble. Aucune connexion n'est requise — la comparaison s'exécute entièrement dans votre navigateur.`,
    sections: [
      {
        heading: 'Générer votre code de partage',
        blocks: [
          p('Ouvrez le tracker sur la page d\'accueil et défilez jusqu\'au panneau de partage. Cliquez sur "Copier le lien de partage" pour obtenir une URL qui encode vos marques Possédé et Maîtrisé. Envoyez ce lien à toute personne avec qui vous voulez comparer. Ils peuvent l\'ouvrir pour voir votre collection en vue lecture seule, ou le coller sur la page Comparer pour lancer une analyse côte à côte.'),
          table('Exemple de sortie de comparaison de lockers', ['Sprite', 'Vous possédez', 'Ami possède', 'Statut'], [
            ['Crown — Normal', 'Oui', 'Oui', 'Les deux'],
            ['X-Ray — Gold', 'Oui', 'Non', 'Uniquement vous'],
            ['Shadow — Cheat Master', 'Non', 'Oui', 'Uniquement ami'],
            ['Klombo — Gold', 'Non', 'Non', 'Aucun'],
          ]),
        ],
      },
      {
        heading: 'Lancer une comparaison',
        blocks: [
          p('Naviguez vers la page Comparer et collez les deux codes de partage dans les champs de saisie. L\'outil décode chaque URL, lit les bits Possédé et Maîtrisé, et génère une table montrant chaque paire sprite-variante. Les lignes sont codées par couleur : vert signifie que les deux joueurs le possèdent, bleu signifie que seulement vous l\'avez, gris signifie que seulement votre ami l\'a, et rouge signifie qu\'aucun joueur n\'a encore extrait cette variante.'),
          p('La comparaison est entièrement calculée dans votre navigateur. Aucune donnée n\'est envoyée à un serveur, et les codes de partage ne contiennent que les informations de la liste — pas votre nom d\'utilisateur Epic, e-mail ou identifiants de compte. C\'est le même modèle de confidentialité que le tracker utilise pour le stockage de la progression individuelle.'),
        ],
      },
      {
        heading: 'Utiliser les résultats',
        blocks: [
          p('Les lignes "Aucun" sont les plus exploitables. Elles vous disent à vous et à votre ami quels sprites vous devez tous les deux extraire, ce qui peut guider votre prochaine session en équipe. Les lignes "Uniquement Ami" montrent les sprites que votre ami possède et que vous n\'avez pas — utile pour savoir quels coffres prioriser en jouant ensemble. Et les lignes "Les deux" confirment que ni l\'un ni l\'autre n\'a besoin de revisiter ces compagnons.'),
        ],
      },
    ],
  },
};

const cheatCodes: Record<Locale, PostContent> = {
  en: {
    intro: `Cheat codes in Chapter 7 Season 4 unlock Cheat Master sprite variants, bonus Sprite Dust, extra XP, and a handful of utility items. Each code requires a specific button combo entered at the cheat terminal in-game, and most cost Sprite Dust to activate. Here is every verified code, what it gives you, and how much it costs.`,
    sections: [
      {
        heading: 'How to enter a cheat code',
        blocks: [
          table('All verified cheat codes — Chapter 7 Season 4', ['Code', 'Unlocks', 'Category', 'Dust Cost'], [
            ['MAGILUME', '2,000 Sprite Dust', 'Dust', '—'],
            ['CHISPAMBO', '2,000 Sprite Dust', 'Dust', '—'],
            ['ABGESTAUBT', '2,000 Sprite Dust', 'Dust', '—'],
            ['OVERRIDEXP', '40,000 XP', 'XP', '—'],
            ['02OVERRIDE', 'Llama Supply Drop + Portable Extractor', 'Item', '—'],
            ['TAKEYOURHEART', 'Extraction Accelerators', 'Item', '—'],
            ['PERFECTORDER', 'Spicy Tacos', 'Item', '—'],
            ['BEMOREALIEN', 'Loading Screen', 'Cosmetic', '—'],
            ['REACHYOURIMPOSSIBLE', 'Loading Screen', 'Cosmetic', '—'],
          ]),
          img('/sprites/bush', 'Bush Sprite icon, Rare, Cheat Master variant — Fortnite Chapter 7 Season 4', 128, 128),
          p('Find a cheat terminal in-game — they are located at specific POIs and marked on the map. Approach the terminal and interact with it. A keypad UI appears. Type the code exactly as shown (capitalization matters), then confirm. If the code is valid and you have enough Sprite Dust, the unlock animation plays and the item or variant is added to your account immediately.'),
          p('The button combo shown next to each code in the table above is an alternative input method for controller players. Instead of typing the text code, you can enter the directional and face-button sequence at the terminal. Both methods achieve the same result — pick whichever is faster for your setup.'),
        ],
      },
      {
        heading: 'Dust and XP codes',
        blocks: [
          p('Beyond sprite variants, several codes grant Sprite Dust directly. Codes like Magilume, Chispambo, and Abgestaubt each give 2,000 Dust, which is enough to unlock a Normal variant on any Rare sprite. The OverrideXP code grants 40,000 XP toward your seasonal progression. These are one-time-use per account, so enter them once and do not worry about duplicates.'),
        ],
      },
      {
        heading: 'Item and cosmetic codes',
        blocks: [
          p('A handful of codes unlock consumable items: 02Override gives a Llama Supply Drop and a Portable Extractor, TakeYourHeart grants Extraction Accelerators, and PerfectOrder provides Spicy Tacos. The cosmetic codes BeMoreAlien and ReachYourImpossible unlock Loading Screens. None of these affect your sprite collection directly, but the extraction accelerators are useful for leveling companions faster.'),
          p('For the full interactive cheat code page with claimed-code tracking, visit the Cheat Codes page.'),
        ],
      },
    ],
  },
  es: {
    intro: `Los códigos de truco en la Temporada 4 del Capítulo 7 desbloquean variantes de sprites Cheat Master, polvo de sprite de bonificación, XP extra y algunos objetos de utilidad. Cada código requiere una combinación específica de botones ingresada en la terminal de trucos del juego, y la mayoría cuesta polvo de sprite para activar. Aquí está cada código verificado, qué te da y cuánto cuesta.`,
    sections: [
      {
        heading: 'Cómo ingresar un código de truco',
        blocks: [
          table('Todos los códigos de truco verificados — Temporada 4 del Capítulo 7', ['Código', 'Desbloquea', 'Categoría', 'Costo en Polvo'], [
            ['MAGILUME', '2,000 Polvo de Sprite', 'Polvo', '—'],
            ['CHISPAMBO', '2,000 Polvo de Sprite', 'Polvo', '—'],
            ['ABGESTAUBT', '2,000 Polvo de Sprite', 'Polvo', '—'],
            ['OVERRIDEXP', '40,000 XP', 'XP', '—'],
            ['02OVERRIDE', 'Suministro Llama + Extractor Portátil', 'Objeto', '—'],
            ['TAKEYOURHEART', 'Aceleradores de Extracción', 'Objeto', '—'],
            ['PERFECTORDER', 'Tacos Picantes', 'Objeto', '—'],
            ['BEMOREALIEN', 'Pantalla de Carga', 'Cosmético', '—'],
            ['REACHYOURIMPOSSIBLE', 'Pantalla de Carga', 'Cosmético', '—'],
          ]),
          img('/sprites/bush', 'Icono del Sprite Bush, Raro, variante Cheat Master — Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('Encuentra una terminal de trucos en el juego — están ubicadas en POIs específicos y marcadas en el mapa. Acércate a la terminal e interactúa con ella. Aparece una interfaz de teclado. Escribe el código exactamente como se muestra (las mayúsculas importan), luego confirma. Si el código es válido y tienes suficiente polvo de sprite, la animación de desbloqueo se reproduce y el objeto o variante se agrega a tu cuenta inmediatamente.'),
          p('La combinación de botones que se muestra junto a cada código en la tabla anterior es un método de entrada alternativo para jugadores de control. En lugar de escribir el código de texto, puedes ingresar la secuencia direccional y de botones de cara en la terminal. Ambos métodos logran el mismo resultado — elige el que sea más rápido para tu configuración.'),
        ],
      },
      {
        heading: 'Códigos de polvo y XP',
        blocks: [
          p('Más allá de las variantes de sprites, varios códigos otorgan polvo de sprite directamente. Códigos como Magilume, Chispambo y Abgestaubt dan 2,000 Polvo cada uno, lo cual es suficiente para desbloquear una variante Normal en cualquier sprite Raro. El código OverrideXP otorga 40,000 XP hacia tu progreso de temporada. Estos son de uso único por cuenta, así que ingrésalos una vez y no te preocupes por duplicados.'),
        ],
      },
      {
        heading: 'Códigos de objetos y cosméticos',
        blocks: [
          p('Un puñado de códigos desbloquean objetos consumibles: 02Override da un Suministro Llama y un Extractor Portátil, TakeYourHeart otorga Aceleradores de Extracción, y PerfectOrder proporciona Tacos Picantes. Los códigos cosméticos BeMoreAlien y ReachYourImpossible desbloquean Pantallas de Carga. Ninguno de estos afecta tu colección de sprites directamente, pero los aceleradores de extracción son útiles para subir de nivel a los compañeros más rápido.'),
          p('Para la página interactiva completa de códigos de truco con seguimiento de códigos reclamados, visita la página de Códigos de Truco.'),
        ],
      },
    ],
  },
  pt: {
    intro: `Os códigos de trapaça na Temporada 4 do Capítulo 7 desbloqueiam variantes de sprites Cheat Master, pó de sprite bônus, XP extra e alguns itens de utilidade. Cada código requer uma combinação específica de botões digitada na terminal de trapaça no jogo, e a maioria custa pó de sprite para ativar. Aqui está cada código verificado, o que ele dá e quanto custa.`,
    sections: [
      {
        heading: 'Como digitar um código de trapaça',
        blocks: [
          table('Todos os códigos de trapaça verificados — Temporada 4 do Capítulo 7', ['Código', 'Desbloqueia', 'Categoria', 'Custo em Pó'], [
            ['MAGILUME', '2,000 Pó de Sprite', 'Pó', '—'],
            ['CHISPAMBO', '2,000 Pó de Sprite', 'Pó', '—'],
            ['ABGESTAUBT', '2,000 Pó de Sprite', 'Pó', '—'],
            ['OVERRIDEXP', '40,000 XP', 'XP', '—'],
            ['02OVERRIDE', 'Suprimento Llama + Extrator Portátil', 'Item', '—'],
            ['TAKEYOURHEART', 'Aceleradores de Extração', 'Item', '—'],
            ['PERFECTORDER', 'Tacos Picantes', 'Item', '—'],
            ['BEMOREALIEN', 'Tela de Carregamento', 'Cosmético', '—'],
            ['REACHYOURIMPOSSIBLE', 'Tela de Carregamento', 'Cosmético', '—'],
          ]),
          img('/sprites/bush', 'Ícone do Sprite Bush, Raro, variante Cheat Master — Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('Encontre uma terminal de trapaça no jogo — elas estão localizadas em POIs específicos e marcadas no mapa. Aproxime-se da terminal e interaja com ela. Uma interface de teclado aparece. Digite o código exatamente como mostrado (maiúsculas importam), depois confirme. Se o código for válido e você tiver pó de sprite suficiente, a animação de desbloqueio é reproduzida e o item ou variante é adicionado à sua conta imediatamente.'),
          p('A combinação de botões mostrada ao lado de cada código na tabela acima é um método de entrada alternativo para jogadores de controle. Em vez de digitar o código de texto, você pode inserir a sequência direcional e de botões de face na terminal. Ambos os métodos alcançam o mesmo resultado — escolha o que for mais rápido para sua configuração.'),
        ],
      },
      {
        heading: 'Códigos de pó e XP',
        blocks: [
          p('Além das variantes de sprites, vários códigos concedem pó de sprite diretamente. Códigos como Magilume, Chispambo e Abgestaubt dão 2.000 Pó cada um, o que é suficiente para desbloquear uma variante Normal em qualquer sprite Raro. O código OverrideXP concede 40.000 XP em direção ao seu progresso da temporada. Estes são de uso único por conta, então digite uma vez e não se preocupe com duplicatas.'),
        ],
      },
      {
        heading: 'Códigos de itens e cosméticos',
        blocks: [
          p('Um punhado de códigos desbloqueia itens consumíveis: 02Override dá um Suprimento Llama e um Extrator Portátil, TakeYourHeart concede Aceleradores de Extração, e PerfectOrder fornece Tacos Picantes. Os códigos cosméticos BeMoreAlien e ReachYourImpossible desbloqueiam Telas de Carregamento. Nenhum desses afeta sua coleção de sprites diretamente, mas os aceleradores de extração são úteis para subir de nível nos companheiros mais rápido.'),
          p('Para a página interativa completa de códigos de trapaça com rastreamento de códigos reclamados, visite a página de Códigos de Trapaça.'),
        ],
      },
    ],
  },
  fr: {
    intro: `Les codes de triche de la Saison 4 du Chapitre 7 déverrouillent les variantes de sprites Cheat Master, la poussière de sprite bonus, l'XP supplémentaire et quelques objets utilitaires. Chaque code nécessite un combo de boutons spécifique saisi au terminal de triche en jeu, et la plupart coûtent de la poussière de sprite à activer. Voici chaque code vérifié, ce qu'il vous donne et combien il coûte.`,
    sections: [
      {
        heading: 'Comment entrer un code de triche',
        blocks: [
          table('Tous les codes de triche vérifiés — Saison 4 Chapitre 7', ['Code', 'Déverrouille', 'Catégorie', 'Coût Poussière'], [
            ['MAGILUME', '2 000 Poussière de Sprite', 'Poussière', '—'],
            ['CHISPAMBO', '2 000 Poussière de Sprite', 'Poussière', '—'],
            ['ABGESTAUBT', '2 000 Poussière de Sprite', 'Poussière', '—'],
            ['OVERRIDEXP', '40 000 XP', 'XP', '—'],
            ['02OVERRIDE', 'Colis Supply Llama + Extracteur Portable', 'Objet', '—'],
            ['TAKEYOURHEART', 'Accélérateurs d\'Extraction', 'Objet', '—'],
            ['PERFECTORDER', 'Tacos Épicés', 'Objet', '—'],
            ['BEMOREALIEN', 'Écran de Chargement', 'Cosmétique', '—'],
            ['REACHYOURIMPOSSIBLE', 'Écran de Chargement', 'Cosmétique', '—'],
          ]),
          img('/sprites/bush', 'Icône du Sprite Bush, Rare, variante Cheat Master — Fortnite Chapitre 7 Saison 4', 128, 128),
          p('Trouvez un terminal de triche en jeu — ils sont situés à des POI spécifiques et marqués sur la carte. Approchez-vous du terminal et interagissez avec. Une interface de clavier apparaît. Tapez le code exactement comme indiqué (la casse compte), puis confirmez. Si le code est valide et que vous avez assez de poussière de sprite, l\'animation de déverrouillage se joue et l\'objet ou la variante est ajouté à votre compte immédiatement.'),
          p('Le combo de boutons affiché à côté de chaque code dans le tableau ci-dessus est une méthode de saisie alternative pour les joueurs avec manette. Au lieu de taper le code texte, vous pouvez entrer la séquence directionnelle et les boutons de face au terminal. Les deux méthodes aboutissent au même résultat — choisissez celle qui est la plus rapide pour votre configuration.'),
        ],
      },
      {
        heading: 'Codes de poussière et XP',
        blocks: [
          p('Au-delà des variantes de sprites, plusieurs codes accordent de la poussière de sprite directement. Les codes comme Magilume, Chispambo et Abgestaubt donnent chacun 2 000 Poussière, ce qui suffit pour déverrouiller une variante Normale sur n\'importe quel sprite Rare. Le code OverrideXP accorde 40 000 XP vers votre progression saisonnière. Ce sont des utilisation unique par compte, donc entrez-les une fois et ne vous souciez pas des doublons.'),
        ],
      },
      {
        heading: 'Codes d\'objets et cosmétiques',
        blocks: [
          p('Quelques codes déverrouillent des objets consommables : 02Override donne un Colis Supply Llama et un Extracteur Portable, TakeYourHeart accorde des Accélérateurs d\'Extraction, et PerfectOrder fournit des Tacos Épicés. Les codes cosmétiques BeMoreAlien et ReachYourImpossible déverrouillent des Écrans de Chargement. Aucun de ceux-ci n\'affecte directement votre collection de sprites, mais les accélérateurs d\'extraction sont utiles pour monter les compagnons en niveau plus rapidement.'),
          p('Pour la page interactive complète des codes de triche avec suivi des codes réclamés, visitez la page Codes de Triche.'),
        ],
      },
    ],
  },
};

const seasonArchives: Record<Locale, PostContent> = {
  en: {
    intro: `When a new Fortnite season begins, the previous season's sprite roster moves to the archive. This means those companions no longer drop from chests in live matches, but every sprite you extracted during that season stays in your collection. The tracker preserves all of them so your historical progress is never lost.`,
    sections: [
      {
        heading: 'What happens to archived sprites',
        blocks: [
          table('Past season archives', ['Season', 'Roster Highlights', 'Archive Link'], [
            ['Chapter 7 — Season 3', 'Batman, Zero Point, King, Seven, John Wick, Ghost, Peeky Peely, Llama, plus elemental sprites (Air, Earth, Fire, Water) with Gummy, Galaxy, Holofoil, Cube, and Quack variants', 'View archive →'],
          ]),
          img('/sprites/s3-batman', 'Batman Sprite icon, Legendary, Base variant — Fortnite Chapter 7 Season 3 archive', 128, 128),
          p('Archived sprites keep all their data: name, rarity, ability, variants, and the marks you gave them. If you marked Batman as Owned and Mastered during Season 3, those marks persist on the tracker indefinitely. The only change is that the sprite no longer appears in the live Season 4 grid — you need to switch to the Season 3 archive view to see it.'),
          p('The archive view is accessible from the Seasons page. Select Chapter 7 Season 3, and the tracker repopulates with that season\'s full roster. You can still mark and unmark sprites in the archive, so if you forgot to log a Season 3 extraction, you can go back and update it.'),
        ],
      },
      {
        heading: 'Variant differences between seasons',
        blocks: [
          p('Season 3 sprites used a different variant system than Season 4. Instead of Normal, Gold, and Cheat Master, Season 3 companions had Base, Gold, Gummy, Galaxy, Gem, Holofoil, Cube, and Quack variants — each with a different visual treatment. Some sprites had as many as eight variants (like Zero Point), while others like John Wick had only a single Base variant.'),
          p('The tracker handles both systems. Season 3 cells show the original variant names, and Season 4 cells show the new tier names. This means your collection history stays accurate regardless of which season\'s naming convention a sprite uses.'),
          p('Browse the full Season 3 archive on the Seasons page, or jump directly to Batman\'s sprite page to see all six variants and their unlock requirements.'),
        ],
      },
    ],
  },
  es: {
    intro: `Cuando comienza una nueva temporada de Fortnite, el roster de sprites de la temporada anterior pasa al archivo. Esto significa que esos compañeros ya no caen de cofres en partidas en vivo, pero cada sprite que extraíste durante esa temporada permanece en tu colección. El tracker los preserva todos para que tu progreso histórico nunca se pierda.`,
    sections: [
      {
        heading: 'Qué sucede con los sprites archivados',
        blocks: [
          table('Archivos de temporadas anteriores', ['Temporada', 'Destacados del Roster', 'Enlace al Archivo'], [
            ['Capítulo 7 — Temporada 3', 'Batman, Zero Point, King, Seven, John Wick, Ghost, Peeky Peely, Llama, más sprites elementales (Aire, Tierra, Fuego, Agua) con variantes Gummy, Galaxy, Holofoil, Cube y Quack', 'Ver archivo →'],
          ]),
          img('/sprites/s3-batman', 'Icono del Sprite Batman, Legendario, variante Base — archivo del Capítulo 7 Temporada 3 de Fortnite', 128, 128),
          p('Los sprites archivados conservan todos sus datos: nombre, rareza, habilidad, variantes y las marcas que les diste. Si marcaste Batman como Obtenido y Dominado durante la Temporada 3, esas marcas persisten en el tracker indefinidamente. El único cambio es que el sprite ya no aparece en la cuadrícula en vivo de la Temporada 4 — necesitas cambiar a la vista de archivo de la Temporada 3 para verlo.'),
          p('La vista de archivo es accesible desde la página de Temporadas. Selecciona la Capítulo 7 Temporada 3, y el tracker se repobla con el roster completo de esa temporada. Aún puedes marcar y desmarcar sprites en el archivo, así que si olvidaste registrar una extracción de la Temporada 3, puedes volver y actualizarla.'),
        ],
      },
      {
        heading: 'Diferencias de variantes entre temporadas',
        blocks: [
          p('Los sprites de la Temporada 3 usaron un sistema de variantes diferente al de la Temporada 4. En lugar de Normal, Gold y Cheat Master, los compañeros de la Temporada 3 tenían variantes Base, Gold, Gummy, Galaxy, Gem, Holofoil, Cube y Quack — cada una con un tratamiento visual diferente. Algunos sprites tenían hasta ocho variantes (como Zero Point), mientras que otros como John Wick tenían solo una variante Base.'),
          p('El tracker maneja ambos sistemas. Las celdas de la Temporada 3 muestran los nombres originales de las variantes, y las celdas de la Temporada 4 muestran los nuevos nombres de nivel. Esto significa que el historial de tu colección se mantiene preciso independientemente de la convención de nombres de la temporada que use un sprite.'),
          p('Explora el archivo completo de la Temporada 3 en la página de Temporadas, o salta directamente a la página del sprite de Batman para ver las seis variantes y sus requisitos de desbloqueo.'),
        ],
      },
    ],
  },
  pt: {
    intro: `Quando uma nova temporada do Fortnite começa, o roster de sprites da temporada anterior vai para o arquivo. Isso significa que esses companheiros não caem mais de baús em partidas ao vivo, mas cada sprite que você extraiu durante essa temporada permanece na sua coleção. O tracker preserva todos para que seu progresso histórico nunca seja perdido.`,
    sections: [
      {
        heading: 'O que acontece com os sprites arquivados',
        blocks: [
          table('Arquivos de temporadas anteriores', ['Temporada', 'Destaques do Roster', 'Link do Arquivo'], [
            ['Capítulo 7 — Temporada 3', 'Batman, Zero Point, King, Seven, John Wick, Ghost, Peeky Peely, Llama, mais sprites elementais (Ar, Terra, Fogo, Água) com variantes Gummy, Galaxy, Holofoil, Cube e Quack', 'Ver arquivo →'],
          ]),
          img('/sprites/s3-batman', 'Ícone do Sprite Batman, Lendário, variante Base — arquivo do Capítulo 7 Temporada 3 do Fortnite', 128, 128),
          p('Os sprites arquivados mantêm todos os seus dados: nome, raridade, habilidade, variantes e as marcas que você lhes deu. Se você marcou Batman como Obtido e Dominado durante a Temporada 3, essas marcas persistem no tracker indefinidamente. A única mudança é que o sprite não aparece mais na grade ao vivo da Temporada 4 — você precisa mudar para a visualização de arquivo da Temporada 3 para vê-lo.'),
          p('A visualização de arquivo é acessível na página de Temporadas. Selecione Capítulo 7 Temporada 3, e o tracker é preenchido com o roster completo dessa temporada. Você ainda pode marcar e desmarcar sprites no arquivo, então se esqueceu de registrar uma extração da Temporada 3, pode voltar e atualizá-la.'),
        ],
      },
      {
        heading: 'Diferenças de variantes entre temporadas',
        blocks: [
          p('Os sprites da Temporada 3 usaram um sistema de variantes diferente da Temporada 4. Em vez de Normal, Gold e Cheat Master, os companheiros da Temporada 3 tinham variantes Base, Gold, Gummy, Galaxy, Gem, Holofoil, Cube e Quack — cada uma com um tratamento visual diferente. Alguns sprites tinham até oito variantes (como Zero Point), enquanto outros como John Wick tinham apenas uma variante Base.'),
          p('O tracker lida com ambos os sistemas. As células da Temporada 3 mostram os nomes originais das variantes, e as células da Temporada 4 mostram os novos nomes de nível. Isso significa que o histórico da sua coleção permanece preciso independentemente da convenção de nomenclatura da temporada que um sprite use.'),
          p('Navegue pelo arquivo completo da Temporada 3 na página de Temporadas, ou pule diretamente para a página do sprite de Batman para ver todas as seis variantes e seus requisitos de desbloqueio.'),
        ],
      },
    ],
  },
  fr: {
    intro: `Quand une nouvelle saison de Fortnite commence, l'effectif de sprites de la saison précédente passe dans l'archive. Cela signifie que ces compagnons ne tombent plus des coffres en matchs en direct, mais chaque sprite que vous avez extrait pendant cette saison reste dans votre collection. Le tracker les préserve tous pour que votre progression historique ne soit jamais perdue.`,
    sections: [
      {
        heading: 'Qu\'il arrive aux sprites archivés',
        blocks: [
          table('Archives des saisons passées', ['Saison', 'Points Forts de l\'Effectif', 'Lien d\'Archive'], [
            ['Chapitre 7 — Saison 3', 'Batman, Zero Point, King, Seven, John Wick, Ghost, Peeky Peely, Llama, plus les sprites élémentaires (Air, Terre, Feau, Eau) avec les variantes Gummy, Galaxy, Holofoil, Cube et Quack', 'Voir l\'archive →'],
          ]),
          img('/sprites/s3-batman', 'Icône du Sprite Batman, Légendaire, variante Base — archive du Chapitre 7 Saison 3 de Fortnite', 128, 128),
          p('Les sprites archivés conservent toutes leurs données : nom, rareté, capacité, variantes et les marques que vous leur avez données. Si vous avez marqué Batman comme Possédé et Maîtrisé pendant la Saison 3, ces marques persistent sur le tracker indéfiniment. Le seul changement est que le sprite n\'apparaît plus dans la grille en direct de la Saison 4 — vous devez passer à la vue d\'archive de la Saison 3 pour le voir.'),
          p('La vue d\'archive est accessible depuis la page des Saisons. Sélectionnez Chapitre 7 Saison 3, et le tracker se remplit avec l\'effectif complet de cette saison. Vous pouvez toujours marquer et démarquer les sprites dans l\'archive, donc si vous avez oublié d\'enregistrer une extraction de la Saison 3, vous pouvez revenir et la mettre à jour.'),
        ],
      },
      {
        heading: 'Différences de variantes entre les saisons',
        blocks: [
          p('Les sprites de la Saison 3 utilisaient un système de variantes différent de celui de la Saison 4. Au lieu de Normal, Gold et Cheat Master, les compagnons de la Saison 3 avaient des variantes Base, Gold, Gummy, Galaxy, Gem, Holofoil, Cube et Quack — chacun avec un traitement visuel différent. Certains sprites avaient jusqu\'à huit variantes (comme Zero Point), tandis que d\'autres comme John Wick n\'avaient qu\'une seule variante Base.'),
          p('Le tracker gère les deux systèmes. Les cellules de la Saison 3 affichent les noms originaux des variantes, et les cellules de la Saison 4 affichent les nouveaux noms de niveau. Cela signifie que l\'historique de votre collection reste exacte quelle que soit la convention de dénomination de la saison qu\'un sprite utilise.'),
          p('Parcourez l\'archive complète de la Saison 3 sur la page des Saisons, ou allez directement à la page du sprite de Batman pour voir les six variantes et leurs exigences de déverrouillage.'),
        ],
      },
    ],
  },
};

const sept10Release: Record<Locale, PostContent> = {
  en: {
    intro: `Epic Games completed the full rollout of Chapter 7 Season 4's Loot Hacker roster on September 10, 2026. Fourteen sprite variants that were quietly seeded into the v42.10 client on September 3 are now dropping from loot spawns in live matches. If you've been waiting to complete your collection, here's everything you need to know about every Loot Hacker sprite, what each one does, and when they appeared in your region.`,
    sections: [
      {
        heading: 'What are Loot Hacker sprites?',
        blocks: [
          img('/season-4-patch-timeline.svg', 'Fortnite Chapter 7 Season 4 patch timeline showing the Loot Hacker rollout across September 2026', 720, 160),
          p('Loot Hacker is a new category of companion sprite introduced in Chapter 7 Season 4. Unlike standard sprites that represent a single base companion, Loot Hacker variants are distinct collectible entities — each one spawns independently and occupies its own slot on the tracker. They share a thematic link to a base companion but carry a separate ability tuned to high-elevation loot runs.'),
          p('The first Loot Hacker sprite, Crown, went live on September 3 alongside the v42.10 patch. The remaining 14 variants were held back in the game files until September 10, when Epic flipped the switch and made them available across all servers. Every one of them is now findable in the current loot pool.'),
        ],
      },
      {
        heading: 'Full Loot Hacker sprite list with abilities',
        blocks: [
          p('There are 15 Loot Hacker sprites in total — two Legendary, six Epic, and seven Rare. Each one enhances a specific gameplay mechanic tied to its base companion. Below is the complete breakdown with sprite icons, rarity tiers, and what each ability does at max level.'),
          h2('Legendary Loot Hacker sprites'),
          img('/sprites/loot-hacker-xray', 'Loot Hacker X-Ray sprite icon — Legendary rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker X-Ray</strong> — Extends the enemy-marking detection radius of the base X-Ray companion. At higher levels the pulse reaches farther, giving you earlier warning of nearby opponents. This is the most sought-after Loot Hacker sprite for aggressive playstyles.'),
          img('/sprites/loot-hacker-storm-scout', 'Loot Hacker Storm Scout sprite icon — Legendary rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Storm Scout</strong> — Sharpens storm-circle prediction accuracy. As you level it up, the forecast becomes more precise, letting you position yourself ahead of the next safe zone with confidence.'),
          h2('Epic Loot Hacker sprites'),
          img('/sprites/loot-hacker-klombo', 'Loot Hacker Klombo sprite icon — Epic rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Klombo</strong> — Boosts the quality tier of items drawn from loot sources and speeds up consumable use. A solid pick for players who rely on rapid inventory cycling.'),
          img('/sprites/loot-hacker-jackrabbit', 'Loot Hacker Jackrabbit sprite icon — Epic rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Jackrabbit</strong> — Increases jump height and reduces the cooldown between jumps. Useful for navigating mountainous terrain where Loot Hacker sprites tend to spawn.'),
          img('/sprites/loot-hacker-crown', 'Loot Hacker Crown sprite icon — Epic rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Crown</strong> — Amplifies the win-progression bonus tracked by the base Crown companion. Each level adds a larger percentage boost to your Victory Crown progress.'),
          img('/sprites/loot-hacker-tails', 'Loot Hacker Tails sprite icon — Epic rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Tails</strong> — Accelerates hover speed. The base Tails companion already lets you glide, and this variant makes that glide noticeably faster at higher levels.'),
          img('/sprites/loot-hacker-sonic', 'Loot Hacker Sonic sprite icon — Epic rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Sonic</strong> — Improves sprint velocity. Stacking levels translates to a meaningfully faster sprint, which matters during late-circle rotations.'),
          img('/sprites/loot-hacker-shadow', 'Loot Hacker Shadow sprite icon — Epic rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Shadow</strong> — Cuts reload time on equipped weapons. A subtle but impactful buff for sustained firefights.'),
          h2('Rare Loot Hacker sprites'),
          img('/sprites/loot-hacker-8bit', 'Loot Hacker 8-Bit sprite icon — Rare rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker 8-Bit</strong> — Multiplies your score output. Handy for players chasing high-score challenges or seasonal objectives.'),
          img('/sprites/loot-hacker-bushranger', 'Loot Hacker Bushranger sprite icon — Rare rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Bushranger</strong> — Increases bush durability. You stay hidden longer before the foliage gives away your position.'),
          img('/sprites/loot-hacker-adventure', 'Loot Hacker Adventure sprite icon — Rare rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Adventure</strong> — Raises the quality of upgrade rolls. When you spend resources to improve gear, this sprite nudges the outcome in your favor.'),
          img('/sprites/loot-hacker-jonesy', 'Loot Hacker Jonesy sprite icon — Rare rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Jonesy</strong> — Boosts health recovery amounts. Healing items restore more HP per use at higher levels.'),
          img('/sprites/loot-hacker-overshield', 'Loot Hacker Overshield sprite icon — Rare rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Overshield</strong> — Expands the shield buffer provided by the base Overshield companion. You start each engagement with a thicker protective layer.'),
          img('/sprites/loot-hacker-onigiri', 'Loot Hacker Onigiri sprite icon — Rare rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Onigiri</strong> — Extends Overdrive duration after consuming an item. The speed burst lasts longer, giving you more time to reposition.'),
          img('/sprites/loot-hacker-killswitch', 'Loot Hacker Killswitch sprite icon — Rare rarity, Fortnite Chapter 7 Season 4', 128, 128),
          p('<strong>Loot Hacker Killswitch</strong> — Tightens the accuracy bonus during aimed fire. Shots land more reliably, especially at mid-range.'),
        ],
      },
      {
        heading: 'Loot Hack upgrade system and Sprite Dust',
        blocks: [
          p('Alongside the sprite unlock, Epic introduced a new Loot Hack upgrade track. Accessible from the sprite management menu, this system lets you spend Sprite Dust to improve your chances of encountering Loot Hacker sprites in matches.'),
          table('Loot Hack upgrade tiers', ['Level', 'Dust Cost', 'Effect'], [
            ['1', '50', 'Slightly increases Loot Hacker spawn chance'],
            ['2', '100', 'Moderate spawn chance boost'],
            ['3', '200', 'Noticeably higher encounter rate'],
            ['4', '350', 'Rare Loot Hacker sprites appear more frequently'],
            ['5', '500', 'Epic and Legendary variants become easier to find'],
            ['6', '750', 'Maximum spawn chance — all tiers significantly more common'],
          ]),
          p('Sprite Dust is earned through standard gameplay — opening chests, eliminating opponents, and completing weekly challenges all contribute. If you\'ve been hoarding Dust since Season 4 launched, now is the time to spend it.'),
        ],
      },
      {
        heading: 'Regional release schedule',
        blocks: [
          p('The September 10 activation followed Fortnite\'s standard daily reset window. Sprites began appearing in matches at 6:00 AM Pacific Time, with each region unlocking on its local schedule.'),
          table('Loot Hacker unlock times by region', ['Region', 'Local Time', 'UTC Offset'], [
            ['Pacific (US West)', '6:00 AM', 'UTC-7'],
            ['Mountain (US Central)', '7:00 AM', 'UTC-6'],
            ['Central (US East)', '8:00 AM', 'UTC-5'],
            ['Eastern (US Atlantic)', '9:00 AM', 'UTC-4'],
            ['Brazil', '10:00 AM', 'UTC-3'],
            ['United Kingdom', '2:00 PM', 'UTC+1'],
            ['Central Europe', '3:00 PM', 'UTC+2'],
            ['Turkey', '4:00 PM', 'UTC+3'],
            ['UAE / Gulf', '5:00 PM', 'UTC+4'],
            ['India', '6:30 PM', 'UTC+5:30'],
            ['China', '9:00 PM', 'UTC+8'],
            ['Japan / South Korea', '10:00 PM', 'UTC+9'],
            ['Australia East', '11:00 PM', 'UTC+10'],
            ['New Zealand', '1:00 AM (Sep 11)', 'UTC+12'],
          ]),
        ],
      },
      {
        heading: 'Tracking your Loot Hacker collection',
        blocks: [
          p('The sprite tracker on this site has been updated to reflect the full September 10 roster. All 15 Loot Hacker sprites — including Crown from the earlier September 3 wave — are now marked as available in the catalog.'),
          img('/sprites/loot-hacker-killswitch', 'Loot Hacker Killswitch sprite icon showing the tracker badge — Fortnite Chapter 7 Season 4', 128, 128),
          p('To mark a sprite as collected, find it in the grid and tap the "Mark Owned" button. Once you reach the corresponding mastery level in-game, tap the star icon to mark it as Mastered. Your progress is saved locally in your browser and can be exported as a JSON backup at any time.'),
          p('The Availability filter lets you toggle between All, Available, and Unreleased views. With the September 10 unlock, every Loot Hacker sprite now falls under the Available category. Switch to Hunt Mode to see only the sprites you haven\'t collected yet, sorted by rarity so you know which ones to prioritize.'),
        ],
      },
    ],
  },
  es: {
    intro: `Epic Games completó el despliegue completo del roster Loot Hacker de la Temporada 4 del Capítulo 7 el 10 de septiembre de 2026. Catorce variantes de sprites que se introdujeron silenciosamente en el cliente v42.10 el 3 de septiembre ahora aparecen en las partidas en vivo. Si estabas esperando completar tu colección, aquí tienes todo lo que necesitas saber sobre cada sprite Loot Hacker, qué hace cada uno y cuándo llegó a tu región.`,
    sections: [
      {
        heading: '¿Qué son los sprites Loot Hacker?',
        blocks: [
          img('/season-4-patch-timeline.svg', 'Cronograma de parches de Fortnite Capítulo 7 Temporada 4 mostrando el despliegue de Loot Hacker en septiembre de 2026', 720, 160),
          p('Loot Hacker es una nueva categoría de sprite compañero introducida en la Temporada 4 del Capítulo 7. A diferencia de los sprites estándar que representan un solo compañero base, las variantes Loot Hacker son entidades coleccionables independientes: cada una aparece por separado y ocupa su propio espacio en el rastreador. Comparten un vínculo temático con un compañero base pero llevan una habilidad separada ajustada para incursiones de botín en alturas elevadas.'),
          p('El primer sprite Loot Hacker, Crown, se activó el 3 de septiembre junto con el parche v42.10. Las 14 variantes restantes se mantuvieron en los archivos del juego hasta el 10 de septiembre, cuando Epic activó el interruptor y las hizo disponibles en todos los servidores. Todas ellas se pueden encontrar en la池 de botín actual.'),
        ],
      },
      {
        heading: 'Lista completa de sprites Loot Hacker con habilidades',
        blocks: [
          p('Hay 15 sprites Loot Hacker en total: dos Legendarios, seis Épicos y siete Raros. Cada uno potencia una mecánica específica de juego vinculada a su compañero base. A continuación, el desglose completo con iconos de sprites, niveles de rareza y qué hace cada habilidad al nivel máximo.'),
          h2('Sprites Loot Hacker Legendarios'),
          img('/sprites/loot-hacker-xray', 'Icono del sprite Loot Hacker X-Ray — rareza Legendaria, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker X-Ray</strong> — Extiende el radio de detección de marcado de enemigos del compañero X-Ray base. A niveles más altos el pulso alcanza más distancia, dándote una alerta más temprana de oponentes cercanos.'),
          img('/sprites/loot-hacker-storm-scout', 'Icono del sprite Loot Hacker Storm Scout — rareza Legendaria, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Storm Scout</strong> — Afina la precisión de predicción del círculo de tormenta. A medida que subes de nivel, el pronóstico se vuelve más preciso, permitiéndote posicionarte antes de la siguiente zona segura.'),
          h2('Sprites Loot Hacker Épicos'),
          img('/sprites/loot-hacker-klombo', 'Icono del sprite Loot Hacker Klombo — rareza Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Klombo</strong> — Aumenta la calidad de los objetos obtenidos de fuentes de botín y acelera el uso de consumibles. Una opción sólida para jugadores que dependen del reciclaje rápido de inventario.'),
          img('/sprites/loot-hacker-jackrabbit', 'Icono del sprite Loot Hacker Jackrabbit — rareza Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Jackrabbit</strong> — Incrementa la altura de salto y reduce el enfriamiento entre saltos. Útil para navegar el terreno montañoso donde tienden a aparecer los sprites Loot Hacker.'),
          img('/sprites/loot-hacker-crown', 'Icono del sprite Loot Hacker Crown — rareza Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Crown</strong> — Amplifica el bono de progreso de victoria rastreado por el compañero Crown base. Cada nivel agrega un porcentaje mayor a tu progreso de Corona de Victoria.'),
          img('/sprites/loot-hacker-tails', 'Icono del sprite Loot Hacker Tails — rareza Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Tails</strong> — Acelera la velocidad de vuelo. El compañero Tails base ya te permite planeer, y esta variante hace ese planeo notablemente más rápido a niveles altos.'),
          img('/sprites/loot-hacker-sonic', 'Icono del sprite Loot Hacker Sonic — rareza Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Sonic</strong> — Mejora la velocidad de sprint. Acumular niveles se traduce en un sprint significativamente más rápido, lo cual importa durante las rotaciones de círculo final.'),
          img('/sprites/loot-hacker-shadow', 'Icono del sprite Loot Hacker Shadow — rareza Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Shadow</strong> — Reduce el tiempo de recarga de armas equipadas. Un buff sutil pero impactante para combates sostenidos.'),
          h2('Sprites Loot Hacker Raros'),
          img('/sprites/loot-hacker-8bit', 'Icono del sprite Loot Hacker 8-Bit — rareza Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker 8-Bit</strong> — Multiplica tu producción de puntos. Útil para jugadores que buscan objetivos de alta puntuación o desafíos de temporada.'),
          img('/sprites/loot-hacker-bushranger', 'Icono del sprite Loot Hacker Bushranger — rareza Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Bushranger</strong> — Aumenta la durabilidad del arbusto. Te mantienes oculto más tiempo antes de que la vegetación revele tu posición.'),
          img('/sprites/loot-hacker-adventure', 'Icono del sprite Loot Hacker Adventure — rareza Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Adventure</strong> — Eleva la calidad de las mejoras. Cuando gastas recursos para mejorar equipo, este sprite inclina el resultado a tu favor.'),
          img('/sprites/loot-hacker-jonesy', 'Icono del sprite Loot Hacker Jonesy — rareza Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Jonesy</strong> — Potencia la cantidad de recuperación de salud. Los objetos de curación restauran más PS por uso a niveles más altos.'),
          img('/sprites/loot-hacker-overshield', 'Icono del sprite Loot Hacker Overshield — rareza Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Overshield</strong> — Expande el búfer de escudo proporcionado por el compañero Overshield base. Comienzas cada enfrentamiento con una capa protectora más gruesa.'),
          img('/sprites/loot-hacker-onigiri', 'Icono del sprite Loot Hacker Onigiri — rareza Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Onigiri</strong> — Extiende la duración de Overdrive después de consumir un objeto. La ráfaga de velocidad dura más tiempo, dándote más oportunidades de reposicionarte.'),
          img('/sprites/loot-hacker-killswitch', 'Icono del sprite Loot Hacker Killswitch — rareza Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Killswitch</strong> — Ajusta el bono de precisión durante el fuego apuntado. Los disparos aterrizan con más confiabilidad, especialmente a media distancia.'),
        ],
      },
      {
        heading: 'Sistema de mejora Loot Hack y Polvo de Sprite',
        blocks: [
          p('Junto con el desbloqueo de sprites, Epic introdujo una nueva pista de mejora de Loot Hack. Accesible desde el menú de gestión de sprites, este sistema te permite gastar Polvo de Sprite para mejorar tus posibilidades de encontrar sprites Loot Hacker en las partidas.'),
          table('Niveles de mejora Loot Hack', ['Nivel', 'Costo de Polvo', 'Efecto'], [
            ['1', '50', 'Aumenta ligeramente la probabilidad de aparición de Loot Hacker'],
            ['2', '100', 'Impulso moderado en la probabilidad'],
            ['3', '200', 'Tasa de encuentro notablemente mayor'],
            ['4', '350', 'Los sprites Raros de Loot Hacker aparecen con más frecuencia'],
            ['5', '500', 'Las variantes Épicas y Legendarias se encuentran más fácilmente'],
            ['6', '750', 'Probabilidad máxima — todos los niveles significativamente más comunes'],
          ]),
          p('El Polvo de Sprite se obtiene a través del juego estándar: abrir cofres, eliminar oponentes y completar desafíos semanales contribuyen. Si has estado acumulando Polvo desde el inicio de la Temporada 4, ahora es el momento de gastarlo.'),
        ],
      },
      {
        heading: 'Horario de lanzamiento regional',
        blocks: [
          table('Horarios de activación de Loot Hacker por región', ['Región', 'Hora Local', 'Offset UTC'], [
            ['Pacífico (EE.UU. Oeste)', '6:00 AM', 'UTC-7'],
            ['Montaña (EE.UU. Centro)', '7:00 AM', 'UTC-6'],
            ['Central (EE.UU. Este)', '8:00 AM', 'UTC-5'],
            ['Este (EE.UU. Atlántico)', '9:00 AM', 'UTC-4'],
            ['Brasil', '10:00 AM', 'UTC-3'],
            ['Reino Unido', '2:00 PM', 'UTC+1'],
            ['Europa Central', '3:00 PM', 'UTC+2'],
            ['Turquía', '4:00 PM', 'UTC+3'],
            ['EAU / Golfo', '5:00 PM', 'UTC+4'],
            ['India', '6:30 PM', 'UTC+5:30'],
            ['China', '9:00 PM', 'UTC+8'],
            ['Japón / Corea del Sur', '10:00 PM', 'UTC+9'],
            ['Australia Este', '11:00 PM', 'UTC+10'],
            ['Nueva Zelanda', '1:00 AM (11 sep)', 'UTC+12'],
          ]),
        ],
      },
      {
        heading: 'Rastrea tu colección de Loot Hacker',
        blocks: [
          p('El rastreador de sprites de este sitio ha sido actualizado para reflejar el roster completo del 10 de septiembre. Los 15 sprites Loot Hacker — incluido Crown de la ola anterior del 3 de septiembre — ahora están marcados como disponibles en el catálogo.'),
          img('/sprites/loot-hacker-crown', 'Icono del sprite Loot Hacker Crown en el rastreador — Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('Para marcar un sprite como coleccionado, encuéntralo en la cuadrícula y toca el botón "Marcar Obtenido". Una vez que alcances el nivel de maestría correspondiente en el juego, toca el ícono de estrella para marcarlo como Dominado. Tu progreso se guarda localmente en tu navegador y se puede exportar como respaldo JSON en cualquier momento.'),
          p('El filtro de disponibilidad te permite alternar entre vistas de Todos, Disponibles y No Disponibles. Con el desbloqueo del 10 de septiembre, cada sprite Loot Hacker ahora cae en la categoría de Disponible. Cambia al Modo Caza para ver solo los sprites que aún no has coleccionado, ordenados por rareza.'),
        ],
      },
    ],
  },
  pt: {
    intro: `A Epic Games concluiu a implementação completa do elenco Loot Hacker da Temporada 4 do Capítulo 7 em 10 de setembro de 2026. Quatorze variantes de sprites que foram introduzidas silenciosamente no cliente v42.10 em 3 de setembro agora estão aparecendo nas partidas ao vivo. Se você estava esperando para completar sua coleção, aqui está tudo o que você precisa saber sobre cada sprite Loot Hacker, o que cada um faz e quando eles chegaram à sua região.`,
    sections: [
      {
        heading: 'O que são sprites Loot Hacker?',
        blocks: [
          img('/season-4-patch-timeline.svg', 'Cronograma de patches do Fortnite Capítulo 7 Temporada 4 mostrando a implementação de Loot Hacker em setembro de 2026', 720, 160),
          p('Loot Hacker é uma nova categoria de sprite companheiro introduzida na Temporada 4 do Capítulo 7. Diferente dos sprites padrão que representam um único companheiro base, as variantes Loot Hacker são entidades colecionáveis independentes: cada uma aparece separadamente e ocupa seu próprio espaço no rastreador. Elas compartilham um vínculo temático com um companheiro base, mas carregam uma habilidade separada ajustada para incursões de loot em alturas elevadas.'),
          p('O primeiro sprite Loot Hacker, Crown, foi ativado em 3 de setembro junto com o patch v42.10. As 14 variantes restantes foram mantidas nos arquivos do jogo até 10 de setembro, quando a Epic ligou a chave e as disponibilizou em todos os servidores. Todas agora podem ser encontradas no pool de loot atual.'),
        ],
      },
      {
        heading: 'Lista completa de sprites Loot Hacker com habilidades',
        blocks: [
          p('Existem 15 sprites Loot Hacker no total: dois Lendários, seis Épicos e sete Raros. Cada um aprimora uma mecânica específica de jogo vinculada ao seu companheiro base. Abaixo está o detalhamento completo com ícones de sprites, níveis de raridade e o que cada habilidade faz no nível máximo.'),
          h2('Sprites Loot Hacker Lendários'),
          img('/sprites/loot-hacker-xray', 'Ícone do sprite Loot Hacker X-Ray — raridade Lendária, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker X-Ray</strong> — Estende o raio de detecção de marcação de inimigos do companheiro X-Ray base. Em níveis mais altos, o pulso alcança mais distância, dando um alerta mais precoce de oponentes próximos.'),
          img('/sprites/loot-hacker-storm-scout', 'Ícone do sprite Loot Hacker Storm Scout — raridade Lendária, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Storm Scout</strong> — Afina a precisão de previsão do círculo de tempestade. À medida que você sobe de nível, a previsão se torna mais precisa, permitindo que você se posicione antes da próxima zona segura.'),
          h2('Sprites Loot Hacker Épicos'),
          img('/sprites/loot-hacker-klombo', 'Ícone do sprite Loot Hacker Klombo — raridade Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Klombo</strong> — Aumenta a qualidade dos itens obtidos de fontes de loot e acelera o uso de consumíveis. Uma escolha sólida para jogadores que dependem de ciclagem rápida de inventário.'),
          img('/sprites/loot-hacker-jackrabbit', 'Ícone do sprite Loot Hacker Jackrabbit — raridade Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Jackrabbit</strong> — Aumenta a altura do pulo e reduz o cooldown entre pulos. Útil para navegar o terreno montanhoso onde os sprites Loot Hacker tendem a aparecer.'),
          img('/sprites/loot-hacker-crown', 'Ícone do sprite Loot Hacker Crown — raridade Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Crown</strong> — Amplifica o bônus de progresso de vitória rastreado pelo companheiro Crown base. Cada nível adiciona uma porcentagem maior ao seu progresso de Coroa de Vitória.'),
          img('/sprites/loot-hacker-tails', 'Ícone do sprite Loot Hacker Tails — raridade Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Tails</strong> — Acelera a velocidade de voo. O companheiro Tails base já permite planar, e esta variante torna esse planeio notavelmente mais rápido em níveis altos.'),
          img('/sprites/loot-hacker-sonic', 'Ícone do sprite Loot Hacker Sonic — raridade Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Sonic</strong> — Melhora a velocidade de sprint. Acumular níveis se traduz em um sprint significativamente mais rápido, o que importa durante as rotações de círculo final.'),
          img('/sprites/loot-hacker-shadow', 'Ícone do sprite Loot Hacker Shadow — raridade Épica, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Shadow</strong> — Reduz o tempo de recarga de armas equipadas. Um buff sutil, mas impactante para combates sustentados.'),
          h2('Sprites Loot Hacker Raros'),
          img('/sprites/loot-hacker-8bit', 'Ícone do sprite Loot Hacker 8-Bit — raridade Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker 8-Bit</strong> — Multiplica sua produção de pontos. Útil para jogadores que buscam objetivos de alta pontuação ou desafios de temporada.'),
          img('/sprites/loot-hacker-bushranger', 'Ícone do sprite Loot Hacker Bushranger — raridade Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Bushranger</strong> — Aumenta a durabilidade do arbusto. Você fica oculto por mais tempo antes que a vegetação revele sua posição.'),
          img('/sprites/loot-hacker-adventure', 'Ícone do sprite Loot Hacker Adventure — raridade Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Adventure</strong> — Eleva a qualidade das melhorias. Quando você gasta recursos para aprimorar equipamento, este sprite inclina o resultado a seu favor.'),
          img('/sprites/loot-hacker-jonesy', 'Ícone do sprite Loot Hacker Jonesy — raridade Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Jonesy</strong> — Potencializa a quantidade de recuperação de vida. Itens de cura restauram mais HP por uso em níveis mais altos.'),
          img('/sprites/loot-hacker-overshield', 'Ícone do sprite Loot Hacker Overshield — raridade Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Overshield</strong> — Expande o buffer de escudo fornecido pelo companheiro Overshield base. Você começa cada confronto com uma camada protetora mais espessa.'),
          img('/sprites/loot-hacker-onigiri', 'Ícone do sprite Loot Hacker Onigiri — raridade Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Onigiri</strong> — Estende a duração de Overdrive após consumir um item. A rajada de velocidade dura mais tempo, dando mais oportunidades para se reposicionar.'),
          img('/sprites/loot-hacker-killswitch', 'Ícone do sprite Loot Hacker Killswitch — raridade Rara, Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('<strong>Loot Hacker Killswitch</strong> — Ajusta o bônus de precisão durante tiro mirado. Os disparos acertam com mais confiabilidade, especialmente em média distância.'),
        ],
      },
      {
        heading: 'Sistema de melhoria Loot Hack e Pó de Sprite',
        blocks: [
          p('Junto com o desbloqueio dos sprites, a Epic introduziu uma nova trilha de melhoria de Loot Hack. Acessível pelo menu de gerenciamento de sprites, este sistema permite que você gaste Pó de Sprite para melhorar suas chances de encontrar sprites Loot Hacker nas partidas.'),
          table('Níveis de melhoria do Loot Hack', ['Nível', 'Custo de Pó', 'Efeito'], [
            ['1', '50', 'Aumenta ligeiramente a chance de aparição de Loot Hacker'],
            ['2', '100', 'Impulso moderado na probabilidade'],
            ['3', '200', 'Taxa de encontro notavelmente maior'],
            ['4', '350', 'Sprites Raros de Loot Hacker aparecem com mais frequência'],
            ['5', '500', 'Variantes Épicas e Lendárias se encontram mais facilmente'],
            ['6', '750', 'Chance máxima — todos os níveis significativamente mais comuns'],
          ]),
          p('O Pó de Sprite é obtido através do jogo padrão: abrir baús, eliminar oponentes e completar desafios semanais contribuem. Se você estiver acumulando Pó desde o início da Temporada 4, agora é hora de gastá-lo.'),
        ],
      },
      {
        heading: 'Cronograma de lançamento regional',
        blocks: [
          table('Horários de ativação de Loot Hacker por região', ['Região', 'Horário Local', 'Offset UTC'], [
            ['Pacífico (EU Oeste)', '6:00 AM', 'UTC-7'],
            ['Montanha (EU Central)', '7:00 AM', 'UTC-6'],
            ['Central (EU Leste)', '8:00 AM', 'UTC-5'],
            ['Leste (EU Atlântico)', '9:00 AM', 'UTC-4'],
            ['Brasil', '10:00 AM', 'UTC-3'],
            ['Reino Unido', '2:00 PM', 'UTC+1'],
            ['Europa Central', '3:00 PM', 'UTC+2'],
            ['Turquia', '4:00 PM', 'UTC+3'],
            ['EAU / Golfo', '5:00 PM', 'UTC+4'],
            ['Índia', '6:30 PM', 'UTC+5:30'],
            ['China', '9:00 PM', 'UTC+8'],
            ['Japão / Coreia do Sul', '10:00 PM', 'UTC+9'],
            ['Austrália Leste', '11:00 PM', 'UTC+10'],
            ['Nova Zelândia', '1:00 AM (11 set)', 'UTC+12'],
          ]),
        ],
      },
      {
        heading: 'Rastreie sua coleção Loot Hacker',
        blocks: [
          p('O rastreador de sprites deste site foi atualizado para refletir o elenco completo de 10 de setembro. Os 15 sprites Loot Hacker — incluindo Crown da onda anterior de 3 de setembro — agora estão marcados como disponíveis no catálogo.'),
          img('/sprites/loot-hacker-overshield', 'Ícone do sprite Loot Hacker Overshield no rastreador — Fortnite Capítulo 7 Temporada 4', 128, 128),
          p('Para marcar um sprite como coleccionado, encontre-o na grade e toque no botão "Marcar Obtido". Quando atingir o nível de domínio correspondente no jogo, toque no ícone de estrela para marcá-lo como Dominado. Seu progresso é salvo localmente no navegador e pode ser exportado como backup JSON a qualquer momento.'),
          p('O filtro de disponibilidade permite alternar entre as visualizações de Todos, Disponíveis e Indisponíveis. Com o desbloqueio de 10 de setembro, cada sprite Loot Hacker agora se enquadra na categoria de Disponível. Mude para o Modo Caça para ver apenas os sprites que você ainda não coleccionou, ordenados por raridade.'),
        ],
      },
    ],
  },
  fr: {
    intro: `La Epic Games a finalisé le déploiement complet de la troupe Loot Hacker de la Saison 4 Chapitre 7 le 10 septembre 2026. Quatorze variantes de sprites qui ont été introduites silencieusement dans le client v42.10 le 3 septembre apparaissent désormais dans les parties en direct. Si vous attendiez pour compléter votre collection, voici tout ce que vous devez savoir sur chaque sprite Loot Hacker, ce que fait chacun et quand ils sont arrivés dans votre région.`,
    sections: [
      {
        heading: 'Quels sont les sprites Loot Hacker ?',
        blocks: [
          img('/season-4-patch-timeline.svg', 'Chronologie des correctifs Fortnite Chapitre 7 Saison 4 montrant le déploiement Loot Hacker en septembre 2026', 720, 160),
          p('Loot Hacker est une nouvelle catégorie de sprite compagnon introduite dans la Saison 4 Chapitre 7. Contrairement aux sprites standard qui représentent un seul compagnon de base, les variantes Loot Hacker sont des entités collectables indépendantes : chacune apparaît séparément et occupe son propre emplacement sur le tracker. Elles partagent un lien thématique avec un compagnon de base mais portent une capacité distincte adaptée aux courses de butin en haute altitude.'),
          p('Le premier sprite Loot Hacker, Crown, a été activé le 3 septembre avec le correctif v42.10. Les 14 variantes restantes ont été retenues dans les fichiers du jeu jusqu\'au 10 septembre, lorsque la Epic a actionné le commutateur et les a rendues disponibles sur tous les serveurs. Toutes sont désormais trouvables dans le pool de butin actuel.'),
        ],
      },
      {
        heading: 'Liste complète des sprites Loot Hacker avec leurs capacités',
        blocks: [
          p('Il y a 15 sprites Loot Hacker au total : deux Légendaires, six Épiques et sept Rares. Chacun améliore une mécanique de jeu spécifique liée à son compagnon de base. Voici le détail complet avec les icônes de sprites, les niveaux de rareté et ce que fait chaque capacité au niveau maximum.'),
          h2('Sprites Loot Hacker Légendaires'),
          img('/sprites/loot-hacker-xray', 'Icône du sprite Loot Hacker X-Ray — rareté Légendaire, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker X-Ray</strong> — Étend le rayon de détection de marquage des ennemis du compagnon X-Ray de base. Aux niveaux supérieurs, la pulsation atteint une distance plus grande, vous donnant une alerte plus précoce des adversaires à proximité.'),
          img('/sprites/loot-hacker-storm-scout', 'Icône du sprite Loot Hacker Storm Scout — rareté Légendaire, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Storm Scout</strong> — Affine la précision de prédiction du cercle de tempête. À mesure que vous montez en niveau, la prévision devient plus précise, vous permettant de vous positionner avant la prochaine zone sûre.'),
          h2('Sprites Loot Hacker Épiques'),
          img('/sprites/loot-hacker-klombo', 'Icône du sprite Loot Hacker Klombo — rareté Épique, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Klombo</strong> — Améliore la qualité des objets obtenus des sources de butin et accélère l\'utilisation des consommables. Un choix solide pour les joueurs qui comptent sur un recyclage rapide d\'inventaire.'),
          img('/sprites/loot-hacker-jackrabbit', 'Icône du sprite Loot Hacker Jackrabbit — rareté Épique, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Jackrabbit</strong> — Augmente la hauteur de saut et réduit le temps de recharge entre les sauts. Utile pour naviguer dans le terrain montagneux où les sprites Loot Hacker ont tendance à apparaître.'),
          img('/sprites/loot-hacker-crown', 'Icône du sprite Loot Hacker Crown — rareté Épique, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Crown</strong> — Amplifie le bonus de progression de victoire suivi par le compagnon Crown de base. Chaque niveau ajoute un pourcentage plus élevé à votre progression de Couronne de Victoire.'),
          img('/sprites/loot-hacker-tails', 'Icône du sprite Loot Hacker Tails — rareté Épique, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Tails</strong> — Accélère la vitesse de vol. Le compagnon Tails de base permet déjà de planer, et cette variante rend ce planer nettement plus rapide aux niveaux supérieurs.'),
          img('/sprites/loot-hacker-sonic', 'Icône du sprite Loot Hacker Sonic — rareté Épique, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Sonic</strong> — Améliore la vitesse de sprint. Accumuler des niveaux se traduit par un sprint nettement plus rapide, ce qui compte lors des rotations de cercle final.'),
          img('/sprites/loot-hacker-shadow', 'Icône du sprite Loot Hacker Shadow — rareté Épique, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Shadow</strong> — Réduit le temps de rechargement des armes équipées. Un buff subtil mais impactant pour les combats soutenus.'),
          h2('Sprites Loot Hacker Rares'),
          img('/sprites/loot-hacker-8bit', 'Icône du sprite Loot Hacker 8-Bit — rareté Rare, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker 8-Bit</strong> — Multiplie votre production de points. Utile pour les joueurs qui poursuivent des objectifs à haute score ou des défis saisonniers.'),
          img('/sprites/loot-hacker-bushranger', 'Icône du sprite Loot Hacker Bushranger — rareté Rare, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Bushranger</strong> — Augmente la durabilité du buisson. Vous restez caché plus longtemps avant que la végétation ne révèle votre position.'),
          img('/sprites/loot-hacker-adventure', 'Icône du sprite Loot Hacker Adventure — rareté Rare, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Adventure</strong> — Élève la qualité des mises à niveau. Lorsque vous dépensez des ressources pour améliorer l\'équipement, ce sprite incline le résultat en votre faveur.'),
          img('/sprites/loot-hacker-jonesy', 'Icône du sprite Loot Hacker Jonesy — rareté Rare, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Jonesy</strong> — Renforce la quantité de récupération de vie. Les objets de soin restaurent plus de PV par utilisation aux niveaux supérieurs.'),
          img('/sprites/loot-hacker-overshield', 'Icône du sprite Loot Hacker Overshield — rareté Rare, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Overshield</strong> — Étend le bouclier tampon fourni par le compagnon Overshield de base. Vous commencez chaque affrontement avec une couche protectrice plus épaisse.'),
          img('/sprites/loot-hacker-onigiri', 'Icône du sprite Loot Hacker Onigiri — rareté Rare, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Onigiri</strong> — Prolonge la durée d\'Overdrive après avoir consommé un objet. La rafale de vitesse dure plus longtemps, donnant plus de temps pour se repositionner.'),
          img('/sprites/loot-hacker-killswitch', 'Icône du sprite Loot Hacker Killswitch — rareté Rare, Fortnite Chapitre 7 Saison 4', 128, 128),
          p('<strong>Loot Hacker Killswitch</strong> — Ajuste le bonus de précision lors du tir ciblé. Les coups atterrissent avec plus de fiabilité, surtout à moyenne portée.'),
        ],
      },
      {
        heading: 'Système d\'amélioration Loot Hack et Poussière de Sprite',
        blocks: [
          p('Avec le déblocage des sprites, la Epic a introduit une nouvelle piste d\'amélioration Loot Hack. Accessible depuis le menu de gestion des sprites, ce système vous permet de dépenser de la Poussière de Sprite pour améliorer vos chances de trouver des sprites Loot Hacker en partie.'),
          table('Niveaux d\'amélioration Loot Hack', ['Niveau', 'Coût en Poussière', 'Effet'], [
            ['1', '50', 'Augmente légèrement la chance d\'apparition de Loot Hacker'],
            ['2', '100', 'Boost modéré de la probabilité'],
            ['3', '200', 'Taux de rencontre nettement plus élevé'],
            ['4', '350', 'Les sprites Rares Loot Hacker apparaissent plus fréquemment'],
            ['5', '500', 'Les variantes Épiques et Légendaires se trouvent plus facilement'],
            ['6', '750', 'Chance maximale — tous les niveaux nettement plus communs'],
          ]),
          p('La Poussière de Sprite est obtenue par le jeu standard : ouvrir des coffres, éliminer des adversaires et compléter des défis hebdomadaires y contribuent. Si vous avez accumulé de la Poussière depuis le début de la Saison 4, c\'est le moment de la dépenser.'),
        ],
      },
      {
        heading: 'Calendrier de sortie par région',
        blocks: [
          table('Horaires d\'activation Loot Hacker par région', ['Région', 'Heure locale', 'Décalage UTC'], [
            ['Pacifique (US Ouest)', '6h00', 'UTC-7'],
            ['Montagne (US Central)', '7h00', 'UTC-6'],
            ['Central (US Est)', '8h00', 'UTC-5'],
            ['Est (US Atlantique)', '9h00', 'UTC-4'],
            ['Brésil', '10h00', 'UTC-3'],
            ['Royaume-Uni', '14h00', 'UTC+1'],
            ['Europe centrale', '15h00', 'UTC+2'],
            ['Turquie', '16h00', 'UTC+3'],
            ['EAU / Golfe', '17h00', 'UTC+4'],
            ['Inde', '18h30', 'UTC+5:30'],
            ['Chine', '21h00', 'UTC+8'],
            ['Japon / Corée du Sud', '22h00', 'UTC+9'],
            ['Australie Est', '23h00', 'UTC+10'],
            ['Nouvelle-Zélande', '1h00 (11 sep)', 'UTC+12'],
          ]),
        ],
      },
      {
        heading: 'Suivez votre collection Loot Hacker',
        blocks: [
          p('Le tracker de sprites de ce site a été mis à jour pour refléter la troupe complète du 10 septembre. Les 15 sprites Loot Hacker — y compris Crown de la vague précédente du 3 septembre — sont désormais marqués comme disponibles dans le catalogue.'),
          img('/sprites/loot-hacker-xray', 'Icône du sprite Loot Hacker X-Ray sur le tracker — Fortnite Chapitre 7 Saison 4', 128, 128),
          p('Pour marquer un sprite comme collecté, trouvez-le dans la grille et appuyez sur le bouton « Marquer Possédé ». Une fois que vous avez atteint le niveau de maîtrise correspondant en jeu, appuyez sur l\'icône étoile pour le marquer comme Maîtrisé. Votre progression est sauvegardée localement dans votre navigateur et peut être exportée en JSON à tout moment.'),
          p('Le filtre de disponibilité vous permet de basculer entre les vues Tous, Disponibles et Indisponibles. Avec le déblocage du 10 septembre, chaque sprite Loot Hacker se classe désormais dans la catégorie Disponible. Passez en Mode Chasse pour ne voir que les sprites que vous n\'avez pas encore collectés, triés par rareté.'),
        ],
      },
    ],
  },
};

const contentMap: Record<string, Record<Locale, PostContent>> = {
  'september-10-loot-hacker-release': sept10Release,
  'how-to-track-sprites': howToTrack,
  'hunt-mode-guide': huntMode,
  'compare-lockers': compareLockers,
  'cheat-codes-guide': cheatCodes,
  'season-archives': seasonArchives,
};

export function getBlogPostContent(slug: string, locale: Locale): PostContent | undefined {
  return contentMap[slug]?.[locale];
}

export type { PostContent, ContentBlock };
