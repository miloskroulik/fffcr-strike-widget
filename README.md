_# Digitální stávka za klima

## Co je digitální stávka za klima

Studenti z organizace Fridays for Future pořádají v pátek 24. září další stávku za klima. Jejím cílem je upozornit na
důležitost klimatické politiky před letošními volbami do Poslanecké sněmovny Parlamentu ČR. Ne všichni se ale můžeme
protestu zúčastnit osobně. Jednou z cest k zapojení je i podpora prostřednictvím vlastního webu. Na něj je možno umístit
banner upozorňující na stávku, v den stávky je možno volitelně web znepřístupnit překryvnou zprávou podporující stávku.

## Jak to bude vypadat?

Můžeš se podívat na [ukázku banneru](https://widget.zaklima.cz/demo)

![A screenshot of the climate strike footer widget](https://widget.zaklima.cz/demo.png)

nebo [překryvný panel, který se zobrazí v den stávky](https://widget.zaklima.cz/demo_full).

![A screenshot of the climate strike full page widget](https://widget.zaklima.cz/demo_full.png)

## Jak se můžu zapojit?

Existuje několik cest, jak na svůj web přidat banner:

### Přidání JS kódu

Kamkoliv na svůj web přidej následující HTML kód

```html

<script src="https://widget.zaklima.cz/widget.js" async></script>
```

### Selfhosting widgetu

1. Naklonuj repozitář příkazem `git clone https://github.com/miloskroulik/fffcr-strike-widget`.
2. Ve složce projektu spusťte `npm install && npm run build`. Bude vygenerována složka s názvem `dist`.
3. Zkopíruj soubory `index.html` a `widget.js` ze složky `dist` do složky vašeho webu.
4. Nakonfiguruj volbu `iframeHost`, jak je popsáno v části o konfiguraci widgetu.
5. Vlož widget kamkoli na svůj web pomocí

```html 
<script src = "widget.js" async></script>
```

### Plugin pro Wordpress

Postupuj prosím podle [instrukcí na stránce pluginu](https://github.com/miloskroulik/fffcr-strike-wordpress).

### Modul pro Drupal

Modul pro Drupal bude dostupný nejpozději v neděli 19. září.

## Dotazy

Pokud jsi narazil/a na nějaký problém, nebo se potřebuješ na něco zeptat, použij prosím příslušné nástroje Githubu:

- hlášení chyb: https://github.com/miloskroulik/fffcr-strike-widget/issues
- dotazy a odpovědi: https://github.com/miloskroulik/fffcr-strike-widget/discussions_
