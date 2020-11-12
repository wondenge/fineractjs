


import ApiClient from "../ApiClient";
import GetWorkingDaysResponse from '../model/GetWorkingDaysResponse';
import GetWorkingDaysTemplateResponse from '../model/GetWorkingDaysTemplateResponse';
import PutWorkingDaysRequest from '../model/PutWorkingDaysRequest';
import PutWorkingDaysResponse from '../model/PutWorkingDaysResponse';

/**
* WorkingDays service.
* @module api/WorkingDaysApi
* @version 1.0
*/
export default class WorkingDaysApi {

    /**
    * Constructs a new WorkingDaysApi. 
    * @alias module:api/WorkingDaysApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveAll16 operation.
     * @callback module:api/WorkingDaysApi~retrieveAll16Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetWorkingDaysResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Working days
     * Example Requests:  workingdays
     * @param {module:api/WorkingDaysApi~retrieveAll16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetWorkingDaysResponse>}
     */
    retrieveAll16(callback) {
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
      let returnType = [GetWorkingDaysResponse];
      return this.apiClient.callApi(
        '/workingdays', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template4 operation.
     * @callback module:api/WorkingDaysApi~template4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetWorkingDaysTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Working Days Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for working days.  Example Request:  workingdays/template
     * @param {module:api/WorkingDaysApi~template4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetWorkingDaysTemplateResponse}
     */
    template4(callback) {
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
      let returnType = GetWorkingDaysTemplateResponse;
      return this.apiClient.callApi(
        '/workingdays/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update7 operation.
     * @callback module:api/WorkingDaysApi~update7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutWorkingDaysResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Working Day
     * Mandatory Fields recurrence,repaymentRescheduleType,extendTermForDailyRepayments,locale
     * @param {module:model/PutWorkingDaysRequest} putWorkingDaysRequest 
     * @param {module:api/WorkingDaysApi~update7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutWorkingDaysResponse}
     */
    update7(putWorkingDaysRequest, callback) {
      let postBody = putWorkingDaysRequest;
      // verify the required parameter 'putWorkingDaysRequest' is set
      if (putWorkingDaysRequest === undefined || putWorkingDaysRequest === null) {
        throw new Error("Missing the required parameter 'putWorkingDaysRequest' when calling update7");
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
      let returnType = PutWorkingDaysResponse;
      return this.apiClient.callApi(
        '/workingdays', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
