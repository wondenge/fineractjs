


import ApiClient from "../ApiClient";
import CommandProcessingResult from '../model/CommandProcessingResult';
import CommandWrapper from '../model/CommandWrapper';
import FormDataBodyPart from '../model/FormDataBodyPart';
import FormDataContentDisposition from '../model/FormDataContentDisposition';
import GetFundsResponse from '../model/GetFundsResponse';
import GetProductsTypeProductIdResponse from '../model/GetProductsTypeProductIdResponse';
import GetProductsTypeResponse from '../model/GetProductsTypeResponse';
import GetSurveyResponse from '../model/GetSurveyResponse';
import InteropAccountData from '../model/InteropAccountData';
import InteropIdentifierAccountResponseData from '../model/InteropIdentifierAccountResponseData';
import InteropIdentifierRequestData from '../model/InteropIdentifierRequestData';
import InteropIdentifiersResponseData from '../model/InteropIdentifiersResponseData';
import InteropKycResponseData from '../model/InteropKycResponseData';
import InteropQuoteRequestData from '../model/InteropQuoteRequestData';
import InteropQuoteResponseData from '../model/InteropQuoteResponseData';
import InteropTransactionRequestData from '../model/InteropTransactionRequestData';
import InteropTransactionRequestResponseData from '../model/InteropTransactionRequestResponseData';
import InteropTransactionsData from '../model/InteropTransactionsData';
import InteropTransferRequestData from '../model/InteropTransferRequestData';
import InteropTransferResponseData from '../model/InteropTransferResponseData';
import PostCollectionSheetRequest from '../model/PostCollectionSheetRequest';
import PostCollectionSheetResponse from '../model/PostCollectionSheetResponse';
import PostFundsRequest from '../model/PostFundsRequest';
import PostFundsResponse from '../model/PostFundsResponse';
import PostProductsTypeRequest from '../model/PostProductsTypeRequest';
import PostProductsTypeResponse from '../model/PostProductsTypeResponse';
import PostSurveySurveyNameApptableIdRequest from '../model/PostSurveySurveyNameApptableIdRequest';
import PostSurveySurveyNameApptableIdResponse from '../model/PostSurveySurveyNameApptableIdResponse';
import PutFundsFundIdRequest from '../model/PutFundsFundIdRequest';
import PutFundsFundIdResponse from '../model/PutFundsFundIdResponse';
import PutProductsTypeProductIdRequest from '../model/PutProductsTypeProductIdRequest';
import PutProductsTypeProductIdResponse from '../model/PutProductsTypeProductIdResponse';
import SmsCampaignData from '../model/SmsCampaignData';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the accountsTemplate operation.
     * @callback module:api/DefaultApi~accountsTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId 
     * @param {module:api/DefaultApi~accountsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    accountsTemplate(loanId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling accountsTemplate");
      }

      let pathParams = {
        'loanId': loanId
      };
      let queryParams = {
        'clientId': opts['clientId']
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
        '/loans/{loanId}/guarantors/accounts/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the activate operation.
     * @callback module:api/DefaultApi~activateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~activateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    activate(resourceId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling activate");
      }

      let pathParams = {
        'resourceId': resourceId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email/campaign/{resourceId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addAndDeleteDisbursementDetail operation.
     * @callback module:api/DefaultApi~addAndDeleteDisbursementDetailCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~addAndDeleteDisbursementDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    addAndDeleteDisbursementDetail(loanId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling addAndDeleteDisbursementDetail");
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loans/{loanId}/disbursements/editDisbursements', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addClientFamilyMembers operation.
     * @callback module:api/DefaultApi~addClientFamilyMembersCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~addClientFamilyMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    addClientFamilyMembers(clientId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling addClientFamilyMembers");
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/clients/{clientId}/familymembers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addNewClientImage1 operation.
     * @callback module:api/DefaultApi~addNewClientImage1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entity 
     * @param {Number} entityId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.contentLength 
     * @param {module:model/FormDataBodyPart} opts.file 
     * @param {module:api/DefaultApi~addNewClientImage1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    addNewClientImage1(entity, entityId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling addNewClientImage1");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling addNewClientImage1");
      }

      let pathParams = {
        'entity': entity,
        'entityId': entityId
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Length': opts['contentLength']
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/{entity}/{entityId}/images', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrganisationCreditBureau operation.
     * @callback module:api/DefaultApi~addOrganisationCreditBureauCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} organisationCreditBureauId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~addOrganisationCreditBureauCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    addOrganisationCreditBureau(organisationCreditBureauId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'organisationCreditBureauId' is set
      if (organisationCreditBureauId === undefined || organisationCreditBureauId === null) {
        throw new Error("Missing the required parameter 'organisationCreditBureauId' when calling addOrganisationCreditBureau");
      }

      let pathParams = {
        'organisationCreditBureauId': organisationCreditBureauId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/CreditBureauConfiguration/organisationCreditBureau/{organisationCreditBureauId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the adjustTransaction operation.
     * @callback module:api/DefaultApi~adjustTransactionCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} fixedDepositAccountId 
     * @param {Number} transactionId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~adjustTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    adjustTransaction(fixedDepositAccountId, transactionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'fixedDepositAccountId' is set
      if (fixedDepositAccountId === undefined || fixedDepositAccountId === null) {
        throw new Error("Missing the required parameter 'fixedDepositAccountId' when calling adjustTransaction");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling adjustTransaction");
      }

      let pathParams = {
        'fixedDepositAccountId': fixedDepositAccountId,
        'transactionId': transactionId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/fixeddepositaccounts/{fixedDepositAccountId}/transactions/{transactionId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the adjustTransaction1 operation.
     * @callback module:api/DefaultApi~adjustTransaction1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} savingsId 
     * @param {Number} transactionId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~adjustTransaction1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    adjustTransaction1(savingsId, transactionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'savingsId' is set
      if (savingsId === undefined || savingsId === null) {
        throw new Error("Missing the required parameter 'savingsId' when calling adjustTransaction1");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling adjustTransaction1");
      }

      let pathParams = {
        'savingsId': savingsId,
        'transactionId': transactionId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/savingsaccounts/{savingsId}/transactions/{transactionId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the create1 operation.
     * @callback module:api/DefaultApi~create1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~create1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    create1(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the create2 operation.
     * @callback module:api/DefaultApi~create2Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~create2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    create2(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/sms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createCalendar operation.
     * @callback module:api/DefaultApi~createCalendarCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~createCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createCalendar(entityType, entityId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling createCalendar");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling createCalendar");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/calendars', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createCampaign operation.
     * @callback module:api/DefaultApi~createCampaignCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~createCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createCampaign(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email/campaign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createCampaign1 operation.
     * @callback module:api/DefaultApi~createCampaign1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CommandProcessingResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a SMS Campaign
     * Mandatory Fields campaignName, campaignType, triggerType, providerId, runReportId, message  Mandatory Fields for Cash based on selected report id paramValue in json format
     * @param {module:model/CommandWrapper} commandWrapper 
     * @param {module:api/DefaultApi~createCampaign1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommandProcessingResult}
     */
    createCampaign1(commandWrapper, callback) {
      let postBody = commandWrapper;
      // verify the required parameter 'commandWrapper' is set
      if (commandWrapper === undefined || commandWrapper === null) {
        throw new Error("Missing the required parameter 'commandWrapper' when calling createCampaign1");
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
      let returnType = CommandProcessingResult;
      return this.apiClient.callApi(
        '/smscampaigns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createCreditBureauLoanProductMapping operation.
     * @callback module:api/DefaultApi~createCreditBureauLoanProductMappingCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} creditBureauId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~createCreditBureauLoanProductMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createCreditBureauLoanProductMapping(creditBureauId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'creditBureauId' is set
      if (creditBureauId === undefined || creditBureauId === null) {
        throw new Error("Missing the required parameter 'creditBureauId' when calling createCreditBureauLoanProductMapping");
      }

      let pathParams = {
        'CreditBureauId': creditBureauId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/CreditBureauConfiguration/mappings/{CreditBureauId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createDatatableEntry1 operation.
     * @callback module:api/DefaultApi~createDatatableEntry1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSurveySurveyNameApptableIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an entry in the survey table
     * Insert and entry in a survey table (full fill the survey).  Refer Link for sample Body:  [ https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#survey_create ] 
     * @param {String} surveyName surveyName
     * @param {Number} apptableId apptableId
     * @param {module:model/PostSurveySurveyNameApptableIdRequest} postSurveySurveyNameApptableIdRequest 
     * @param {module:api/DefaultApi~createDatatableEntry1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSurveySurveyNameApptableIdResponse}
     */
    createDatatableEntry1(surveyName, apptableId, postSurveySurveyNameApptableIdRequest, callback) {
      let postBody = postSurveySurveyNameApptableIdRequest;
      // verify the required parameter 'surveyName' is set
      if (surveyName === undefined || surveyName === null) {
        throw new Error("Missing the required parameter 'surveyName' when calling createDatatableEntry1");
      }
      // verify the required parameter 'apptableId' is set
      if (apptableId === undefined || apptableId === null) {
        throw new Error("Missing the required parameter 'apptableId' when calling createDatatableEntry1");
      }
      // verify the required parameter 'postSurveySurveyNameApptableIdRequest' is set
      if (postSurveySurveyNameApptableIdRequest === undefined || postSurveySurveyNameApptableIdRequest === null) {
        throw new Error("Missing the required parameter 'postSurveySurveyNameApptableIdRequest' when calling createDatatableEntry1");
      }

      let pathParams = {
        'surveyName': surveyName,
        'apptableId': apptableId
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
      let returnType = PostSurveySurveyNameApptableIdResponse;
      return this.apiClient.callApi(
        '/survey/{surveyName}/{apptableId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createFund operation.
     * @callback module:api/DefaultApi~createFundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostFundsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Fund
     * Creates a Fund
     * @param {module:model/PostFundsRequest} postFundsRequest 
     * @param {module:api/DefaultApi~createFundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostFundsResponse}
     */
    createFund(postFundsRequest, callback) {
      let postBody = postFundsRequest;
      // verify the required parameter 'postFundsRequest' is set
      if (postFundsRequest === undefined || postFundsRequest === null) {
        throw new Error("Missing the required parameter 'postFundsRequest' when calling createFund");
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
      let returnType = PostFundsResponse;
      return this.apiClient.callApi(
        '/funds', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createGuarantor operation.
     * @callback module:api/DefaultApi~createGuarantorCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~createGuarantorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createGuarantor(loanId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling createGuarantor");
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loans/{loanId}/guarantors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createLoanRescheduleRequest operation.
     * @callback module:api/DefaultApi~createLoanRescheduleRequestCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~createLoanRescheduleRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createLoanRescheduleRequest(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/rescheduleloans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createMap operation.
     * @callback module:api/DefaultApi~createMapCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} relId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~createMapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createMap(relId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'relId' is set
      if (relId === undefined || relId === null) {
        throw new Error("Missing the required parameter 'relId' when calling createMap");
      }

      let pathParams = {
        'relId': relId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/entitytoentitymapping/{relId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createMeeting operation.
     * @callback module:api/DefaultApi~createMeetingCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~createMeetingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createMeeting(entityType, entityId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling createMeeting");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling createMeeting");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/meetings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createProduct operation.
     * @callback module:api/DefaultApi~createProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostProductsTypeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Share Product
     * Creates a Share Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, locale, totalShares, unitPrice, nominalShares,allowDividendCalculationForInactiveClients,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): shareReferenceId, shareSuspenseId, shareEquityId, incomeFromFeeAccountId  Optional Fields: sharesIssued, minimumShares, maximumShares, minimumActivePeriodForDividends, minimumactiveperiodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType, marketPricePeriods, chargesSelected
     * @param {String} type type
     * @param {module:model/PostProductsTypeRequest} postProductsTypeRequest 
     * @param {module:api/DefaultApi~createProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostProductsTypeResponse}
     */
    createProduct(type, postProductsTypeRequest, callback) {
      let postBody = postProductsTypeRequest;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling createProduct");
      }
      // verify the required parameter 'postProductsTypeRequest' is set
      if (postProductsTypeRequest === undefined || postProductsTypeRequest === null) {
        throw new Error("Missing the required parameter 'postProductsTypeRequest' when calling createProduct");
      }

      let pathParams = {
        'type': type
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
      let returnType = PostProductsTypeResponse;
      return this.apiClient.callApi(
        '/products/{type}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createProductMix operation.
     * @callback module:api/DefaultApi~createProductMixCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~createProductMixCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createProductMix(productId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling createProductMix");
      }

      let pathParams = {
        'productId': productId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loanproducts/{productId}/productmix', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createQuote operation.
     * @callback module:api/DefaultApi~createQuoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropQuoteResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate Interoperation Quote
     * @param {module:model/InteropQuoteRequestData} interopQuoteRequestData 
     * @param {module:api/DefaultApi~createQuoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropQuoteResponseData}
     */
    createQuote(interopQuoteRequestData, callback) {
      let postBody = interopQuoteRequestData;
      // verify the required parameter 'interopQuoteRequestData' is set
      if (interopQuoteRequestData === undefined || interopQuoteRequestData === null) {
        throw new Error("Missing the required parameter 'interopQuoteRequestData' when calling createQuote");
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
      let returnType = InteropQuoteResponseData;
      return this.apiClient.callApi(
        '/interoperation/quotes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createRate operation.
     * @callback module:api/DefaultApi~createRateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~createRateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createRate(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/rates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTransactionRequest operation.
     * @callback module:api/DefaultApi~createTransactionRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropTransactionRequestResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allow Interoperation Transaction Request
     * @param {module:model/InteropTransactionRequestData} interopTransactionRequestData 
     * @param {module:api/DefaultApi~createTransactionRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropTransactionRequestResponseData}
     */
    createTransactionRequest(interopTransactionRequestData, callback) {
      let postBody = interopTransactionRequestData;
      // verify the required parameter 'interopTransactionRequestData' is set
      if (interopTransactionRequestData === undefined || interopTransactionRequestData === null) {
        throw new Error("Missing the required parameter 'interopTransactionRequestData' when calling createTransactionRequest");
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
      let returnType = InteropTransactionRequestResponseData;
      return this.apiClient.callApi(
        '/interoperation/requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete1 operation.
     * @callback module:api/DefaultApi~delete1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {module:api/DefaultApi~delete1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    delete1(resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling delete1");
      }

      let pathParams = {
        'resourceId': resourceId
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
        '/email/{resourceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete2 operation.
     * @callback module:api/DefaultApi~delete2Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {module:api/DefaultApi~delete2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    delete2(resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling delete2");
      }

      let pathParams = {
        'resourceId': resourceId
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
        '/email/campaign/{resourceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete3 operation.
     * @callback module:api/DefaultApi~delete3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CommandProcessingResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a SMS Campaign
     * Note: Only closed SMS Campaigns can be deleted
     * @param {Number} campaignId 
     * @param {module:api/DefaultApi~delete3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommandProcessingResult}
     */
    delete3(campaignId, callback) {
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling delete3");
      }

      let pathParams = {
        'campaignId': campaignId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = CommandProcessingResult;
      return this.apiClient.callApi(
        '/smscampaigns/{campaignId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete4 operation.
     * @callback module:api/DefaultApi~delete4Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} mapId 
     * @param {module:api/DefaultApi~delete4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    delete4(mapId, callback) {
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling delete4");
      }

      let pathParams = {
        'mapId': mapId
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
        '/entitytoentitymapping/{mapId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete5 operation.
     * @callback module:api/DefaultApi~delete5Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/DefaultApi~delete5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    delete5(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling delete5");
      }

      let pathParams = {
        'id': id
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
        '/self/device/registration/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete6 operation.
     * @callback module:api/DefaultApi~delete6Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {module:api/DefaultApi~delete6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    delete6(resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling delete6");
      }

      let pathParams = {
        'resourceId': resourceId
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
        '/sms/{resourceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete8 operation.
     * @callback module:api/DefaultApi~delete8Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} transactionId 
     * @param {module:api/DefaultApi~delete8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    delete8(transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling delete8");
      }

      let pathParams = {
        'transactionId': transactionId
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
        '/officetransactions/{transactionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAccountIdentifier operation.
     * @callback module:api/DefaultApi~deleteAccountIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropIdentifierAccountResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allow Interoperation Identifier registration
     * @param {module:model/String} idType idType
     * @param {String} idValue idValue
     * @param {String} subIdOrType subIdOrType
     * @param {module:model/InteropIdentifierRequestData} interopIdentifierRequestData 
     * @param {module:api/DefaultApi~deleteAccountIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropIdentifierAccountResponseData}
     */
    deleteAccountIdentifier(idType, idValue, subIdOrType, interopIdentifierRequestData, callback) {
      let postBody = interopIdentifierRequestData;
      // verify the required parameter 'idType' is set
      if (idType === undefined || idType === null) {
        throw new Error("Missing the required parameter 'idType' when calling deleteAccountIdentifier");
      }
      // verify the required parameter 'idValue' is set
      if (idValue === undefined || idValue === null) {
        throw new Error("Missing the required parameter 'idValue' when calling deleteAccountIdentifier");
      }
      // verify the required parameter 'subIdOrType' is set
      if (subIdOrType === undefined || subIdOrType === null) {
        throw new Error("Missing the required parameter 'subIdOrType' when calling deleteAccountIdentifier");
      }
      // verify the required parameter 'interopIdentifierRequestData' is set
      if (interopIdentifierRequestData === undefined || interopIdentifierRequestData === null) {
        throw new Error("Missing the required parameter 'interopIdentifierRequestData' when calling deleteAccountIdentifier");
      }

      let pathParams = {
        'idType': idType,
        'idValue': idValue,
        'subIdOrType': subIdOrType
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
      let returnType = InteropIdentifierAccountResponseData;
      return this.apiClient.callApi(
        '/interoperation/parties/{idType}/{idValue}/{subIdOrType}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAccountIdentifier1 operation.
     * @callback module:api/DefaultApi~deleteAccountIdentifier1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropIdentifierAccountResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allow Interoperation Identifier registration
     * @param {module:model/String} idType idType
     * @param {String} idValue idValue
     * @param {module:model/InteropIdentifierRequestData} interopIdentifierRequestData 
     * @param {module:api/DefaultApi~deleteAccountIdentifier1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropIdentifierAccountResponseData}
     */
    deleteAccountIdentifier1(idType, idValue, interopIdentifierRequestData, callback) {
      let postBody = interopIdentifierRequestData;
      // verify the required parameter 'idType' is set
      if (idType === undefined || idType === null) {
        throw new Error("Missing the required parameter 'idType' when calling deleteAccountIdentifier1");
      }
      // verify the required parameter 'idValue' is set
      if (idValue === undefined || idValue === null) {
        throw new Error("Missing the required parameter 'idValue' when calling deleteAccountIdentifier1");
      }
      // verify the required parameter 'interopIdentifierRequestData' is set
      if (interopIdentifierRequestData === undefined || interopIdentifierRequestData === null) {
        throw new Error("Missing the required parameter 'interopIdentifierRequestData' when calling deleteAccountIdentifier1");
      }

      let pathParams = {
        'idType': idType,
        'idValue': idValue
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
      let returnType = InteropIdentifierAccountResponseData;
      return this.apiClient.callApi(
        '/interoperation/parties/{idType}/{idValue}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCalendar operation.
     * @callback module:api/DefaultApi~deleteCalendarCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {Number} calendarId 
     * @param {module:api/DefaultApi~deleteCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteCalendar(entityType, entityId, calendarId, callback) {
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling deleteCalendar");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling deleteCalendar");
      }
      // verify the required parameter 'calendarId' is set
      if (calendarId === undefined || calendarId === null) {
        throw new Error("Missing the required parameter 'calendarId' when calling deleteCalendar");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId,
        'calendarId': calendarId
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
        '/{entityType}/{entityId}/calendars/{calendarId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClientFamilyMembers operation.
     * @callback module:api/DefaultApi~deleteClientFamilyMembersCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} familyMemberId 
     * @param {Number} clientId clientId
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~deleteClientFamilyMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteClientFamilyMembers(familyMemberId, clientId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'familyMemberId' is set
      if (familyMemberId === undefined || familyMemberId === null) {
        throw new Error("Missing the required parameter 'familyMemberId' when calling deleteClientFamilyMembers");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteClientFamilyMembers");
      }

      let pathParams = {
        'familyMemberId': familyMemberId,
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/clients/{clientId}/familymembers/{familyMemberId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClientImage operation.
     * @callback module:api/DefaultApi~deleteClientImageCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entity 
     * @param {Number} entityId 
     * @param {module:api/DefaultApi~deleteClientImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteClientImage(entity, entityId, callback) {
      let postBody = null;
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling deleteClientImage");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling deleteClientImage");
      }

      let pathParams = {
        'entity': entity,
        'entityId': entityId
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
        '/{entity}/{entityId}/images', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDatatableEntries2 operation.
     * @callback module:api/DefaultApi~deleteDatatableEntries2Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} surveyName 
     * @param {Number} clientId 
     * @param {Number} fulfilledId 
     * @param {module:api/DefaultApi~deleteDatatableEntries2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteDatatableEntries2(surveyName, clientId, fulfilledId, callback) {
      let postBody = null;
      // verify the required parameter 'surveyName' is set
      if (surveyName === undefined || surveyName === null) {
        throw new Error("Missing the required parameter 'surveyName' when calling deleteDatatableEntries2");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteDatatableEntries2");
      }
      // verify the required parameter 'fulfilledId' is set
      if (fulfilledId === undefined || fulfilledId === null) {
        throw new Error("Missing the required parameter 'fulfilledId' when calling deleteDatatableEntries2");
      }

      let pathParams = {
        'surveyName': surveyName,
        'clientId': clientId,
        'fulfilledId': fulfilledId
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
        '/survey/{surveyName}/{clientId}/{fulfilledId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGuarantor operation.
     * @callback module:api/DefaultApi~deleteGuarantorCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {Number} guarantorId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.guarantorFundingId 
     * @param {module:api/DefaultApi~deleteGuarantorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteGuarantor(loanId, guarantorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling deleteGuarantor");
      }
      // verify the required parameter 'guarantorId' is set
      if (guarantorId === undefined || guarantorId === null) {
        throw new Error("Missing the required parameter 'guarantorId' when calling deleteGuarantor");
      }

      let pathParams = {
        'loanId': loanId,
        'guarantorId': guarantorId
      };
      let queryParams = {
        'guarantorFundingId': opts['guarantorFundingId']
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
        '/loans/{loanId}/guarantors/{guarantorId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMeeting operation.
     * @callback module:api/DefaultApi~deleteMeetingCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {Number} meetingId 
     * @param {module:api/DefaultApi~deleteMeetingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteMeeting(entityType, entityId, meetingId, callback) {
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling deleteMeeting");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling deleteMeeting");
      }
      // verify the required parameter 'meetingId' is set
      if (meetingId === undefined || meetingId === null) {
        throw new Error("Missing the required parameter 'meetingId' when calling deleteMeeting");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId,
        'meetingId': meetingId
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
        '/{entityType}/{entityId}/meetings/{meetingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProductMix operation.
     * @callback module:api/DefaultApi~deleteProductMixCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {module:api/DefaultApi~deleteProductMixCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteProductMix(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling deleteProductMix");
      }

      let pathParams = {
        'productId': productId
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
        '/loanproducts/{productId}/productmix', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the disburseLoan operation.
     * @callback module:api/DefaultApi~disburseLoanCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disburse Loan by Account Id
     * @param {String} accountId accountId
     * @param {module:api/DefaultApi~disburseLoanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    disburseLoan(accountId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling disburseLoan");
      }

      let pathParams = {
        'accountId': accountId
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
        '/interoperation/transactions/{accountId}/disburse', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the downloadClientImage operation.
     * @callback module:api/DefaultApi~downloadClientImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entity 
     * @param {Number} entityId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxWidth 
     * @param {Number} opts.maxHeight 
     * @param {String} opts.output 
     * @param {module:api/DefaultApi~downloadClientImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    downloadClientImage(entity, entityId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling downloadClientImage");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling downloadClientImage");
      }

      let pathParams = {
        'entity': entity,
        'entityId': entityId
      };
      let queryParams = {
        'maxWidth': opts['maxWidth'],
        'maxHeight': opts['maxHeight'],
        'output': opts['output']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/octet-stream'];
      let returnType = null;
      return this.apiClient.callApi(
        '/{entity}/{entityId}/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchLoanProducts operation.
     * @callback module:api/DefaultApi~fetchLoanProductsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~fetchLoanProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    fetchLoanProducts(callback) {
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
        '/CreditBureauConfiguration/loanProduct', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateCollectionSheet operation.
     * @callback module:api/DefaultApi~generateCollectionSheetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostCollectionSheetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate Individual Collection Sheet | Save Collection Sheet
     * Generate Individual Collection Sheet:  This Api retrieves repayment details of all individual loans under a office as on a specified meeting date.  Save Collection Sheet:  This Api allows the loan officer to perform bulk repayments of individual loans and deposit of mandatory savings on a given meeting date.
     * @param {module:model/PostCollectionSheetRequest} postCollectionSheetRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/DefaultApi~generateCollectionSheetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostCollectionSheetResponse}
     */
    generateCollectionSheet(postCollectionSheetRequest, opts, callback) {
      opts = opts || {};
      let postBody = postCollectionSheetRequest;
      // verify the required parameter 'postCollectionSheetRequest' is set
      if (postCollectionSheetRequest === undefined || postCollectionSheetRequest === null) {
        throw new Error("Missing the required parameter 'postCollectionSheetRequest' when calling generateCollectionSheet");
      }

      let pathParams = {
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
      let returnType = PostCollectionSheetResponse;
      return this.apiClient.callApi(
        '/collectionsheet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/DefaultApi~getCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    get(callback) {
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
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/echo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountByIdentifier operation.
     * @callback module:api/DefaultApi~getAccountByIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropIdentifierAccountResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Interoperation Account by secondary identifier
     * @param {module:model/String} idType idType
     * @param {String} idValue idValue
     * @param {module:api/DefaultApi~getAccountByIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropIdentifierAccountResponseData}
     */
    getAccountByIdentifier(idType, idValue, callback) {
      let postBody = null;
      // verify the required parameter 'idType' is set
      if (idType === undefined || idType === null) {
        throw new Error("Missing the required parameter 'idType' when calling getAccountByIdentifier");
      }
      // verify the required parameter 'idValue' is set
      if (idValue === undefined || idValue === null) {
        throw new Error("Missing the required parameter 'idValue' when calling getAccountByIdentifier");
      }

      let pathParams = {
        'idType': idType,
        'idValue': idValue
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
      let returnType = InteropIdentifierAccountResponseData;
      return this.apiClient.callApi(
        '/interoperation/parties/{idType}/{idValue}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountByIdentifier1 operation.
     * @callback module:api/DefaultApi~getAccountByIdentifier1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropIdentifierAccountResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Interoperation Account by secondary identifier
     * @param {module:model/String} idType idType
     * @param {String} idValue idValue
     * @param {String} subIdOrType subIdOrType
     * @param {module:api/DefaultApi~getAccountByIdentifier1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropIdentifierAccountResponseData}
     */
    getAccountByIdentifier1(idType, idValue, subIdOrType, callback) {
      let postBody = null;
      // verify the required parameter 'idType' is set
      if (idType === undefined || idType === null) {
        throw new Error("Missing the required parameter 'idType' when calling getAccountByIdentifier1");
      }
      // verify the required parameter 'idValue' is set
      if (idValue === undefined || idValue === null) {
        throw new Error("Missing the required parameter 'idValue' when calling getAccountByIdentifier1");
      }
      // verify the required parameter 'subIdOrType' is set
      if (subIdOrType === undefined || subIdOrType === null) {
        throw new Error("Missing the required parameter 'subIdOrType' when calling getAccountByIdentifier1");
      }

      let pathParams = {
        'idType': idType,
        'idValue': idValue,
        'subIdOrType': subIdOrType
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
      let returnType = InteropIdentifierAccountResponseData;
      return this.apiClient.callApi(
        '/interoperation/parties/{idType}/{idValue}/{subIdOrType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountDetails operation.
     * @callback module:api/DefaultApi~getAccountDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropAccountData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Interoperation Account details
     * @param {String} accountId accountId
     * @param {module:api/DefaultApi~getAccountDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropAccountData}
     */
    getAccountDetails(accountId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountDetails");
      }

      let pathParams = {
        'accountId': accountId
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
      let returnType = InteropAccountData;
      return this.apiClient.callApi(
        '/interoperation/accounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountIdentifiers operation.
     * @callback module:api/DefaultApi~getAccountIdentifiersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropIdentifiersResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Interoperation secondary identifiers by Account Id
     * @param {String} accountId accountId
     * @param {module:api/DefaultApi~getAccountIdentifiersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropIdentifiersResponseData}
     */
    getAccountIdentifiers(accountId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountIdentifiers");
      }

      let pathParams = {
        'accountId': accountId
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
      let returnType = InteropIdentifiersResponseData;
      return this.apiClient.callApi(
        '/interoperation/accounts/{accountId}/identifiers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountTransactions operation.
     * @callback module:api/DefaultApi~getAccountTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropTransactionsData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query transactions by Account Id
     * @param {String} accountId accountId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.debit debit (default to true)
     * @param {Boolean} opts.credit credit (default to false)
     * @param {String} opts.fromBookingDateTime fromBookingDateTime
     * @param {String} opts.toBookingDateTime toBookingDateTime
     * @param {module:api/DefaultApi~getAccountTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropTransactionsData}
     */
    getAccountTransactions(accountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountTransactions");
      }

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
        'debit': opts['debit'],
        'credit': opts['credit'],
        'fromBookingDateTime': opts['fromBookingDateTime'],
        'toBookingDateTime': opts['toBookingDateTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InteropTransactionsData;
      return this.apiClient.callApi(
        '/interoperation/accounts/{accountId}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllRates operation.
     * @callback module:api/DefaultApi~getAllRatesCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~getAllRatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAllRates(callback) {
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
        '/rates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientKyc operation.
     * @callback module:api/DefaultApi~getClientKycCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropKycResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query KYC by Account Id
     * @param {String} accountId accountId
     * @param {module:api/DefaultApi~getClientKycCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropKycResponseData}
     */
    getClientKyc(accountId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getClientKyc");
      }

      let pathParams = {
        'accountId': accountId
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
      let returnType = InteropKycResponseData;
      return this.apiClient.callApi(
        '/interoperation/accounts/{accountId}/kyc', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientSurveyOverview operation.
     * @callback module:api/DefaultApi~getClientSurveyOverviewCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} surveyName 
     * @param {Number} clientId 
     * @param {module:api/DefaultApi~getClientSurveyOverviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getClientSurveyOverview(surveyName, clientId, callback) {
      let postBody = null;
      // verify the required parameter 'surveyName' is set
      if (surveyName === undefined || surveyName === null) {
        throw new Error("Missing the required parameter 'surveyName' when calling getClientSurveyOverview");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getClientSurveyOverview");
      }

      let pathParams = {
        'surveyName': surveyName,
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
        '/survey/{surveyName}/{clientId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConfiguration operation.
     * @callback module:api/DefaultApi~getConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} organisationCreditBureauId 
     * @param {module:api/DefaultApi~getConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getConfiguration(organisationCreditBureauId, callback) {
      let postBody = null;
      // verify the required parameter 'organisationCreditBureauId' is set
      if (organisationCreditBureauId === undefined || organisationCreditBureauId === null) {
        throw new Error("Missing the required parameter 'organisationCreditBureauId' when calling getConfiguration");
      }

      let pathParams = {
        'organisationCreditBureauId': organisationCreditBureauId
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
        '/CreditBureauConfiguration/config/{organisationCreditBureauId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCreditBureau operation.
     * @callback module:api/DefaultApi~getCreditBureauCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~getCreditBureauCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCreditBureau(callback) {
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
        '/CreditBureauConfiguration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCreditBureauLoanProductMapping operation.
     * @callback module:api/DefaultApi~getCreditBureauLoanProductMappingCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~getCreditBureauLoanProductMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCreditBureauLoanProductMapping(callback) {
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
        '/CreditBureauConfiguration/mappings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEntityToEntityMappings operation.
     * @callback module:api/DefaultApi~getEntityToEntityMappingsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} mapId 
     * @param {Number} fromId 
     * @param {Number} toId 
     * @param {module:api/DefaultApi~getEntityToEntityMappingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getEntityToEntityMappings(mapId, fromId, toId, callback) {
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling getEntityToEntityMappings");
      }
      // verify the required parameter 'fromId' is set
      if (fromId === undefined || fromId === null) {
        throw new Error("Missing the required parameter 'fromId' when calling getEntityToEntityMappings");
      }
      // verify the required parameter 'toId' is set
      if (toId === undefined || toId === null) {
        throw new Error("Missing the required parameter 'toId' when calling getEntityToEntityMappings");
      }

      let pathParams = {
        'mapId': mapId,
        'fromId': fromId,
        'toId': toId
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
        '/entitytoentitymapping/{mapId}/{fromId}/{toId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFamilyMember operation.
     * @callback module:api/DefaultApi~getFamilyMemberCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} familyMemberId 
     * @param {Number} clientId clientId
     * @param {module:api/DefaultApi~getFamilyMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getFamilyMember(familyMemberId, clientId, callback) {
      let postBody = null;
      // verify the required parameter 'familyMemberId' is set
      if (familyMemberId === undefined || familyMemberId === null) {
        throw new Error("Missing the required parameter 'familyMemberId' when calling getFamilyMember");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getFamilyMember");
      }

      let pathParams = {
        'familyMemberId': familyMemberId,
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
        '/clients/{clientId}/familymembers/{familyMemberId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFamilyMembers operation.
     * @callback module:api/DefaultApi~getFamilyMembersCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId 
     * @param {module:api/DefaultApi~getFamilyMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getFamilyMembers(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getFamilyMembers");
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
        '/clients/{clientId}/familymembers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGuarantorTemplate operation.
     * @callback module:api/DefaultApi~getGuarantorTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {String} opts.dateFormat 
     * @param {module:api/DefaultApi~getGuarantorTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getGuarantorTemplate(loanId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling getGuarantorTemplate");
      }

      let pathParams = {
        'loanId': loanId
      };
      let queryParams = {
        'officeId': opts['officeId'],
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
        '/loans/{loanId}/guarantors/downloadtemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOTPDeliveryMethods operation.
     * @callback module:api/DefaultApi~getOTPDeliveryMethodsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~getOTPDeliveryMethodsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getOTPDeliveryMethods(callback) {
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
        '/twofactor', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganisationCreditBureau operation.
     * @callback module:api/DefaultApi~getOrganisationCreditBureauCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~getOrganisationCreditBureauCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getOrganisationCreditBureau(callback) {
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
        '/CreditBureauConfiguration/organisationCreditBureau', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOutputTemplate operation.
     * @callback module:api/DefaultApi~getOutputTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.importDocumentId 
     * @param {module:api/DefaultApi~getOutputTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getOutputTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'importDocumentId': opts['importDocumentId']
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
        '/imports/downloadOutputTemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuote operation.
     * @callback module:api/DefaultApi~getQuoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropQuoteResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Interoperation Quote
     * @param {String} transactionCode transactionCode
     * @param {String} quoteCode quoteCode
     * @param {module:api/DefaultApi~getQuoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropQuoteResponseData}
     */
    getQuote(transactionCode, quoteCode, callback) {
      let postBody = null;
      // verify the required parameter 'transactionCode' is set
      if (transactionCode === undefined || transactionCode === null) {
        throw new Error("Missing the required parameter 'transactionCode' when calling getQuote");
      }
      // verify the required parameter 'quoteCode' is set
      if (quoteCode === undefined || quoteCode === null) {
        throw new Error("Missing the required parameter 'quoteCode' when calling getQuote");
      }

      let pathParams = {
        'transactionCode': transactionCode,
        'quoteCode': quoteCode
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
      let returnType = InteropQuoteResponseData;
      return this.apiClient.callApi(
        '/interoperation/transactions/{transactionCode}/quotes/{quoteCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSurveyEntry operation.
     * @callback module:api/DefaultApi~getSurveyEntryCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} surveyName 
     * @param {Number} clientId 
     * @param {Number} entryId 
     * @param {module:api/DefaultApi~getSurveyEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getSurveyEntry(surveyName, clientId, entryId, callback) {
      let postBody = null;
      // verify the required parameter 'surveyName' is set
      if (surveyName === undefined || surveyName === null) {
        throw new Error("Missing the required parameter 'surveyName' when calling getSurveyEntry");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getSurveyEntry");
      }
      // verify the required parameter 'entryId' is set
      if (entryId === undefined || entryId === null) {
        throw new Error("Missing the required parameter 'entryId' when calling getSurveyEntry");
      }

      let pathParams = {
        'surveyName': surveyName,
        'clientId': clientId,
        'entryId': entryId
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
        '/survey/{surveyName}/{clientId}/{entryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTemplate1 operation.
     * @callback module:api/DefaultApi~getTemplate1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId 
     * @param {module:api/DefaultApi~getTemplate1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getTemplate1(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getTemplate1");
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
        '/clients/{clientId}/familymembers/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactionRequest operation.
     * @callback module:api/DefaultApi~getTransactionRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropTransactionRequestResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Interoperation Transaction Request
     * @param {String} transactionCode transactionCode
     * @param {String} requestCode requestCode
     * @param {module:api/DefaultApi~getTransactionRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropTransactionRequestResponseData}
     */
    getTransactionRequest(transactionCode, requestCode, callback) {
      let postBody = null;
      // verify the required parameter 'transactionCode' is set
      if (transactionCode === undefined || transactionCode === null) {
        throw new Error("Missing the required parameter 'transactionCode' when calling getTransactionRequest");
      }
      // verify the required parameter 'requestCode' is set
      if (requestCode === undefined || requestCode === null) {
        throw new Error("Missing the required parameter 'requestCode' when calling getTransactionRequest");
      }

      let pathParams = {
        'transactionCode': transactionCode,
        'requestCode': requestCode
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
      let returnType = InteropTransactionRequestResponseData;
      return this.apiClient.callApi(
        '/interoperation/transactions/{transactionCode}/requests/{requestCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransfer operation.
     * @callback module:api/DefaultApi~getTransferCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropTransferResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Interoperation Transfer
     * @param {String} transactionCode transactionCode
     * @param {String} transferCode transferCode
     * @param {module:api/DefaultApi~getTransferCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropTransferResponseData}
     */
    getTransfer(transactionCode, transferCode, callback) {
      let postBody = null;
      // verify the required parameter 'transactionCode' is set
      if (transactionCode === undefined || transactionCode === null) {
        throw new Error("Missing the required parameter 'transactionCode' when calling getTransfer");
      }
      // verify the required parameter 'transferCode' is set
      if (transferCode === undefined || transferCode === null) {
        throw new Error("Missing the required parameter 'transferCode' when calling getTransfer");
      }

      let pathParams = {
        'transactionCode': transactionCode,
        'transferCode': transferCode
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
      let returnType = InteropTransferResponseData;
      return this.apiClient.callApi(
        '/interoperation/transactions/{transactionCode}/transfers/{transferCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the handleCommands operation.
     * @callback module:api/DefaultApi~handleCommandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommandProcessingResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SMS Campaign
     * Activates | Deactivates | Reactivates
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {module:api/DefaultApi~handleCommandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommandProcessingResult}
     */
    handleCommands(campaignId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling handleCommands");
      }

      let pathParams = {
        'campaignId': campaignId
      };
      let queryParams = {
        'command': opts['command']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CommandProcessingResult;
      return this.apiClient.callApi(
        '/smscampaigns/{campaignId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the handleCommands3 operation.
     * @callback module:api/DefaultApi~handleCommands3Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} type type
     * @param {Number} productId productId
     * @param {Object} opts Optional parameters
     * @param {String} opts.command command
     * @param {module:api/DefaultApi~handleCommands3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    handleCommands3(type, productId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling handleCommands3");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling handleCommands3");
      }

      let pathParams = {
        'type': type,
        'productId': productId
      };
      let queryParams = {
        'command': opts['command']
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
        '/products/{type}/{productId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the health operation.
     * @callback module:api/DefaultApi~healthCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Interoperation Health Request
     * @param {module:api/DefaultApi~healthCallback} callback The callback function, accepting three arguments: error, data, response
     */
    health(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/interoperation/health', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loanReassignment operation.
     * @callback module:api/DefaultApi~loanReassignmentCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~loanReassignmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    loanReassignment(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loans/loanreassignment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loanReassignmentTemplate operation.
     * @callback module:api/DefaultApi~loanReassignmentTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.officeId 
     * @param {Number} opts.fromLoanOfficerId 
     * @param {module:api/DefaultApi~loanReassignmentTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    loanReassignmentTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'officeId': opts['officeId'],
        'fromLoanOfficerId': opts['fromLoanOfficerId']
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
        '/loans/loanreassignment/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the newGuarantorTemplate operation.
     * @callback module:api/DefaultApi~newGuarantorTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {module:api/DefaultApi~newGuarantorTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    newGuarantorTemplate(loanId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling newGuarantorTemplate");
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loans/{loanId}/guarantors/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the newOfficeTransactionDetails operation.
     * @callback module:api/DefaultApi~newOfficeTransactionDetailsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~newOfficeTransactionDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    newOfficeTransactionDetails(callback) {
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
        '/officetransactions/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the performMeetingCommands operation.
     * @callback module:api/DefaultApi~performMeetingCommandsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {Number} meetingId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~performMeetingCommandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    performMeetingCommands(entityType, entityId, meetingId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling performMeetingCommands");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling performMeetingCommands");
      }
      // verify the required parameter 'meetingId' is set
      if (meetingId === undefined || meetingId === null) {
        throw new Error("Missing the required parameter 'meetingId' when calling performMeetingCommands");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId,
        'meetingId': meetingId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/meetings/{meetingId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the performTransfer operation.
     * @callback module:api/DefaultApi~performTransferCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropTransferResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Prepare Interoperation Transfer
     * @param {module:model/InteropTransferRequestData} interopTransferRequestData 
     * @param {Object} opts Optional parameters
     * @param {String} opts.action action
     * @param {module:api/DefaultApi~performTransferCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropTransferResponseData}
     */
    performTransfer(interopTransferRequestData, opts, callback) {
      opts = opts || {};
      let postBody = interopTransferRequestData;
      // verify the required parameter 'interopTransferRequestData' is set
      if (interopTransferRequestData === undefined || interopTransferRequestData === null) {
        throw new Error("Missing the required parameter 'interopTransferRequestData' when calling performTransfer");
      }

      let pathParams = {
      };
      let queryParams = {
        'action': opts['action']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InteropTransferResponseData;
      return this.apiClient.callApi(
        '/interoperation/transfers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postGuarantorTemplate operation.
     * @callback module:api/DefaultApi~postGuarantorTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {Object} opts Optional parameters
     * @param {module:model/FormDataContentDisposition} opts.file 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/DefaultApi~postGuarantorTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postGuarantorTemplate(loanId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling postGuarantorTemplate");
      }

      let pathParams = {
        'loanId': loanId
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
        '/loans/{loanId}/guarantors/uploadtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the preview operation.
     * @callback module:api/DefaultApi~previewCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~previewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    preview(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email/campaign/preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the preview1 operation.
     * @callback module:api/DefaultApi~preview1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~preview1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    preview1(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/smscampaigns/preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the readLoanRescheduleRequest operation.
     * @callback module:api/DefaultApi~readLoanRescheduleRequestCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} scheduleId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {module:api/DefaultApi~readLoanRescheduleRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    readLoanRescheduleRequest(scheduleId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw new Error("Missing the required parameter 'scheduleId' when calling readLoanRescheduleRequest");
      }

      let pathParams = {
        'scheduleId': scheduleId
      };
      let queryParams = {
        'command': opts['command']
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
        '/rescheduleloans/{scheduleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the register operation.
     * @callback module:api/DefaultApi~registerCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} surveyName 
     * @param {String} apptable 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~registerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    register(surveyName, apptable, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'surveyName' is set
      if (surveyName === undefined || surveyName === null) {
        throw new Error("Missing the required parameter 'surveyName' when calling register");
      }
      // verify the required parameter 'apptable' is set
      if (apptable === undefined || apptable === null) {
        throw new Error("Missing the required parameter 'apptable' when calling register");
      }

      let pathParams = {
        'surveyName': surveyName,
        'apptable': apptable
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/survey/register/{surveyName}/{apptable}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerAccountIdentifier operation.
     * @callback module:api/DefaultApi~registerAccountIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropIdentifierAccountResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Interoperation Identifier registration
     * @param {module:model/String} idType idType
     * @param {String} idValue idValue
     * @param {String} subIdOrType subIdOrType
     * @param {module:model/InteropIdentifierRequestData} interopIdentifierRequestData 
     * @param {module:api/DefaultApi~registerAccountIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropIdentifierAccountResponseData}
     */
    registerAccountIdentifier(idType, idValue, subIdOrType, interopIdentifierRequestData, callback) {
      let postBody = interopIdentifierRequestData;
      // verify the required parameter 'idType' is set
      if (idType === undefined || idType === null) {
        throw new Error("Missing the required parameter 'idType' when calling registerAccountIdentifier");
      }
      // verify the required parameter 'idValue' is set
      if (idValue === undefined || idValue === null) {
        throw new Error("Missing the required parameter 'idValue' when calling registerAccountIdentifier");
      }
      // verify the required parameter 'subIdOrType' is set
      if (subIdOrType === undefined || subIdOrType === null) {
        throw new Error("Missing the required parameter 'subIdOrType' when calling registerAccountIdentifier");
      }
      // verify the required parameter 'interopIdentifierRequestData' is set
      if (interopIdentifierRequestData === undefined || interopIdentifierRequestData === null) {
        throw new Error("Missing the required parameter 'interopIdentifierRequestData' when calling registerAccountIdentifier");
      }

      let pathParams = {
        'idType': idType,
        'idValue': idValue,
        'subIdOrType': subIdOrType
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
      let returnType = InteropIdentifierAccountResponseData;
      return this.apiClient.callApi(
        '/interoperation/parties/{idType}/{idValue}/{subIdOrType}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerAccountIdentifier1 operation.
     * @callback module:api/DefaultApi~registerAccountIdentifier1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/InteropIdentifierAccountResponseData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Interoperation Identifier registration
     * @param {module:model/String} idType idType
     * @param {String} idValue idValue
     * @param {module:model/InteropIdentifierRequestData} interopIdentifierRequestData 
     * @param {module:api/DefaultApi~registerAccountIdentifier1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteropIdentifierAccountResponseData}
     */
    registerAccountIdentifier1(idType, idValue, interopIdentifierRequestData, callback) {
      let postBody = interopIdentifierRequestData;
      // verify the required parameter 'idType' is set
      if (idType === undefined || idType === null) {
        throw new Error("Missing the required parameter 'idType' when calling registerAccountIdentifier1");
      }
      // verify the required parameter 'idValue' is set
      if (idValue === undefined || idValue === null) {
        throw new Error("Missing the required parameter 'idValue' when calling registerAccountIdentifier1");
      }
      // verify the required parameter 'interopIdentifierRequestData' is set
      if (interopIdentifierRequestData === undefined || interopIdentifierRequestData === null) {
        throw new Error("Missing the required parameter 'interopIdentifierRequestData' when calling registerAccountIdentifier1");
      }

      let pathParams = {
        'idType': idType,
        'idValue': idValue
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
      let returnType = InteropIdentifierAccountResponseData;
      return this.apiClient.callApi(
        '/interoperation/parties/{idType}/{idValue}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerDevice operation.
     * @callback module:api/DefaultApi~registerDeviceCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~registerDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    registerDevice(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/self/device/registration', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the requestToken operation.
     * @callback module:api/DefaultApi~requestTokenCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.deliveryMethod 
     * @param {Boolean} opts.extendedToken  (default to false)
     * @param {module:api/DefaultApi~requestTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    requestToken(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'deliveryMethod': opts['deliveryMethod'],
        'extendedToken': opts['extendedToken']
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
        '/twofactor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retreiveFund operation.
     * @callback module:api/DefaultApi~retreiveFundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFundsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Fund
     * Returns the details of a Fund.  Example Requests:  funds/1
     * @param {Number} fundId fundId
     * @param {module:api/DefaultApi~retreiveFundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFundsResponse}
     */
    retreiveFund(fundId, callback) {
      let postBody = null;
      // verify the required parameter 'fundId' is set
      if (fundId === undefined || fundId === null) {
        throw new Error("Missing the required parameter 'fundId' when calling retreiveFund");
      }

      let pathParams = {
        'fundId': fundId
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
      let returnType = GetFundsResponse;
      return this.apiClient.callApi(
        '/funds/{fundId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieve operation.
     * @callback module:api/DefaultApi~retrieveCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} likelihoodId 
     * @param {String} ppiName 
     * @param {module:api/DefaultApi~retrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieve(likelihoodId, ppiName, callback) {
      let postBody = null;
      // verify the required parameter 'likelihoodId' is set
      if (likelihoodId === undefined || likelihoodId === null) {
        throw new Error("Missing the required parameter 'likelihoodId' when calling retrieve");
      }
      // verify the required parameter 'ppiName' is set
      if (ppiName === undefined || ppiName === null) {
        throw new Error("Missing the required parameter 'ppiName' when calling retrieve");
      }

      let pathParams = {
        'likelihoodId': likelihoodId,
        'ppiName': ppiName
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
        '/likelihood/{ppiName}/{likelihoodId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll10 operation.
     * @callback module:api/DefaultApi~retrieveAll10Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~retrieveAll10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll10(callback) {
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
        '/sms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll11 operation.
     * @callback module:api/DefaultApi~retrieveAll11Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} ppiName 
     * @param {module:api/DefaultApi~retrieveAll11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll11(ppiName, callback) {
      let postBody = null;
      // verify the required parameter 'ppiName' is set
      if (ppiName === undefined || ppiName === null) {
        throw new Error("Missing the required parameter 'ppiName' when calling retrieveAll11");
      }

      let pathParams = {
        'ppiName': ppiName
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
        '/likelihood/{ppiName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll12 operation.
     * @callback module:api/DefaultApi~retrieveAll12Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} ppiName 
     * @param {module:api/DefaultApi~retrieveAll12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll12(ppiName, callback) {
      let postBody = null;
      // verify the required parameter 'ppiName' is set
      if (ppiName === undefined || ppiName === null) {
        throw new Error("Missing the required parameter 'ppiName' when calling retrieveAll12");
      }

      let pathParams = {
        'ppiName': ppiName
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
        '/povertyLine/{ppiName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll13 operation.
     * @callback module:api/DefaultApi~retrieveAll13Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} ppiName 
     * @param {Number} likelihoodId 
     * @param {module:api/DefaultApi~retrieveAll13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll13(ppiName, likelihoodId, callback) {
      let postBody = null;
      // verify the required parameter 'ppiName' is set
      if (ppiName === undefined || ppiName === null) {
        throw new Error("Missing the required parameter 'ppiName' when calling retrieveAll13");
      }
      // verify the required parameter 'likelihoodId' is set
      if (likelihoodId === undefined || likelihoodId === null) {
        throw new Error("Missing the required parameter 'likelihoodId' when calling retrieveAll13");
      }

      let pathParams = {
        'ppiName': ppiName,
        'likelihoodId': likelihoodId
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
        '/povertyLine/{ppiName}/{likelihoodId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll27 operation.
     * @callback module:api/DefaultApi~retrieveAll27Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} savingsId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.guarantorFundingId 
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {String} opts.orderBy 
     * @param {String} opts.sortOrder 
     * @param {module:api/DefaultApi~retrieveAll27Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll27(savingsId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'savingsId' is set
      if (savingsId === undefined || savingsId === null) {
        throw new Error("Missing the required parameter 'savingsId' when calling retrieveAll27");
      }

      let pathParams = {
        'savingsId': savingsId
      };
      let queryParams = {
        'guarantorFundingId': opts['guarantorFundingId'],
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/savingsaccounts/{savingsId}/onholdtransactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll37 operation.
     * @callback module:api/DefaultApi~retrieveAll37Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId 
     * @param {module:api/DefaultApi~retrieveAll37Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll37(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'clientId': opts['clientId']
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
        '/self/savingsproducts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll5 operation.
     * @callback module:api/DefaultApi~retrieveAll5Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~retrieveAll5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll5(callback) {
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
        '/email/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll7 operation.
     * @callback module:api/DefaultApi~retrieveAll7Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~retrieveAll7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll7(callback) {
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
        '/entitytoentitymapping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAll9 operation.
     * @callback module:api/DefaultApi~retrieveAll9Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~retrieveAll9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAll9(callback) {
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
        '/twofactor/configure', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllCampaign operation.
     * @callback module:api/DefaultApi~retrieveAllCampaignCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~retrieveAllCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAllCampaign(callback) {
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
        '/email/campaign', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllDeviceRegistrations operation.
     * @callback module:api/DefaultApi~retrieveAllDeviceRegistrationsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~retrieveAllDeviceRegistrationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAllDeviceRegistrations(callback) {
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
        '/self/device/registration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllEmailByStatus operation.
     * @callback module:api/DefaultApi~retrieveAllEmailByStatusCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch 
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {Number} opts.status 
     * @param {String} opts.orderBy 
     * @param {String} opts.sortOrder 
     * @param {Object} opts.fromDate 
     * @param {Object} opts.toDate 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {module:api/DefaultApi~retrieveAllEmailByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAllEmailByStatus(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'status': opts['status'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder'],
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email/messageByStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllEmails operation.
     * @callback module:api/DefaultApi~retrieveAllEmailsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~retrieveAllEmailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAllEmails(callback) {
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
        '/email', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllEmails1 operation.
     * @callback module:api/DefaultApi~retrieveAllEmails1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/SmsCampaignData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List SMS Campaigns
     * Example Requests:  smscampaigns
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch 
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {String} opts.orderBy 
     * @param {String} opts.sortOrder 
     * @param {module:api/DefaultApi~retrieveAllEmails1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SmsCampaignData}
     */
    retrieveAllEmails1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
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
      let returnType = SmsCampaignData;
      return this.apiClient.callApi(
        '/smscampaigns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllGroups operation.
     * @callback module:api/DefaultApi~retrieveAllGroupsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~retrieveAllGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAllGroups(callback) {
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
        '/grouplevels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllProducts operation.
     * @callback module:api/DefaultApi~retrieveAllProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProductsTypeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Share Products
     * Lists Share Products  Mandatory Fields: limit, offset  Example Requests:  shareproducts
     * @param {String} type type
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {module:api/DefaultApi~retrieveAllProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetProductsTypeResponse}
     */
    retrieveAllProducts(type, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling retrieveAllProducts");
      }

      let pathParams = {
        'type': type
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProductsTypeResponse;
      return this.apiClient.callApi(
        '/products/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllProducts1 operation.
     * @callback module:api/DefaultApi~retrieveAllProducts1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId 
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {module:api/DefaultApi~retrieveAllProducts1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAllProducts1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'clientId': opts['clientId'],
        'offset': opts['offset'],
        'limit': opts['limit']
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
        '/self/products/share', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllRescheduleRequest operation.
     * @callback module:api/DefaultApi~retrieveAllRescheduleRequestCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {module:api/DefaultApi~retrieveAllRescheduleRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAllRescheduleRequest(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'command': opts['command']
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
        '/rescheduleloans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllSmsByStatus operation.
     * @callback module:api/DefaultApi~retrieveAllSmsByStatusCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.status 
     * @param {Object} opts.fromDate 
     * @param {Object} opts.toDate 
     * @param {String} opts.locale 
     * @param {String} opts.dateFormat 
     * @param {String} opts.sqlSearch 
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {String} opts.orderBy 
     * @param {String} opts.sortOrder 
     * @param {module:api/DefaultApi~retrieveAllSmsByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveAllSmsByStatus(campaignId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling retrieveAllSmsByStatus");
      }

      let pathParams = {
        'campaignId': campaignId
      };
      let queryParams = {
        'status': opts['status'],
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
        'locale': opts['locale'],
        'dateFormat': opts['dateFormat'],
        'sqlSearch': opts['sqlSearch'],
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/sms/{campaignId}/messageByStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCalendar operation.
     * @callback module:api/DefaultApi~retrieveCalendarCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} calendarId 
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {module:api/DefaultApi~retrieveCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveCalendar(calendarId, entityType, entityId, callback) {
      let postBody = null;
      // verify the required parameter 'calendarId' is set
      if (calendarId === undefined || calendarId === null) {
        throw new Error("Missing the required parameter 'calendarId' when calling retrieveCalendar");
      }
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling retrieveCalendar");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling retrieveCalendar");
      }

      let pathParams = {
        'calendarId': calendarId,
        'entityType': entityType,
        'entityId': entityId
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
        '/{entityType}/{entityId}/calendars/{calendarId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCalendarsByEntity operation.
     * @callback module:api/DefaultApi~retrieveCalendarsByEntityCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.calendarType  (default to 'all')
     * @param {module:api/DefaultApi~retrieveCalendarsByEntityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveCalendarsByEntity(entityType, entityId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling retrieveCalendarsByEntity");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling retrieveCalendarsByEntity");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId
      };
      let queryParams = {
        'calendarType': opts['calendarType']
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
        '/{entityType}/{entityId}/calendars', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCampaign operation.
     * @callback module:api/DefaultApi~retrieveCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SmsCampaignData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a SMS Campaign
     * Example Requests:  smscampaigns/1 
     * @param {Number} resourceId 
     * @param {module:api/DefaultApi~retrieveCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SmsCampaignData}
     */
    retrieveCampaign(resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling retrieveCampaign");
      }

      let pathParams = {
        'resourceId': resourceId
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
      let returnType = SmsCampaignData;
      return this.apiClient.callApi(
        '/smscampaigns/{resourceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveDeviceRegiistration operation.
     * @callback module:api/DefaultApi~retrieveDeviceRegiistrationCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/DefaultApi~retrieveDeviceRegiistrationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveDeviceRegiistration(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrieveDeviceRegiistration");
      }

      let pathParams = {
        'id': id
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
        '/self/device/registration/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveDeviceRegistrationByClientId operation.
     * @callback module:api/DefaultApi~retrieveDeviceRegistrationByClientIdCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} clientId 
     * @param {module:api/DefaultApi~retrieveDeviceRegistrationByClientIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveDeviceRegistrationByClientId(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling retrieveDeviceRegistrationByClientId");
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
        '/self/device/registration/client/{clientId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveFailedEmail operation.
     * @callback module:api/DefaultApi~retrieveFailedEmailCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch 
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {String} opts.orderBy 
     * @param {String} opts.sortOrder 
     * @param {module:api/DefaultApi~retrieveFailedEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveFailedEmail(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email/failedEmail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveFunds operation.
     * @callback module:api/DefaultApi~retrieveFundsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetFundsResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Funds
     * Returns the list of funds.  Example Requests:  funds
     * @param {module:api/DefaultApi~retrieveFundsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetFundsResponse>}
     */
    retrieveFunds(callback) {
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
      let returnType = [GetFundsResponse];
      return this.apiClient.callApi(
        '/funds', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveGuarantorDetails operation.
     * @callback module:api/DefaultApi~retrieveGuarantorDetailsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {module:api/DefaultApi~retrieveGuarantorDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveGuarantorDetails(loanId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveGuarantorDetails");
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loans/{loanId}/guarantors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveGuarantorDetails1 operation.
     * @callback module:api/DefaultApi~retrieveGuarantorDetails1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {Number} guarantorId 
     * @param {module:api/DefaultApi~retrieveGuarantorDetails1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveGuarantorDetails1(loanId, guarantorId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retrieveGuarantorDetails1");
      }
      // verify the required parameter 'guarantorId' is set
      if (guarantorId === undefined || guarantorId === null) {
        throw new Error("Missing the required parameter 'guarantorId' when calling retrieveGuarantorDetails1");
      }

      let pathParams = {
        'loanId': loanId,
        'guarantorId': guarantorId
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
        '/loans/{loanId}/guarantors/{guarantorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveImportDocuments operation.
     * @callback module:api/DefaultApi~retrieveImportDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.entityType 
     * @param {module:api/DefaultApi~retrieveImportDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveImportDocuments(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'entityType': opts['entityType']
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
        '/imports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveMeeting operation.
     * @callback module:api/DefaultApi~retrieveMeetingCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} meetingId 
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {module:api/DefaultApi~retrieveMeetingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveMeeting(meetingId, entityType, entityId, callback) {
      let postBody = null;
      // verify the required parameter 'meetingId' is set
      if (meetingId === undefined || meetingId === null) {
        throw new Error("Missing the required parameter 'meetingId' when calling retrieveMeeting");
      }
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling retrieveMeeting");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling retrieveMeeting");
      }

      let pathParams = {
        'meetingId': meetingId,
        'entityType': entityType,
        'entityId': entityId
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
        '/{entityType}/{entityId}/meetings/{meetingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveMeetings operation.
     * @callback module:api/DefaultApi~retrieveMeetingsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {module:api/DefaultApi~retrieveMeetingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveMeetings(entityType, entityId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling retrieveMeetings");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling retrieveMeetings");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId
      };
      let queryParams = {
        'limit': opts['limit']
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
        '/{entityType}/{entityId}/meetings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveNewCalendarDetails operation.
     * @callback module:api/DefaultApi~retrieveNewCalendarDetailsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {module:api/DefaultApi~retrieveNewCalendarDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveNewCalendarDetails(entityType, entityId, callback) {
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling retrieveNewCalendarDetails");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling retrieveNewCalendarDetails");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId
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
        '/{entityType}/{entityId}/calendars/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOfficeTransactions operation.
     * @callback module:api/DefaultApi~retrieveOfficeTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~retrieveOfficeTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveOfficeTransactions(callback) {
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
        '/officetransactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne1 operation.
     * @callback module:api/DefaultApi~retrieveOne1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {module:api/DefaultApi~retrieveOne1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveOne1(resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling retrieveOne1");
      }

      let pathParams = {
        'resourceId': resourceId
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
        '/email/{resourceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne16 operation.
     * @callback module:api/DefaultApi~retrieveOne16Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} fixedDepositAccountId 
     * @param {Number} transactionId 
     * @param {module:api/DefaultApi~retrieveOne16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveOne16(fixedDepositAccountId, transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'fixedDepositAccountId' is set
      if (fixedDepositAccountId === undefined || fixedDepositAccountId === null) {
        throw new Error("Missing the required parameter 'fixedDepositAccountId' when calling retrieveOne16");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling retrieveOne16");
      }

      let pathParams = {
        'fixedDepositAccountId': fixedDepositAccountId,
        'transactionId': transactionId
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
        '/fixeddepositaccounts/{fixedDepositAccountId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne22 operation.
     * @callback module:api/DefaultApi~retrieveOne22Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} savingsId 
     * @param {Number} transactionId 
     * @param {module:api/DefaultApi~retrieveOne22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveOne22(savingsId, transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'savingsId' is set
      if (savingsId === undefined || savingsId === null) {
        throw new Error("Missing the required parameter 'savingsId' when calling retrieveOne22");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling retrieveOne22");
      }

      let pathParams = {
        'savingsId': savingsId,
        'transactionId': transactionId
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
        '/savingsaccounts/{savingsId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne26 operation.
     * @callback module:api/DefaultApi~retrieveOne26Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId 
     * @param {module:api/DefaultApi~retrieveOne26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveOne26(productId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveOne26");
      }

      let pathParams = {
        'productId': productId
      };
      let queryParams = {
        'clientId': opts['clientId']
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
        '/self/savingsproducts/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne4 operation.
     * @callback module:api/DefaultApi~retrieveOne4Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} mapId 
     * @param {module:api/DefaultApi~retrieveOne4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveOne4(mapId, callback) {
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling retrieveOne4");
      }

      let pathParams = {
        'mapId': mapId
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
        '/entitytoentitymapping/{mapId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOne6 operation.
     * @callback module:api/DefaultApi~retrieveOne6Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {module:api/DefaultApi~retrieveOne6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveOne6(resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling retrieveOne6");
      }

      let pathParams = {
        'resourceId': resourceId
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
        '/sms/{resourceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOneCampaign operation.
     * @callback module:api/DefaultApi~retrieveOneCampaignCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {module:api/DefaultApi~retrieveOneCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveOneCampaign(resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling retrieveOneCampaign");
      }

      let pathParams = {
        'resourceId': resourceId
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
        '/email/campaign/{resourceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveOneTemplate operation.
     * @callback module:api/DefaultApi~retrieveOneTemplateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {module:api/DefaultApi~retrieveOneTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveOneTemplate(resourceId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling retrieveOneTemplate");
      }

      let pathParams = {
        'resourceId': resourceId
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
        '/email/campaign/template/{resourceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrievePendingEmail operation.
     * @callback module:api/DefaultApi~retrievePendingEmailCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch 
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {String} opts.orderBy 
     * @param {String} opts.sortOrder 
     * @param {module:api/DefaultApi~retrievePendingEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrievePendingEmail(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email/pendingEmail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveProduct operation.
     * @callback module:api/DefaultApi~retrieveProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProductsTypeProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Share Product
     * Retrieves a Share Product  Example Requests:  products/share/1   products/share/1?template=true
     * @param {Number} productId productId
     * @param {String} type type
     * @param {module:api/DefaultApi~retrieveProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetProductsTypeProductIdResponse}
     */
    retrieveProduct(productId, type, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveProduct");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling retrieveProduct");
      }

      let pathParams = {
        'productId': productId,
        'type': type
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
      let returnType = GetProductsTypeProductIdResponse;
      return this.apiClient.callApi(
        '/products/{type}/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveProduct1 operation.
     * @callback module:api/DefaultApi~retrieveProduct1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {String} type 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId 
     * @param {module:api/DefaultApi~retrieveProduct1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveProduct1(productId, type, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveProduct1");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling retrieveProduct1");
      }

      let pathParams = {
        'productId': productId,
        'type': type
      };
      let queryParams = {
        'clientId': opts['clientId']
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
        '/self/products/share/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveRate operation.
     * @callback module:api/DefaultApi~retrieveRateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} rateId 
     * @param {module:api/DefaultApi~retrieveRateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveRate(rateId, callback) {
      let postBody = null;
      // verify the required parameter 'rateId' is set
      if (rateId === undefined || rateId === null) {
        throw new Error("Missing the required parameter 'rateId' when calling retrieveRate");
      }

      let pathParams = {
        'rateId': rateId
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
        '/rates/{rateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSentEmail operation.
     * @callback module:api/DefaultApi~retrieveSentEmailCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.sqlSearch 
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {String} opts.orderBy 
     * @param {String} opts.sortOrder 
     * @param {module:api/DefaultApi~retrieveSentEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveSentEmail(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sqlSearch': opts['sqlSearch'],
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email/sentEmail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSurvey operation.
     * @callback module:api/DefaultApi~retrieveSurveyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSurveyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve survey
     * Lists a registered survey table details and the Apache Fineract Core application table they are registered to.
     * @param {String} surveyName surveyName
     * @param {module:api/DefaultApi~retrieveSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSurveyResponse}
     */
    retrieveSurvey(surveyName, callback) {
      let postBody = null;
      // verify the required parameter 'surveyName' is set
      if (surveyName === undefined || surveyName === null) {
        throw new Error("Missing the required parameter 'surveyName' when calling retrieveSurvey");
      }

      let pathParams = {
        'surveyName': surveyName
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
      let returnType = GetSurveyResponse;
      return this.apiClient.callApi(
        '/survey/{surveyName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSurveys operation.
     * @callback module:api/DefaultApi~retrieveSurveysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetSurveyResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve surveys
     * Retrieve surveys. This allows to retrieve the list of survey tables registered .
     * @param {module:api/DefaultApi~retrieveSurveysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetSurveyResponse>}
     */
    retrieveSurveys(callback) {
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
      let returnType = [GetSurveyResponse];
      return this.apiClient.callApi(
        '/survey', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate11 operation.
     * @callback module:api/DefaultApi~retrieveTemplate11Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {module:api/DefaultApi~retrieveTemplate11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate11(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveTemplate11");
      }

      let pathParams = {
        'productId': productId
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
        '/loanproducts/{productId}/productmix', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate12 operation.
     * @callback module:api/DefaultApi~retrieveTemplate12Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} type type
     * @param {module:api/DefaultApi~retrieveTemplate12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate12(type, callback) {
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling retrieveTemplate12");
      }

      let pathParams = {
        'type': type
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
        '/products/{type}/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate13 operation.
     * @callback module:api/DefaultApi~retrieveTemplate13Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} fixedDepositAccountId 
     * @param {module:api/DefaultApi~retrieveTemplate13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate13(fixedDepositAccountId, callback) {
      let postBody = null;
      // verify the required parameter 'fixedDepositAccountId' is set
      if (fixedDepositAccountId === undefined || fixedDepositAccountId === null) {
        throw new Error("Missing the required parameter 'fixedDepositAccountId' when calling retrieveTemplate13");
      }

      let pathParams = {
        'fixedDepositAccountId': fixedDepositAccountId
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
        '/fixeddepositaccounts/{fixedDepositAccountId}/transactions/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate18 operation.
     * @callback module:api/DefaultApi~retrieveTemplate18Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} savingsId 
     * @param {module:api/DefaultApi~retrieveTemplate18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate18(savingsId, callback) {
      let postBody = null;
      // verify the required parameter 'savingsId' is set
      if (savingsId === undefined || savingsId === null) {
        throw new Error("Missing the required parameter 'savingsId' when calling retrieveTemplate18");
      }

      let pathParams = {
        'savingsId': savingsId
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
        '/savingsaccounts/{savingsId}/transactions/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveTemplate9 operation.
     * @callback module:api/DefaultApi~retrieveTemplate9Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~retrieveTemplate9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveTemplate9(callback) {
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
        '/rescheduleloans/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retriveDetail operation.
     * @callback module:api/DefaultApi~retriveDetailCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {Number} disbursementId 
     * @param {module:api/DefaultApi~retriveDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retriveDetail(loanId, disbursementId, callback) {
      let postBody = null;
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling retriveDetail");
      }
      // verify the required parameter 'disbursementId' is set
      if (disbursementId === undefined || disbursementId === null) {
        throw new Error("Missing the required parameter 'disbursementId' when calling retriveDetail");
      }

      let pathParams = {
        'loanId': loanId,
        'disbursementId': disbursementId
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
        '/loans/{loanId}/disbursements/{disbursementId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retriveOutputTemplateLocation operation.
     * @callback module:api/DefaultApi~retriveOutputTemplateLocationCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.importDocumentId 
     * @param {module:api/DefaultApi~retriveOutputTemplateLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retriveOutputTemplateLocation(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'importDocumentId': opts['importDocumentId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/imports/getOutputTemplateLocation', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template1 operation.
     * @callback module:api/DefaultApi~template1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~template1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    template1(callback) {
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
        '/email/campaign/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template11 operation.
     * @callback module:api/DefaultApi~template11Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.calendarId 
     * @param {module:api/DefaultApi~template11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    template11(entityType, entityId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling template11");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling template11");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId
      };
      let queryParams = {
        'calendarId': opts['calendarId']
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
        '/{entityType}/{entityId}/meetings/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the template2 operation.
     * @callback module:api/DefaultApi~template2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/SmsCampaignData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a SMS Campaign
     * Example Requests:  smscampaigns/1   smscampaigns/1?template=true   smscampaigns/template
     * @param {module:api/DefaultApi~template2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SmsCampaignData}
     */
    template2(callback) {
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
      let accepts = ['*/*'];
      let returnType = SmsCampaignData;
      return this.apiClient.callApi(
        '/smscampaigns/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the transaction operation.
     * @callback module:api/DefaultApi~transactionCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} fixedDepositAccountId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~transactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    transaction(fixedDepositAccountId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'fixedDepositAccountId' is set
      if (fixedDepositAccountId === undefined || fixedDepositAccountId === null) {
        throw new Error("Missing the required parameter 'fixedDepositAccountId' when calling transaction");
      }

      let pathParams = {
        'fixedDepositAccountId': fixedDepositAccountId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/fixeddepositaccounts/{fixedDepositAccountId}/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the transaction2 operation.
     * @callback module:api/DefaultApi~transaction2Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} savingsId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~transaction2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    transaction2(savingsId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'savingsId' is set
      if (savingsId === undefined || savingsId === null) {
        throw new Error("Missing the required parameter 'savingsId' when calling transaction2");
      }

      let pathParams = {
        'savingsId': savingsId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/savingsaccounts/{savingsId}/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the transferMoneyFrom operation.
     * @callback module:api/DefaultApi~transferMoneyFromCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~transferMoneyFromCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    transferMoneyFrom(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/officetransactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update2 operation.
     * @callback module:api/DefaultApi~update2Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~update2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    update2(resourceId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling update2");
      }

      let pathParams = {
        'resourceId': resourceId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email/{resourceId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update3 operation.
     * @callback module:api/DefaultApi~update3Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~update3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    update3(resourceId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling update3");
      }

      let pathParams = {
        'resourceId': resourceId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/sms/{resourceId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update4 operation.
     * @callback module:api/DefaultApi~update4Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} likelihoodId 
     * @param {String} ppiName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~update4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    update4(likelihoodId, ppiName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'likelihoodId' is set
      if (likelihoodId === undefined || likelihoodId === null) {
        throw new Error("Missing the required parameter 'likelihoodId' when calling update4");
      }
      // verify the required parameter 'ppiName' is set
      if (ppiName === undefined || ppiName === null) {
        throw new Error("Missing the required parameter 'ppiName' when calling update4");
      }

      let pathParams = {
        'likelihoodId': likelihoodId,
        'ppiName': ppiName
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/likelihood/{ppiName}/{likelihoodId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCalendar operation.
     * @callback module:api/DefaultApi~updateCalendarCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {Number} calendarId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateCalendar(entityType, entityId, calendarId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling updateCalendar");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling updateCalendar");
      }
      // verify the required parameter 'calendarId' is set
      if (calendarId === undefined || calendarId === null) {
        throw new Error("Missing the required parameter 'calendarId' when calling updateCalendar");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId,
        'calendarId': calendarId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/calendars/{calendarId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCampaign operation.
     * @callback module:api/DefaultApi~updateCampaignCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateCampaign(resourceId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling updateCampaign");
      }

      let pathParams = {
        'resourceId': resourceId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email/campaign/{resourceId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCampaign1 operation.
     * @callback module:api/DefaultApi~updateCampaign1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CommandProcessingResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Campaign
     * @param {Number} campaignId 
     * @param {module:model/CommandWrapper} commandWrapper 
     * @param {module:api/DefaultApi~updateCampaign1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommandProcessingResult}
     */
    updateCampaign1(campaignId, commandWrapper, callback) {
      let postBody = commandWrapper;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateCampaign1");
      }
      // verify the required parameter 'commandWrapper' is set
      if (commandWrapper === undefined || commandWrapper === null) {
        throw new Error("Missing the required parameter 'commandWrapper' when calling updateCampaign1");
      }

      let pathParams = {
        'campaignId': campaignId
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
      let returnType = CommandProcessingResult;
      return this.apiClient.callApi(
        '/smscampaigns/{campaignId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClientFamilyMembers operation.
     * @callback module:api/DefaultApi~updateClientFamilyMembersCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} familyMemberId 
     * @param {Number} clientId clientId
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateClientFamilyMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateClientFamilyMembers(familyMemberId, clientId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'familyMemberId' is set
      if (familyMemberId === undefined || familyMemberId === null) {
        throw new Error("Missing the required parameter 'familyMemberId' when calling updateClientFamilyMembers");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling updateClientFamilyMembers");
      }

      let pathParams = {
        'familyMemberId': familyMemberId,
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/clients/{clientId}/familymembers/{familyMemberId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClientImage1 operation.
     * @callback module:api/DefaultApi~updateClientImage1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entity 
     * @param {Number} entityId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.contentLength 
     * @param {module:model/FormDataBodyPart} opts.file 
     * @param {module:api/DefaultApi~updateClientImage1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateClientImage1(entity, entityId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling updateClientImage1");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling updateClientImage1");
      }

      let pathParams = {
        'entity': entity,
        'entityId': entityId
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Length': opts['contentLength']
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['basicAuth', 'tenantid'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/{entity}/{entityId}/images', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateConfiguration operation.
     * @callback module:api/DefaultApi~updateConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateConfiguration(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/email/configuration', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateConfiguration2 operation.
     * @callback module:api/DefaultApi~updateConfiguration2Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateConfiguration2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateConfiguration2(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
        '/twofactor/invalidate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateConfiguration3 operation.
     * @callback module:api/DefaultApi~updateConfiguration3Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateConfiguration3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateConfiguration3(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/twofactor/configure', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCreditBureau operation.
     * @callback module:api/DefaultApi~updateCreditBureauCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateCreditBureauCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateCreditBureau(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/CreditBureauConfiguration/organisationCreditBureau', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCreditBureauLoanProductMapping operation.
     * @callback module:api/DefaultApi~updateCreditBureauLoanProductMappingCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateCreditBureauLoanProductMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateCreditBureauLoanProductMapping(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/CreditBureauConfiguration/mappings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDeviceRegistration operation.
     * @callback module:api/DefaultApi~updateDeviceRegistrationCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateDeviceRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateDeviceRegistration(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDeviceRegistration");
      }

      let pathParams = {
        'id': id
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/self/device/registration/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDisbursementDate operation.
     * @callback module:api/DefaultApi~updateDisbursementDateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {Number} disbursementId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateDisbursementDateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateDisbursementDate(loanId, disbursementId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling updateDisbursementDate");
      }
      // verify the required parameter 'disbursementId' is set
      if (disbursementId === undefined || disbursementId === null) {
        throw new Error("Missing the required parameter 'disbursementId' when calling updateDisbursementDate");
      }

      let pathParams = {
        'loanId': loanId,
        'disbursementId': disbursementId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loans/{loanId}/disbursements/{disbursementId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFund operation.
     * @callback module:api/DefaultApi~updateFundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutFundsFundIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Fund
     * Updates the details of a fund.
     * @param {Number} fundId fundId
     * @param {module:model/PutFundsFundIdRequest} putFundsFundIdRequest 
     * @param {module:api/DefaultApi~updateFundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutFundsFundIdResponse}
     */
    updateFund(fundId, putFundsFundIdRequest, callback) {
      let postBody = putFundsFundIdRequest;
      // verify the required parameter 'fundId' is set
      if (fundId === undefined || fundId === null) {
        throw new Error("Missing the required parameter 'fundId' when calling updateFund");
      }
      // verify the required parameter 'putFundsFundIdRequest' is set
      if (putFundsFundIdRequest === undefined || putFundsFundIdRequest === null) {
        throw new Error("Missing the required parameter 'putFundsFundIdRequest' when calling updateFund");
      }

      let pathParams = {
        'fundId': fundId
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
      let returnType = PutFundsFundIdResponse;
      return this.apiClient.callApi(
        '/funds/{fundId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGuarantor operation.
     * @callback module:api/DefaultApi~updateGuarantorCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} loanId 
     * @param {Number} guarantorId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateGuarantorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateGuarantor(loanId, guarantorId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'loanId' is set
      if (loanId === undefined || loanId === null) {
        throw new Error("Missing the required parameter 'loanId' when calling updateGuarantor");
      }
      // verify the required parameter 'guarantorId' is set
      if (guarantorId === undefined || guarantorId === null) {
        throw new Error("Missing the required parameter 'guarantorId' when calling updateGuarantor");
      }

      let pathParams = {
        'loanId': loanId,
        'guarantorId': guarantorId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loans/{loanId}/guarantors/{guarantorId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLoanRescheduleRequest operation.
     * @callback module:api/DefaultApi~updateLoanRescheduleRequestCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} scheduleId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.command 
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateLoanRescheduleRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateLoanRescheduleRequest(scheduleId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw new Error("Missing the required parameter 'scheduleId' when calling updateLoanRescheduleRequest");
      }

      let pathParams = {
        'scheduleId': scheduleId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/rescheduleloans/{scheduleId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMap operation.
     * @callback module:api/DefaultApi~updateMapCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} mapId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateMapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateMap(mapId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling updateMap");
      }

      let pathParams = {
        'mapId': mapId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/entitytoentitymapping/{mapId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMeeting operation.
     * @callback module:api/DefaultApi~updateMeetingCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} entityType 
     * @param {Number} entityId 
     * @param {Number} meetingId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateMeetingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateMeeting(entityType, entityId, meetingId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling updateMeeting");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling updateMeeting");
      }
      // verify the required parameter 'meetingId' is set
      if (meetingId === undefined || meetingId === null) {
        throw new Error("Missing the required parameter 'meetingId' when calling updateMeeting");
      }

      let pathParams = {
        'entityType': entityType,
        'entityId': entityId,
        'meetingId': meetingId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/{entityType}/{entityId}/meetings/{meetingId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:api/DefaultApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutProductsTypeProductIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Share Product
     * Updates a Share Product
     * @param {String} type type
     * @param {Number} productId productId
     * @param {module:model/PutProductsTypeProductIdRequest} putProductsTypeProductIdRequest 
     * @param {module:api/DefaultApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutProductsTypeProductIdResponse}
     */
    updateProduct(type, productId, putProductsTypeProductIdRequest, callback) {
      let postBody = putProductsTypeProductIdRequest;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling updateProduct");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling updateProduct");
      }
      // verify the required parameter 'putProductsTypeProductIdRequest' is set
      if (putProductsTypeProductIdRequest === undefined || putProductsTypeProductIdRequest === null) {
        throw new Error("Missing the required parameter 'putProductsTypeProductIdRequest' when calling updateProduct");
      }

      let pathParams = {
        'type': type,
        'productId': productId
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
      let returnType = PutProductsTypeProductIdResponse;
      return this.apiClient.callApi(
        '/products/{type}/{productId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProductMix operation.
     * @callback module:api/DefaultApi~updateProductMixCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} productId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateProductMixCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateProductMix(productId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling updateProductMix");
      }

      let pathParams = {
        'productId': productId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/loanproducts/{productId}/productmix', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRate operation.
     * @callback module:api/DefaultApi~updateRateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} rateId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/DefaultApi~updateRateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    updateRate(rateId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'rateId' is set
      if (rateId === undefined || rateId === null) {
        throw new Error("Missing the required parameter 'rateId' when calling updateRate");
      }

      let pathParams = {
        'rateId': rateId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/rates/{rateId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the validate operation.
     * @callback module:api/DefaultApi~validateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {module:api/DefaultApi~validateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    validate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'token': opts['token']
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
        '/twofactor/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
