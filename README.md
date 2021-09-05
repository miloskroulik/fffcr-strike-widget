# Earth Day Live

On April 22-24, the 50th anniversary of Earth Day, millions of people around the world are going online for a three-day mobilization to stop the climate emergency.

The event is named Earth Day Live, and this is the source code for Earth Day Live's widget that will allow anyone with a website to join the event in solidarity. [Click here to learn more.](https://earthdaylive2020.org)

This project was based on the [Digital Climate Strike widget](https://github.com/fightforthefuture/digital-climate-strike), which was used to black out thousands of websites last September, in support of what became the largest climate strike ever. Read about the results of the Digital Climate Strike [here](https://digital.globalclimatestrike.net/thanks/).

## How to install the widget on your site

### Option 1:
   Add this one line of JavaScript to any page, and you're good to go:

```html
<script src="https://widget.earthdaylive2020.org/widget.js" async></script>
```

### Option 2 (Self-Hosted):
    1. Clone the repo with command `git clone https://github.com/fightforthefuture/earth-day-live-widget.git`.
    2. Inside the project's folder, run 'npm install && npm run build'. A folder named 'dist' will be generated.
    3. Copy the files index.html and widget.js from dist into your site's folder.
    4. Configure the 'iframeHost' option, as described in the section about `ZAKLIMA_LIVE_OPTIONS`.
    5. Include the widget anywhere on your site with <script src="widget.js" async></script>

You can change the user experience and do some customization via the `ZAKLIMA_LIVE_OPTIONS` [described below](#customization-options). Before adding the widget make sure you have also read the [section below](#important-note-regarding-google-analytics-tracking) about Google Analytics tracking.

If you have any problems or questions regarding the widget, please [submit an issue](https://github.com/fightforthefuture/earth-day-live-widget/issues).

The widget is compatible with Firefox, Chrome (desktop and mobile), Safari (desktop and mobile), Microsoft Edge, and Internet Explorer 11.

## How it works & Demo

When you add [**widget.js**](https://github.com/fightforthefuture/earth-day-live-widget/blob/master/static/widget.js) to your site it will show a footer banner ([demo](https://widget.earthdaylive2020.org/demo.html)) informing visitors that your site is supporting Earth Day Live and directs them to join the event:

![A screenshot of the Earth Day Live footer widget](https://www.earthdaylive2020.org/_nuxt/img/e8852c6.png)

Then at midnight on April 22nd for 24 hours, the banner will expand to be full screen ([demo](https://widget.earthdaylive2020.org/demo.html?fullPage)), showing an unavoidable message that your site is joining Earth Day Live for the day, and directing them to join in the event:

![A screenshot of the Earth Day Live full page widget](https://www.earthdaylive2020.org/_nuxt/img/7b18306.png)

For those who cannot shut down their website for the day, a closable overlay option can also be configured ([demo](https://widget.earthdaylive2020.org/demo.html?fullPage&showCloseButton=1)):

![A screenshot of the Earth Day Live full page widget with close button](https://www.earthdaylive2020.org/_nuxt/img/8fd5b76.png)

You can demo the widget in different languages by adding a 'language' parameter to the URL. ([Example](https://assets.digitalclimatestrike.net/demo.html?fullPage&language=de)) 

Please take a look at [**widget.js**](https://github.com/fightforthefuture/earth-day-live-widget/blob/master/static/widget.js) if you want to see exactly what you're embedding on your page.

The widget is compatible with Firefox, Chrome (desktop and mobile), Safari (desktop and mobile), Microsoft Edge, and Internet Explorer 11.

## Customization options

If you define an object called `ZAKLIMA_LIVE_OPTIONS` before including the widget code, you can pass some properties in to customize the default behavior.

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
     * Set the language of the widget. We currently support:
     * 'en': English
     * 'es': Spanish
     * Defaults to null, which will obey the navigator.language setting of the 
     * viewer's browser.
     */
     language: null, // @type {string}
     
     /**
     * Allows you to set a &referrer= URL parameter in the link to earthdaylive2020.org. Use by Action Network
     * forms on the earthdaylive2020.org website. 
     **/
     partnerReferrer: null, //@type {string}
    
    /**
     * Allow you to override the iFrame hostname. Defaults to https://widget.earthdaylive2020.org
     */
    iframeHost: 'https://widget.earthdaylive2020.org', // @type {string}

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
<script src="https://widget.earthdaylive2020.org/widget.js" async></script>
```
## Important note regarding Google Analytics tracking

As you can see in the `ZAKLIMA_LIVE_OPTIONS` above, Google Analytics is configured by default to post events when the widget is shown and when any of the buttons are clicked. See [**index.js**](https://github.com/fightforthefuture/earth-day-live-widget/blob/master/src/index.js) for more details. The reasons for this are outlined in Issue [#76](https://github.com/fightforthefuture/digital-climate-strike/issues/76) of the Digital Climate Strike, where this issue first arose. If you would like to disable this please add the widget to your site with the following configuration: 

```html
<script type="text/javascript">
  var ZAKLIMA_LIVE_OPTIONS = {
    disableGoogleAnalytics: true
  };
</script>

<script src="https://widget.earthdaylive2020.org/widget.js" async></script>
```  

