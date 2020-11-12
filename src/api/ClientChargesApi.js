


import ApiClient from "../ApiClient";
import DeleteClientsClientIdChargesChargeIdResponse from '../model/DeleteClientsClientIdChargesChargeIdResponse';
import GetClientsChargesPageItems from '../model/GetClientsChargesPageItems';
import GetClientsClientIdChargesResponse from '../model/GetClientsClientIdChargesResponse';
import PostClientsClientIdChargesChargeIdRequest from '../model/PostClientsClientIdChargesChargeIdRequest';
import PostClientsClientIdChargesChargeIdResponse from '../model/PostClientsClientIdChargesChargeIdResponse';
import PostClientsClientIdChargesRequest from '../model/PostClientsClientIdChargesRequest';
import PostClientsClientIdChargesResponse from '../model/PostClientsClientIdChargesResponse';

/**
* ClientCharges service.
* @module api/ClientChargesApi
* @version 1.0
*/
export default class ClientChargesApi {

    /**
    * Constructs a new ClientChargesApi. 
    * @alias module:api/ClientChargesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the applyClientCharge operation.
     * @callback module:api/ClientChargesApi~applyClientChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostClientsClientIdChargesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Client Charge
     *  This API associates a Client charge with an implicit Client account Mandatory Fields :  chargeId and dueDate   Optional Fields :  amount
     * @param {Number} clientId clientId
     * @param {module:model/PostClientsClientIdChargesRequest} postClientsClientIdChargesRequest 
     * @param {module:api/ClientChargesApi~applyClientChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostClientsClientIdChargesResponse}
     */
    applyClientCharge(clientId, postClientsClientIdChargesRequest, callback) {
      let postBody = postClientsClientIdChargesRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling applyClientCharge");
      }
      // verify the required parameter 'postClientsClientIdChargesRequest' is set
      if (postClientsClientIdChargesRequest === undefined || postClientsClientIdChargesRequest === null) {
        throw new Error("Missing the required parameter 'postClientsClientIdChargesRequest' when calling applyClientCharge");
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
      let returnType = PostClientsClientIdChargesResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/charges', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClientCharge operation.
     * @callback module:api/ClientChargesApi~deleteClientChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteClientsClientIdChargesChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Client Charge
     * Deletes a Client Charge on which no transactions have taken place (either payments or waivers). 
     * @param {Number} clientId clientId
     * @param {Number} chargeId chargeId
     * @param {module:api/ClientChargesApi~deleteClientChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteClientsClientIdChargesChargeIdResponse}
     */
    deleteClientCharge(clientId, chargeId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteClientCharge");
      }
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling deleteClientCharge");
      }

      let pathParams = {
        'clientId': clientId,
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
      let returnType = DeleteClientsClientIdChargesChargeIdResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/charges/{chargeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payOrWaiveClientCharge operation.
     * @callback module:api/ClientChargesApi~payOrWaiveClientChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostClientsClientIdChargesChargeIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pay a Client Charge | Waive a Client Charge
     * Pay a Client Charge:  Mandatory Fields:transactionDate and amount \"Pay either a part of or the entire due amount for a charge.(command=paycharge)  Waive a Client Charge:   This API provides the facility of waiving off the remaining amount on a client charge (command=waive)  Showing request/response for 'Pay a Client Charge'
     * @param {Number} clientId clientId
     * @param {Number} chargeId chargeId
     * @param {module:model/PostClientsClientIdChargesChargeIdRequest} postClientsClientIdChargesChargeIdRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/ClientChargesApi~payOrWaiveClientChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostClientsClientIdChargesChargeIdResponse}
     */
    payOrWaiveClientCharge(clientId, chargeId, postClientsClientIdChargesChargeIdRequest, opts, callback) {
      opts = opts || {};
      let postBody = postClientsClientIdChargesChargeIdRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling payOrWaiveClientCharge");
      }
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling payOrWaiveClientCharge");
      }
      // verify the required parameter 'postClientsClientIdChargesChargeIdRequest' is set
      if (postClientsClientIdChargesChargeIdRequest === undefined || postClientsClientIdChargesChargeIdRequest === null) {
        throw new Error("Missing the required parameter 'postClientsClientIdChargesChargeIdRequest' when calling payOrWaiveClientCharge");
      }

      let pathParams = {
        'clientId': clientId,
        'chargeId': chargeId
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
      let returnType = PostClientsClientIdChargesChargeIdResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/charges/{chargeId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllClientCharges operation.
     * @callback module:api/ClientChargesApi~retrieveAllClientChargesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientsClientIdChargesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Client Charges
     * The list capability of client charges supports pagination.Example Requests: clients/1/charges  clients/1/charges?offset=0&limit=5
     * @param {Number} clientId clientId
     * @param {Object} opts Optional parameters
     * @param {String} opts.chargeStatus chargeStatus (default to 'all')
     * @param {Boolean} opts.pendingPayment pendingPayment
     * @param {Number} opts.limit limit
     * @param {Number} opts.offset offset
     * @param {module:api/ClientChargesApi~retrieveAllClientChargesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientsClientIdChargesResponse}
     */
    retrieveAllClientCharges(clientId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveAllClientCharges");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
        'chargeStatus': opts['chargeStatus'],
        'pendingPayment': opts['pendingPayment'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetClientsClientIdChargesResponse;
      return this.apiClient.callApi(
        '/clients/{clientId}/charges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveClientCharge operation.
     * @callback module:api/ClientChargesApi~retrieveClientChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetClientsChargesPageItems} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Client Charge
     * Example Requests: clients/1/charges/1   clients/1/charges/1?fields=name,id
     * @param {Number} clientId clientId
     * @param {Number} chargeId chargeId
     * @param {module:api/ClientChargesApi~retrieveClientChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetClientsChargesPageItems}
     */
    retrieveClientCharge(clientId, chargeId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveClientCharge");
      }
      // verify the required parameter 'chargeId' is set
      if (chargeId === undefined || chargeId === null) {
        throw new Error("Missing the required parameter 'chargeId' when calling retrieveClientCharge");
      }

      let pathParams = {
        'clientId': clientId,
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
      let returnType = GetClientsChargesPageItems;
      return this.apiClient.callApi(
        '/clients/{clientId}/charges/{chargeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate4 operation.
     * @callback module:api/ClientChargesApi~retrieveTemplate4Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId clientId
     * @param {module:api/ClientChargesApi~retrieveTemplate4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate4(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveTemplate4");
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
        '/clients/{clientId}/charges/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
