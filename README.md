# Digitální stávka za klima

<!--ts-->
* [Digitální stávka za klima](#digitální-stávka-za-klima)
   * [Co je digitální stávka za klima](#co-je-digitální-stávka-za-klima)
   * [Jak to bude vypadat?](#jak-to-bude-vypadat)
   * [Jak se můžu zapojit?](#jak-se-můžu-zapojit)
      * [Přidání JS kódu](#přidání-js-kódu)
      * [Selfhosting widgetu](#selfhosting-widgetu)
      * [Plugin pro Wordpress](#plugin-pro-wordpress)
      * [Modul pro Drupal](#modul-pro-drupal)
   * [Dotazy](#dotazy)

<!-- Added by: runner, at: Fri Sep 17 20:59:47 UTC 2021 -->

<!--te-->

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

## Konfigurace

Chování widgetu můžeš upravit vytvořením objektu `ZAKLIMA_LIVE_OPTIONS` před připojením `widget.js`.

```html
<script type="text/javascript">
  var ZAKLIMA_LIVE_OPTIONS = {
    /**
     * Specify view cookie expiration. After initial view, widget will not be
     * displayed to a user again until after this cookie expires. Defaults to 
     * one day.
     */
    cookieExpirationDays: 1, // @type {number}
    
    /**
     * Allow you to override the iFrame hostname. Defaults to https://widget.earthdaylive2020.org
     */
    iframeHost: 'https://widget.zaklima.cz', // @type {string}

    /**
     * Prevents the widget iframe from loading Google Analytics. Defaults to
     * false. (Google Analytics will also be disabled if doNotTrack is set on
     * the user's browser.)
     */
    disableGoogleAnalytics: false, // @type {boolean}

    /**
     * Always show the widget, even when someone has closed the widget and set the cookie on their device. 
     * Useful for testing. Defaults to false.
     */
    alwaysShowWidget: false, // @type {boolean}

    /**
     * Automatically makes the widget full page. Defaults to false.
     */
    forceFullPageWidget: false, // @type {boolean}
    
    /**
    * For the full page widget, shows a close button "x" and hides the message about the site being 
    * available tomorrow. Defaults to false.
    */
    showCloseButtonOnFullPageWidget: false, // @type {boolean}
    
    /**
     * The date when the sticky footer widget should start showing on your web site.
     * Note: the month is one integer less than the number of the month. E.g. 8 is September, not August.
     * Defaults to new Date(2020, 0, 1) (January 1st, 2020).
     */
    footerDisplayStartDate: new Date(), //@ type {Date object}
    
    /**
     * The date when the full page widget should showing on your web site for 24 hours. 
     * Note: the month is one integer less than the number of the month. E.g. 8 is September, not August.
     * Defaults to new Date(2020, 3, 22) (April 22nd, 2020)
     */
    fullPageDisplayStartDate: new Date(2020, 3, 22), //@ type {Date object}
  };
</script>
<script src="https://widget.zaklima.cz/widget.js" async></script>
```

## Dotazy

Pokud jsi narazil/a na nějaký problém, nebo se potřebuješ na něco zeptat, použij prosím příslušné nástroje Githubu:

- hlášení chyb: https://github.com/miloskroulik/fffcr-strike-widget/issues
- dotazy a odpovědi: https://github.com/miloskroulik/fffcr-strike-widget/discussions_
