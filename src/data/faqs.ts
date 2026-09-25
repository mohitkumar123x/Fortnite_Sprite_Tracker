import type { Locale } from '../lib/i18n';

export type FaqItem = {
  question: string;
  answer: string;
};

const seoFaqsByLocale: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: 'What is the point of Sprite in Fortnite?',
      answer:
        '<p>Sprites are collectible companions in Fortnite Battle Royale. Find one, extract it before the match ends, and it stays unlocked so you can summon it later with Sprite Dust. Each Sprite adds a passive ability (mobility, healing, loot, reload, and more) that can level up. Variants such as Gold or Cheat Master are extra collectibles on top of the base Sprite. Use this Fortnite Sprite Tracker checklist to mark Owned and Mastered.</p>',
    },
    {
      question: 'What does Fortnite Tracker do?',
      answer:
        '<p>Many people mean stats sites (KD, wins, rank) when they say Fortnite Tracker. This Fortnite Sprite Tracker is different: it is a free online checklist for Sprite companions — Owned, Mastered, Hunt Mode, share links, JSON backup, and season archives (including Batman). It does not log into Epic, does not show match history, and does not unlock Sprites in-game. It only tracks the collection you mark.</p>',
    },
    {
      question: 'Is the Fortnite tracker safe?',
      answer:
        '<p>This Fortnite Sprite Tracker website stores progress in your browser (localStorage). There is no Epic account, no password, and no cloud login in v1. Share codes only contain checklist bits you copy yourself. It is unofficial and cannot change your Fortnite locker. Avoid any third-party tool that asks for your Epic password. We do not sell accounts or inject into the game client.</p>',
    },
    {
      question: 'What are some Sprites in Fortnite?',
      answer:
        '<p>Chapter 7 Season 4 (Override) includes Bush, Adventure, 8-Bit, Jonesy, Killswitch, Sonic, Tails, Shadow, Jackrabbit, Crown, and Klombo — each with Normal, Gold, and Cheat Master variants. Season 3 archives include companions such as Air, Aura, Batman, and others with Gummy, Galaxy, Gem, Holofoil, Cube, and Quack treatments. Browse the full Fortnite Sprite Tracker list on the Sprites page.</p>',
    },
    {
      question: 'Are Fortnite Sprites rare?',
      answer:
        '<p>Yes. Season 4 uses Rare, Epic, Legendary, and Mythic tiers. Mythic Sprites (Crown, Klombo) and premium variants (Gold, Cheat Master) are harder to see in chests than Normal Rare drops. Some variants also have low community ownership. This tracker’s rarity filters and Hunt Mode help you chase scarce ones without mixing them up with common Normal copies.</p>',
    },
    {
      question: 'Why are they called Sprites in Fortnite?',
      answer:
        '<p>Epic named these small companion creatures Sprites — like a familiar or pet that follows you and grants a passive. The word fits the playful, elemental, and collab-character art. It is not the same as a computer-graphics sprite (a 2D image). On this site, Sprite always means the Fortnite collectible companion.</p>',
    },
    {
      question: 'Where can I find Sprites in Fortnite?',
      answer:
        '<p>Most Chapter 7 Sprites drop from chests and supply drops, not fixed map spots. Grab the Sprite, then extract before the match ends. Gold, Cheat Master, and older treatments (Gummy, Galaxy, and similar) are found the same way as the Normal version. Use Hunt Mode on this Fortnite Sprite Tracker to see which variants you still need before you drop.</p>',
    },
    {
      question: 'What are the top 5 best Sprites in Fortnite?',
      answer:
        '<p>Best depends on your loadout. A practical Season 4 shortlist: (1) Jackrabbit — extra mid-air jump; (2) Tails — hover after double jump; (3) Sonic — sprint speed; (4) Shadow — auto-reload on stowed guns; (5) Jonesy — delayed heal after damage. Crown is excellent if you win often; Klombo is strong for loot if you can feed it. Mark what you own on the Fortnite Sprite Tracker chart instead of chasing a single meta-only list.</p>',
    },
    {
      question: 'What are the top 10 hardest sprites to find in Fortnite?',
      answer:
        '<p>Hardest usually means Mythic bases plus scarce variants, not a secret spawn. A realistic hard-to-complete list: Crown (Mythic), Klombo (Mythic), Jackrabbit (Legendary), Gold Crown, Cheat Master Crown, Gold Klombo, Cheat Master Klombo, Cheat Master Jackrabbit, Gold Shadow or Gold Sonic (collab Epics), and leftover Season 3 treatments such as Galaxy or Holofoil Batman that no longer drop live. Unreleased rows are rarer still. Tick Hunt Mode so the board only shows what you still need.</p>',
    },
    {
      question: 'How can I design a Sprite for Fortnite?',
      answer:
        '<p>You cannot upload a custom Sprite into live Fortnite through this site or any unofficial tracker. Epic owns the companion roster. You can still concept-art a Sprite for fun (silhouette, ability, variant colors) and share it as fan art. Official additions come from Epic and collabs only. Use this Fortnite Sprite Tracker as a checklist for official Sprites, not as a design submission tool.</p>',
    },
    {
      question: 'How do Fortnite Sprites work?',
      answer:
        '<p>Find a Sprite in a chest or supply drop, then extract it before the match ends to keep it permanently. Summon it later with Sprite Dust. Each Sprite has a passive that levels up — often to level 5 for mastery. Crown levels from wins; Klombo levels by consuming items. Variants are separate collectibles. This Fortnite Sprite Tracker checklist stores Owned (extracted) and Mastered (typically level 5) in your browser.</p>',
    },
  ],
  de: [
    {
      question: 'Wozu gibt es Sprites in Fortnite?',
      answer:
        '<p>Sprites sind sammelbare Begleiter in Fortnite Battle Royale. Finde einen, extrahiere ihn, bevor die Partie endet, und er bleibt freigeschaltet, sodass du ihn später mit Sprite-Dust beschwören kannst. Jeder Sprite bringt eine passive Fähigkeit mit (Bewegung, Heilung, Beute, Nachladen und mehr), die mit dem Level aufsteigt. Varianten wie Gold oder Cheat Master sind zusätzliche Sammelobjekte obendrauf. Nutze diese Fortnite-Sprite-Tracker-Checkliste, um Gesammeltes und Meistertes zu markieren.</p>',
    },
    {
      question: 'Was macht der Fortnite Sprite Tracker?',
      answer:
        '<p>Wenn viele von „Fortnite Tracker“ sprechen, meinen sie Statistik-Seiten (KD, Siege, Rang). Dieser Fortnite Sprite Tracker ist etwas anderes: eine kostenlose Online-Checkliste für Sprite-Begleiter — Gesammelt, Meistert, Jagdmodus, Share-Links, JSON-Sicherung und Season-Archive (inklusive Batman). Er meldet sich nicht bei Epic an, zeigt keine Partienhistorie und schaltet keine Sprites im Spiel frei. Er erfasst nur die Sammlung, die du markierst.</p>',
    },
    {
      question: 'Ist der Fortnite Sprite Tracker sicher?',
      answer:
        '<p>Diese Fortnite-Sprite-Tracker-Website speichert deinen Fortschritt im Browser (localStorage). Es gibt kein Epic-Konto, kein Passwort und keinen Cloud-Login in v1. Share-Codes enthalten nur die Checklisten-Angaben, die du selbst kopierst. Das Projekt ist inoffiziell und kann deinen Fortnite-Locker nicht verändern. Meide jedes Drittanbieter-Werkzeug, das dein Epic-Passwort verlangt. Wir verkaufen keine Konten und injizieren nichts in den Spielclient.</p>',
    },
    {
      question: 'Welche Sprites gibt es in Fortnite?',
      answer:
        '<p>Kapitel 7 Season 4 (Override) umfasst Bush, Adventure, 8-Bit, Jonesy, Killswitch, Sonic, Tails, Shadow, Jackrabbit, Crown und Klombo — jeweils mit Normal-, Gold- und Cheat-Master-Varianten. Das Season-3-Archiv enthält Begleiter wie Air, Aura, Batman und weitere mit Gummy-, Galaxy-, Gem-, Holofoil-, Cube- und Quack-Varianten. Durchsuche die vollständige Fortnite-Sprite-Tracker-Liste auf der Sprite-Seite.</p>',
    },
    {
      question: 'Sind Sprites in Fortnite selten?',
      answer:
        '<p>Ja. Season 4 nutzt die Stufen Selten, Episch, Legendär und Mythisch. Mythische Sprites (Crown, Klombo) und Premium-Varianten (Gold, Cheat Master) sind in Truhen seltener als gewöhnliche seltene Drops. Manche Varianten haben zudem eine geringe Community-Besitzquote. Die Seltenheitsfilter und der Jagdmodus dieses Trackers helfen dir, seltene zu jagen, ohne sie mit gewöhnlichen Normal-Kopien zu verwechseln.</p>',
    },
    {
      question: 'Warum heißen sie in Fortnite Sprites?',
      answer:
        '<p>Epic hat diese kleinen Begleiterwesen „Sprites“ genannt — wie ein Familiar oder Haustier, das dir folgt und dir etwas Passives gewährt. Der Begriff passt zur verspielten, elementaren und Kollab-Figuren-Grafik. Er ist nicht dasselbe wie ein Sprite in der Computergrafik (ein 2D-Bild). Auf dieser Seite bedeutet Sprite immer den sammelbaren Fortnite-Begleiter.</p>',
    },
    {
      question: 'Wo finde ich Sprites in Fortnite?',
      answer:
        '<p>Die meisten Kapitel-7-Sprites fallen aus Truhen und Versorgungsdrops, nicht aus festen Kartenpunkten. Schnapp dir den Sprite und extrahiere ihn, bevor die Partie endet. Gold-, Cheat-Master- und ältere Varianten (Gummy, Galaxy und Ähnliches) findest du genauso wie die Normale. Nutze den Jagdmodus in diesem Fortnite Sprite Tracker, um zu sehen, welche Varianten dir noch fehlen, bevor du abspringst.</p>',
    },
    {
      question: 'Was sind die 5 besten Sprites in Fortnite?',
      answer:
        '<p>Das hängt von deinem Loadout ab. Eine praktische Kurzliste für Season 4: (1) Jackrabbit — zusätzlicher Sprung in der Luft; (2) Tails — Schweben nach dem Doppelsprung; (3) Sonic — Sprintgeschwindigkeit; (4) Shadow — automatisches Nachladen eingepackter Waffen; (5) Jonesy — verzögerte Heilung nach Schaden. Crown ist stark, wenn du oft gewinnst; Klombo ist bei Beute stark, wenn du ihn füttern kannst. Markiere, was du besitzt, in der Fortnite-Sprite-Tracker-Übersicht, statt einer einzigen Meta-Liste hinterherzujagen.</p>',
    },
    {
      question: 'Was sind die 10 schwersten Sprites in Fortnite?',
      answer:
        '<p>„Am schwersten“ meint normalerweise mythische Basis-Sprites plus seltene Varianten, nicht einen geheimen Spawn. Eine realistische, schwer zu vollendende Liste: Crown (mythisch), Klombo (mythisch), Jackrabbit (legendär), Gold-Crown, Cheat-Master-Crown, Gold-Klombo, Cheat-Master-Klombo, Cheat-Master-Jackrabbit, Gold-Shadow oder Gold-Sonic (Kollab-Epics) sowie übrige Season-3-Varianten wie Galaxy- oder Holofoil-Batman, die nicht mehr live fallen. Noch nicht erhältliche Zeilen sind noch seltener. Aktiviere den Jagdmodus, damit das Board nur zeigt, was dir noch fehlt.</p>',
    },
    {
      question: 'Wie kann ich einen Sprite für Fortnite entwerfen?',
      answer:
        '<p>Du kannst über diese Seite oder einen beliebigen inoffiziellen Tracker keinen eigenen Sprite ins live Fortnite hochladen. Epic besitzt das Begleiter-Line-up. Du kannst einen Sprite als Concept-Art gestalten (Silhouette, Fähigkeit, Variantenfarben) und ihn als Fan-Art teilen. Offizielle Ergänzungen kommen nur von Epic und Kollabs. Nutze diesen Fortnite Sprite Tracker als Checkliste für offizielle Sprites, nicht als Einreichungswerkzeug für eigene Designs.</p>',
    },
    {
      question: 'Wie funktionieren Sprites in Fortnite?',
      answer:
        '<p>Finde einen Sprite in einer Truhe oder einem Versorgungsdrop und extrahiere ihn vor dem Ende der Partie, um ihn dauerhaft zu behalten. Beschwöre ihn später mit Sprite-Dust. Jeder Sprite hat eine passive Fähigkeit, die mit dem Level aufsteigt — oft bis Level 5 für die Meisterschaft. Crown steigt durch Siege auf; Klombo durch das Verbrauchen von Gegenständen. Varianten sind eigene Sammelobjekte. Diese Fortnite-Sprite-Tracker-Checkliste speichert „Gesammelt“ (extrahiert) und „Meistert“ (in der Regel Level 5) in deinem Browser.</p>',
    },
  ],
  es: [
    {
      question: '¿Para qué sirven los Sprites en Fortnite?',
      answer:
        '<p>Los Sprites son compañeros coleccionables en Fortnite Battle Royale. Encuentra uno, extráelo antes de que termine la partida y quedará desbloqueado para invocarlo más tarde con Polvo de Sprite. Cada Sprite añade una habilidad pasiva (movilidad, curación, botín, recarga, etc.) que sube de nivel. Usa esta lista del Fortnite Sprite Tracker para marcar Obtenidos y Dominados.</p>',
    },
    {
      question: '¿Qué hace el Fortnite Sprite Tracker?',
      answer:
        '<p>Muchos se refieren a sitios de estadísticas de partidas. Este Fortnite Sprite Tracker es diferente: es una lista de verificación gratuita para tus Sprites (Obtenidos, Dominados, modo Caza, respaldos JSON y archivos de temporadas). No requiere iniciar sesión en Epic Games ni modifica tu cuenta.</p>',
    },
    {
      question: '¿Es seguro el Fortnite Sprite Tracker?',
      answer:
        '<p>Sí. Este sitio guarda tu progreso localmente en tu navegador (localStorage). No solicita contraseñas ni datos de Epic Games. Es un proyecto no oficial y seguro para seguir tu colección.</p>',
    },
    {
      question: '¿Cuáles son algunos Sprites en Fortnite?',
      answer:
        '<p>En el Capítulo 7 Temporada 4 se incluyen Bush, Adventure, 8-Bit, Jonesy, Killswitch, Sonic, Tails, Shadow, Jackrabbit, Crown y Klombo, con variantes Normal, Oro y Maestro de Trucos. En los archivos de la Temporada 3 se incluyen Batman, Air, Aura y más.</p>',
    },
    {
      question: '¿Son raros los Sprites en Fortnite?',
      answer:
        '<p>Sí. Tienen niveles de rareza Rara, Épica, Legendaria y Mítica. Los Sprites Míticos (Crown, Klombo) y variantes especiales son más difíciles de obtener en cofres.</p>',
    },
    {
      question: '¿Por qué se llaman Sprites en Fortnite?',
      answer:
        '<p>Epic nombró a estas criaturas acompañantes "Sprites" como espíritus o duendes que te otorgan habilidades pasivas en el juego.</p>',
    },
    {
      question: '¿Dónde se encuentran los Sprites en Fortnite?',
      answer:
        '<p>La mayoría aparecen en cofres y entregas de suministros durante las partidas. Debes extraerlos antes de que finalice la partida para conservarlos.</p>',
    },
    {
      question: '¿Cuáles son los 5 mejores Sprites en Fortnite?',
      answer:
        '<p>Depende de tu estilo de juego: (1) Jackrabbit para doble salto aéreo; (2) Tails para planeo; (3) Sonic para velocidad de esprint; (4) Shadow para autorrecarga; (5) Jonesy para curación tras recibir daño.</p>',
    },
    {
      question: '¿Cuáles son los 10 Sprites más difíciles de conseguir?',
      answer:
        '<p>Los Míticos y variantes de edición limitada: Crown, Klombo, Jackrabbit, Crown Oro, Crown Maestro de Trucos, Klombo Oro, Klombo Maestro de Trucos, Jackrabbit Maestro de Trucos, y variantes exclusivas de la Temporada 3 como Batman Holográfico o Galaxia.</p>',
    },
    {
      question: '¿Cómo puedo diseñar un Sprite para Fortnite?',
      answer:
        '<p>Los Sprites son creados oficialmente por Epic Games y sus colaboraciones. Puedes diseñar fan art o conceptos e ideas para la comunidad.</p>',
    },
    {
      question: '¿Cómo funcionan los Sprites en Fortnite?',
      answer:
        '<p>Encuentra un Sprite en un cofre, extráelo antes de que termine la partida para guardarlo permanentemente e invócalo con Polvo de Sprite. Cada uno otorga habilidades pasivas que aumentan de nivel.</p>',
    },
  ],
  pt: [
    {
      question: 'Para que servem os Sprites no Fortnite?',
      answer:
        '<p>Os Sprites são companheiros colecionáveis no Fortnite Battle Royale. Encontre um, extraia-o antes da partida terminar e ele permanecerá desbloqueado para invocá-lo mais tarde com Pó de Sprite. Cada Sprite concede uma habilidade passiva que sobe de nível. Use este Fortnite Sprite Tracker para marcar Obtidos e Dominados.</p>',
    },
    {
      question: 'O que faz o Fortnite Sprite Tracker?',
      answer:
        '<p>Muitos pensam em sites de estatísticas. Este Fortnite Sprite Tracker é diferente: é uma lista gratuita para seus Sprites (Obtidos, Dominados, modo Caça, backups JSON e arquivos de temporadas). Não requer login na Epic Games e não altera sua conta.</p>',
    },
    {
      question: 'O Fortnite Sprite Tracker é seguro?',
      answer:
        '<p>Sim. Este site salva seu progresso localmente no navegador (localStorage). Não pede senhas nem dados da Epic Games. É um projeto não oficial e seguro para acompanhar sua coleção.</p>',
    },
    {
      question: 'Quais são alguns Sprites no Fortnite?',
      answer:
        '<p>No Capítulo 7 Temporada 4 estão incluídos Bush, Adventure, 8-Bit, Jonesy, Killswitch, Sonic, Tails, Shadow, Jackrabbit, Crown e Klombo, com variantes Normal, Ouro e Mestre de Trapaça. O arquivo da Temporada 3 inclui Batman, Air, Aura e mais.</p>',
    },
    {
      question: 'Os Sprites no Fortnite são raros?',
      answer:
        '<p>Sim. Existem níveis Rara, Épica, Lendária e Mítica. Sprites Míticos (Crown, Klombo) e variantes especiais são mais raros em baús.</p>',
    },
    {
      question: 'Por que se chamam Sprites no Fortnite?',
      answer:
        '<p>A Epic chamou essas criaturas companheiras de "Sprites" como familiares ou espíritos que concedem habilidades passivas no jogo.</p>',
    },
    {
      question: 'Onde encontrar Sprites no Fortnite?',
      answer:
        '<p>A maioria aparece em baús e suprimentos durante as partidas. Você deve extraí-los antes da partida terminar para mantê-los.</p>',
    },
    {
      question: 'Quais são os 5 melhores Sprites no Fortnite?',
      answer:
        '<p>Depende do seu estilo: (1) Jackrabbit para pulo aéreo extra; (2) Tails para flutuação; (3) Sonic para velocidade; (4) Shadow para autorecarga; (5) Jonesy para cura após dano.</p>',
    },
    {
      question: 'Quais são os 10 Sprites mais difíceis de encontrar?',
      answer:
        '<p>Os Míticos e variantes limitadas: Crown, Klombo, Jackrabbit, Crown Ouro, Crown Mestre de Trapaça, Klombo Ouro, Klombo Mestre de Trapaça, Jackrabbit Mestre de Trapaça, e variantes antigas da Temporada 3 como Batman Holográfico ou Galáxia.</p>',
    },
    {
      question: 'Como posso criar um Sprite para o Fortnite?',
      answer:
        '<p>Os Sprites são criados oficialmente pela Epic Games e suas colaborações. Você pode criar fan arts e conceitos para compartilhar na comunidade.</p>',
    },
    {
      question: 'Como funcionam os Sprites no Fortnite?',
      answer:
        '<p>Encontre um Sprite em um baú, extraia-o antes do fim da partida para guardá-lo permanentemente e invoque-o com Pó de Sprite. Cada um concede habilidades passivas que sobem de nível.</p>',
    },
  ],
  fr: [
    {
      question: 'À quoi servent les Sprites dans Fortnite ?',
      answer:
        '<p>Les Sprites sont des compagnons collectables dans Fortnite Battle Royale. Trouvez-en un, extrayez-le avant la fin de la partie et il restera déverrouillé pour l\'invoquer plus tard avec la Poussière de Sprite. Chaque Sprite confère une capacité passivate qui monte en niveau. Utilisez cette liste du Fortnite Sprite Tracker pour marquer les Possédés et Maîtrisés.</p>',
    },
    {
      question: 'Que fait le Fortnite Sprite Tracker ?',
      answer:
        '<p>Beaucoup pensent aux sites de statistiques de parties. Ce Fortnite Sprite Tracker est différent : c\'est une liste gratuite pour vos Sprites (Possédés, Maîtrisés, Mode Chasse, sauvegardes JSON et archives de saisons). Il ne nécessite pas de connexion Epic Games et ne modifie pas votre compte.</p>',
    },
    {
      question: 'Le Fortnite Sprite Tracker est-il sûr ?',
      answer:
        '<p>Oui. Ce site enregistre votre progression localement dans votre navigateur (localStorage). Il ne demande pas de mot de passe ni de données Epic Games. C\'est un projet non officiel et sûr pour suivre votre collection.</p>',
    },
    {
      question: 'Quels sont quelques Sprites dans Fortnite ?',
      answer:
        '<p>Le Chapitre 7 Saison 4 comprend Bush, Adventure, 8-Bit, Jonesy, Killswitch, Sonic, Tails, Shadow, Jackrabbit, Crown et Klombo, avec les variantes Normal, Or et Maître de la Triche. L\'archive de la Saison 3 comprend Batman, Air, Aura et plus.</p>',
    },
    {
      question: 'Les Sprites dans Fortnite sont-ils rares ?',
      answer:
        '<p>Oui. Il existe des niveaux Rare, Épique, Légendaire et Mythique. Les Sprites Mythiques (Crown, Klombo) et les variantes spéciales sont plus rares dans les coffres.</p>',
    },
    {
      question: 'Pourquoi sont-ils appelés Sprites dans Fortnite ?',
      answer:
        '<p>Epic a nommé ces créatures compagnons "Sprites" comme des familiers ou des esprits qui confèrent des capacités passives dans le jeu.</p>',
    },
    {
      question: 'Où trouver des Sprites dans Fortnite ?',
      answer:
        '<p>La plupart apparaissent dans les coffres et les livraisons de ravitaillement pendant les parties. Vous devez les extraire avant la fin de la partie pour les conserver.</p>',
    },
    {
      question: 'Quels sont les 5 meilleurs Sprites dans Fortnite ?',
      answer:
        '<p>Cela dépend de votre style : (1) Jackrabbit pour le double saut aérien ; (2) Tails pour la flottaison ; (3) Sonic pour la vitesse ; (4) Shadow pour le rechargement automatique ; (5) Jonesy pour la guérison après les dégâts.</p>',
    },
    {
      question: 'Quels sont les 10 Sprites les plus difficiles à trouver ?',
      answer:
        '<p>Les Mythiques et les variantes limitées : Crown, Klombo, Jackrabbit, Crown Or, Crown Maître de la Triche, Klombo Or, Klombo Maître de la Triche, Jackrabbit Maître de la Triche, et les variantes anciennes de la Saison 3 comme Batman Holographique ou Galaxie.</p>',
    },
    {
      question: 'Comment puis-je créer un Sprite pour Fortnite ?',
      answer:
        '<p>Les Sprites sont créés officiellement par Epic Games et leurs collaborations. Vous pouvez créer des fan arts et des concepts pour partager avec la communauté.</p>',
    },
    {
      question: 'Comment fonctionnent les Sprites dans Fortnite ?',
      answer:
        '<p>Trouvez un Sprite dans un coffre, extrayez-le avant la fin de la partie pour le conserver définitivement et invoquez-le avec la Poussière de Sprite. Chacun confère des capacités passives qui montent en niveau.</p>',
    },
  ],
};

const trackerFaqsByLocale: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: 'What does Owned vs Mastered mean on this Fortnite Sprite Tracker?',
      answer:
        '<p>Owned means you extracted that exact sprite and variant. Mastered is a separate mark for taking a sprite to level 5 (and extracting when required). The checklist records both so you can chase completion and mastery separately.</p>',
    },
    {
      question: 'Does this Fortnite Sprite Tracker website need an account?',
      answer:
        '<p>No. Progress is stored in your browser (localStorage). Use Export JSON or a share link to move progress. There is no Epic login and no cloud sync in v1.</p>',
    },
    {
      question: 'Can I print the Fortnite Sprite Tracker checklist?',
      answer:
        '<p>Filter to Missing, then use your browser print dialog for a printable sheet. You can also copy a share link instead of sending a locker screenshot.</p>',
    },
  ],
  de: [
    {
      question: 'Was bedeuten „Gesammelt“ und „Meistert“ in diesem Fortnite Sprite Tracker?',
      answer:
        '<p>„Gesammelt“ bedeutet, dass du genau diesen Sprite und diese Variante extrahiert hast. „Meistert“ ist eine eigene Markierung für einen Sprite, den du auf Level 5 gebracht hast (und den du bei Bedarf zusätzlich extrahiert hast). Die Checkliste hält beides fest, damit du Vervollständigung und Meisterschaft getrennt verfolgen kannst.</p>',
    },
    {
      question: 'Braucht diese Fortnite-Sprite-Tracker-Website ein Konto?',
      answer:
        '<p>Nein. Der Fortschritt wird in deinem Browser (localStorage) gespeichert. Nutze „JSON exportieren“ oder einen Share-Link, um Fortschritt zu übertragen. Es gibt keinen Epic-Login und keine Cloud-Synchronisierung in v1.</p>',
    },
    {
      question: 'Kann ich die Fortnite-Sprite-Tracker-Checkliste ausdrucken?',
      answer:
        '<p>Filtere auf „Fehlend“ und nutze dann den Druckdialog deines Browsers für ein druckbares Blatt. Alternativ kannst du einen Share-Link kopieren, statt einen Locker-Screenshot zu senden.</p>',
    },
  ],
  es: [
    {
      question: '¿Qué significa Obtenido vs Dominado en Fortnite Sprite Tracker?',
      answer:
        '<p>Obtenido significa que extrajiste ese sprite y variante. Dominado es una marca independiente para cuando lo llevas al nivel 5. La lista registra ambos para que sigas tu progreso.</p>',
    },
    {
      question: '¿Se necesita una cuenta para usar este sitio?',
      answer:
        '<p>No. El progreso se guarda en tu navegador (localStorage). Puedes exportar JSON o compartir tu enlace.</p>',
    },
    {
      question: '¿Puedo imprimir la lista de verificación?',
      answer:
        '<p>Filtra por Faltantes y usa la función de imprimir de tu navegador para obtener una hoja imprimible.</p>',
    },
  ],
  pt: [
    {
      question: 'O que significa Obtido vs Dominado no Fortnite Sprite Tracker?',
      answer:
        '<p>Obtido significa que você extraiu aquele sprite e variante. Dominado é uma marca separada para quando você o leva ao nível 5. A lista registra ambos para você acompanhar seu progresso.</p>',
    },
    {
      question: 'Precisa de uma conta para usar este site?',
      answer:
        '<p>Não. O progresso é salvo no seu navegador (localStorage). Você pode exportar JSON ou compartilhar seu link.</p>',
    },
    {
      question: 'Posso imprimir a lista de verificação?',
      answer:
        '<p>Filtre por Faltando e use a opção de imprimir do navegador para obter uma folha para impressão.</p>',
    },
  ],
  fr: [
    {
      question: 'Que signifie Possédé vs Maîtrisé sur ce Fortnite Sprite Tracker ?',
      answer:
        '<p>Possédé signifie que vous avez extrait ce sprite et cette variante. Maîtrisé est une marque distincte pour quand vous amenez un sprite au niveau 5. La liste enregistre les deux pour que vous puissiez suivre votre progression.</p>',
    },
    {
      question: 'Ce site nécessite-t-il un compte ?',
      answer:
        '<p>Non. La progression est enregistrée dans votre navigateur (localStorage). Vous pouvez exporter le JSON ou partager votre lien.</p>',
    },
    {
      question: 'Puis-je imprimer la liste de vérification ?',
      answer:
        '<p>Filtrez par Manquants puis utilisez la fonction d\'impression de votre navigateur pour obtenir une feuille imprimable.</p>',
    },
  ],
};

export const seoFaqs = seoFaqsByLocale.en;

export function getSeoFaqs(locale: Locale = 'en'): FaqItem[] {
  return seoFaqsByLocale[locale] ?? seoFaqsByLocale.en;
}

export function getTrackerFaqs(locale: Locale = 'en'): FaqItem[] {
  return trackerFaqsByLocale[locale] ?? trackerFaqsByLocale.en;
}

export function getAllFaqs(locale: Locale = 'en'): FaqItem[] {
  return [...getSeoFaqs(locale), ...getTrackerFaqs(locale)];
}

export function faqPageJsonLd(items: FaqItem[] = seoFaqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
