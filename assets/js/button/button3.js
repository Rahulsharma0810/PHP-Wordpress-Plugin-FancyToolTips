( function() {
    tinymce.PluginManager.add( 'button3', function( editor, url ) {

        // Add a button that opens a window
        editor.addButton( 'g_tooltips_call_button3', {
            title: 'G-Tooltip 2 (Line)',
            image: '../wp-content/plugins/g-tool-tips/assets/img/line/line.png',
            onclick: function() {

                // Open window
                editor.windowManager.open( {
                    title: 'Write Tooltip Text',
                    body: [{
                        type: 'textbox',
                        name: 'text',
                        label: 'Text'
                        },
                        {
                        type: 'textbox',
                        name: 'tip',
                        label: 'Tooltip Text' 
                        },
                        {
                            type   : 'container',
                            name   : 'container',
                            label  : '',
                            html   : 'SEE <a href="http://www.google.com"> Live Demo & How To</a>'
                        },


                        ],

onsubmit: function( e ) {
        editor.insertContent(
            
'<span class="g-tooltip-line">' + e.data.text + '<span class="g-tooltip-line-content"><span class="g-tooltip-line-text"><span class="g-tooltip-line-inner">' + e.data.tip + '</span></span></span></span>'
            );
                 }

                } );

            }
      } );

    } );

} )();
