

import ApiClient from '../ApiClient';
import GetSavingsCurrency from './GetSavingsCurrency';
import GetSavingsInterestCalculationDaysInYearType from './GetSavingsInterestCalculationDaysInYearType';
import GetSavingsInterestCalculationType from './GetSavingsInterestCalculationType';
import GetSavingsInterestCompoundingPeriodType from './GetSavingsInterestCompoundingPeriodType';
import GetSavingsInterestPostingPeriodType from './GetSavingsInterestPostingPeriodType';
import GetSavingsStatus from './GetSavingsStatus';
import GetSavingsSummary from './GetSavingsSummary';
import GetSavingsTimeline from './GetSavingsTimeline';

/**
 * The GetSavingsPageItems model module.
 * @module model/GetSavingsPageItems
 * @version 1.0
 */
class GetSavingsPageItems {
    /**
     * Constructs a new <code>GetSavingsPageItems</code>.
     * @alias module:model/GetSavingsPageItems
     */
    constructor() { 
        
        GetSavingsPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsPageItems} obj Optional instance to populate.
     * @return {module:model/GetSavingsPageItems} The populated <code>GetSavingsPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsPageItems();

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
                obj['summary'] = GetSavingsSummary.constructFromObject(data['summary']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsPageItems.prototype['id'] = undefined;

/**
 * @member {String} accountNo
 */
GetSavingsPageItems.prototype['accountNo'] = undefined;

/**
 * @member {Number} clientId
 */
GetSavingsPageItems.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetSavingsPageItems.prototype['clientName'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetSavingsPageItems.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetSavingsPageItems.prototype['savingsProductName'] = undefined;

/**
 * @member {Number} fieldOfficerId
 */
GetSavingsPageItems.prototype['fieldOfficerId'] = undefined;

/**
 * @member {module:model/GetSavingsStatus} status
 */
GetSavingsPageItems.prototype['status'] = undefined;

/**
 * @member {module:model/GetSavingsTimeline} timeline
 */
GetSavingsPageItems.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetSavingsCurrency} currency
 */
GetSavingsPageItems.prototype['currency'] = undefined;

/**
 * @member {Number} nominalAnnualInterestRate
 */
GetSavingsPageItems.prototype['nominalAnnualInterestRate'] = undefined;

/**
 * @member {module:model/GetSavingsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetSavingsPageItems.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetSavingsInterestPostingPeriodType} interestPostingPeriodType
 */
GetSavingsPageItems.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetSavingsInterestCalculationType} interestCalculationType
 */
GetSavingsPageItems.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetSavingsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetSavingsPageItems.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {module:model/GetSavingsSummary} summary
 */
GetSavingsPageItems.prototype['summary'] = undefined;






export default GetSavingsPageItems;

