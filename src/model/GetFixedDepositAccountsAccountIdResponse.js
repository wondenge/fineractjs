

import ApiClient from '../ApiClient';
import GetFixedDepositAccountsAccountChart from './GetFixedDepositAccountsAccountChart';
import GetFixedDepositAccountsAccountIdCurrency from './GetFixedDepositAccountsAccountIdCurrency';
import GetFixedDepositAccountsAccountIdSummary from './GetFixedDepositAccountsAccountIdSummary';
import GetFixedDepositAccountsDepositPeriodFrequency from './GetFixedDepositAccountsDepositPeriodFrequency';
import GetFixedDepositAccountsInterestCalculationDaysInYearType from './GetFixedDepositAccountsInterestCalculationDaysInYearType';
import GetFixedDepositAccountsInterestCalculationType from './GetFixedDepositAccountsInterestCalculationType';
import GetFixedDepositAccountsInterestCompoundingPeriodType from './GetFixedDepositAccountsInterestCompoundingPeriodType';
import GetFixedDepositAccountsInterestPostingPeriodType from './GetFixedDepositAccountsInterestPostingPeriodType';
import GetFixedDepositAccountsMaxDepositTermType from './GetFixedDepositAccountsMaxDepositTermType';
import GetFixedDepositAccountsMinDepositTermType from './GetFixedDepositAccountsMinDepositTermType';
import GetFixedDepositAccountsStatus from './GetFixedDepositAccountsStatus';
import GetFixedDepositAccountsTimeline from './GetFixedDepositAccountsTimeline';

/**
 * The GetFixedDepositAccountsAccountIdResponse model module.
 * @module model/GetFixedDepositAccountsAccountIdResponse
 * @version 1.0
 */
class GetFixedDepositAccountsAccountIdResponse {
    /**
     * Constructs a new <code>GetFixedDepositAccountsAccountIdResponse</code>.
     * GetFixedDepositAccountsAccountIdResponse
     * @alias module:model/GetFixedDepositAccountsAccountIdResponse
     */
    constructor() { 
        
        GetFixedDepositAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsAccountIdResponse} The populated <code>GetFixedDepositAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsAccountIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('savingsProductId')) {
                obj['savingsProductId'] = ApiClient.convertToType(data['savingsProductId'], 'Number');
            }
            if (data.hasOwnProperty('savingsProductName')) {
                obj['savingsProductName'] = ApiClient.convertToType(data['savingsProductName'], 'String');
            }
            if (data.hasOwnProperty('fieldOfficerId')) {
                obj['fieldOfficerId'] = ApiClient.convertToType(data['fieldOfficerId'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetFixedDepositAccountsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetFixedDepositAccountsTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetFixedDepositAccountsAccountIdCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = GetFixedDepositAccountsInterestCompoundingPeriodType.constructFromObject(data['interestCompoundingPeriodType']);
            }
            if (data.hasOwnProperty('interestPostingPeriodType')) {
                obj['interestPostingPeriodType'] = GetFixedDepositAccountsInterestPostingPeriodType.constructFromObject(data['interestPostingPeriodType']);
            }
            if (data.hasOwnProperty('interestCalculationType')) {
                obj['interestCalculationType'] = GetFixedDepositAccountsInterestCalculationType.constructFromObject(data['interestCalculationType']);
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearType')) {
                obj['interestCalculationDaysInYearType'] = GetFixedDepositAccountsInterestCalculationDaysInYearType.constructFromObject(data['interestCalculationDaysInYearType']);
            }
            if (data.hasOwnProperty('interestFreePeriodApplicable')) {
                obj['interestFreePeriodApplicable'] = ApiClient.convertToType(data['interestFreePeriodApplicable'], 'Boolean');
            }
            if (data.hasOwnProperty('preClosurePenalApplicable')) {
                obj['preClosurePenalApplicable'] = ApiClient.convertToType(data['preClosurePenalApplicable'], 'Boolean');
            }
            if (data.hasOwnProperty('minDepositTerm')) {
                obj['minDepositTerm'] = ApiClient.convertToType(data['minDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('maxDepositTerm')) {
                obj['maxDepositTerm'] = ApiClient.convertToType(data['maxDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('minDepositTermType')) {
                obj['minDepositTermType'] = GetFixedDepositAccountsMinDepositTermType.constructFromObject(data['minDepositTermType']);
            }
            if (data.hasOwnProperty('maxDepositTermType')) {
                obj['maxDepositTermType'] = GetFixedDepositAccountsMaxDepositTermType.constructFromObject(data['maxDepositTermType']);
            }
            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'Number');
            }
            if (data.hasOwnProperty('maturityAmount')) {
                obj['maturityAmount'] = ApiClient.convertToType(data['maturityAmount'], 'Number');
            }
            if (data.hasOwnProperty('maturityDate')) {
                obj['maturityDate'] = ApiClient.convertToType(data['maturityDate'], 'Date');
            }
            if (data.hasOwnProperty('depositPeriod')) {
                obj['depositPeriod'] = ApiClient.convertToType(data['depositPeriod'], 'Number');
            }
            if (data.hasOwnProperty('depositPeriodFrequency')) {
                obj['depositPeriodFrequency'] = GetFixedDepositAccountsDepositPeriodFrequency.constructFromObject(data['depositPeriodFrequency']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = GetFixedDepositAccountsAccountIdSummary.constructFromObject(data['summary']);
            }
            if (data.hasOwnProperty('accountChart')) {
                obj['accountChart'] = GetFixedDepositAccountsAccountChart.constructFromObject(data['accountChart']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositAccountsAccountIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetFixedDepositAccountsAccountIdResponse.prototype['accountNo'] = undefined;

/**
 * @member {String} externalId
 */
GetFixedDepositAccountsAccountIdResponse.prototype['externalId'] = undefined;

/**
 * @member {Number} clientId
 */
GetFixedDepositAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetFixedDepositAccountsAccountIdResponse.prototype['clientName'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetFixedDepositAccountsAccountIdResponse.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetFixedDepositAccountsAccountIdResponse.prototype['savingsProductName'] = undefined;

/**
 * @member {Number} fieldOfficerId
 */
GetFixedDepositAccountsAccountIdResponse.prototype['fieldOfficerId'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsStatus} status
 */
GetFixedDepositAccountsAccountIdResponse.prototype['status'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsTimeline} timeline
 */
GetFixedDepositAccountsAccountIdResponse.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsAccountIdCurrency} currency
 */
GetFixedDepositAccountsAccountIdResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetFixedDepositAccountsAccountIdResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsInterestPostingPeriodType} interestPostingPeriodType
 */
GetFixedDepositAccountsAccountIdResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsInterestCalculationType} interestCalculationType
 */
GetFixedDepositAccountsAccountIdResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetFixedDepositAccountsAccountIdResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {Boolean} interestFreePeriodApplicable
 */
GetFixedDepositAccountsAccountIdResponse.prototype['interestFreePeriodApplicable'] = undefined;

/**
 * @member {Boolean} preClosurePenalApplicable
 */
GetFixedDepositAccountsAccountIdResponse.prototype['preClosurePenalApplicable'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
GetFixedDepositAccountsAccountIdResponse.prototype['minDepositTerm'] = undefined;

/**
 * @member {Number} maxDepositTerm
 */
GetFixedDepositAccountsAccountIdResponse.prototype['maxDepositTerm'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsMinDepositTermType} minDepositTermType
 */
GetFixedDepositAccountsAccountIdResponse.prototype['minDepositTermType'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsMaxDepositTermType} maxDepositTermType
 */
GetFixedDepositAccountsAccountIdResponse.prototype['maxDepositTermType'] = undefined;

/**
 * @member {Number} depositAmount
 */
GetFixedDepositAccountsAccountIdResponse.prototype['depositAmount'] = undefined;

/**
 * @member {Number} maturityAmount
 */
GetFixedDepositAccountsAccountIdResponse.prototype['maturityAmount'] = undefined;

/**
 * @member {Date} maturityDate
 */
GetFixedDepositAccountsAccountIdResponse.prototype['maturityDate'] = undefined;

/**
 * @member {Number} depositPeriod
 */
GetFixedDepositAccountsAccountIdResponse.prototype['depositPeriod'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsDepositPeriodFrequency} depositPeriodFrequency
 */
GetFixedDepositAccountsAccountIdResponse.prototype['depositPeriodFrequency'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsAccountIdSummary} summary
 */
GetFixedDepositAccountsAccountIdResponse.prototype['summary'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsAccountChart} accountChart
 */
GetFixedDepositAccountsAccountIdResponse.prototype['accountChart'] = undefined;






export default GetFixedDepositAccountsAccountIdResponse;

