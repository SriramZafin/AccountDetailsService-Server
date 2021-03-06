var spec ={
	"swagger": "2.0",
	"info": {
		"version": "1.0.0",
		"title": "Rest API to create/fetch accounts in Finkit system",
		"description": "A simple API to learn how to write OpenAPI Specification"
	},
	"schemes": [
		"https"
	],
	"host": "localhost:8080",
	"basePath": "/localhost:8080",
	"name":"Account Details Service Routes",
	"paths": {
		"/accounts": {
			"get": {
				"summary": "Gets account details",
				"description": "Returns a list containing all account details",
				"operationId":"getAllAccounts",
				"responses": {
					"200": {
						"description": "A list of Accounts",
						"schema": {
							"$ref": "#/definitions/Accounts"
						}
					}
				}
			},
			"post": {
				"summary": "Creates an account",
				"description": "Adds a new account to the Finkit system.",
				"operationId":"createAccount",
				"parameters": [
					{
						"name": "accountDetails",
						"in": "body",
						"description": "The account to be created.",
						"schema": {
							"$ref": "#/definitions/AccountDetails"
						}
					}
				],
				"responses": {
					"200": {
						"description": "Account succesfully created."
					},
					"400": {
						"description": "Error creating the account"
					}
				}
			}
		},
		"/accounts/{accountNumber}": {
			"get": {
				"summary": "Gets the account details for the given account number",
				"description": "Returns teh account details for the given account number",
				"operationId":"getAccountDetails",
				"parameters": [
					{
						"name": "accountNumber",
						"in": "path",
						"required": true,
						"description": "The person's accountNumber",
						"type": "integer"
					}
				],
				"responses": {
					"200": {
						"description": "The required account details",
						"schema": {
							"$ref": "#/definitions/AccountDetails"
						}
					},
					"404": {
						"description": "Account does not exist."
					}
				}
			}
		},
		"/account-update/{accountNumber}": {
			"put": {
				"summary": "Account details update",
				"description": "Updates the account details for the given accountNumber",
				"operationId":"updateAccountDetails",
				"parameters": [
					{
						"name": "accountNumber",
						"in": "path",
						"required": true,
						"description": "The person's accountNumber",
						"type": "integer"
					}
				],
				"responses": {
					"200": {
						"description": "Account Details succesfully updated"

					},
					"404": {
						"description": "Account does not exist."
					}
				}
			}
		},
		"/account-delete/{accountNumber}": {
			"delete": {
				"summary": "Account details delete",
				"description": "Deletes the account details for the given accountNumber",
				"operationId":"deleetAccount",
				"parameters": [
					{
						"name": "accountNumber",
						"in": "path",
						"required": true,
						"description": "The person's accountNumber",
						"type": "integer"
					}
				],
				"responses": {
					"200": {
						"description": "Account succesfully deleted"

					},
					"404": {
						"description": "Account does not exist."
					}
				}
			}
		}
	},
	"definitions": {
		"AccountDetails": {
			"required": [
				"accountNumber"
			],
			"properties": {
				"firstName": {
					"type": "string"
				},
				"lastName": {
					"type": "string"
				},
				"accountType": {
					"type": "string"
				},
				"accountNumber": {
					"type": "integer"
				},
				"accountBalance": {
					"type": "float"
				},
				"location": {
					"type": "string"
				}
			}
		},
		"Accounts": {
			"type": "array",
			"items": {
				"$ref": "#/definitions/AccountDetails"
			}
		}
	}
}