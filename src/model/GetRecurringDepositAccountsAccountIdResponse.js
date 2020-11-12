

import ApiClient from '../ApiClient';
import GetRecurringDepositAccountsAccountChart from './GetRecurringDepositAccountsAccountChart';
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
 * The GetRecurringDepositAccountsAccountIdResponse model module.
 * @module model/GetRecurringDepositAccountsAccountIdResponse
 * @version 1.0
 */
class GetRecurringDepositAccountsAccountIdResponse {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsAccountIdResponse</code>.
     * GetRecurringDepositAccountsAccountIdResponse
     * @alias module:model/GetRecurringDepositAccountsAccountIdResponse
     */
    constructor() { 
        
        GetRecurringDepositAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsAccountIdResponse} The populated <code>GetRecurringDepositAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsAccountIdResponse();

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
            if (data.hasOwnProperty('recurringDepositAmount')) {
                obj['recurringDepositAmount'] = ApiClient.convertToType(data['recurringDepositAmount'], 'Number');
            }
            if (data.hasOwnProperty('recurringDepositFrequency')) {
                obj['recurringDepositFrequency'] = ApiClient.convertToType(data['recurringDepositFrequency'], 'Number');
            }
            if (data.hasOwnProperty('expectedFirstDepositOnDate')) {
                obj['expectedFirstDepositOnDate'] = ApiClient.convertToType(data['expectedFirstDepositOnDate'], 'Date');
            }
            if (data.hasOwnProperty('recurringDepositFrequencyType')) {
                obj['recurringDepositFrequencyType'] = GetRecurringDepositAccountsRecurringDepositFrequencyType.constructFromObject(data['recurringDepositFrequencyType']);
            }
            if (data.hasOwnProperty('depositPeriod')) {
                obj['depositPeriod'] = ApiClient.convertToType(data['depositPeriod'], 'Number');
            }
            if (data.hasOwnProperty('depositPeriodFrequency')) {
                obj['depositPeriodFrequency'] = GetRecurringDepositAccountsDepositPeriodFrequency.constructFromObject(data['depositPeriodFrequency']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = GetRecurringDepositAccountsSummary.constructFromObject(data['summary']);
            }
            if (data.hasOwnProperty('accountChart')) {
                obj['accountChart'] = GetRecurringDepositAccountsAccountChart.constructFromObject(data['accountChart']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['accountNo'] = undefined;

/**
 * @member {String} externalId
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['externalId'] = undefined;

/**
 * @member {Number} clientId
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['clientName'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['savingsProductName'] = undefined;

/**
 * @member {Number} fieldOfficerId
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['fieldOfficerId'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsStatus} status
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['status'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsTimeline} timeline
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsCurrency} currency
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsInterestPostingPeriodType} interestPostingPeriodType
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsInterestCalculationType} interestCalculationType
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {Boolean} preClosurePenalApplicable
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['preClosurePenalApplicable'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['minDepositTerm'] = undefined;

/**
 * @member {Number} maxDepositTerm
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['maxDepositTerm'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsMinDepositTermType} minDepositTermType
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['minDepositTermType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsMaxDepositTermType} maxDepositTermType
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['maxDepositTermType'] = undefined;

/**
 * @member {Number} recurringDepositAmount
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['recurringDepositAmount'] = undefined;

/**
 * @member {Number} recurringDepositFrequency
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['recurringDepositFrequency'] = undefined;

/**
 * @member {Date} expectedFirstDepositOnDate
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['expectedFirstDepositOnDate'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsRecurringDepositFrequencyType} recurringDepositFrequencyType
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['recurringDepositFrequencyType'] = undefined;

/**
 * @member {Number} depositPeriod
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['depositPeriod'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsDepositPeriodFrequency} depositPeriodFrequency
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['depositPeriodFrequency'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsSummary} summary
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['summary'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsAccountChart} accountChart
 */
GetRecurringDepositAccountsAccountIdResponse.prototype['accountChart'] = undefined;






export default GetRecurringDepositAccountsAccountIdResponse;

