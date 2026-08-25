export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * SEO FAQ questions match the query list (duplicate “top 10 hardest” asked once).
 * JSON-LD answers use HTML <p> as in Google’s FAQPage examples.
 */
export const seoFaqs: FaqItem[] = [
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
    question: 'What is the #1 skin in Fortnite?',
    answer:
      '<p>There is no permanent official #1 skin. Popularity shifts with shops, collabs, and competitive scenes. Skins are cosmetics; Sprites are a separate companion system. This Fortnite Sprite Tracker tracks Sprites, not outfit rankings. Check the in-game shop and current competitive usage if you need a live skin meta.</p>',
  },
  {
    question: 'What is the #1 rarest Fortnite skin?',
    answer:
      '<p>Rarest skins are usually old Battle Pass exclusives, limited collabs, or shop items that never returned — not one static #1. Epic does not publish a live outfit rarity leaderboard. Sprite rarity (Rare through Mythic, plus Gold and Cheat Master) is what this Fortnite Sprite Tracker records. For outfit rarity, use community wikis and item-shop history.</p>',
  },
  {
    question: 'Who is the #1 Fortnite player?',
    answer:
      '<p>Competitive #1 changes by region, season, and FNCS or cash-cup results. There is no all-time #1 that stays true every week. This Fortnite Sprite Tracker does not rank players or pull Epic stats. Use official Competitive Fortnite channels or dedicated stats sites for leaderboards, then mark Sprite variants you extracted here.</p>',
  },
  {
    question: 'How do Fortnite Sprites work?',
    answer:
      '<p>Find a Sprite in a chest or supply drop, then extract it before the match ends to keep it permanently. Summon it later with Sprite Dust. Each Sprite has a passive that levels up — often to level 5 for mastery. Crown levels from wins; Klombo levels by consuming items. Variants are separate collectibles. This Fortnite Sprite Tracker checklist stores Owned (extracted) and Mastered (typically level 5) in your browser.</p>',
  },
];

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
