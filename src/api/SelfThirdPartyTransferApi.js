


import ApiClient from "../ApiClient";
import DeleteSelfBeneficiariesTPTBeneficiaryIdResponse from '../model/DeleteSelfBeneficiariesTPTBeneficiaryIdResponse';
import GetSelfBeneficiariesTPTResponse from '../model/GetSelfBeneficiariesTPTResponse';
import GetSelfBeneficiariesTPTTemplateResponse from '../model/GetSelfBeneficiariesTPTTemplateResponse';
import PostSelfBeneficiariesTPTRequest from '../model/PostSelfBeneficiariesTPTRequest';
import PostSelfBeneficiariesTPTResponse from '../model/PostSelfBeneficiariesTPTResponse';
import PutSelfBeneficiariesTPTBeneficiaryIdRequest from '../model/PutSelfBeneficiariesTPTBeneficiaryIdRequest';
import PutSelfBeneficiariesTPTBeneficiaryIdResponse from '../model/PutSelfBeneficiariesTPTBeneficiaryIdResponse';

/**
* SelfThirdPartyTransfer service.
* @module api/SelfThirdPartyTransferApi
* @version 1.0
*/
export default class SelfThirdPartyTransferApi {

    /**
    * Constructs a new SelfThirdPartyTransferApi. 
    * @alias module:api/SelfThirdPartyTransferApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the add operation.
     * @callback module:api/SelfThirdPartyTransferApi~addCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSelfBeneficiariesTPTResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add TPT Beneficiary
     * Api to add third party beneficiary linked to current user.  Parameter Definitions  name : Nick name for beneficiary, should be unique for an self service user  officeName : Office Name of beneficiary(not id)  accountNumber : Account Number of beneficiary(not id)  transferLimit : Each transfer initiated to this account will not exceed this amount  Example Requests:  /self/beneficiaries/tpt  Mandatory Fields: name, officeName, accountNumber, accountType  Optional Fields: transferLimit
     * @param {module:model/PostSelfBeneficiariesTPTRequest} postSelfBeneficiariesTPTRequest 
     * @param {module:api/SelfThirdPartyTransferApi~addCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSelfBeneficiariesTPTResponse}
     */
    add(postSelfBeneficiariesTPTRequest, callback) {
      let postBody = postSelfBeneficiariesTPTRequest;
      // verify the required parameter 'postSelfBeneficiariesTPTRequest' is set
      if (postSelfBeneficiariesTPTRequest === undefined || postSelfBeneficiariesTPTRequest === null) {
        throw new Error("Missing the required parameter 'postSelfBeneficiariesTPTRequest' when calling add");
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
      let returnType = PostSelfBeneficiariesTPTResponse;
      return this.apiClient.callApi(
        '/self/beneficiaries/tpt', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete20 operation.
     * @callback module:api/SelfThirdPartyTransferApi~delete20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteSelfBeneficiariesTPTBeneficiaryIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete TPT Beneficiary
     * Api to delete third party beneficiary linked to current user.  Example Requests:  /self/beneficiaries/tpt/{beneficiaryId}
     * @param {Number} beneficiaryId 
     * @param {module:api/SelfThirdPartyTransferApi~delete20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteSelfBeneficiariesTPTBeneficiaryIdResponse}
     */
    delete20(beneficiaryId, callback) {
      let postBody = null;
      // verify the required parameter 'beneficiaryId' is set
      if (beneficiaryId === undefined || beneficiaryId === null) {
        throw new Error("Missing the required parameter 'beneficiaryId' when calling delete20");
      }

      let pathParams = {
        'beneficiaryId': beneficiaryId
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
      let returnType = DeleteSelfBeneficiariesTPTBeneficiaryIdResponse;
      return this.apiClient.callApi(
        '/self/beneficiaries/tpt/{beneficiaryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll34 operation.
     * @callback module:api/SelfThirdPartyTransferApi~retrieveAll34Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetSelfBeneficiariesTPTResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All TPT Beneficiary
     * Api to get all third party beneficiary linked to current user.  Example Requests:  /self/beneficiaries/tpt
     * @param {module:api/SelfThirdPartyTransferApi~retrieveAll34Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetSelfBeneficiariesTPTResponse>}
     */
    retrieveAll34(callback) {
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
      let returnType = [GetSelfBeneficiariesTPTResponse];
      return this.apiClient.callApi(
        '/self/beneficiaries/tpt', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template16 operation.
     * @callback module:api/SelfThirdPartyTransferApi~template16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSelfBeneficiariesTPTTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Beneficiary Third Party Transfer Template
     * Returns Account Type enumerations. Self User is expected to know office name and account number to be able to add beneficiary.  Example Requests:  /self/beneficiaries/tpt/template
     * @param {module:api/SelfThirdPartyTransferApi~template16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSelfBeneficiariesTPTTemplateResponse}
     */
    template16(callback) {
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
      let returnType = GetSelfBeneficiariesTPTTemplateResponse;
      return this.apiClient.callApi(
        '/self/beneficiaries/tpt/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update20 operation.
     * @callback module:api/SelfThirdPartyTransferApi~update20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PutSelfBeneficiariesTPTBeneficiaryIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update TPT Beneficiary
     * Api to update third party beneficiary linked to current user.  Example Requests:  /self/beneficiaries/tpt/{beneficiaryId}  Optional Fields: name, transferLimit
     * @param {Number} beneficiaryId beneficiaryId
     * @param {module:model/PutSelfBeneficiariesTPTBeneficiaryIdRequest} putSelfBeneficiariesTPTBeneficiaryIdRequest 
     * @param {module:api/SelfThirdPartyTransferApi~update20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutSelfBeneficiariesTPTBeneficiaryIdResponse}
     */
    update20(beneficiaryId, putSelfBeneficiariesTPTBeneficiaryIdRequest, callback) {
      let postBody = putSelfBeneficiariesTPTBeneficiaryIdRequest;
      // verify the required parameter 'beneficiaryId' is set
      if (beneficiaryId === undefined || beneficiaryId === null) {
        throw new Error("Missing the required parameter 'beneficiaryId' when calling update20");
      }
      // verify the required parameter 'putSelfBeneficiariesTPTBeneficiaryIdRequest' is set
      if (putSelfBeneficiariesTPTBeneficiaryIdRequest === undefined || putSelfBeneficiariesTPTBeneficiaryIdRequest === null) {
        throw new Error("Missing the required parameter 'putSelfBeneficiariesTPTBeneficiaryIdRequest' when calling update20");
      }

      let pathParams = {
        'beneficiaryId': beneficiaryId
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
      let returnType = PutSelfBeneficiariesTPTBeneficiaryIdResponse;
      return this.apiClient.callApi(
        '/self/beneficiaries/tpt/{beneficiaryId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
