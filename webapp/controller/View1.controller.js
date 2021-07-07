sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("chart.controller.View1", {
			onInit: function () {

			},

			onDataLabelChanged : function(oEvent){
				debugger;

				var that=this;
				var oVizFrame = that.getView().byId("idVizFrame");
				
				oVizFrame.setVizProperties({
				plotArea: {
				dataLabel: {
				visible: oEvent.getParameter("state")
				}
				}
				});

			},
			onSumLabelChanged : function(oEvent){
				debugger;
				var that=this;
				var oVizFrame = that.getView().byId("idVizFrame");
				var sumLabelSwitch = oEvent.getParameter("state");
				oVizFrame.setVizProperties({
				plotArea: {
				dataLabel: {
				showTotal: sumLabelSwitch
				}
				}
				});
				
				},

				onAxisTitleChanged : function(oEvent){
					debugger;
					var that=this;
					var oVizFrame = that.getView().byId("idVizFrame");
					
					var state = oEvent.getParameter("state");
					oVizFrame.setVizProperties({
					valueAxis: {
					title: {
					visible: state
					}
					},
					categoryAxis: {
					title: {
					visible: state
					}
					}
					});
					
					},

					onTypeSelected : function(oEvent){
						debugger;
						var that=this;
						var typeRadio = oEvent.getSource().getSelectedButton().getProperty("text");
						var oVizFrame = that.getView().byId("idVizFrame");
						
						if (typeRadio === "Regular") {
						
						oVizFrame.setVizType("line");
						
						} else {
						oVizFrame.setVizType("100_stacked_bar");
						oVizFrame.setVizProperties({
						plotArea: {
						mode: "percentage",
						drawingEffect: "glossy",
						
						dataLabel: {
						type: "percentage",
						visible: true
						
						}
						}
						
						});
						
						}
						},

						onChnageCharts:function(oEvent){
							debugger;
							var stateof = oEvent.getParameter("state");
							if(stateof == true){
								var oVizFrame = this.getView().byId("idVizFrame");
			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range(),
					dataLabel: {
						showTotal: true
					}
				},
				tooltip: {
					visible: true
				},
				title: {
					text: " Bar Chart"
				}
			});

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: "Eyear",
					value: "{Eyear}"
				}],

				measures: [{
					name: "Expenses",
					value: "{Expenses}"
				}],

				// {
				// 	name: "Emonth",
				// 	value: "{Emonth}"
				// }

				data: {
					path: "/expensesSet"
				}
			});

			oVizFrame.setDataset(oDataset);

			var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "valueAxis",
				"type": "Measure",
				"values": ["Expenses"]
			}),
			// oFeedValueAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			// 	"uid": "valueAxis",
			// 	"type": "Measure",
			// 	"values": ["Emonth"]
			// }),
			oFeedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "categoryAxis",
				"type": "Dimension",
				"values": ["Eyear"]
			});


			oVizFrame.addFeed(oFeedValueAxis);
			// oVizFrame.addFeed(oFeedValueAxis1);
			oVizFrame.addFeed(oFeedCategoryAxis);
							}

						}
		});
	});
