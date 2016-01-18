( function() {
    tinymce.PluginManager.add( 'button2', function( editor, url ) {

        // Add a button that opens a window
        editor.addButton( 'g_tooltips_call_button2', {
            title: 'G-Tooltip 1 (Classic)',
            image: '../wp-content/plugins/g-tool-tips/assets/img/classic/classic.png',
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
                       label: 'Tooltip Text (180 char)' 
                        },

                        {type: 'textbox',
                        name: 'image_url',
                        label: 'Image URL' 
                        },

                        {type: 'listbox', 
                        name: 'effect', 
                        label: 'Effect', 
                        'values': [
                            {text: 'Effect-1', value: 'effect-1'},
                            {text: 'Effect-2', value: 'effect-2'},
                            {text: 'Effect-3', value: 'effect-3'},
                            {text: 'Effect-4', value: 'effect-4'},

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
        editor.insertContent('<p> <span class="g-tooltip-classic g-tooltip-classic-' +
         e.data.effect + '"><span class="g-tooltip-classic-item">' + 
         e.data.text + ' ' + '</span><span class="g-tooltip-classic-content clearfix"><img src="' + 
         e.data.image_url + '" /><span class="g-tooltip-classic-text">' + 
         e.data.tip + '</span></span></span>' );
                 }
                } );

            }
      } );

    } );

} )();
