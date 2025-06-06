//@ui5-bundle projectui5/Component-preload.js
sap.ui.require.preload({
	"projectui5/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","projectui5/model/models"],(e,t)=>{"use strict";return e.extend("projectui5.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init(){e.prototype.init.apply(this,arguments);this.setModel(t.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"projectui5/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("projectui5.controller.App",{onInit(){}})});
},
	"projectui5/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("projectui5.controller.View1",{onInit(){}})});
},
	"projectui5/i18n/i18n.properties":'# This is the resource bundle for projectui5\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"projectui5/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"projectui5","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.17.5","toolsId":"dc8b124b-a070-40ae-8df3-5115ef7285e7"},"dataSources":{"mainService":{"uri":"/odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.136.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"projectui5.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlAggregation":"pages","controlId":"app","transition":"slide","type":"View","viewType":"XML","path":"projectui5.view","async":true,"viewPath":"projectui5.view"},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"id":"View1","name":"View1"}}},"rootView":{"viewName":"projectui5.view.App","type":"XML","id":"App","async":true}}}',
	"projectui5/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"projectui5/view/App.view.xml":'<mvc:View controllerName="projectui5.controller.App"\n    displayBlock="true"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><App id="app"></App></mvc:View>',
	"projectui5/view/View1.view.xml":'<mvc:View controllerName="projectui5.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"></Page></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
