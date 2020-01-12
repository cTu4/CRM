Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        width: 500,
        height: 300,
        title: 'Border Layout',
        layout: 'border',
        items: [
            {
            // xtype: 'panel' implied by default
            title: 'West Region is collapsible',
            region:'west',
            xtype: 'panel',
            margin: '5 0 0 5',
            width: 200,
            collapsible: true,   // make collapsible
            id: 'west-region-container',
            layout: 'fit'
        },{
            title: 'Center Region',
            region: 'center',     // center region is required, no width/height specified
            xtype: 'panel',
            layout: 'fit',
            margin: '5 5 0 0'
        }],
        renderTo: Ext.getBody()
    });
});
