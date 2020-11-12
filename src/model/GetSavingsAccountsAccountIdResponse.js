

import ApiClient from '../ApiClient';
import GetSavingsAccountsSummary from './GetSavingsAccountsSummary';
import GetSavingsCurrency from './GetSavingsCurrency';
import GetSavingsInterestCalculationDaysInYearType from './GetSavingsInterestCalculationDaysInYearType';
import GetSavingsInterestCalculationType from './GetSavingsInterestCalculationType';
import GetSavingsInterestCompoundingPeriodType from './GetSavingsInterestCompoundingPeriodType';
import GetSavingsInterestPostingPeriodType from './GetSavingsInterestPostingPeriodType';
import GetSavingsStatus from './GetSavingsStatus';
import GetSavingsTimeline from './GetSavingsTimeline';

/**
 * The GetSavingsAccountsAccountIdResponse model module.
 * @module model/GetSavingsAccountsAccountIdResponse
 * @version 1.0
 */
class GetSavingsAccountsAccountIdResponse {
    /**
     * Constructs a new <code>GetSavingsAccountsAccountIdResponse</code>.
     * GetSavingsAccountsAccountIdResponse
     * @alias module:model/GetSavingsAccountsAccountIdResponse
     */
    constructor() { 
        
        GetSavingsAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/GetSavingsAccountsAccountIdResponse} The populated <code>GetSavingsAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsAccountsAccountIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'String');
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
                obj['status'] = GetSavingsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetSavingsTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSavingsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('nominalAnnualInterestRate')) {
                obj['nominalAnnualInterestRate'] = ApiClient.convertToType(data['nominalAnnualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = GetSavingsInterestCompoundingPeriodType.constructFromObject(data['interestCompoundingPeriodType']);
            }
            if (data.hasOwnProperty('interestPostingPeriodType')) {
                obj['interestPostingPeriodType'] = GetSavingsInterestPostingPeriodType.constructFromObject(data['interestPostingPeriodType']);
            }
            if (data.hasOwnProperty('interestCalculationType')) {
                obj['interestCalculationType'] = GetSavingsInterestCalculationType.constructFromObject(data['interestCalculationType']);
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearType')) {
                obj['interestCalculationDaysInYearType'] = GetSavingsInterestCalculationDaysInYearType.constructFromObject(data['interestCalculationDaysInYearType']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = GetSavingsAccountsSummary.constructFromObject(data['summary']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsAccountsAccountIdResponse.prototype['id'] = undefined;

/**
 * @member {String} accountNo
 */
GetSavingsAccountsAccountIdResponse.prototype['accountNo'] = undefined;

/**
 * @member {Number} clientId
 */
GetSavingsAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetSavingsAccountsAccountIdResponse.prototype['clientName'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetSavingsAccountsAccountIdResponse.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetSavingsAccountsAccountIdResponse.prototype['savingsProductName'] = undefined;

/**
 * @member {Number} fieldOfficerId
 */
GetSavingsAccountsAccountIdResponse.prototype['fieldOfficerId'] = undefined;

/**
 * @member {module:model/GetSavingsStatus} status
 */
GetSavingsAccountsAccountIdResponse.prototype['status'] = undefined;

/**
 * @member {module:model/GetSavingsTimeline} timeline
 */
GetSavingsAccountsAccountIdResponse.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetSavingsCurrency} currency
 */
GetSavingsAccountsAccountIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} nominalAnnualInterestRate
 */
GetSavingsAccountsAccountIdResponse.prototype['nominalAnnualInterestRate'] = undefined;

/**
 * @member {module:model/GetSavingsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetSavingsAccountsAccountIdResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetSavingsInterestPostingPeriodType} interestPostingPeriodType
 */
GetSavingsAccountsAccountIdResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetSavingsInterestCalculationType} interestCalculationType
 */
GetSavingsAccountsAccountIdResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetSavingsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetSavingsAccountsAccountIdResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {module:model/GetSavingsAccountsSummary} summary
 */
GetSavingsAccountsAccountIdResponse.prototype['summary'] = undefined;






export default GetSavingsAccountsAccountIdResponse;

