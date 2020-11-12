


import ApiClient from "../ApiClient";
import DeleteClientsClientIdResponse from '../model/DeleteClientsClientIdResponse';
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetClientsClientIdAccountsResponse from '../model/GetClientsClientIdAccountsResponse';
import GetClientsClientIdResponse from '../model/GetClientsClientIdResponse';
import GetClientsResponse from '../model/GetClientsResponse';
import GetClientsTemplateResponse from '../model/GetClientsTemplateResponse';
import PostClientsClientIdRequest from '../model/PostClientsClientIdRequest';
import PostClientsClientIdResponse from '../model/PostClientsClientIdResponse';
import PostClientsRequest from '../model/PostClientsRequest';
import PostClientsResponse from '../model/PostClientsResponse';
import PutClientsClientIdRequest from '../model/PutClientsClientIdRequest';
import PutClientsClientIdResponse from '../model/PutClientsClientIdResponse';

/**
* Client service.
* @module api/ClientApi
* @version 1.0
*/
export default class ClientApi {

    /**
    * Constructs a new ClientApi. 
    * @alias module:api/ClientApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the activate1 operation.
     * @callback module:api/ClientApi~activate1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostClientsClientIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate a Client | Close a Client | Reject a Client | Withdraw a Client | Reactivate a Client | UndoReject a Client | UndoWithdraw a Client | Assign a Staff | Unassign a Staff | Update Default Savings Account | Propose a Client Transfer | Withdraw a Client Transfer | Reject a Client Transfer | Accept a Client Transfer | Propose and Accept a Client Transfer
     * Activate a Client:  Clients can be created in a Pending state. This API exists to enable client activation (for when a client becomes an approved member of the financial Institution).  If the client happens to be already active this API will result in an error.  Close a Client:  Clients can be closed if they do not have any non-closed loans/savingsAccount. This API exists to close a client .  If the client have any active loans/savingsAccount this API will result in an error.  Reject a Client:  Clients can be rejected when client is in pending for activation status.  If the client is any other status, this API throws an error.  Mandatory Fields: rejectionDate, rejectionReasonId  Withdraw a Client:  Client applications can be withdrawn when client is in a pending for activation status.  If the client is any other status, this API throws an error.  Mandatory Fields: withdrawalDate, withdrawalReasonId  Reactivate a Client: Clients can be reactivated after they have been closed.  Trying to reactivate a client in any other state throws an error.  Mandatory Fields: reactivationDate  UndoReject a Client:  Clients can be reactivated after they have been rejected.  Trying to reactivate a client in any other state throws an error.  Mandatory Fields: reopenedDateUndoWithdraw a Client:  Clients can be reactivated after they have been withdrawn.  Trying to reactivate a client in any other state throws an error.  Mandatory Fields: reopenedDate  Assign a Staff:  Allows you to assign a Staff for existed Client.  The selected Staff should belong to the same office (or an officer higher up in the hierarchy) as the Client he manages.  Unassign a Staff:  Allows you to unassign the Staff assigned to a Client.  Update Default Savings Account:  Allows you to modify or assign a default savings account for an existing Client.  The selected savings account should be one among the existing savings account for a particular customer.  Propose a Client Transfer:  Allows you to propose the transfer of a Client to a different Office.  Withdraw a Client Transfer:  Allows you to withdraw the proposed transfer of a Client to a different Office.  Withdrawal can happen only if the destination Branch (to which the transfer was proposed) has not already accepted the transfer proposal  Reject a Client Transfer:  Allows the Destination Branch to reject the proposed Client Transfer.  Accept a Client Transfer:  Allows the Destination Branch to accept the proposed Client Transfer.  The destination branch may also choose to link this client to a group (in which case, any existing active JLG loan of the client is rescheduled to match the meeting frequency of the group) and loan Officer at the time of accepting the transfer  Propose and Accept a Client Transfer:  Abstraction over the Propose and Accept Client Transfer API's which enable a user with Data Scope over both the Target and Destination Branches to directly transfer a Client to the destination Office.  Showing request/response for 'Reject a Client Transfer'
     * @param {Number} clientId clientId
     * @param {module:model/PostClientsClientIdRequest} postClientsClientIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/ClientApi~activate1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostClientsClientIdResponse}
     */
    activate1(clientId, postClientsClientIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postClientsClientIdRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling activate1");
      }
      // verify the required parameter 'postClientsClientIdRequest' is set
      if (postClientsClientIdRequest === undefined || postClientsClientIdRequest === null) {
        throw new Error("Missing the required parameter 'postClientsClientIdRequest' when calling activate1");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
        'command': opts['command']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostClientsClientIdResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the create5 operation.
     * @callback module:api/ClientApi~create5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostClientsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Client
     * Note:  1. You can enter either:firstname/middlename/lastname - for a person (middlename is optional) OR fullname - for a business or organisation (or person known by one name).  2.If address is enable(enable-address=true), then additional field called address has to be passed.  Mandatory Fields: firstname and lastname OR fullname, officeId, active=true and activationDate OR active=false, if(address enabled) address  Optional Fields: groupId, externalId, accountNo, staffId, mobileNo, savingsProductId, genderId, clientTypeId, clientClassificationId
     * @param {module:model/PostClientsRequest} postClientsRequest 
     * @param {module:api/ClientApi~create5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostClientsResponse}
     */
    create5(postClientsRequest, callback) {
      let postBody = postClientsRequest;
      // verify the required parameter 'postClientsRequest' is set
      if (postClientsRequest === undefined || postClientsRequest === null) {
        throw new Error("Missing the required parameter 'postClientsRequest' when calling create5");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostClientsResponse;
      return this.apiClient.callApi(
        '/clients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete9 operation.
     * @callback module:api/ClientApi~delete9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteClientsClientIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Client
     * If a client is in Pending state, you are allowed to Delete it. The delete is a 'hard delete' and cannot be recovered from. Once clients become active or have loans or savings associated with them, you cannot delete the client but you may Close the client if they have left the program.
     * @param {Number} clientId clientId
     * @param {Object} body 
     * @param {module:api/ClientApi~delete9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteClientsClientIdResponse}
     */
    delete9(clientId, body, callback) {
      let postBody = body;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling delete9");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling delete9");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeleteClientsClientIdResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientTemplate operation.
     * @callback module:api/ClientApi~getClientTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.legalFormType 
     * @param {Number} opts.officeId 
     * @param {Number} opts.staffId 
     * @param {String} opts.dateFormat 
     * @param {module:api/ClientApi~getClientTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getClientTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'legalFormType': opts['legalFormType'],
        'officeId': opts['officeId'],
        'staffId': opts['staffId'],
        'dateFormat': opts['dateFormat']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/vnd.ms-excel'];
      let returnType = null;
      return this.apiClient.callApi(
        '/clients/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postClientTemplate operation.
     * @callback module:api/ClientApi~postClientTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.legalFormType 
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/ClientApi~postClientTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postClientTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'legalFormType': opts['legalFormType']
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file'],
        'locale': opts['locale'],
        'dateFormat': opts['dateFormat']
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/clients/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll20 operation.
     * @callback module:api/ClientApi~retrieveAll20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Clients
     * The list capability of clients can support pagination and sorting.  Example Requests:  clients  clients?fields=displayName,officeName,timeline  clients?offset=10&limit=50  clients?orderBy=displayName&sortOrder=DESC
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch sqlSearch
     * @param {Number} opts.officeId officeId
     * @param {String} opts.externalId externalId
     * @param {String} opts.displayName displayName
     * @param {String} opts.firstName firstName
     * @param {String} opts.lastName lastName
     * @param {String} opts.status status
     * @param {String} opts.underHierarchy underHierarchy
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {Boolean} opts.orphansOnly orphansOnly
     * @param {module:api/ClientApi~retrieveAll20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientsResponse}
     */
    retrieveAll20(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
        'officeId': opts['officeId'],
        'externalId': opts['externalId'],
        'displayName': opts['displayName'],
        'firstName': opts['firstName'],
        'lastName': opts['lastName'],
        'status': opts['status'],
        'underHierarchy': opts['underHierarchy'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder'],
        'orphansOnly': opts['orphansOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetClientsResponse;
      return this.apiClient.callApi(
        '/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAssociatedAccounts operation.
     * @callback module:api/ClientApi~retrieveAssociatedAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientsClientIdAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve client accounts overview
     * An example of how a loan portfolio summary can be provided. This is requested in a specific use case of the community application. It is quite reasonable to add resources like this to simplify User Interface development.  Example Requests:   clients/1/accounts  clients/1/accounts?fields=loanAccounts,savingsAccounts
     * @param {Number} clientId clientId
     * @param {module:api/ClientApi~retrieveAssociatedAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientsClientIdAccountsResponse}
     */
    retrieveAssociatedAccounts(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveAssociatedAccounts");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetClientsClientIdAccountsResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveObligeeDetails operation.
     * @callback module:api/ClientApi~retrieveObligeeDetailsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId 
     * @param {module:api/ClientApi~retrieveObligeeDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveObligeeDetails(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveObligeeDetails");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/clients/{clientId}/obligeedetails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne10 operation.
     * @callback module:api/ClientApi~retrieveOne10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientsClientIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Client
     * Example Requests:  clients/1   clients/1?template=true   clients/1?fields=id,displayName,officeName
     * @param {Number} clientId clientId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {module:api/ClientApi~retrieveOne10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientsClientIdResponse}
     */
    retrieveOne10(clientId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveOne10");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
        'staffInSelectedOfficeOnly': opts['staffInSelectedOfficeOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetClientsClientIdResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate5 operation.
     * @callback module:api/ClientApi~retrieveTemplate5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Client Details Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Request:  clients/template
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId officeId
     * @param {String} opts.commandParam commandParam
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {module:api/ClientApi~retrieveTemplate5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientsTemplateResponse}
     */
    retrieveTemplate5(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'commandParam': opts['commandParam'],
        'staffInSelectedOfficeOnly': opts['staffInSelectedOfficeOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetClientsTemplateResponse;
      return this.apiClient.callApi(
        '/clients/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTransferTemplate operation.
     * @callback module:api/ClientApi~retrieveTransferTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId 
     * @param {module:api/ClientApi~retrieveTransferTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTransferTemplate(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveTransferTemplate");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/clients/{clientId}/transferproposaldate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update9 operation.
     * @callback module:api/ClientApi~update9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutClientsClientIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Client
     * Note: You can update any of the basic attributes of a client (but not its associations) using this API.  Changing the relationship between a client and its office is not supported through this API. An API specific to handling transfers of clients between offices is available for the same.  The relationship between a client and a group must be removed through the Groups API.
     * @param {Number} clientId clientId
     * @param {module:model/PutClientsClientIdRequest} putClientsClientIdRequest 
     * @param {module:api/ClientApi~update9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutClientsClientIdResponse}
     */
    update9(clientId, putClientsClientIdRequest, callback) {
      let postBody = putClientsClientIdRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling update9");
      }
      // verify the required parameter 'putClientsClientIdRequest' is set
      if (putClientsClientIdRequest === undefined || putClientsClientIdRequest === null) {
        throw new Error("Missing the required parameter 'putClientsClientIdRequest' when calling update9");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PutClientsClientIdResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
