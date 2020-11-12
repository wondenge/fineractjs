


import ApiClient from "../ApiClient";
import DeleteLoansLoanIdCollateralsCollateralIdResponse from '../model/DeleteLoansLoanIdCollateralsCollateralIdResponse';
import GetLoansLoanIdCollateralsResponse from '../model/GetLoansLoanIdCollateralsResponse';
import GetLoansLoanIdCollateralsTemplateResponse from '../model/GetLoansLoanIdCollateralsTemplateResponse';
import PostLoansLoanIdCollateralsRequest from '../model/PostLoansLoanIdCollateralsRequest';
import PostLoansLoanIdCollateralsResponse from '../model/PostLoansLoanIdCollateralsResponse';
import PutLoansLoanIdCollateralsCollateralIdResponse from '../model/PutLoansLoanIdCollateralsCollateralIdResponse';
import PutLoansLoandIdCollateralsCollateralIdRequest from '../model/PutLoansLoandIdCollateralsCollateralIdRequest';

/**
* LoanCollateral service.
* @module api/LoanCollateralApi
* @version 1.0
*/
export default class LoanCollateralApi {

    /**
    * Constructs a new LoanCollateralApi. 
    * @alias module:api/LoanCollateralApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCollateral operation.
     * @callback module:api/LoanCollateralApi~createCollateralCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostLoansLoanIdCollateralsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Collateral
     * Note: Currently, Collaterals may be added only before a Loan is approved
     * @param {Number} loanId loanId
     * @param {module:model/PostLoansLoanIdCollateralsRequest} postLoansLoanIdCollateralsRequest 
     * @param {module:api/LoanCollateralApi~createCollateralCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostLoansLoanIdCollateralsResponse}
     */
    createCollateral(loanId, postLoansLoanIdCollateralsRequest, callback) {
      let postBody = postLoansLoanIdCollateralsRequest;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling createCollateral");
      }
      // verify the required parameter 'postLoansLoanIdCollateralsRequest' is set
      if (postLoansLoanIdCollateralsRequest === undefined || postLoansLoanIdCollateralsRequest === null) {
        throw new Error("Missing the required parameter 'postLoansLoanIdCollateralsRequest' when calling createCollateral");
      }

      let pathParams = {
        'loanId': loanId
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
      let returnType = PostLoansLoanIdCollateralsResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/collaterals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCollateral operation.
     * @callback module:api/LoanCollateralApi~deleteCollateralCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteLoansLoanIdCollateralsCollateralIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a Collateral
     * Note: A collateral can only be removed from Loans that are not yet approved.
     * @param {Number} loanId loanId
     * @param {Number} collateralId collateralId
     * @param {module:api/LoanCollateralApi~deleteCollateralCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteLoansLoanIdCollateralsCollateralIdResponse}
     */
    deleteCollateral(loanId, collateralId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling deleteCollateral");
      }
      // verify the required parameter 'collateralId' is set
      if (collateralId === undefined || collateralId === null) {
        throw new Error("Missing the required parameter 'collateralId' when calling deleteCollateral");
      }

      let pathParams = {
        'loanId': loanId,
        'collateralId': collateralId
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
      let returnType = DeleteLoansLoanIdCollateralsCollateralIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/collaterals/{collateralId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the newCollateralTemplate operation.
     * @callback module:api/LoanCollateralApi~newCollateralTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoansLoanIdCollateralsTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Collateral Details Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  loans/1/collaterals/template
     * @param {Number} loanId loanId
     * @param {module:api/LoanCollateralApi~newCollateralTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoansLoanIdCollateralsTemplateResponse}
     */
    newCollateralTemplate(loanId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling newCollateralTemplate");
      }

      let pathParams = {
        'loanId': loanId
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
      let returnType = GetLoansLoanIdCollateralsTemplateResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/collaterals/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCollateralDetails operation.
     * @callback module:api/LoanCollateralApi~retrieveCollateralDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLoansLoanIdCollateralsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Collateral
     * Example Requests:  /loans/1/collaterals/1   /loans/1/collaterals/1?fields=description,description
     * @param {Number} loanId loanId
     * @param {Number} collateralId collateralId
     * @param {module:api/LoanCollateralApi~retrieveCollateralDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLoansLoanIdCollateralsResponse}
     */
    retrieveCollateralDetails(loanId, collateralId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveCollateralDetails");
      }
      // verify the required parameter 'collateralId' is set
      if (collateralId === undefined || collateralId === null) {
        throw new Error("Missing the required parameter 'collateralId' when calling retrieveCollateralDetails");
      }

      let pathParams = {
        'loanId': loanId,
        'collateralId': collateralId
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
      let returnType = GetLoansLoanIdCollateralsResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/collaterals/{collateralId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCollateralDetails1 operation.
     * @callback module:api/LoanCollateralApi~retrieveCollateralDetails1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetLoansLoanIdCollateralsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Loan Collaterals
     * Example Requests:  loans/1/collaterals   loans/1/collaterals?fields=value,description
     * @param {Number} loanId loanId
     * @param {module:api/LoanCollateralApi~retrieveCollateralDetails1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetLoansLoanIdCollateralsResponse>}
     */
    retrieveCollateralDetails1(loanId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveCollateralDetails1");
      }

      let pathParams = {
        'loanId': loanId
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
      let returnType = [GetLoansLoanIdCollateralsResponse];
      return this.apiClient.callApi(
        '/loans/{loanId}/collaterals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCollateral operation.
     * @callback module:api/LoanCollateralApi~updateCollateralCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutLoansLoanIdCollateralsCollateralIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Collateral
     * @param {Number} loanId loanId
     * @param {Number} collateralId collateralId
     * @param {module:model/PutLoansLoandIdCollateralsCollateralIdRequest} putLoansLoandIdCollateralsCollateralIdRequest 
     * @param {module:api/LoanCollateralApi~updateCollateralCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutLoansLoanIdCollateralsCollateralIdResponse}
     */
    updateCollateral(loanId, collateralId, putLoansLoandIdCollateralsCollateralIdRequest, callback) {
      let postBody = putLoansLoandIdCollateralsCollateralIdRequest;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling updateCollateral");
      }
      // verify the required parameter 'collateralId' is set
      if (collateralId === undefined || collateralId === null) {
        throw new Error("Missing the required parameter 'collateralId' when calling updateCollateral");
      }
      // verify the required parameter 'putLoansLoandIdCollateralsCollateralIdRequest' is set
      if (putLoansLoandIdCollateralsCollateralIdRequest === undefined || putLoansLoandIdCollateralsCollateralIdRequest === null) {
        throw new Error("Missing the required parameter 'putLoansLoandIdCollateralsCollateralIdRequest' when calling updateCollateral");
      }

      let pathParams = {
        'loanId': loanId,
        'collateralId': collateralId
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
      let returnType = PutLoansLoanIdCollateralsCollateralIdResponse;
      return this.apiClient.callApi(
        '/loans/{loanId}/collaterals/{collateralId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
