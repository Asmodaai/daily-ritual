import { localize } from "../i18n.js";
export const products = localize([
  { id: 'cleanse', number: '01', name: 'Cleanse', czech: 'Čistý začátek', type: 'Jemný čisticí gel', volume: '150 ml', copy: 'Smýt zbytky dne. Nechat za sebou ruch. První krok, který dává prostor všemu dalšímu.', variant: 'cleanse' },
  { id: 'hydrate', number: '02', name: 'Hydrate', czech: 'Chvíle pro sebe', type: 'Hydratační esence', volume: '30 ml', copy: 'Pár kapek. Lehká textura. Malý okamžik pozornosti, který patří jen vám a vaší pleti.', variant: 'hydrate' },
  { id: 'protect', number: '03', name: 'Protect', czech: 'Péče na závěr', type: 'Denní krém — koncept', volume: '50 ml', copy: 'Závěrečný dotek péče před novým dnem. Jednoduché zakončení vašeho ranního rituálu.', variant: 'protect' },
])

export const routines = localize({
  morning: {
    label: 'Ranní rituál', note: 'Malá chvíle, než se svět probudí.',
    steps: [
      { title: 'Začněte zlehka.', label: '01 / OČISTA', copy: 'Osvěžte pleť vlažnou vodou nebo jemným čisticím přípravkem podle toho, co vám vyhovuje.' },
      { title: 'Dejte péči prostor.', label: '02 / HYDRATACE', copy: 'Naneste svou oblíbenou hydratační péči. V klidu, konečky prstů, bez zbytečného spěchu.' },
      { title: 'Vyjděte do dne.', label: '03 / ZÁVĚREČNÁ PÉČE', copy: 'Dokončete rutinu krémem podle potřeb pleti. Pro ochranu před sluncem zvolte skutečný přípravek s uvedeným SPF.' },
    ],
  },
  evening: {
    label: 'Večerní rituál', note: 'Nechte den za dveřmi.',
    steps: [
      { title: 'Odložte celý den.', label: '01 / OČISTA', copy: 'Jemně odstraňte make-up a zbytky každodenní péče přípravkem, který vám vyhovuje. Opláchněte vlažnou vodou.' },
      { title: 'Vraťte se k sobě.', label: '02 / HYDRATACE', copy: 'Dopřejte pleti svou obvyklou hydratační péči. Nemusíte přidávat další kroky jen proto, že je večer.' },
      { title: 'Uzavřete rituál.', label: '03 / ZÁVĚREČNÁ PÉČE', copy: 'Podle potřeby dokončete péči krémem. Zavřete lahvičku, odložte telefon. Pro dnešek hotovo.' },
    ],
  },
})

export const questions = localize([
  { question: 'Je DAILY RITUAL skutečná značka?', answer: 'DAILY RITUAL je fiktivní skincare koncept vytvořený pro portfolio VERBA. Název, obaly i produktová řada slouží k ukázce webového designu a vývoje. Žádné produkty se zde neprodávají.' },
  { question: 'Musí mít moje rutina všechny tři kroky?', answer: 'Nemusí. Tři kroky jsou způsob, jak v tomto konceptu přehledně představit péči. Vaše vlastní rutina se může lišit podle potřeb pleti i přípravků, které používáte. Jednoduchost tu není pravidlo, ale možnost.' },
  { question: 'Jsou uvedené produkty vhodné pro mou pleť?', answer: 'Produkty jsou pouze návrhy a nemají skutečné složení. Nelze proto posoudit jejich vhodnost pro žádný typ pleti. U skutečné kosmetiky se řiďte složením a pokyny konkrétního výrobce.' },
  { question: 'Má krém Protect ochranný faktor SPF?', answer: 'Neuvádíme žádný SPF ani testované ochranné vlastnosti. Protect je název fiktivní kategorie, nikoliv slib ochrany před UV zářením. Pro ochranu před sluncem vybírejte skutečný přípravek s deklarovaným SPF.' },
  { question: 'Co se stane, když vyplním formulář?', answer: 'Zobrazí se pouze potvrzení o ukázkovém odeslání. Formulář nemá server, nic neodesílá a neukládá do databáze ani do úložiště prohlížeče. K žádnému odběru se nepřihlašujete.' },
])
