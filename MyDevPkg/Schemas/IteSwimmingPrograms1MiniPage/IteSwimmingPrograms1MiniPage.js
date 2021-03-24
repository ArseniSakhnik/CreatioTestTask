define("IteSwimmingPrograms1MiniPage", [], function() {
	return {
		entitySchemaName: "IteSwimmingPrograms",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "HeaderContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "HeaderColumnContainer",
				"values": {
					"itemType": 6,
					"caption": {
						"bindTo": "getPrimaryDisplayColumnValue"
					},
					"labelClass": [
						"label-in-header-container"
					],
					"visible": {
						"bindTo": "isNotAddMode"
					}
				},
				"parentName": "HeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IteName57ceebf4-e4db-4d2f-93e1-59c3f4634187",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "IteName"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IteIdbde1e33e-b038-417f-b32b-6bdd4924117e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "IteId"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ItePeriodicity28d7a192-8178-42cc-ae68-c63427915aea",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "ItePeriodicity"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "IteOwnera2c57e47-14ff-4af7-9e49-08e8deb77ada",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "IteOwner"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "IteComment56646c52-f3bd-48d9-9d42-308f4fbfc248",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "IteComment"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "IteIsActive039838dc-7658-46ad-9f86-afd1c25d4627",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "IteIsActive"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "IteName34a445bf-82aa-4c0d-9342-a78f4cadd1c8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "IteName"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "IteId0be5144b-7a5d-46c2-ae64-88f2a6a5fb76",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "IteId"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ItePeriodicity12253857-b361-4ad0-8452-b6418f869450",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "ItePeriodicity"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "IteOwnerb841d0f8-1fb5-4222-818d-3301f7229095",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "IteOwner"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "IteComment875b5c69-f1d8-4dd2-960f-43f6bdb57060",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "IteComment"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "IteIsActivea742842f-97fc-448a-bf74-0bb9bb399c8a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "IteIsActive"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "IteNamead3e2158-40e5-46d8-8328-ef50ee4ab31e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "IteName"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "IteId3d664c0e-3320-4ae8-8447-92fba8d84a49",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "IteId"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "ItePeriodicityb33bf04a-50e2-46b0-8400-f97f04a0c2cd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "ItePeriodicity"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "IteOwner5ccf678e-8275-452f-a310-a1723aa100bc",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "IteOwner"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "IteCommente64e82b8-9be5-44a3-971e-84313e140694",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "IteComment"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "IteIsActive8478a4cb-87cb-49fd-b840-4365a2dd110b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "IteIsActive"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 18
			}
		]/**SCHEMA_DIFF*/
	};
});
