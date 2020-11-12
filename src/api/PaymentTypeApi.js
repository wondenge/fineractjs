


import ApiClient from "../ApiClient";
import DeletePaymentTypesPaymentTypeIdResponse from '../model/DeletePaymentTypesPaymentTypeIdResponse';
import GetPaymentTypesPaymentTypeIdResponse from '../model/GetPaymentTypesPaymentTypeIdResponse';
import GetPaymentTypesResponse from '../model/GetPaymentTypesResponse';
import PostPaymentTypesRequest from '../model/PostPaymentTypesRequest';
import PostPaymentTypesResponse from '../model/PostPaymentTypesResponse';
import PutPaymentTypesPaymentTypeIdRequest from '../model/PutPaymentTypesPaymentTypeIdRequest';
import PutPaymentTypesPaymentTypeIdResponse from '../model/PutPaymentTypesPaymentTypeIdResponse';

/**
* PaymentType service.
* @module api/PaymentTypeApi
* @version 1.0
*/
export default class PaymentTypeApi {

    /**
    * Constructs a new PaymentTypeApi. 
    * @alias module:api/PaymentTypeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createPaymentType operation.
     * @callback module:api/PaymentTypeApi~createPaymentTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostPaymentTypesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Payment Type
     * Creates a new Payment type  Mandatory Fields: name  Optional Fields: Description, isCashPayment,Position
     * @param {module:model/PostPaymentTypesRequest} postPaymentTypesRequest 
     * @param {module:api/PaymentTypeApi~createPaymentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostPaymentTypesResponse}
     */
    createPaymentType(postPaymentTypesRequest, callback) {
      let postBody = postPaymentTypesRequest;
      // verify the required parameter 'postPaymentTypesRequest' is set
      if (postPaymentTypesRequest === undefined || postPaymentTypesRequest === null) {
        throw new Error("Missing the required parameter 'postPaymentTypesRequest' when calling createPaymentType");
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
      let returnType = PostPaymentTypesResponse;
      return this.apiClient.callApi(
        '/paymenttypes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCode1 operation.
     * @callback module:api/PaymentTypeApi~deleteCode1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeletePaymentTypesPaymentTypeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Payment Type
     * Deletes payment type
     * @param {Number} paymentTypeId paymentTypeId
     * @param {module:api/PaymentTypeApi~deleteCode1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeletePaymentTypesPaymentTypeIdResponse}
     */
    deleteCode1(paymentTypeId, callback) {
      let postBody = null;
      // verify the required parameter 'paymentTypeId' is set
      if (paymentTypeId === undefined || paymentTypeId === null) {
        throw new Error("Missing the required parameter 'paymentTypeId' when calling deleteCode1");
      }

      let pathParams = {
        'paymentTypeId': paymentTypeId
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
      let returnType = DeletePaymentTypesPaymentTypeIdResponse;
      return this.apiClient.callApi(
        '/paymenttypes/{paymentTypeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPaymentTypes operation.
     * @callback module:api/PaymentTypeApi~getAllPaymentTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetPaymentTypesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all Payment Types
     * Retrieve list of payment types
     * @param {module:api/PaymentTypeApi~getAllPaymentTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetPaymentTypesResponse>}
     */
    getAllPaymentTypes(callback) {
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
      let returnType = [GetPaymentTypesResponse];
      return this.apiClient.callApi(
        '/paymenttypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOnePaymentType operation.
     * @callback module:api/PaymentTypeApi~retrieveOnePaymentTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPaymentTypesPaymentTypeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Payment Type
     * Retrieves a payment type
     * @param {Number} paymentTypeId paymentTypeId
     * @param {module:api/PaymentTypeApi~retrieveOnePaymentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetPaymentTypesPaymentTypeIdResponse}
     */
    retrieveOnePaymentType(paymentTypeId, callback) {
      let postBody = null;
      // verify the required parameter 'paymentTypeId' is set
      if (paymentTypeId === undefined || paymentTypeId === null) {
        throw new Error("Missing the required parameter 'paymentTypeId' when calling retrieveOnePaymentType");
      }

      let pathParams = {
        'paymentTypeId': paymentTypeId
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
      let returnType = GetPaymentTypesPaymentTypeIdResponse;
      return this.apiClient.callApi(
        '/paymenttypes/{paymentTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePaymentType operation.
     * @callback module:api/PaymentTypeApi~updatePaymentTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutPaymentTypesPaymentTypeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Payment Type
     * Updates a Payment Type
     * @param {Number} paymentTypeId paymentTypeId
     * @param {module:model/PutPaymentTypesPaymentTypeIdRequest} putPaymentTypesPaymentTypeIdRequest 
     * @param {module:api/PaymentTypeApi~updatePaymentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutPaymentTypesPaymentTypeIdResponse}
     */
    updatePaymentType(paymentTypeId, putPaymentTypesPaymentTypeIdRequest, callback) {
      let postBody = putPaymentTypesPaymentTypeIdRequest;
      // verify the required parameter 'paymentTypeId' is set
      if (paymentTypeId === undefined || paymentTypeId === null) {
        throw new Error("Missing the required parameter 'paymentTypeId' when calling updatePaymentType");
      }
      // verify the required parameter 'putPaymentTypesPaymentTypeIdRequest' is set
      if (putPaymentTypesPaymentTypeIdRequest === undefined || putPaymentTypesPaymentTypeIdRequest === null) {
        throw new Error("Missing the required parameter 'putPaymentTypesPaymentTypeIdRequest' when calling updatePaymentType");
      }

      let pathParams = {
        'paymentTypeId': paymentTypeId
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
      let returnType = PutPaymentTypesPaymentTypeIdResponse;
      return this.apiClient.callApi(
        '/paymenttypes/{paymentTypeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
