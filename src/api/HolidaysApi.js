


import ApiClient from "../ApiClient";
import DeleteHolidaysHolidayIdResponse from '../model/DeleteHolidaysHolidayIdResponse';
import GetHolidaysResponse from '../model/GetHolidaysResponse';
import PostHolidaysHolidayIdResponse from '../model/PostHolidaysHolidayIdResponse';
import PostHolidaysRequest from '../model/PostHolidaysRequest';
import PostHolidaysResponse from '../model/PostHolidaysResponse';
import PutHolidaysHolidayIdRequest from '../model/PutHolidaysHolidayIdRequest';
import PutHolidaysHolidayIdResponse from '../model/PutHolidaysHolidayIdResponse';

/**
* Holidays service.
* @module api/HolidaysApi
* @version 1.0
*/
export default class HolidaysApi {

    /**
    * Constructs a new HolidaysApi. 
    * @alias module:api/HolidaysApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createNewHoliday operation.
     * @callback module:api/HolidaysApi~createNewHolidayCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostHolidaysResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Holiday
     * Mandatory Fields: name, description, fromDate, toDate, repaymentsRescheduledTo, offices
     * @param {module:model/PostHolidaysRequest} postHolidaysRequest 
     * @param {module:api/HolidaysApi~createNewHolidayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostHolidaysResponse}
     */
    createNewHoliday(postHolidaysRequest, callback) {
      let postBody = postHolidaysRequest;
      // verify the required parameter 'postHolidaysRequest' is set
      if (postHolidaysRequest === undefined || postHolidaysRequest === null) {
        throw new Error("Missing the required parameter 'postHolidaysRequest' when calling createNewHoliday");
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
      let returnType = PostHolidaysResponse;
      return this.apiClient.callApi(
        '/holidays', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete7 operation.
     * @callback module:api/HolidaysApi~delete7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteHolidaysHolidayIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Holiday
     * This API allows to delete a holiday. This is a soft delete the deleted holiday status is marked as deleted.
     * @param {Number} holidayId holidayId
     * @param {module:api/HolidaysApi~delete7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteHolidaysHolidayIdResponse}
     */
    delete7(holidayId, callback) {
      let postBody = null;
      // verify the required parameter 'holidayId' is set
      if (holidayId === undefined || holidayId === null) {
        throw new Error("Missing the required parameter 'holidayId' when calling delete7");
      }

      let pathParams = {
        'holidayId': holidayId
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
      let returnType = DeleteHolidaysHolidayIdResponse;
      return this.apiClient.callApi(
        '/holidays/{holidayId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the handleCommands1 operation.
     * @callback module:api/HolidaysApi~handleCommands1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostHolidaysHolidayIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate a Holiday
     * Always Holidays are created in pending state. This API allows to activate a holiday.  Only the active holidays are considered for rescheduling the loan repayment.
     * @param {Number} holidayId holidayId
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/HolidaysApi~handleCommands1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostHolidaysHolidayIdResponse}
     */
    handleCommands1(holidayId, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'holidayId' is set
      if (holidayId === undefined || holidayId === null) {
        throw new Error("Missing the required parameter 'holidayId' when calling handleCommands1");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling handleCommands1");
      }

      let pathParams = {
        'holidayId': holidayId
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
      let returnType = PostHolidaysHolidayIdResponse;
      return this.apiClient.callApi(
        '/holidays/{holidayId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllHolidays operation.
     * @callback module:api/HolidaysApi~retrieveAllHolidaysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetHolidaysResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Holidays
     * Example Requests:  holidays?officeId=1
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId officeId
     * @param {Object} opts.fromDate fromDate
     * @param {Object} opts.toDate toDate
     * @param {String} opts.locale locale
     * @param {String} opts.dateFormat dateFormat
     * @param {module:api/HolidaysApi~retrieveAllHolidaysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetHolidaysResponse>}
     */
    retrieveAllHolidays(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
        'locale': opts['locale'],
        'dateFormat': opts['dateFormat']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetHolidaysResponse];
      return this.apiClient.callApi(
        '/holidays', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne7 operation.
     * @callback module:api/HolidaysApi~retrieveOne7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetHolidaysResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Holiday
     * Example Requests:  holidays/1
     * @param {Number} holidayId holidayId
     * @param {module:api/HolidaysApi~retrieveOne7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetHolidaysResponse}
     */
    retrieveOne7(holidayId, callback) {
      let postBody = null;
      // verify the required parameter 'holidayId' is set
      if (holidayId === undefined || holidayId === null) {
        throw new Error("Missing the required parameter 'holidayId' when calling retrieveOne7");
      }

      let pathParams = {
        'holidayId': holidayId
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
      let returnType = GetHolidaysResponse;
      return this.apiClient.callApi(
        '/holidays/{holidayId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveRepaymentScheduleUpdationTyeOptions operation.
     * @callback module:api/HolidaysApi~retrieveRepaymentScheduleUpdationTyeOptionsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/HolidaysApi~retrieveRepaymentScheduleUpdationTyeOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveRepaymentScheduleUpdationTyeOptions(callback) {
      let postBody = null;

      let pathParams = {
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
        '/holidays/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update6 operation.
     * @callback module:api/HolidaysApi~update6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutHolidaysHolidayIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Holiday
     * If a holiday is in pending state (created and not activated) then all fields are allowed to modify. Once holidays become active only name and descriptions are allowed to modify.
     * @param {Number} holidayId holidayId
     * @param {module:model/PutHolidaysHolidayIdRequest} putHolidaysHolidayIdRequest 
     * @param {module:api/HolidaysApi~update6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutHolidaysHolidayIdResponse}
     */
    update6(holidayId, putHolidaysHolidayIdRequest, callback) {
      let postBody = putHolidaysHolidayIdRequest;
      // verify the required parameter 'holidayId' is set
      if (holidayId === undefined || holidayId === null) {
        throw new Error("Missing the required parameter 'holidayId' when calling update6");
      }
      // verify the required parameter 'putHolidaysHolidayIdRequest' is set
      if (putHolidaysHolidayIdRequest === undefined || putHolidaysHolidayIdRequest === null) {
        throw new Error("Missing the required parameter 'putHolidaysHolidayIdRequest' when calling update6");
      }

      let pathParams = {
        'holidayId': holidayId
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
      let returnType = PutHolidaysHolidayIdResponse;
      return this.apiClient.callApi(
        '/holidays/{holidayId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
