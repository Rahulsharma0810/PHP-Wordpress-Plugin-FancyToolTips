( function() {
    tinymce.PluginManager.add( 'fb_test', function( editor, url ) {

        // Add a button that opens a window
        editor.addButton( 'fb_test_button_key', {
            title: 'G-Tooltip1 (Arrow + Box)',
            image: '../wp-content/plugins/g-tool-tips/assets/img/sharp/sharp.png',
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
                        ],

onsubmit: function( e ) {
        editor.insertContent(
            '<span class="g-tooltip-sharp g-tooltip-sharp-turnright"><span class="g-tooltip-sharp-item">' + e.data.text + '</span><span class="g-tooltip-sharp-content">' + e.data.tip + '</span></span>' );
      }
                } );

            }
      } );

    } );

} )();
