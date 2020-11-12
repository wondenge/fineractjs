


import ApiClient from "../ApiClient";
import GetStandingInstructionsResponse from '../model/GetStandingInstructionsResponse';
import GetStandingInstructionsStandingInstructionIdResponse from '../model/GetStandingInstructionsStandingInstructionIdResponse';
import GetStandingInstructionsTemplateResponse from '../model/GetStandingInstructionsTemplateResponse';
import PostStandingInstructionsRequest from '../model/PostStandingInstructionsRequest';
import PostStandingInstructionsResponse from '../model/PostStandingInstructionsResponse';
import PutStandingInstructionsStandingInstructionIdRequest from '../model/PutStandingInstructionsStandingInstructionIdRequest';
import PutStandingInstructionsStandingInstructionIdResponse from '../model/PutStandingInstructionsStandingInstructionIdResponse';

/**
* StandingInstructions service.
* @module api/StandingInstructionsApi
* @version 1.0
*/
export default class StandingInstructionsApi {

    /**
    * Constructs a new StandingInstructionsApi. 
    * @alias module:api/StandingInstructionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the create4 operation.
     * @callback module:api/StandingInstructionsApi~create4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostStandingInstructionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Standing Instruction
     * Ability to create new instruction for transfer of monetary funds from one account to another
     * @param {module:model/PostStandingInstructionsRequest} postStandingInstructionsRequest 
     * @param {module:api/StandingInstructionsApi~create4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostStandingInstructionsResponse}
     */
    create4(postStandingInstructionsRequest, callback) {
      let postBody = postStandingInstructionsRequest;
      // verify the required parameter 'postStandingInstructionsRequest' is set
      if (postStandingInstructionsRequest === undefined || postStandingInstructionsRequest === null) {
        throw new Error("Missing the required parameter 'postStandingInstructionsRequest' when calling create4");
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
      let returnType = PostStandingInstructionsResponse;
      return this.apiClient.callApi(
        '/standinginstructions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll18 operation.
     * @callback module:api/StandingInstructionsApi~retrieveAll18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStandingInstructionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Standing Instructions
     * Example Requests:  standinginstructions
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch sqlSearch
     * @param {String} opts.externalId externalId
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {Number} opts.transferType transferType
     * @param {String} opts.clientName clientName
     * @param {Number} opts.clientId clientId
     * @param {Number} opts.fromAccountId fromAccountId
     * @param {Number} opts.fromAccountType fromAccountType
     * @param {module:api/StandingInstructionsApi~retrieveAll18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStandingInstructionsResponse}
     */
    retrieveAll18(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
        'externalId': opts['externalId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder'],
        'transferType': opts['transferType'],
        'clientName': opts['clientName'],
        'clientId': opts['clientId'],
        'fromAccountId': opts['fromAccountId'],
        'fromAccountType': opts['fromAccountType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStandingInstructionsResponse;
      return this.apiClient.callApi(
        '/standinginstructions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne9 operation.
     * @callback module:api/StandingInstructionsApi~retrieveOne9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStandingInstructionsStandingInstructionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Standing Instruction
     * Example Requests :  standinginstructions/1
     * @param {Number} standingInstructionId standingInstructionId
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch sqlSearch
     * @param {String} opts.externalId externalId
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {module:api/StandingInstructionsApi~retrieveOne9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStandingInstructionsStandingInstructionIdResponse}
     */
    retrieveOne9(standingInstructionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'standingInstructionId' is set
      if (standingInstructionId === undefined || standingInstructionId === null) {
        throw new Error("Missing the required parameter 'standingInstructionId' when calling retrieveOne9");
      }

      let pathParams = {
        'standingInstructionId': standingInstructionId
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
        'externalId': opts['externalId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStandingInstructionsStandingInstructionIdResponse;
      return this.apiClient.callApi(
        '/standinginstructions/{standingInstructionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template6 operation.
     * @callback module:api/StandingInstructionsApi~template6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStandingInstructionsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Standing Instruction Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Requests:  standinginstructions/template?fromAccountType=2&fromOfficeId=1  standinginstructions/template?fromAccountType=2&fromOfficeId=1&fromClientId=1&transferType=1  standinginstructions/template?fromClientId=1&fromAccountType=2&fromAccountId=1&transferType=1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fromOfficeId fromOfficeId
     * @param {Number} opts.fromClientId fromClientId
     * @param {Number} opts.fromAccountId fromAccountId
     * @param {Number} opts.fromAccountType fromAccountType
     * @param {Number} opts.toOfficeId toOfficeId
     * @param {Number} opts.toClientId toClientId
     * @param {Number} opts.toAccountId toAccountId
     * @param {Number} opts.toAccountType toAccountType
     * @param {Number} opts.transferType transferType
     * @param {module:api/StandingInstructionsApi~template6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStandingInstructionsTemplateResponse}
     */
    template6(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fromOfficeId': opts['fromOfficeId'],
        'fromClientId': opts['fromClientId'],
        'fromAccountId': opts['fromAccountId'],
        'fromAccountType': opts['fromAccountType'],
        'toOfficeId': opts['toOfficeId'],
        'toClientId': opts['toClientId'],
        'toAccountId': opts['toAccountId'],
        'toAccountType': opts['toAccountType'],
        'transferType': opts['transferType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStandingInstructionsTemplateResponse;
      return this.apiClient.callApi(
        '/standinginstructions/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update8 operation.
     * @callback module:api/StandingInstructionsApi~update8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutStandingInstructionsStandingInstructionIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Standing Instruction | Delete Standing Instruction
     * Ability to modify existing instruction for transfer of monetary funds from one account to another.  PUT https://DomainName/api/v1/standinginstructions/1?command=update   Ability to modify existing instruction for transfer of monetary funds from one account to another.  PUT https://DomainName/api/v1/standinginstructions/1?command=delete
     * @param {Number} standingInstructionId standingInstructionId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:model/PutStandingInstructionsStandingInstructionIdRequest} opts.putStandingInstructionsStandingInstructionIdRequest 
     * @param {module:api/StandingInstructionsApi~update8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutStandingInstructionsStandingInstructionIdResponse}
     */
    update8(standingInstructionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['putStandingInstructionsStandingInstructionIdRequest'];
      // verify the required parameter 'standingInstructionId' is set
      if (standingInstructionId === undefined || standingInstructionId === null) {
        throw new Error("Missing the required parameter 'standingInstructionId' when calling update8");
      }

      let pathParams = {
        'standingInstructionId': standingInstructionId
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
      let returnType = PutStandingInstructionsStandingInstructionIdResponse;
      return this.apiClient.callApi(
        '/standinginstructions/{standingInstructionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
