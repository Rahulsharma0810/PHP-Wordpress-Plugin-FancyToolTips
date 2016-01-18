( function() {
    tinymce.PluginManager.add( 'button6', function( editor, url ) {

        // Add a button that opens a window
        editor.addButton( 'g_tooltips_call_button6', {
            title: 'G-Tooltip 4 (Round)',
            image: '../wp-content/plugins/g-tool-tips/assets/img/round/round.png',
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
                        name: 'icon',
                        label: 'Icon' 
                        },


                        {type: 'listbox', 
                        name: 'effect', 
                        label: 'Effect', 
                        'values': [
                            {text: 'Effect-1', value: 'effect-1'},
                            {text: 'Effect-2', value: 'effect-2'},
                            {text: 'Effect-3', value: 'effect-3'},
                            {text: 'Effect-4', value: 'effect-4'},
                            {text: 'Effect-5', value: 'effect-5'},
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
        editor.insertContent('<span class="g-tooltip-round g-tooltip-round-' + e.data.effect + '">' + e.data.text + '<span class="g-tooltip-round-content"><i class="' + e.data.icon + '"></i></span></span>');
                 }
                } );

            }
      } );

    } );

} )();
