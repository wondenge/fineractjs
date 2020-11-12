

import ApiClient from '../ApiClient';
import GetRecurringDepositAccountsCurrency from './GetRecurringDepositAccountsCurrency';
import GetRecurringDepositAccountsDepositPeriodFrequency from './GetRecurringDepositAccountsDepositPeriodFrequency';
import GetRecurringDepositAccountsInterestCalculationDaysInYearType from './GetRecurringDepositAccountsInterestCalculationDaysInYearType';
import GetRecurringDepositAccountsInterestCalculationType from './GetRecurringDepositAccountsInterestCalculationType';
import GetRecurringDepositAccountsInterestCompoundingPeriodType from './GetRecurringDepositAccountsInterestCompoundingPeriodType';
import GetRecurringDepositAccountsInterestPostingPeriodType from './GetRecurringDepositAccountsInterestPostingPeriodType';
import GetRecurringDepositAccountsMaxDepositTermType from './GetRecurringDepositAccountsMaxDepositTermType';
import GetRecurringDepositAccountsMinDepositTermType from './GetRecurringDepositAccountsMinDepositTermType';
import GetRecurringDepositAccountsRecurringDepositFrequencyType from './GetRecurringDepositAccountsRecurringDepositFrequencyType';
import GetRecurringDepositAccountsStatus from './GetRecurringDepositAccountsStatus';
import GetRecurringDepositAccountsSummary from './GetRecurringDepositAccountsSummary';
import GetRecurringDepositAccountsTimeline from './GetRecurringDepositAccountsTimeline';

/**
 * The GetRecurringDepositAccountsResponse model module.
 * @module model/GetRecurringDepositAccountsResponse
 * @version 1.0
 */
class GetRecurringDepositAccountsResponse {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsResponse</code>.
     * GetRecurringDepositAccountsResponse
     * @alias module:model/GetRecurringDepositAccountsResponse
     */
    constructor() { 
        
        GetRecurringDepositAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsResponse} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsResponse} The populated <code>GetRecurringDepositAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsResponse();

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
                obj['status'] = GetRecurringDepositAccountsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetRecurringDepositAccountsTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetRecurringDepositAccountsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = GetRecurringDepositAccountsInterestCompoundingPeriodType.constructFromObject(data['interestCompoundingPeriodType']);
            }
            if (data.hasOwnProperty('interestPostingPeriodType')) {
                obj['interestPostingPeriodType'] = GetRecurringDepositAccountsInterestPostingPeriodType.constructFromObject(data['interestPostingPeriodType']);
            }
            if (data.hasOwnProperty('interestCalculationType')) {
                obj['interestCalculationType'] = GetRecurringDepositAccountsInterestCalculationType.constructFromObject(data['interestCalculationType']);
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearType')) {
                obj['interestCalculationDaysInYearType'] = GetRecurringDepositAccountsInterestCalculationDaysInYearType.constructFromObject(data['interestCalculationDaysInYearType']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = GetRecurringDepositAccountsSummary.constructFromObject(data['summary']);
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
            if (data.hasOwnProperty('recurringDepositAmount')) {
                obj['recurringDepositAmount'] = ApiClient.convertToType(data['recurringDepositAmount'], 'Number');
            }
            if (data.hasOwnProperty('recurringDepositFrequency')) {
                obj['recurringDepositFrequency'] = ApiClient.convertToType(data['recurringDepositFrequency'], 'Number');
            }
            if (data.hasOwnProperty('recurringDepositFrequencyType')) {
                obj['recurringDepositFrequencyType'] = GetRecurringDepositAccountsRecurringDepositFrequencyType.constructFromObject(data['recurringDepositFrequencyType']);
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
                obj['minDepositTermType'] = GetRecurringDepositAccountsMinDepositTermType.constructFromObject(data['minDepositTermType']);
            }
            if (data.hasOwnProperty('maxDepositTermType')) {
                obj['maxDepositTermType'] = GetRecurringDepositAccountsMaxDepositTermType.constructFromObject(data['maxDepositTermType']);
            }
            if (data.hasOwnProperty('depositPeriod')) {
                obj['depositPeriod'] = ApiClient.convertToType(data['depositPeriod'], 'Number');
            }
            if (data.hasOwnProperty('depositPeriodFrequency')) {
                obj['depositPeriodFrequency'] = GetRecurringDepositAccountsDepositPeriodFrequency.constructFromObject(data['depositPeriodFrequency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositAccountsResponse.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetRecurringDepositAccountsResponse.prototype['accountNo'] = undefined;

/**
 * @member {Number} clientId
 */
GetRecurringDepositAccountsResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetRecurringDepositAccountsResponse.prototype['clientName'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetRecurringDepositAccountsResponse.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetRecurringDepositAccountsResponse.prototype['savingsProductName'] = undefined;

/**
 * @member {Number} fieldOfficerId
 */
GetRecurringDepositAccountsResponse.prototype['fieldOfficerId'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsStatus} status
 */
GetRecurringDepositAccountsResponse.prototype['status'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsTimeline} timeline
 */
GetRecurringDepositAccountsResponse.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsCurrency} currency
 */
GetRecurringDepositAccountsResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetRecurringDepositAccountsResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsInterestPostingPeriodType} interestPostingPeriodType
 */
GetRecurringDepositAccountsResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsInterestCalculationType} interestCalculationType
 */
GetRecurringDepositAccountsResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetRecurringDepositAccountsResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsSummary} summary
 */
GetRecurringDepositAccountsResponse.prototype['summary'] = undefined;

/**
 * @member {Number} depositAmount
 */
GetRecurringDepositAccountsResponse.prototype['depositAmount'] = undefined;

/**
 * @member {Number} maturityAmount
 */
GetRecurringDepositAccountsResponse.prototype['maturityAmount'] = undefined;

/**
 * @member {Date} maturityDate
 */
GetRecurringDepositAccountsResponse.prototype['maturityDate'] = undefined;

/**
 * @member {Number} recurringDepositAmount
 */
GetRecurringDepositAccountsResponse.prototype['recurringDepositAmount'] = undefined;

/**
 * @member {Number} recurringDepositFrequency
 */
GetRecurringDepositAccountsResponse.prototype['recurringDepositFrequency'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsRecurringDepositFrequencyType} recurringDepositFrequencyType
 */
GetRecurringDepositAccountsResponse.prototype['recurringDepositFrequencyType'] = undefined;

/**
 * @member {Boolean} preClosurePenalApplicable
 */
GetRecurringDepositAccountsResponse.prototype['preClosurePenalApplicable'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
GetRecurringDepositAccountsResponse.prototype['minDepositTerm'] = undefined;

/**
 * @member {Number} maxDepositTerm
 */
GetRecurringDepositAccountsResponse.prototype['maxDepositTerm'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsMinDepositTermType} minDepositTermType
 */
GetRecurringDepositAccountsResponse.prototype['minDepositTermType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsMaxDepositTermType} maxDepositTermType
 */
GetRecurringDepositAccountsResponse.prototype['maxDepositTermType'] = undefined;

/**
 * @member {Number} depositPeriod
 */
GetRecurringDepositAccountsResponse.prototype['depositPeriod'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsDepositPeriodFrequency} depositPeriodFrequency
 */
GetRecurringDepositAccountsResponse.prototype['depositPeriodFrequency'] = undefined;






export default GetRecurringDepositAccountsResponse;

