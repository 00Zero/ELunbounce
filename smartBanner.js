<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
<script type="text/javascript">
  $(function() { $.smartbanner({
    title: 'Emprego Ligado - Vagas', // What the title of the app should be in the banner (defaults to <title>)
    author: 'Emprego Ligado', // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
    price: 'GRÁTIS', // Price of the app
    appStoreLanguage: 'us', // Language code for App Store
    inAppStore: 'On the App Store', // Text of price for iOS
    inGooglePlay: 'Google Play', // Text of price for Android
    inWindowsStore: 'In the Windows Store', // Text of price for Windows
    GooglePlayParams: encodeURIComponent((location.search.substr(1))+'&landing=unbounce+'+(window.location.pathname.substr(1, window.location.pathname.length-2))), // Aditional parameters for the market
    icon: 'https://lh3.ggpht.com/s6ZxMdRgeA_O8OPXJqrG_lWsviZiGTwjHE4gEAu4corVhC3WZdRdOrsQQqBziM1crF0', // The URL of the icon (defaults to <meta name="apple-touch-icon">)
    iconGloss: null, // Force gloss effect for iOS even for precomposed
    button: 'BAIXAR', // Text for the install button
    scale: 'auto', // Scale based on viewport size (set to 1 to disable)
    speedIn: 300, // Show animation speed of the banner
    speedOut: 400, // Close animation speed of the banner
    daysHidden: 1, // Duration to hide the banner after being closed (0 = always show banner)
    daysReminder: 1, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
    force: null, // Choose 'ios', 'android' or 'windows'. Don't do a browser check, just always show this banner
    hideOnInstall: false, // Hide the banner after "VIEW" is clicked.
    iOSUniversalApp: true, // If the iOS App is a universal app for both iPad and iPhone, display Smart Banner to iPad users, too.      
    });
  } );
</script>
