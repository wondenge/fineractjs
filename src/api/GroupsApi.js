


import ApiClient from "../ApiClient";
import DeleteGroupsGroupIdResponse from '../model/DeleteGroupsGroupIdResponse';
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetGroupsGroupIdAccountsResponse from '../model/GetGroupsGroupIdAccountsResponse';
import GetGroupsGroupIdResponse from '../model/GetGroupsGroupIdResponse';
import GetGroupsResponse from '../model/GetGroupsResponse';
import GetGroupsTemplateResponse from '../model/GetGroupsTemplateResponse';
import PostGroupsGroupIdCommandUnassignStaffRequest from '../model/PostGroupsGroupIdCommandUnassignStaffRequest';
import PostGroupsGroupIdCommandUnassignStaffResponse from '../model/PostGroupsGroupIdCommandUnassignStaffResponse';
import PostGroupsGroupIdRequest from '../model/PostGroupsGroupIdRequest';
import PostGroupsGroupIdResponse from '../model/PostGroupsGroupIdResponse';
import PostGroupsRequest from '../model/PostGroupsRequest';
import PostGroupsResponse from '../model/PostGroupsResponse';
import PutGroupsGroupIdRequest from '../model/PutGroupsGroupIdRequest';
import PutGroupsGroupIdResponse from '../model/PutGroupsGroupIdResponse';

/**
* Groups service.
* @module api/GroupsApi
* @version 1.0
*/
export default class GroupsApi {

    /**
    * Constructs a new GroupsApi. 
    * @alias module:api/GroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the activateOrGenerateCollectionSheet operation.
     * @callback module:api/GroupsApi~activateOrGenerateCollectionSheetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostGroupsGroupIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate a Group | Associate Clients | Disassociate Clients | Transfer Clients across groups | Generate Collection Sheet | Save Collection Sheet | Unassign a Staff | Assign a Staff | Close a Group | Unassign a Role | Update a Role
     * Activate a Group:  Groups can be created in a Pending state. This API exists to enable group activation.    If the group happens to be already active this API will result in an error.  Mandatory Fields: activationDate  Associate Clients:  This API allows to associate existing clients to a group.    The clients are listed from the office to which the group is associated.    If client(s) is already associated with group then API will result in an error.  Mandatory Fields: clientMembers  Disassociate Clients:  This API allows to disassociate clients from a group.    Disassociating a client with active joint liability group loans results in an error.  Mandatory Fields: clientMembers  Transfer Clients across groups:  This API allows to transfer clients from one group to another  Mandatory Fields: destinationGroupId and clients  Optional Fields: inheritDestinationGroupLoanOfficer (defaults to true) and transferActiveLoans (defaults to true)  Generate Collection Sheet:  This API retrieves repayment details of all jlg loans of all members of a group on a specified meeting date.  Mandatory Fields: calendarId and transactionDate  Save Collection Sheet:  This api allows the loan officer to perform bulk repayments of JLG loans for a group on its meeting date.  Mandatory Fields: calendarId, transactionDate, actualDisbursementDate  Optional Fields: clientsAttendance, bulkRepaymentTransaction, bulkDisbursementTransactions  Unassign a Staff:  Allows you to unassign the Staff.  Mandatory Fields: staffId  Assign a Staff:  Allows you to assign Staff to an existing Group.    The selected Staff should be belong to the same office (or an office higher up in the hierarchy) as this groupMandatory Fields: staffId  Optional Fields: inheritStaffForClientAccounts (Optional: Boolean if true all members of the group (i.e all clients with active loans and savings ) will inherit the staffId)  Close a Group:  This API exists to close a group. Groups can be closed if they don't have any non-closed clients/loans/savingsAccounts.    If the group has any active clients/loans/savingsAccount, this API will result in an error.Assign a Role:  Allows you to assign a Role to an existing member of a group.    We can define the different roles applicable to group members by adding code values to the pre-defined system code GROUPROLE. Example:Group leader etc.  Mandatory Fields: clientId, role  Unassign a Role:  Allows you to unassign Roles associated tp Group members.  Update a Role:  Allows you to update the member Role.  Mandatory Fields: role  Showing request/response for Transfer Clients across groups
     * @param {Number} groupId groupId
     * @param {module:model/PostGroupsGroupIdRequest} postGroupsGroupIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {Number} opts.roleId roleId
     * @param {module:api/GroupsApi~activateOrGenerateCollectionSheetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostGroupsGroupIdResponse}
     */
    activateOrGenerateCollectionSheet(groupId, postGroupsGroupIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postGroupsGroupIdRequest;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling activateOrGenerateCollectionSheet");
      }
      // verify the required parameter 'postGroupsGroupIdRequest' is set
      if (postGroupsGroupIdRequest === undefined || postGroupsGroupIdRequest === null) {
        throw new Error("Missing the required parameter 'postGroupsGroupIdRequest' when calling activateOrGenerateCollectionSheet");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
        'command': opts['command'],
        'roleId': opts['roleId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostGroupsGroupIdResponse;
      return this.apiClient.callApi(
        '/groups/{groupId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the create7 operation.
     * @callback module:api/GroupsApi~create7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostGroupsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Group
     * Creates a Group  Mandatory Fields: name, officeId, active, activationDate (if active=true)  Optional Fields: externalId, staffId, clientMembers
     * @param {module:model/PostGroupsRequest} postGroupsRequest 
     * @param {module:api/GroupsApi~create7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostGroupsResponse}
     */
    create7(postGroupsRequest, callback) {
      let postBody = postGroupsRequest;
      // verify the required parameter 'postGroupsRequest' is set
      if (postGroupsRequest === undefined || postGroupsRequest === null) {
        throw new Error("Missing the required parameter 'postGroupsRequest' when calling create7");
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
      let returnType = PostGroupsResponse;
      return this.apiClient.callApi(
        '/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete11 operation.
     * @callback module:api/GroupsApi~delete11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteGroupsGroupIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Group
     * A group can be deleted if it is in pending state and has no associations - clients, loans or savings
     * @param {Number} groupId groupId
     * @param {module:api/GroupsApi~delete11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteGroupsGroupIdResponse}
     */
    delete11(groupId, callback) {
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling delete11");
      }

      let pathParams = {
        'groupId': groupId
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
      let returnType = DeleteGroupsGroupIdResponse;
      return this.apiClient.callApi(
        '/groups/{groupId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroupsTemplate operation.
     * @callback module:api/GroupsApi~getGroupsTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {Number} opts.staffId 
     * @param {String} opts.dateFormat 
     * @param {module:api/GroupsApi~getGroupsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getGroupsTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
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
        '/groups/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postGroupTemplate operation.
     * @callback module:api/GroupsApi~postGroupTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/GroupsApi~postGroupTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postGroupTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
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
        '/groups/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAccounts operation.
     * @callback module:api/GroupsApi~retrieveAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGroupsGroupIdAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Group accounts overview
     * Retrieves details of all Loan and Savings accounts associated with this group.    Example Requests:    groups/1/accounts      groups/1/accounts?fields=loanAccounts,savingsAccounts,memberLoanAccounts,  memberSavingsAccounts
     * @param {Number} groupId groupId
     * @param {module:api/GroupsApi~retrieveAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGroupsGroupIdAccountsResponse}
     */
    retrieveAccounts(groupId, callback) {
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling retrieveAccounts");
      }

      let pathParams = {
        'groupId': groupId
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
      let returnType = GetGroupsGroupIdAccountsResponse;
      return this.apiClient.callApi(
        '/groups/{groupId}/accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll23 operation.
     * @callback module:api/GroupsApi~retrieveAll23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGroupsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Groups
     * The default implementation of listing Groups returns 200 entries with support for pagination and sorting. Using the parameter limit with description -1 returns all entries.  Example Requests:    groups    groups?fields=name,officeName,joinedDate    groups?offset=10&limit=50    groups?orderBy=name&sortOrder=DESC
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId officeId
     * @param {Number} opts.staffId staffId
     * @param {String} opts.externalId externalId
     * @param {String} opts.name name
     * @param {String} opts.underHierarchy underHierarchy
     * @param {Boolean} opts.paged paged
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {Boolean} opts.orphansOnly orphansOnly
     * @param {module:api/GroupsApi~retrieveAll23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGroupsResponse}
     */
    retrieveAll23(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'staffId': opts['staffId'],
        'externalId': opts['externalId'],
        'name': opts['name'],
        'underHierarchy': opts['underHierarchy'],
        'paged': opts['paged'],
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
      let returnType = GetGroupsResponse;
      return this.apiClient.callApi(
        '/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveGsimAccounts operation.
     * @callback module:api/GroupsApi~retrieveGsimAccountsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} groupId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.parentGSIMAccountNo 
     * @param {Number} opts.parentGSIMId 
     * @param {module:api/GroupsApi~retrieveGsimAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveGsimAccounts(groupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling retrieveGsimAccounts");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
        'parentGSIMAccountNo': opts['parentGSIMAccountNo'],
        'parentGSIMId': opts['parentGSIMId']
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
        '/groups/{groupId}/gsimaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne13 operation.
     * @callback module:api/GroupsApi~retrieveOne13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGroupsGroupIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Group
     * Retrieve group information.  Example Requests:    groups/1    groups/1?associations=clientMembers
     * @param {Number} groupId groupId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {Number} opts.roleId roleId
     * @param {module:api/GroupsApi~retrieveOne13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGroupsGroupIdResponse}
     */
    retrieveOne13(groupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling retrieveOne13");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
        'staffInSelectedOfficeOnly': opts['staffInSelectedOfficeOnly'],
        'roleId': opts['roleId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetGroupsGroupIdResponse;
      return this.apiClient.callApi(
        '/groups/{groupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate7 operation.
     * @callback module:api/GroupsApi~retrieveTemplate7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGroupsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Group Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:    Field Defaults  Allowed Value Lists  Example Requests:    groups/template    groups/template?officeId=2    groups/template?centerId=1    groups/template?centerId=1&staffInSelectedOfficeOnly=true
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId officeId
     * @param {Boolean} opts.center center
     * @param {Number} opts.centerId centerId
     * @param {String} opts.command command
     * @param {Boolean} opts.staffInSelectedOfficeOnly staffInSelectedOfficeOnly (default to false)
     * @param {module:api/GroupsApi~retrieveTemplate7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGroupsTemplateResponse}
     */
    retrieveTemplate7(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'center': opts['center'],
        'centerId': opts['centerId'],
        'command': opts['command'],
        'staffInSelectedOfficeOnly': opts['staffInSelectedOfficeOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetGroupsTemplateResponse;
      return this.apiClient.callApi(
        '/groups/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveglimAccounts operation.
     * @callback module:api/GroupsApi~retrieveglimAccountsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} groupId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.parentLoanAccountNo 
     * @param {module:api/GroupsApi~retrieveglimAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveglimAccounts(groupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling retrieveglimAccounts");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
        'parentLoanAccountNo': opts['parentLoanAccountNo']
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
        '/groups/{groupId}/glimaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unassignLoanOfficer operation.
     * @callback module:api/GroupsApi~unassignLoanOfficerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostGroupsGroupIdCommandUnassignStaffResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unassign a Staff
     * Allows you to unassign the Staff.  Mandatory Fields: staffId
     * @param {Number} groupId groupId
     * @param {module:model/PostGroupsGroupIdCommandUnassignStaffRequest} postGroupsGroupIdCommandUnassignStaffRequest 
     * @param {module:api/GroupsApi~unassignLoanOfficerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostGroupsGroupIdCommandUnassignStaffResponse}
     */
    unassignLoanOfficer(groupId, postGroupsGroupIdCommandUnassignStaffRequest, callback) {
      let postBody = postGroupsGroupIdCommandUnassignStaffRequest;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling unassignLoanOfficer");
      }
      // verify the required parameter 'postGroupsGroupIdCommandUnassignStaffRequest' is set
      if (postGroupsGroupIdCommandUnassignStaffRequest === undefined || postGroupsGroupIdCommandUnassignStaffRequest === null) {
        throw new Error("Missing the required parameter 'postGroupsGroupIdCommandUnassignStaffRequest' when calling unassignLoanOfficer");
      }

      let pathParams = {
        'groupId': groupId
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
      let returnType = PostGroupsGroupIdCommandUnassignStaffResponse;
      return this.apiClient.callApi(
        '/groups/{groupId}/command/unassign_staff', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update11 operation.
     * @callback module:api/GroupsApi~update11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutGroupsGroupIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Group
     * Updates a Group
     * @param {Number} groupId groupId
     * @param {module:model/PutGroupsGroupIdRequest} putGroupsGroupIdRequest 
     * @param {module:api/GroupsApi~update11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutGroupsGroupIdResponse}
     */
    update11(groupId, putGroupsGroupIdRequest, callback) {
      let postBody = putGroupsGroupIdRequest;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling update11");
      }
      // verify the required parameter 'putGroupsGroupIdRequest' is set
      if (putGroupsGroupIdRequest === undefined || putGroupsGroupIdRequest === null) {
        throw new Error("Missing the required parameter 'putGroupsGroupIdRequest' when calling update11");
      }

      let pathParams = {
        'groupId': groupId
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
      let returnType = PutGroupsGroupIdResponse;
      return this.apiClient.callApi(
        '/groups/{groupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
