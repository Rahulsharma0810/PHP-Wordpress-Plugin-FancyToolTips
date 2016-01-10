
( function() {
    tinymce.PluginManager.add( 'fb_test', function( editor, url ) {

        // Add a button that opens a window
        editor.addButton( 'fb_test_button_key', {
            text: 'Pure Css Tool Tip',
            icon: false,

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
                        name: 'tooltiptext',
                        label: 'Tooltip Text' 
                        },

/*==============================================
=            g-tooltip select style            =
==============================================*/

                        {type: 'listbox', 
                        name: 'style_type', 
                        label: 'Tooltip Style', 
                        'values': [
                        {text: 'bloated', value: 'bloated'},
                        {text: 'box', value: 'box'},
                        {text: 'classic', value: 'classic'},
                        {text: 'comic', value: 'comic'},
                        {text: 'curved', value: 'curved'},
                        {text: 'flip', value: 'flip'},
                        {text: 'line', value: 'line'},
                        {text: 'round', value: 'round'},
                        {text: 'sharp', value: 'sharp'}
                        ]},

/*=====  End of g-tooltip select style  ======*/

/*===================================================
=            g-tooltip chosing direction            =
===================================================*/
                        {type: 'listbox', 
                        name: 'direction', 
                        label: 'Tooltip Direction', 
                        'values': [
                        {text: 'Left', value: 'left'},
                        {text: 'Right', value: 'right'},
                        {text: 'Center', value: 'up'},
                        {text: 'Center', value: 'down'}
                        ]}
/*=====  End of g-tooltip chosing direction  ======*/

                    ],
                    onsubmit: function( e ) {
                    editor.insertContent( 
                        '<span class="tooltip-sharp tooltip-sharp-turn-"' + {e.data.text} + 
                        '><span class="tooltip-sharp-item">' + e.data.text + '</span>' + '<span class="tooltip-sharp-content">' + e.data.tooltiptext + '</span>');
                    }

                } );
            }
      } );

    } );

} )();