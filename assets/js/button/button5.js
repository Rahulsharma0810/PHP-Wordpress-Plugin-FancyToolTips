( function() {
    tinymce.PluginManager.add( 'button5', function( editor, url ) {

        // Add a button that opens a window
        editor.addButton( 'g_tooltips_call_button5', {
            title: 'G-Tooltip 3 (Box)',
            image: '../wp-content/plugins/g-tool-tips/assets/img/box/box.png',
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

                        {type: 'listbox', 
                        name: 'effect', 
                        label: 'Effect', 
                        'values': [
                            {text: 'Effect-1', value: 'effect-1'},
                            {text: 'Effect-2', value: 'effect-2'},
                         ]
                        },

                         {
                            type   : 'container',
                            name   : 'container',
                            label  : '',
                            html   : 'SEE <a href="http://www.google.com"> Live Demo & How To</a>'
                        },

                        ],


onsubmit: function( e ) {
        editor.insertContent('<span class="g-tooltip-box g-tooltip-box-' 
            + e.data.effect + 
            '"><span class="g-tooltip-box-item">' 
            + g.data.text + 
            '</span><span class="g-tooltip-box-content clearfix"><span class="g-tooltip-box-text">'
            + e.data.tip + 
            '</span></span></span>' 
            );
                 }
                } );

            }
      } );

    } );

} )();
