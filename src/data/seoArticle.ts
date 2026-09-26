import type { Locale } from '../lib/i18n';

export type SeoArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ol'; items: string[] };

export type SeoArticleContent = {
  eyebrow: string;
  headline: string;
  updatedLabel: string;
  updatedIso: string;
  blocks: SeoArticleBlock[];
};

const p = (text: string): SeoArticleBlock => ({ type: 'p', text });
const h3 = (text: string): SeoArticleBlock => ({ type: 'h3', text });
const ol = (items: string[]): SeoArticleBlock => ({ type: 'ol', items });

const UPDATED_ISO = '2026-09-26';

const articleByLocale: Record<Locale, SeoArticleContent> = {
  en: {
    eyebrow: 'Guide',
    headline: 'What this site is — and how to use it',
    updatedLabel: 'Updated 26 Sep 2026',
    updatedIso: UPDATED_ISO,
    blocks: [
      p(
        'A Fortnite Sprite Tracker is a checklist for every companion and variant you extract in Battle Royale. This free tracker works on phone or PC and needs no account: tap Owned, star Mastered, and see exactly what is still missing. The tracker is regularly updated with new Fortnite updates, Sprites, variants, and seasonal changes.',
      ),
      p(
        'Sprites are easy to mix up once Gold, Cheat Master, and older season looks enter the locker. Memory and screenshots stop scaling. A living checklist — with filters, Hunt Mode, and share links — is faster than rebuilding a spreadsheet after every patch. The board here is updated for the current Override roster, with past seasons kept so your collection data is not thrown away when a collab leaves the live loot pool.',
      ),
      h3('Chart, list, and checklist'),
      p(
        'The home board is an interactive chart: each sprite-variant pair is a cell you can mark. Under that sits a list by season on the [[/sprites|Sprites]] pages, with ability notes and dust costs. Together they replace a static template in Docs or Excel. Spreadsheets are fine until you need rarity filters, mastery stars, and a link you can paste in Discord.',
      ),
      p(
        'Use Hunt Mode when you only want missing entries, sorted by rarity so the next chest has a priority. Search is there for mid-match name checks. Owned and Mastered are separate on purpose: extracting a Gold Bush is not the same as mastering it. That split is what a proper checklist should track, and it is why players outgrow a one-column sheet.',
      ),
      h3('Printable view, image share, and collection backup'),
      p(
        'Need a printable view for a binder or LAN night? Filter to Missing, then use the browser print dialog — it reads as a clean checklist without a special PDF tool. For an image of progress, copy the share URL instead of cropping a locker screenshot. Friends open the same marks in their browser, which is cleaner than sending a screenshot that goes stale after the next extract.',
      ),
      p(
        'Your collection stays in localStorage on this device. Export JSON when you switch PCs, or import a backup if you restore a browser profile. Share codes encode Owned and Mastered bits only — not your Epic ID. That is the privacy model of this site: useful backups, no mandatory login.',
      ),
      h3('Compared to gg-style hubs and IGN guides'),
      p(
        'A Fortnite Sprite Tracker gg search usually lands on hubs with drop rates and ownership percentages. Those sites are strong for meta data. This site is the personal board you tick after you extract. Use both: check rates on a gg-style page, then mark the variant here. Neither replaces the other.',
      ),
      p(
        'IGN and similar outlets explain extract, dust, and leveling. After you read that kind of explainer, come back to this checklist to record the actual locker. This page is not a news blog; it is the tool that stays updated when the season roster changes.',
      ),
      h3('Season archive (including Batman)'),
      p(
        "Collabs leave the live pool. If you need a Batman row from Chapter 7 Season 3, open [[/seasons|Seasons]] and the [[/sprites/s3-batman|Batman sprite page]]. The archive keeps past-season variants on a separate chart so your collection still shows those unlocks after Season 4 Override became the live board. That is how a new roster can exist without deleting last season's work.",
      ),
      h3('How to use this site'),
      ol([
        'Scroll to the tracker and mark each extracted variant as Owned on the chart.',
        'Star Mastered when you hit the in-game mastery rule (usually level 5 plus extract).',
        'Turn on Hunt Mode or Missing to treat the board like a focused checklist.',
        'Copy a share link or export JSON to back up your collection.',
        'Print the Missing filter if you want a printable sheet for offline sessions.',
        'Read abilities on the [[/sprites|Sprites page]], then return to tick the checklist.',
      ]),
      p(
        'That loop is the difference between a one-off template and a tool for daily play: the updated board on fortnitespritetracking.com, plus archives for collabs. Bookmark this site as your browser-based tracker — dark mode, mobile taps, no Epic login.',
      ),
      h3('Why this is built as a website, not a store app'),
      p(
        'An online tracker loads instantly, works on school Chromebooks and phones, and does not wait on an app-store review when the new season roster drops. "Fortnite Sprite Tracker app" searches still match this experience: it behaves like a lightweight app, installed as a bookmark. When the live roster updates, you already have the latest version without downloading a binary.',
      ),
      p(
        'We do not scrape Epic at runtime. The list is curated JSON so the chart stays fast and predictable. Placeholder marks stand in for official art — this is not an image dump of copyrighted locker icons. When you supply licensed art later, cells can swap in without changing how the checklist works.',
      ),
      h3('Unofficial tool'),
      p(
        'This site is a fan project. It is not affiliated with Epic Games, fortnite.gg, IGN, or any publisher named in community searches. It cannot grant sprites. Check the [[/faq|FAQ]] after patches. For trades, use [[/compare|Compare]] with two share codes rather than guessing from a blurry screenshot.',
      ),
      p(
        'Jump to the [[#tracker|checklist]], the [[/sprites|full sprites page]], or keep reading this guide when you are planning a completion run. Whether you needed a chart, a sheet replacement, a Batman archive, or simply the best online tracker for your locker — start marking. The next extract is easier when the board is honest.',
      ),
    ],
  },
  de: {
    eyebrow: 'Leitfaden',
    headline: 'Was diese Seite ist — und wie du sie nutzt',
    updatedLabel: 'Aktualisiert am 26. Sept. 2026',
    updatedIso: UPDATED_ISO,
    blocks: [
      p(
        'Ein Fortnite Sprite Tracker ist eine Checkliste für jeden Begleiter und jede Variante, die du in Battle Royale extrahierst. Dieser kostenlose Tracker funktioniert am Handy und am PC und braucht kein Konto: tippe auf „Gesammelt“, vergebe den Meister-Stern und sieh sofort, was dir noch fehlt. Der Tracker wird regelmäßig mit neuen Fortnite-Updates, Sprites, Varianten und saisonalen Änderungen aktualisiert.',
      ),
      p(
        'Sprites verwechselt man leicht, sobald Gold-, Cheat-Master- und ältere Season-Looks im Locker landen. Gedächtnis und Screenshots skalieren nicht mehr. Eine lebendige Checkliste — mit Filtern, Jagdmodus und Share-Links — ist schneller, als nach jedem Patch eine Tabelle neu zu bauen. Das Board hier ist auf das aktuelle Override-Line-up aktualisiert, vergangene Seasons bleiben erhalten, damit deine Sammlungsdaten nicht verloren gehen, wenn eine Kollab den Live-Lootpool verlässt.',
      ),
      h3('Diagramm, Liste und Checkliste'),
      p(
        'Das Board auf der Startseite ist ein interaktives Diagramm: jedes Sprite-Variante-Paar ist eine Zelle, die du markieren kannst. Darunter liegt die Liste nach Season auf den [[/sprites|Sprite-Seiten]], mit Fähigkeitsnotizen und Dust-Kosten. Zusammen ersetzen sie eine statische Vorlage in Docs oder Excel. Tabellen reichen, bis du Seltenheitsfilter, Meister-Sterne und einen Link brauchst, den du in Discord einfügen kannst.',
      ),
      p(
        'Nutze den Jagdmodus, wenn du nur fehlende Einträge willst, nach Seltenheit sortiert, damit die nächste Truhe eine Priorität hat. Die Suche dient zur Namensprüfung mitten in der Partie. „Gesammelt“ und „Meistert“ sind bewusst getrennt: einen Gold Bush zu extrahieren ist nicht dasselbe wie ihn zu meistern. Genau diese Trennung sollte eine ordentliche Checkliste erfassen — und genau deshalb wachsen Spieler über ein Ein-Spalten-Sheet hinaus.',
      ),
      h3('Druckansicht, Bild-Freigabe und Sammlungs-Backup'),
      p(
        'Brauchst du eine Druckansicht für einen Ordner oder einen LAN-Abend? Filtere auf „Fehlend“ und nutze dann den Druckdialog des Browsers — es liest sich als saubere Checkliste, ohne spezielles PDF-Werkzeug. Für ein Bild deines Fortschritts kopierst du die Share-URL, statt einen Locker-Screenshot zu beschneiden. Freunde öffnen dieselben Markierungen in ihrem Browser — sauberer als ein Screenshot, der nach dem nächsten Extract veraltet.',
      ),
      p(
        'Deine Sammlung bleibt im localStorage auf diesem Gerät. Exportiere JSON, wenn du den PC wechselst, oder importiere ein Backup, wenn du ein Browser-Profil wiederherstellst. Share-Codes kodieren nur die Bits für „Gesammelt“ und „Meistert“ — nicht deine Epic-ID. Das ist das Datenschutzmodell dieser Seite: nützliche Backups, keine Pflicht-Anmeldung.',
      ),
      h3('Verglichen mit gg-Hubs und IGN-Guides'),
      p(
        'Eine „Fortnite Sprite Tracker gg“-Suche landet meist auf Hubs mit Drop-Raten und Besitzquoten. Diese Seiten sind stark bei Meta-Daten. Diese Seite ist das persönliche Board, das du nach dem Extrahieren abhakst. Nutze beides: prüfe die Raten auf einer gg-Seite und markiere die Variante dann hier. Keines ersetzt das andere.',
      ),
      p(
        'IGN und ähnliche Outlets erklären Extrahieren, Dust und Leveln. Nach einem solchen Erklärer komm zurück zu dieser Checkliste, um den tatsächlichen Locker festzuhalten. Diese Seite ist kein News-Blog; sie ist das Werkzeug, das aktualisiert bleibt, wenn sich das Season-Line-up ändert.',
      ),
      h3('Season-Archiv (inklusive Batman)'),
      p(
        'Kollabs verlassen den Live-Pool. Wenn du eine Batman-Zeile aus Kapitel 7 Season 3 brauchst, öffne [[/seasons|Seasons]] und die [[/sprites/s3-batman|Batman-Sprite-Seite]]. Das Archiv bewahrt Varianten vergangener Seasons auf einem separaten Chart, damit deine Sammlung diese Freischaltungen weiterhin zeigt, nachdem Season 4 Override das Live-Board wurde. So kann ein neues Line-up existieren, ohne die Arbeit der letzten Season zu löschen.',
      ),
      h3('So nutzt du diese Seite'),
      ol([
        'Scrolle zum Tracker und markiere jede extrahierte Variante im Chart als „Gesammelt“.',
        'Vergebe den Meister-Stern, sobald du die Meisterschaftsregel im Spiel erreichst (in der Regel Level 5 plus Extraktion).',
        'Schalte den Jagdmodus oder „Fehlend“ ein, um das Board wie eine fokussierte Checkliste zu nutzen.',
        'Kopiere einen Share-Link oder exportiere JSON, um deine Sammlung zu sichern.',
        'Drucke den Filter „Fehlend“, wenn du ein Druckblatt für Offline-Sessions brauchst.',
        'Lies die Fähigkeiten auf der [[/sprites|Sprite-Seite]] und kehre dann zurück, um die Checkliste abzuhaken.',
      ]),
      p(
        'Dieser Kreislauf ist der Unterschied zwischen einer Einmal-Vorlage und einem Werkzeug für den täglichen Spiel: das aktuelle Board auf fortnitespritetracking.com plus Archive für Kollabs. Setze diese Seite als Lesezeichen — dein browserbasierter Tracker mit Dark Mode, Mobile-Taps und ohne Epic-Login.',
      ),
      h3('Warum als Website und nicht als Store-App'),
      p(
        'Ein Online-Tracker lädt sofort, funktioniert auf Schul-Chromebooks und Handys und wartet nicht auf eine App-Store-Prüfung, wenn das neue Season-Line-up kommt. „Fortnite Sprite Tracker App“-Suchen treffen weiterhin dieses Erlebnis: Es verhält sich wie eine leichtgewichtige App, installiert als Lesezeichen. Wenn sich das Live-Line-up aktualisiert, hast du bereits die neueste Version, ohne eine Binary herunterzuladen.',
      ),
      p(
        'Wir scrapen Epic nicht zur Laufzeit. Die Liste ist kuratiertes JSON, damit das Chart schnell und vorhersehbar bleibt. Platzhaltermarken stehen für die offizielle Kunst — das ist kein Bilddump urheberrechtlich geschützter Locker-Icons. Wenn du lizenzierte Kunst nachlieferst, lassen sich Zellen austauschen, ohne die Funktionsweise der Checkliste zu ändern.',
      ),
      h3('Inoffizielles Werkzeug'),
      p(
        'Diese Seite ist ein Fanprojekt. Sie ist nicht mit Epic Games, fortnite.gg, IGN oder einem anderen Publisher aus Community-Suchen verbunden. Sie kann keine Sprites vergeben. Siehe nach Patches in die [[/faq|FAQ]]. Für Trades nutze [[/compare|Compare]] mit zwei Share-Codes, statt aus einem unscharfen Screenshot zu raten.',
      ),
      p(
        'Springe zur [[#tracker|Checkliste]], zur [[/sprites|vollständigen Sprite-Seite]] oder lies diese Anleitung weiter, wenn du einen Completion-Run planst. Ob du ein Chart, einen Tabellen-Ersatz, ein Batman-Archiv oder einfach den besten Online-Tracker für deinen Locker brauchst — fang an zu markieren. Der nächste Extract ist leichter, wenn das Board ehrlich ist.',
      ),
    ],
  },
  es: {
    eyebrow: 'Guía',
    headline: 'Qué es este sitio y cómo usarlo',
    updatedLabel: 'Actualizado el 26 sept 2026',
    updatedIso: UPDATED_ISO,
    blocks: [
      p(
        'Un Fortnite Sprite Tracker es una lista de verificación de cada compañero y variante que extraes en Battle Royale. Este tracker es gratuito, funciona en móvil y PC y no requiere cuenta: toca Obtenido, pon la estrella de Dominado y mira exactamente qué te falta. El tracker se actualiza regularmente con las nuevas actualizaciones de Fortnite, Sprites, variantes y cambios de temporada.',
      ),
      p(
        'Los Sprites se confunden fácilmente cuando llegan al locker las variantes Oro, Maestro de Trucos y los estilos de temporadas antiguas. La memoria y las capturas dejan de escalar. Una lista de verificación viva — con filtros, modo Caza y enlaces para compartir — es más rápida que reconstruir una hoja de cálculo con cada parche. El tablero de aquí está actualizado con el roster actual de Override y conserva las temporadas pasadas para que los datos de tu colección no se pierdan cuando una colaboración sale del pool activo.',
      ),
      h3('Tabla, lista y lista de verificación'),
      p(
        'El tablero de inicio es una tabla interactiva: cada par sprite-variante es una celda que puedes marcar. Debajo hay una lista por temporada en las páginas de [[/sprites|Sprites]], con notas de habilidades y costos de polvo. Juntos reemplazan una plantilla estática en Docs o Excel. Las hojas de cálculo funcionan hasta que necesitas filtros de rareza, estrellas de dominio y un enlace que pegar en Discord.',
      ),
      p(
        'Usa el modo Caza cuando solo quieras las entradas que faltan, ordenadas por rareza para que el siguiente cofre tenga prioridad. La búsqueda sirve para revisar nombres durante la partida. Obtenido y Dominado están separados a propósito: extraer un Bush Oro no es lo mismo que dominarlo. Esa separación es lo que una lista de verificación debe registrar, y por eso los jugadores superan una hoja de una sola columna.',
      ),
      h3('Vista imprimible, imagen para compartir y copia de seguridad'),
      p(
        '¿Necesitas una vista imprimible para una carpeta o una noche de LAN? Filtra por Faltantes y usa el diálogo de impresión del navegador — se lee como una lista limpia sin herramientas de PDF. Para una imagen del progreso, copia la URL para compartir en lugar de recortar una captura del locker. Tus amigos abren las mismas marcas en su navegador, más limpio que enviar una captura que caduca con el siguiente extracto.',
      ),
      p(
        'Tu colección se guarda en localStorage en este dispositivo. Exporta JSON cuando cambies de PC o importa una copia si restauras un perfil del navegador. Los códigos para compartir codifican solo los bits de Obtenido y Dominado — no tu ID de Epic. Ese es el modelo de privacidad de este sitio: copias útiles, sin inicio de sesión obligatorio.',
      ),
      h3('Comparado con hubs estilo gg y guías de IGN'),
      p(
        'Una búsqueda de "Fortnite Sprite Tracker gg" suele llevar a hubs con tasas de obtención y porcentajes de propiedad. Esos sitios son fuertes en datos de meta. Este sitio es el tablero personal que marcas tras extraer. Usa ambos: consulta las tasas en una página estilo gg y luego marca la variante aquí. Ninguno reemplaza al otro.',
      ),
      p(
        'IGN y medios similares explican la extracción, el polvo y el nivelado. Después de leer un texto así, vuelve a esta lista para registrar el locker real. Esta página no es un blog de noticias; es la herramienta que se mantiene actualizada cuando cambia el roster de la temporada.',
      ),
      h3('Archivo de temporadas (incluido Batman)'),
      p(
        'Las colaboraciones dejan el pool activo. Si necesitas una fila de Batman del Capítulo 7 Temporada 3, abre [[/seasons|Temporadas]] y la [[/sprites/s3-batman|página del sprite Batman]]. El archivo conserva las variantes de temporadas pasadas en una tabla aparte para que tu colección siga mostrando esos desbloqueos después de que la Temporada 4 Override se convirtiera en el tablero activo. Así puede existir un roster nuevo sin borrar el trabajo de la temporada anterior.',
      ),
      h3('Cómo usar este sitio'),
      ol([
        'Baja al tracker y marca cada variante extraída como Obtenido en la tabla.',
        'Pon la estrella de Dominado cuando cumplas la regla de dominio del juego (normalmente nivel 5 más extracción).',
        'Activa el modo Caza o Faltantes para tratar el tablero como una lista enfocada.',
        'Copia un enlace para compartir o exporta JSON para respaldar tu colección.',
        'Imprime el filtro Faltantes si quieres una hoja impresa para sesiones sin conexión.',
        'Lee las habilidades en la [[/sprites|página de Sprites]] y vuelve para marcar la lista.',
      ]),
      p(
        'Ese ciclo es la diferencia entre una plantilla puntual y una herramienta para el juego diario: el tablero actualizado en fortnitespritetracking.com, más archivos para las colaboraciones. Guarda este sitio como tracker en tu navegador — modo oscuro, toques en el móvil, sin login de Epic.',
      ),
      h3('Por qué está construido como sitio web y no como app de tienda'),
      p(
        'Un tracker en línea carga al instante, funciona en Chromebooks y móviles del colegio y no espera la revisión de una tienda de apps cuando llega el nuevo roster de la temporada. Las búsquedas de "Fortnite Sprite Tracker app" siguen encajando con esta experiencia: se comporta como una app ligera, instalada como marcador. Cuando se actualiza el roster activo, ya tienes la última versión sin descargar un binario.',
      ),
      p(
        'No rastreamos Epic en tiempo real. La lista es JSON curado para que el tablero siga siendo rápido y predecible. Los marcadores de reemplazo sustituyen al arte oficial — esto no es un volcado de imágenes de iconos con derechos de autor. Cuando más adelante aportes arte con licencia, las celdas se pueden cambiar sin alterar el funcionamiento de la lista.',
      ),
      h3('Herramienta no oficial'),
      p(
        'Este sitio es un proyecto de fans. No está afiliado a Epic Games, fortnite.gg, IGN ni a ninguna editora mencionada en búsquedas de la comunidad. No puede otorgar sprites. Consulta la [[/faq|FAQ]] tras los parches. Para intercambios, usa [[/compare|Compare]] con dos códigos para compartir en lugar de adivinar con una captura borrosa.',
      ),
      p(
        'Salta a la [[#tracker|lista de verificación]], a la [[/sprites|página completa de Sprites]] o sigue leyendo esta guía cuando planifiques una partida de completado. Ya sea que necesitaras una tabla, un reemplazo de hoja, un archivo de Batman o simplemente el mejor tracker en línea para tu locker — empieza a marcar. El próximo extracto es más fácil cuando el tablero es honesto.',
      ),
    ],
  },
  pt: {
    eyebrow: 'Guia',
    headline: 'O que é este site e como usá-lo',
    updatedLabel: 'Atualizado em 26 de set. de 2026',
    updatedIso: UPDATED_ISO,
    blocks: [
      p(
        'Um Fortnite Sprite Tracker é uma lista de verificação de cada companheiro e variante que você extrai no Battle Royale. Este tracker é gratuito, funciona no celular e no PC e não precisa de conta: toque em Obtido, dê a estrela de Dominado e veja exatamente o que ainda falta. O tracker é atualizado regularmente com as novas atualizações do Fortnite, Sprites, variantes e mudanças sazonais.',
      ),
      p(
        'Os Sprites se confundem fácil quando as variantes Oro, Mestre de Trapaça e os visuais de temporadas antigas entram no locker. Memória e capturas de tela deixam de escalar. Uma lista de verificação viva — com filtros, modo Caça e links para compartilhar — é mais rápida do que reconstruir uma planilha a cada patch. O quadro aqui está atualizado com o roster atual de Override e mantém as temporadas passadas para que os dados da sua coleção não sejam descartados quando uma colaboração sai do pool ativo.',
      ),
      h3('Tabela, lista e lista de verificação'),
      p(
        'O quadro da página inicial é uma tabela interativa: cada par sprite-variante é uma célula que você pode marcar. Abaixo há uma lista por temporada nas páginas de [[/sprites|Sprites]], com notas de habilidades e custos de pó. Juntos, eles substituem um modelo estático no Docs ou no Excel. Planilhas funcionam até você precisar de filtros de raridade, estrelas de maestria e um link para colar no Discord.',
      ),
      p(
        'Use o modo Caça quando quiser apenas as entradas que faltam, ordenadas por raridade para que o próximo baú tenha prioridade. A busca serve para conferir nomes durante a partida. Obtido e Dominado são separados de propósito: extrair um Bush Oro não é o mesmo que dominá-lo. Essa separação é o que uma lista de verificação deve registrar, e é por isso que jogadores superam uma planilha de uma coluna.',
      ),
      h3('Visão impressa, imagem para compartilhar e backup da coleção'),
      p(
        'Precisa de uma visão impressa para uma pasta ou noite de LAN? Filtre por Faltando e use a caixa de diálogo de impressão do navegador — fica como uma lista limpa, sem ferramenta de PDF. Para uma imagem do progresso, copie a URL de compartilhamento em vez de recortar uma captura do locker. Seus amigos abrem as mesmas marcações no navegador deles, mais limpo do que enviar uma captura que fica velha com a próxima extração.',
      ),
      p(
        'Sua coleção fica no localStorage deste dispositivo. Exporte JSON quando trocar de PC ou importe um backup se restaurar um perfil do navegador. Os códigos de compartilhamento codificam apenas os bits de Obtido e Dominado — não seu ID da Epic. Esse é o modelo de privacidade deste site: backups úteis, sem login obrigatório.',
      ),
      h3('Comparado a hubs estilo gg e guias da IGN'),
      p(
        'Uma busca por "Fortnite Sprite Tracker gg" costuma levar a hubs com taxas de obtenção e percentuais de posse. Esses sites são fortes em dados de meta. Este site é o quadro pessoal que você marca depois de extrair. Use os dois: confira as taxas em uma página estilo gg e depois marque a variante aqui. Nenhum substitui o outro.',
      ),
      p(
        'IGN e veículos parecidos explicam extração, pó e nivelamento. Depois de ler um texto assim, volte a esta lista para registrar o locker real. Esta página não é um blog de notícias; é a ferramenta que se mantém atualizada quando o roster da temporada muda.',
      ),
      h3('Arquivo de temporadas (incluindo Batman)'),
      p(
        'Colaborações saem do pool ativo. Se você precisa de uma linha de Batman da Temporada 3 do Capítulo 7, abra [[/seasons|Temporadas]] e a [[/sprites/s3-batman|página do sprite Batman]]. O arquivo mantém as variantes de temporadas anteriores em um quadro separado para que sua coleção continue mostrando esses desbloqueios depois que a Temporada 4 Override se tornou o quadro ativo. É assim que um roster novo pode existir sem apagar o trabalho da temporada passada.',
      ),
      h3('Como usar este site'),
      ol([
        'Role até o tracker e marque cada variante extraída como Obtido no quadro.',
        'Dê a estrela de Dominado quando atingir a regra de maestria do jogo (normalmente nível 5 mais extração).',
        'Ative o modo Caça ou Faltando para tratar o quadro como uma lista focada.',
        'Copie um link de compartilhamento ou exporte JSON para fazer backup da sua coleção.',
        'Imprima o filtro Faltando se quiser uma folha impressa para sessões offline.',
        'Leia as habilidades na [[/sprites|página de Sprites]] e volte para marcar a lista.',
      ]),
      p(
        'Esse ciclo é a diferença entre um modelo pontual e uma ferramenta para o jogo diário: o quadro atualizado em fortnitespritetracking.com, mais arquivos para colaborações. Salve este site como favorito — seu tracker no navegador, com modo escuro, toques no celular e sem login da Epic.',
      ),
      h3('Por que é um site e não um app de loja'),
      p(
        'Um tracker online carrega na hora, funciona em Chromebooks escolares e celulares e não espera a revisão de uma loja de apps quando o novo roster da temporada chega. Buscas por "Fortnite Sprite Tracker app" ainda combinam com essa experiência: ele se comporta como um app leve, instalado como favorito. Quando o roster ao vivo é atualizado, você já tem a versão mais recente sem baixar um binário.',
      ),
      p(
        'Não fazemos scrape da Epic em tempo de execução. A lista é JSON curado para o quadro ficar rápido e previsível. Marcadores de substituição representam a arte oficial — não é um despejo de imagens de ícones protegidos por direitos autorais. Quando você fornecer arte licenciada depois, as células podem ser trocadas sem mudar o funcionamento da lista.',
      ),
      h3('Ferramenta não oficial'),
      p(
        'Este site é um projeto de fãs. Não é afiliado à Epic Games, à fortnite.gg, à IGN nem a nenhuma editora citada em buscas da comunidade. Ele não pode conceder sprites. Consulte a [[/faq|FAQ]] após os patches. Para trocas, use [[/compare|Compare]] com dois códigos de compartilhamento em vez de adivinhar a partir de uma captura borrada.',
      ),
      p(
        'Vá para a [[#tracker|lista de verificação]], para a [[/sprites|página completa de Sprites]] ou continue lendo este guia quando planejar uma run de conclusão. Quer você precisasse de uma tabela, de um substituto de planilha, de um arquivo de Batman ou simplesmente do melhor tracker online para o seu locker — comece a marcar. A próxima extração é mais fácil quando o quadro é honesto.',
      ),
    ],
  },
  fr: {
    eyebrow: 'Guide',
    headline: "Ce que fait ce site — et comment l'utiliser",
    updatedLabel: 'Mis à jour le 26 sept. 2026',
    updatedIso: UPDATED_ISO,
    blocks: [
      p(
        "Un Fortnite Sprite Tracker est une liste de contrôle de chaque compagnon et variante que vous extrayez en Battle Royale. Ce tracker gratuit fonctionne sur téléphone ou PC et ne nécessite aucun compte : appuyez sur Possédé, ajoutez l'étoile Maîtrisé et voyez exactement ce qui vous manque. Le tracker est régulièrement mis à jour avec les nouvelles mises à jour de Fortnite, les Sprites, les variantes et les changements saisonniers.",
      ),
      p(
        "Les Sprites se mélangent facilement dès que les looks Or, Maître de la Triche et les saisons passées entrent dans le locker. La mémoire et les captures d'écran ne suffisent plus. Une liste de contrôle vivante — avec filtres, Mode Chasse et liens de partage — est plus rapide que de reconstruire un tableur après chaque patch. Le tableau ici est mis à jour pour le roster Override actuel, les saisons passées sont conservées pour que vos données de collection ne soient pas jetées quand une collab quitte le pool en direct.",
      ),
      h3('Tableau, liste et liste de contrôle'),
      p(
        "Le tableau d'accueil est un tableau interactif : chaque paire sprite-variante est une cellule que vous pouvez marquer. En dessous se trouve une liste par saison sur les pages [[/sprites|Sprites]], avec des notes d'abilités et des coûts de poussière. Ensemble, ils remplacent un modèle statique dans Docs ou Excel. Les tableurs conviennent jusqu'à ce qu'il faille des filtres de rareté, des étoiles de maîtrise et un lien à coller dans Discord.",
      ),
      p(
        "Utilisez le Mode Chasse quand vous ne voulez que les entrées manquantes, triées par rareté pour que le prochain coffre soit une priorité. La recherche sert à vérifier les noms en cours de partie. Possédé et Maîtrisé sont séparés volontairement : extraire un Bush Or n'est pas la même chose que le maîtriser. Ce découplage est ce qu'une bonne liste de contrôle doit suivre, et c'est pourquoi les joueurs dépassent une feuille à une seule colonne.",
      ),
      h3("Vue imprimable, partage d'image et sauvegarde de la collection"),
      p(
        "Besoin d'une vue imprimable pour un classeur ou une soirée LAN ? Filtrez par Manquants puis utilisez la boîte de dialogue d'impression du navigateur — cela se lit comme une liste de contrôle propre sans outil PDF spécial. Pour une image de progression, copiez l'URL de partage plutôt que de recadrer une capture du locker. Vos amis ouvrent les mêmes marques dans leur navigateur, plus propre qu'une capture qui devient obsolète après la prochaine extraction.",
      ),
      p(
        "Votre collection reste dans localStorage sur cet appareil. Exportez le JSON quand vous changez de PC, ou importez une sauvegarde si vous restaurez un profil de navigateur. Les codes de partage ne codent que les bits Possédé et Maîtrisé — pas votre ID Epic. C'est le modèle de confidentialité de ce site : des sauvegardes utiles, pas de connexion obligatoire.",
      ),
      h3('Comparé aux hubs façon gg et aux guides IGN'),
      p(
        'Une recherche "Fortnite Sprite Tracker gg" mène généralement sur des hubs avec des taux de drop et des pourcentages de possession. Ces sites sont forts en données méta. Ce site est le tableau personnel que vous cochez après avoir extrait. Utilisez les deux : vérifiez les taux sur une page façon gg puis marquez la variante ici. L\'un ne remplace pas l\'autre.',
      ),
      p(
        "IGN et des médias similaires expliquent l'extraction, la poussière et la montée de niveau. Après avoir lu ce type d'article, revenez à cette liste pour enregistrer le locker réel. Cette page n'est pas un blog d'actualité ; c'est l'outil qui reste à jour quand le roster de la saison change.",
      ),
      h3('Archive des saisons (y compris Batman)'),
      p(
        "Les collabs quittent le pool en direct. Si vous avez besoin d'une ligne Batman du Chapitre 7 Saison 3, ouvrez [[/seasons|Saisons]] et la [[/sprites/s3-batman|page du sprite Batman]]. L'archive conserve les variantes des saisons passées sur un tableau séparé pour que votre collection affiche toujours ces déverrouillages après que la Saison 4 Override est devenue le tableau en direct. C'est ainsi qu'un nouveau roster peut exister sans effacer le travail de la saison passée.",
      ),
      h3('Comment utiliser ce site'),
      ol([
        "Descendez jusqu'au tracker et marquez chaque variante extraite comme Possédée sur le tableau.",
        "Ajoutez l'étoile Maîtrisé quand vous atteignez la règle de maîtrise en jeu (généralement niveau 5 plus extraction).",
        'Activez le Mode Chasse ou Manquants pour traiter le tableau comme une liste de contrôle ciblée.',
        'Copiez un lien de partage ou exportez le JSON pour sauvegarder votre collection.',
        'Imprimez le filtre Manquants si vous voulez une feuille imprimable pour les sessions hors ligne.',
        'Lisez les abilités sur la [[/sprites|page des Sprites]] puis revenez pour cocher la liste.',
      ]),
      p(
        "Cette boucle fait la différence entre un modèle ponctuel et un outil pour le jeu quotidien : le tableau mis à jour sur fortnitespritetracking.com, plus des archives pour les collabs. Ajoutez ce site en favori comme tracker dans votre navigateur — mode sombre, appuis mobiles, pas de connexion Epic.",
      ),
      h3("Pourquoi c'est un site et non une app de store"),
      p(
        "Un tracker en ligne se charge instantanément, fonctionne sur les Chromebooks et téléphones scolaires et n'attend pas la validation d'une app store quand le nouveau roster de la saison arrive. Les recherches \"Fortnite Sprite Tracker app\" correspondent encore à cette expérience : cela se comporte comme une app légère, installée en favori. Quand le roster en direct est mis à jour, vous avez déjà la dernière version sans télécharger de binaire.",
      ),
      p(
        "Nous n'exploitons pas Epic à l'exécution. La liste est du JSON curaté pour que le tableau reste rapide et prévisible. Des marqueurs provisoires tiennent lieu d'art officiel — ce n'est pas un dump d'images d'icônes de locker protégées. Quand vous fournirez de l'art sous licence, les cellules pourront être remplacées sans changer le fonctionnement de la liste.",
      ),
      h3('Outil non officiel'),
      p(
        "Ce site est un projet de fans. Il n'est pas affilié à Epic Games, fortnite.gg, IGN ou à aucun éditeur nommé dans les recherches communautaires. Il ne peut pas accorder de sprites. Consultez la [[/faq|FAQ]] après les patches. Pour les échanges, utilisez [[/compare|Compare]] avec deux codes de partage plutôt que de deviner à partir d'une capture floue.",
      ),
      p(
        "Passez à la [[#tracker|liste de contrôle]], à la [[/sprites|page complète des Sprites]], ou continuez à lire ce guide quand vous planifiez une run de completion. Que vous ayez besoin d'un tableau, d'un remplaçant de feuille, d'une archive Batman ou simplement du meilleur tracker en ligne pour votre locker — commencez à cocher. La prochaine extraction est plus facile quand le tableau est honnête.",
      ),
    ],
  },
};

export function getSeoArticle(locale: Locale = 'en'): SeoArticleContent {
  return articleByLocale[locale] ?? articleByLocale.en;
}
