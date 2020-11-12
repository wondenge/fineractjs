


import ApiClient from "../ApiClient";
import DeleteChargesChargeIdResponse from '../model/DeleteChargesChargeIdResponse';
import GetChargesResponse from '../model/GetChargesResponse';
import GetChargesTemplateResponse from '../model/GetChargesTemplateResponse';
import PostChargesRequest from '../model/PostChargesRequest';
import PostChargesResponse from '../model/PostChargesResponse';
import PutChargesChargeIdRequest from '../model/PutChargesChargeIdRequest';
import PutChargesChargeIdResponse from '../model/PutChargesChargeIdResponse';

/**
* Charges service.
* @module api/ChargesApi
* @version 1.0
*/
export default class ChargesApi {

    /**
    * Constructs a new ChargesApi. 
    * @alias module:api/ChargesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCharge operation.
     * @callback module:api/ChargesApi~createChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostChargesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create/Define a Charge
     * Define a new charge that can later be associated with loans and savings through their respective product definitions or directly on each account instance.
     * @param {module:model/PostChargesRequest} postChargesRequest 
     * @param {module:api/ChargesApi~createChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostChargesResponse}
     */
    createCharge(postChargesRequest, callback) {
      let postBody = postChargesRequest;
      // verify the required parameter 'postChargesRequest' is set
      if (postChargesRequest === undefined || postChargesRequest === null) {
        throw new Error("Missing the required parameter 'postChargesRequest' when calling createCharge");
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
      let returnType = PostChargesResponse;
      return this.apiClient.callApi(
        '/charges', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCharge operation.
     * @callback module:api/ChargesApi~deleteChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteChargesChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Charge
     * Deletes a Charge.
     * @param {Number} chargeId chargeId
     * @param {module:api/ChargesApi~deleteChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteChargesChargeIdResponse}
     */
    deleteCharge(chargeId, callback) {
      let postBody = null;
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling deleteCharge");
      }

      let pathParams = {
        'chargeId': chargeId
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
      let returnType = DeleteChargesChargeIdResponse;
      return this.apiClient.callApi(
        '/charges/{chargeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllCharges operation.
     * @callback module:api/ChargesApi~retrieveAllChargesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetChargesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Charges
     * Returns the list of defined charges.  Example Requests:  charges
     * @param {module:api/ChargesApi~retrieveAllChargesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetChargesResponse>}
     */
    retrieveAllCharges(callback) {
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
      let returnType = [GetChargesResponse];
      return this.apiClient.callApi(
        '/charges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCharge operation.
     * @callback module:api/ChargesApi~retrieveChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetChargesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Charge
     * Returns the details of a defined Charge.  Example Requests:  charges/1
     * @param {Number} chargeId chargeId
     * @param {module:api/ChargesApi~retrieveChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetChargesResponse}
     */
    retrieveCharge(chargeId, callback) {
      let postBody = null;
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling retrieveCharge");
      }

      let pathParams = {
        'chargeId': chargeId
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
      let returnType = GetChargesResponse;
      return this.apiClient.callApi(
        '/charges/{chargeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveNewChargeDetails operation.
     * @callback module:api/ChargesApi~retrieveNewChargeDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetChargesTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Charge Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  charges/template 
     * @param {module:api/ChargesApi~retrieveNewChargeDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetChargesTemplateResponse}
     */
    retrieveNewChargeDetails(callback) {
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
      let returnType = GetChargesTemplateResponse;
      return this.apiClient.callApi(
        '/charges/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCharge operation.
     * @callback module:api/ChargesApi~updateChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutChargesChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Charge
     * Updates the details of a Charge.
     * @param {Number} chargeId chargeId
     * @param {module:model/PutChargesChargeIdRequest} putChargesChargeIdRequest 
     * @param {module:api/ChargesApi~updateChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutChargesChargeIdResponse}
     */
    updateCharge(chargeId, putChargesChargeIdRequest, callback) {
      let postBody = putChargesChargeIdRequest;
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling updateCharge");
      }
      // verify the required parameter 'putChargesChargeIdRequest' is set
      if (putChargesChargeIdRequest === undefined || putChargesChargeIdRequest === null) {
        throw new Error("Missing the required parameter 'putChargesChargeIdRequest' when calling updateCharge");
      }

      let pathParams = {
        'chargeId': chargeId
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
      let returnType = PutChargesChargeIdResponse;
      return this.apiClient.callApi(
        '/charges/{chargeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
