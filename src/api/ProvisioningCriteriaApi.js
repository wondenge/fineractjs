


import ApiClient from "../ApiClient";
import DeleteProvisioningCriteriaResponse from '../model/DeleteProvisioningCriteriaResponse';
import GetProvisioningCriteriaCriteriaIdResponse from '../model/GetProvisioningCriteriaCriteriaIdResponse';
import GetProvisioningCriteriaResponse from '../model/GetProvisioningCriteriaResponse';
import PostProvisioningCriteriaRequest from '../model/PostProvisioningCriteriaRequest';
import PostProvisioningCriteriaResponse from '../model/PostProvisioningCriteriaResponse';
import PutProvisioningCriteriaRequest from '../model/PutProvisioningCriteriaRequest';
import PutProvisioningCriteriaResponse from '../model/PutProvisioningCriteriaResponse';

/**
* ProvisioningCriteria service.
* @module api/ProvisioningCriteriaApi
* @version 1.0
*/
export default class ProvisioningCriteriaApi {

    /**
    * Constructs a new ProvisioningCriteriaApi. 
    * @alias module:api/ProvisioningCriteriaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createProvisioningCriteria operation.
     * @callback module:api/ProvisioningCriteriaApi~createProvisioningCriteriaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostProvisioningCriteriaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Provisioning Criteria
     * Creates a new Provisioning Criteria  Mandatory Fields:  criteriaName provisioningcriteria  Optional Fields:  loanProducts
     * @param {module:model/PostProvisioningCriteriaRequest} postProvisioningCriteriaRequest 
     * @param {module:api/ProvisioningCriteriaApi~createProvisioningCriteriaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostProvisioningCriteriaResponse}
     */
    createProvisioningCriteria(postProvisioningCriteriaRequest, callback) {
      let postBody = postProvisioningCriteriaRequest;
      // verify the required parameter 'postProvisioningCriteriaRequest' is set
      if (postProvisioningCriteriaRequest === undefined || postProvisioningCriteriaRequest === null) {
        throw new Error("Missing the required parameter 'postProvisioningCriteriaRequest' when calling createProvisioningCriteria");
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
      let returnType = PostProvisioningCriteriaResponse;
      return this.apiClient.callApi(
        '/provisioningcriteria', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProvisioningCriteria operation.
     * @callback module:api/ProvisioningCriteriaApi~deleteProvisioningCriteriaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteProvisioningCriteriaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes Provisioning Criteria
     * Deletes Provisioning Criteria
     * @param {Number} criteriaId criteriaId
     * @param {module:api/ProvisioningCriteriaApi~deleteProvisioningCriteriaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteProvisioningCriteriaResponse}
     */
    deleteProvisioningCriteria(criteriaId, callback) {
      let postBody = null;
      // verify the required parameter 'criteriaId' is set
      if (criteriaId === undefined || criteriaId === null) {
        throw new Error("Missing the required parameter 'criteriaId' when calling deleteProvisioningCriteria");
      }

      let pathParams = {
        'criteriaId': criteriaId
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
      let returnType = DeleteProvisioningCriteriaResponse;
      return this.apiClient.callApi(
        '/provisioningcriteria/{criteriaId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllProvisioningCriterias operation.
     * @callback module:api/ProvisioningCriteriaApi~retrieveAllProvisioningCriteriasCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetProvisioningCriteriaResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves all created Provisioning Criterias
     * Retrieves all created Provisioning Criterias
     * @param {module:api/ProvisioningCriteriaApi~retrieveAllProvisioningCriteriasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetProvisioningCriteriaResponse>}
     */
    retrieveAllProvisioningCriterias(callback) {
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
      let returnType = [GetProvisioningCriteriaResponse];
      return this.apiClient.callApi(
        '/provisioningcriteria', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveProvisioningCriteria operation.
     * @callback module:api/ProvisioningCriteriaApi~retrieveProvisioningCriteriaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProvisioningCriteriaCriteriaIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Provisioning Criteria
     * Retrieves a Provisioning Criteria
     * @param {Number} criteriaId criteriaId
     * @param {module:api/ProvisioningCriteriaApi~retrieveProvisioningCriteriaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetProvisioningCriteriaCriteriaIdResponse}
     */
    retrieveProvisioningCriteria(criteriaId, callback) {
      let postBody = null;
      // verify the required parameter 'criteriaId' is set
      if (criteriaId === undefined || criteriaId === null) {
        throw new Error("Missing the required parameter 'criteriaId' when calling retrieveProvisioningCriteria");
      }

      let pathParams = {
        'criteriaId': criteriaId
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
      let returnType = GetProvisioningCriteriaCriteriaIdResponse;
      return this.apiClient.callApi(
        '/provisioningcriteria/{criteriaId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate3 operation.
     * @callback module:api/ProvisioningCriteriaApi~retrieveTemplate3Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ProvisioningCriteriaApi~retrieveTemplate3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate3(callback) {
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
        '/provisioningcriteria/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProvisioningCriteria operation.
     * @callback module:api/ProvisioningCriteriaApi~updateProvisioningCriteriaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutProvisioningCriteriaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a new Provisioning Criteria
     * Updates a new Provisioning Criteria  Optional Fields criteriaName, loanProducts, provisioningcriteria
     * @param {Number} criteriaId criteriaId
     * @param {module:model/PutProvisioningCriteriaRequest} putProvisioningCriteriaRequest 
     * @param {module:api/ProvisioningCriteriaApi~updateProvisioningCriteriaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutProvisioningCriteriaResponse}
     */
    updateProvisioningCriteria(criteriaId, putProvisioningCriteriaRequest, callback) {
      let postBody = putProvisioningCriteriaRequest;
      // verify the required parameter 'criteriaId' is set
      if (criteriaId === undefined || criteriaId === null) {
        throw new Error("Missing the required parameter 'criteriaId' when calling updateProvisioningCriteria");
      }
      // verify the required parameter 'putProvisioningCriteriaRequest' is set
      if (putProvisioningCriteriaRequest === undefined || putProvisioningCriteriaRequest === null) {
        throw new Error("Missing the required parameter 'putProvisioningCriteriaRequest' when calling updateProvisioningCriteria");
      }

      let pathParams = {
        'criteriaId': criteriaId
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
      let returnType = PutProvisioningCriteriaResponse;
      return this.apiClient.callApi(
        '/provisioningcriteria/{criteriaId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
