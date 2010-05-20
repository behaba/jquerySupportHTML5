/*

   Adapted form the DiveIntoHTML5 Article
   http://diveintohtml5.org/everything.html
   Usage : $.support.audio to test the Audio support or jQuery.support.color to test the input[type=color] implementation

*/
;(function ($) {
    var a = document.createElement('audio'),
    b = document.createElement('canvas'),
    c = document.createElement('iframe'),
    d = document.createElement('input'),
    e = document.createElement('video'),
    f = document.createElement('div'),
    g = ['color', 'email', 'number', 'range', 'search', 'tel', 'url', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week'];
    
    f.innerHTML = '<svg></svg>';
    
    for (i = 0; i < g.length; i++) {
        g[g[i]] = document.createElement('input');
        g[g[i]].setAttribute('type', g[i])
    }
    
    $.extend($.support, {
        audio: !! document.createElement('audio').canPlayType,
        audioMp3: !! (a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, '')),
        audioVorbis: !! (a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, '')),
        audioWav: !! (a.canPlayType && a.canPlayType('audio/wav; codecs="1"').replace(/no/, '')),
        audioAAC: !! (a.canPlayType && a.canPlayType('audio/mp4; codecs="mp4aud.40.2"').replace(/no/, '')),
        canvas: !! b.getContext,
        canvasTxt: b.getContext && typeof b.getContext('2d').fillText == 'function',
        command: 'type' in document.createElement('command'),
        datalist: 'options' in document.createElement('datalist'),
        details: 'open' in document.createElement('details'),
        device: 'type' in document.createElement('device'),
        formConstraints: 'noValidate' in c,
        iframeSandbox: 'sandbox' in c,
        iframeSrcDoc: 'srcdoc' in c,
        autofocus: 'autofocus' in d,
        placeholder: 'placeholder' in d,
        color: g.color.type !== 'text',
        email: g.email.type !== 'text',
        number: g.number.type !== 'text',
        range: g.range.type !== 'text',
        search: g.search.type !== 'text',
        tel: g.tel.type !== 'text',
        url: g.url.type !== 'text',
        date: g.date.type !== 'text',
        time: g.time.type !== 'text',
        datetime: g.datetime.type !== 'text',
        'datetime-local': g['datetime-local'].type !== 'text',
        month: g.month.type !== 'text',
        week: g.week.type !== 'text',
        meter: 'value' in document.createElement('meter'),
        output: 'value' in document.createElement('output'),
        progress: 'value' in document.createElement('progress'),
        time: 'valueAsDate' in document.createElement('time'),
        video: !! document.createElement('video').canPlayType,
        videoCaptions: 'track' in document.createElement('track'),
        videoPoster: 'poster' in document.createElement('video'),
        videoWebM: !! (e.canPlayType && e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, '')),
        videoH264: !! (e.canPlayType && e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, '')),
        videoTheora: !! (e.canPlayType && e.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/no/, '')),
        contentEditable: 'isContentEditable' in document.createElement('span'),
        crossDocumentMessaging: !! window.postMessage,
        dragAndDrop: 'draggable' in document.createElement('span'),
        fileAPI: typeof FileReader != 'undefined',
        geoLocation: !! navigator.geolocation,
        history: !! (window.history && window.history.pushState && window.history.popState),
        localStorage: (('localStorage' in window) && window['localStorage'] !== null),
        microdata: !! document.getItems,
        applicationCache: !! window.applicationCache,
        eventSource: typeof EventSource !== 'undefined',
        sessionStorage: ('sessionStorage' in window) && window['sessionStorage'] !== null,
        svg: !! (document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect),
        svgInHtml: !! (window.SVGSVGElement && f.firstChild instanceof window.SVGSVGElement),
        webSimpleDB: !! window.indexedDB,
        webSocket: !! window.WebSocket,
        openDatabase: !! window.openDatabase,
        webWorkers: !! window.Worker,
        undo: typeof UndoManager !== 'undefined'
    })
})(jQuery);