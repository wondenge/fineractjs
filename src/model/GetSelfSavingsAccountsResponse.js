

import ApiClient from '../ApiClient';
import GetSelfSavingsCurrency from './GetSelfSavingsCurrency';
import GetSelfSavingsInterestCalculationDaysInYearType from './GetSelfSavingsInterestCalculationDaysInYearType';
import GetSelfSavingsInterestCalculationType from './GetSelfSavingsInterestCalculationType';
import GetSelfSavingsInterestCompoundingPeriodType from './GetSelfSavingsInterestCompoundingPeriodType';
import GetSelfSavingsInterestPostingPeriodType from './GetSelfSavingsInterestPostingPeriodType';
import GetSelfSavingsStatus from './GetSelfSavingsStatus';
import GetSelfSavingsSummary from './GetSelfSavingsSummary';
import GetSelfSavingsTimeline from './GetSelfSavingsTimeline';

/**
 * The GetSelfSavingsAccountsResponse model module.
 * @module model/GetSelfSavingsAccountsResponse
 * @version 1.0
 */
class GetSelfSavingsAccountsResponse {
    /**
     * Constructs a new <code>GetSelfSavingsAccountsResponse</code>.
     * GetSelfSavingsAccountsResponse
     * @alias module:model/GetSelfSavingsAccountsResponse
     */
    constructor() { 
        
        GetSelfSavingsAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsAccountsResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsAccountsResponse} The populated <code>GetSelfSavingsAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsAccountsResponse();

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
                obj['status'] = GetSelfSavingsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetSelfSavingsTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSelfSavingsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('nominalAnnualInterestRate')) {
                obj['nominalAnnualInterestRate'] = ApiClient.convertToType(data['nominalAnnualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = GetSelfSavingsInterestCompoundingPeriodType.constructFromObject(data['interestCompoundingPeriodType']);
            }
            if (data.hasOwnProperty('interestPostingPeriodType')) {
                obj['interestPostingPeriodType'] = GetSelfSavingsInterestPostingPeriodType.constructFromObject(data['interestPostingPeriodType']);
            }
            if (data.hasOwnProperty('interestCalculationType')) {
                obj['interestCalculationType'] = GetSelfSavingsInterestCalculationType.constructFromObject(data['interestCalculationType']);
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearType')) {
                obj['interestCalculationDaysInYearType'] = GetSelfSavingsInterestCalculationDaysInYearType.constructFromObject(data['interestCalculationDaysInYearType']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = GetSelfSavingsSummary.constructFromObject(data['summary']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfSavingsAccountsResponse.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetSelfSavingsAccountsResponse.prototype['accountNo'] = undefined;

/**
 * @member {Number} clientId
 */
GetSelfSavingsAccountsResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetSelfSavingsAccountsResponse.prototype['clientName'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetSelfSavingsAccountsResponse.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetSelfSavingsAccountsResponse.prototype['savingsProductName'] = undefined;

/**
 * @member {Number} fieldOfficerId
 */
GetSelfSavingsAccountsResponse.prototype['fieldOfficerId'] = undefined;

/**
 * @member {module:model/GetSelfSavingsStatus} status
 */
GetSelfSavingsAccountsResponse.prototype['status'] = undefined;

/**
 * @member {module:model/GetSelfSavingsTimeline} timeline
 */
GetSelfSavingsAccountsResponse.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetSelfSavingsCurrency} currency
 */
GetSelfSavingsAccountsResponse.prototype['currency'] = undefined;

/**
 * @member {Number} nominalAnnualInterestRate
 */
GetSelfSavingsAccountsResponse.prototype['nominalAnnualInterestRate'] = undefined;

/**
 * @member {module:model/GetSelfSavingsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetSelfSavingsAccountsResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetSelfSavingsInterestPostingPeriodType} interestPostingPeriodType
 */
GetSelfSavingsAccountsResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetSelfSavingsInterestCalculationType} interestCalculationType
 */
GetSelfSavingsAccountsResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetSelfSavingsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetSelfSavingsAccountsResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {module:model/GetSelfSavingsSummary} summary
 */
GetSelfSavingsAccountsResponse.prototype['summary'] = undefined;






export default GetSelfSavingsAccountsResponse;

