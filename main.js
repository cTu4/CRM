
Ext.onReady(function () {
    Ext.define('Users', {
        extend: 'Ext.data.Model',
        fields: ['id','name','surname','patr','phone','id_user'],
    });
    var store = Ext.create('Ext.data.Store', {
        model: 'Users',
        proxy: {
            type: 'ajax',
            method: 'POST',
            url : 'Database/Getdata.php',
        },
        autoload: true
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
        items: [
            {
                xtype: 'panel',
                layout: {
                  align: 'stretch',
                  type: 'vbox'
                },
                title: 'Добавить запись',
                minWidth: 350,
                region: 'west',
                width: 500,
                items: [
                    {
                        xtype: 'textfield',
                        name: 'surname',
                        id: 'surname',
                        fieldLabel: 'Фамилия:'
                    },
                    {
                        xtype: 'textfield',
                        name: 'name',
                        id: 'name',
                        fieldLabel: 'Имя:'
                    },
                    {
                        xtype: 'textfield',
                        name: 'patr',
                        id: 'patr',
                        fieldLabel: 'Отчество:'
                    },
                    {
                        xtype: 'numberfield',
                        minValue: 0,
                        keyNavEnabled: false,
                        mouseWheelEnabled: false,
                        hideTrigger: true,
                        name: 'phone',
                        id: 'phone',
                        fieldLabel: ' Телефон:'
                    },
                    {
                        xtype: 'button',
                        text: 'Добавить',
                        handler(){

                            Ext.Ajax.request({
                                method: 'POST',
                                url: 'Database/AddUser.php',
                                params: {
                                        name: Ext.getCmp('name').getValue(),
                                        surname: Ext.getCmp('surname').getValue(),
                                        phone: Ext.getCmp('phone').getValue(),
                                        patr: Ext.getCmp('patr').getValue(),
                                    },
                                success(resp){
                                    console.log(resp.responseText);
                                    store.load();
                                    Ext.getCmp('name').setValue('');
                                    Ext.getCmp('surname').setValue('');
                                    Ext.getCmp('phone').setValue('');
                                    Ext.getCmp('patr').setValue('');

                                },
                                failure(resp){
                                    console.log(resp);
                                }
                            });
                        }
                    }
                ]
            },
            {
                xtype:'panel',
                title: 'Телефонная книга',
                region: 'center',
                items: [
                    {
                        xtype: 'gridpanel',
                        store: store,
                        selModel: 'cellmodel',
                        plugins: {
                            ptype: 'cellediting',
                            clicksToEdit: 2
                        },
                        buttons:[
                            {
                                xtype:'button',
                                text: 'Сохранить',
                                width: '100%',
                                handler(){
                                    var data = store.getModifiedRecords();
                                    var arr = [];
                                    data.forEach(function (item) {
                                        arr.push({id: item.id,id_user:item.data.id_user,keys: Object.keys(item.modified), mod_data: item.data});
                                    });

                                    console.log(data);

                                    console.log(arr);
                                    Ext.Ajax.request({
                                        method: 'POST',
                                        url: 'Database/EditUser.php',
                                        params:  {data: JSON.stringify(arr)},
                                        success(resp){
                                            store.load();
                                        },
                                        failure(resp){
                                            console.log(resp)
                                        }
                                    });
                                }
                            }
                        ],
                        columns: [
                            {text: 'Фамилия', dataIndex: 'surname',flex: 1, editor:{
                                    field: {
                                        xtype: 'textfield',
                                        allowBlank: false
                                    }
                                }},
                            {text: 'Имя', dataIndex: 'name',flex: 1, editor:{
                                    field: {
                                        xtype: 'textfield',
                                        allowBlank: false
                                    }
                                }},
                            {text: 'Отчество', dataIndex: 'patr',flex: 1, editor:{
                                    field: {
                                        xtype: 'textfield',
                                        allowBlank: false
                                    }
                                }},
                            {text: 'Телефон', dataIndex: 'phone',flex: 1, editor:{
                                    field: {
                                        xtype: 'textfield',
                                        allowBlank: false
                                    }
                                }},
                            {
                                xtype:'actioncolumn',
                                text: 'Действия',
                                width:100,
                                items: [{
                                    iconCls: 'x-fa fa-trash icon-padding',
                                    handler(grid, rowIndex, colIndex){
                                        var id = grid.getStore().getData().items[rowIndex].id;
                                        var id_user = grid.getStore().getData().items[rowIndex].id_user;

                                        Ext.Ajax.request({
                                            method: 'POST',
                                            url: 'Database/DelUser.php',
                                            params: {
                                                id: id,
                                                id_user: id_user
                                            },
                                            success(resp) {
                                                console.log(resp.responseText);
                                                store.load();
                                            },
                                            failure(resp) {

                                            }
                                        });

                                    }
                                }]
                            }
                        ]
                    }
                ],
                listeners: {
                    beforeRender(){
                        store.load();
                        console.log(store.getData())
                    }
                }
            }
        ]
    });
});