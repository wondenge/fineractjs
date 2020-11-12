

import ApiClient from '../ApiClient';
import GetFixedDepositAccountsCurrency from './GetFixedDepositAccountsCurrency';
import GetFixedDepositAccountsDepositPeriodFrequency from './GetFixedDepositAccountsDepositPeriodFrequency';
import GetFixedDepositAccountsInterestCalculationDaysInYearType from './GetFixedDepositAccountsInterestCalculationDaysInYearType';
import GetFixedDepositAccountsInterestCalculationType from './GetFixedDepositAccountsInterestCalculationType';
import GetFixedDepositAccountsInterestCompoundingPeriodType from './GetFixedDepositAccountsInterestCompoundingPeriodType';
import GetFixedDepositAccountsInterestPostingPeriodType from './GetFixedDepositAccountsInterestPostingPeriodType';
import GetFixedDepositAccountsMaxDepositTermType from './GetFixedDepositAccountsMaxDepositTermType';
import GetFixedDepositAccountsMinDepositTermType from './GetFixedDepositAccountsMinDepositTermType';
import GetFixedDepositAccountsStatus from './GetFixedDepositAccountsStatus';
import GetFixedDepositAccountsSummary from './GetFixedDepositAccountsSummary';
import GetFixedDepositAccountsTimeline from './GetFixedDepositAccountsTimeline';

/**
 * The GetFixedDepositAccountsResponse model module.
 * @module model/GetFixedDepositAccountsResponse
 * @version 1.0
 */
class GetFixedDepositAccountsResponse {
    /**
     * Constructs a new <code>GetFixedDepositAccountsResponse</code>.
     * GetFixedDepositAccountsResponse
     * @alias module:model/GetFixedDepositAccountsResponse
     */
    constructor() { 
        
        GetFixedDepositAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsResponse} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsResponse} The populated <code>GetFixedDepositAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
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
                obj['currency'] = GetFixedDepositAccountsCurrency.constructFromObject(data['currency']);
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
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = GetFixedDepositAccountsSummary.constructFromObject(data['summary']);
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
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositAccountsResponse.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetFixedDepositAccountsResponse.prototype['accountNo'] = undefined;

/**
 * @member {Number} clientId
 */
GetFixedDepositAccountsResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetFixedDepositAccountsResponse.prototype['clientName'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetFixedDepositAccountsResponse.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetFixedDepositAccountsResponse.prototype['savingsProductName'] = undefined;

/**
 * @member {Number} fieldOfficerId
 */
GetFixedDepositAccountsResponse.prototype['fieldOfficerId'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsStatus} status
 */
GetFixedDepositAccountsResponse.prototype['status'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsTimeline} timeline
 */
GetFixedDepositAccountsResponse.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsCurrency} currency
 */
GetFixedDepositAccountsResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetFixedDepositAccountsResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsInterestPostingPeriodType} interestPostingPeriodType
 */
GetFixedDepositAccountsResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsInterestCalculationType} interestCalculationType
 */
GetFixedDepositAccountsResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetFixedDepositAccountsResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsSummary} summary
 */
GetFixedDepositAccountsResponse.prototype['summary'] = undefined;

/**
 * @member {Boolean} interestFreePeriodApplicable
 */
GetFixedDepositAccountsResponse.prototype['interestFreePeriodApplicable'] = undefined;

/**
 * @member {Boolean} preClosurePenalApplicable
 */
GetFixedDepositAccountsResponse.prototype['preClosurePenalApplicable'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
GetFixedDepositAccountsResponse.prototype['minDepositTerm'] = undefined;

/**
 * @member {Number} maxDepositTerm
 */
GetFixedDepositAccountsResponse.prototype['maxDepositTerm'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsMinDepositTermType} minDepositTermType
 */
GetFixedDepositAccountsResponse.prototype['minDepositTermType'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsMaxDepositTermType} maxDepositTermType
 */
GetFixedDepositAccountsResponse.prototype['maxDepositTermType'] = undefined;

/**
 * @member {Number} depositAmount
 */
GetFixedDepositAccountsResponse.prototype['depositAmount'] = undefined;

/**
 * @member {Number} maturityAmount
 */
GetFixedDepositAccountsResponse.prototype['maturityAmount'] = undefined;

/**
 * @member {Date} maturityDate
 */
GetFixedDepositAccountsResponse.prototype['maturityDate'] = undefined;

/**
 * @member {Number} depositPeriod
 */
GetFixedDepositAccountsResponse.prototype['depositPeriod'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsDepositPeriodFrequency} depositPeriodFrequency
 */
GetFixedDepositAccountsResponse.prototype['depositPeriodFrequency'] = undefined;






export default GetFixedDepositAccountsResponse;

