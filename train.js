Ext.onReady(function () {
    Ext.define('Users', {
        extend: 'Ext.data.Model',
        fields: ['name','surname']
    });
    var store = Ext.create(Ext.data.Store,{
        model: 'Users',
        data: [
            {name:'Alex',surname:'Braw'},
            {name:'Alex',surname:'Braw'},
            {name:'Alex',surname:'Braw'},
            {name:'Alex',surname:'Braw'}
        ]
    });
    Ext.create({
        xtype: 'panel',
        layout: 'border',
        height: window.innerHeight-10,
        width: '100%',
        renderTo: Ext.getElementById('main'),
        defaults: {
            collapsible: true,
            split: true,
            bodyPadding: 15
        },
        items:[
            {
                xtype: 'panel',
                title: 'Table',
                region: 'west',
                width: 300,
                layout: {
                    align: 'stretch',
                    type: 'vbox'
                },
                items:[
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        id: 'name'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Surname',
                        id: 'surname'
                    }
                ]
            },
            {
                xtype: 'gridpanel',
                title: 'Table_left',
                region: 'center',
                columns: [
                    {text: 'NAME',dataIndex:'name',flex:1},
                    {text: 'Surname',dataIndex:'surname',flex:1}
                ],
                store: store

            }
        ]
    });
});