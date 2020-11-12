

import ApiClient from '../ApiClient';
import GetSavingsCurrency from './GetSavingsCurrency';
import GetSavingsProductsAccountingRule from './GetSavingsProductsAccountingRule';
import GetSavingsProductsInterestCalculationDaysInYearType from './GetSavingsProductsInterestCalculationDaysInYearType';
import GetSavingsProductsInterestCalculationType from './GetSavingsProductsInterestCalculationType';
import GetSavingsProductsInterestCompoundingPeriodType from './GetSavingsProductsInterestCompoundingPeriodType';
import GetSavingsProductsInterestPostingPeriodType from './GetSavingsProductsInterestPostingPeriodType';

/**
 * The GetSavingsProductsResponse model module.
 * @module model/GetSavingsProductsResponse
 * @version 1.0
 */
class GetSavingsProductsResponse {
    /**
     * Constructs a new <code>GetSavingsProductsResponse</code>.
     * GetSavingsProductsResponse
     * @alias module:model/GetSavingsProductsResponse
     */
    constructor() { 
        
        GetSavingsProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsResponse} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsResponse} The populated <code>GetSavingsProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSavingsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('nominalAnnualInterestRate')) {
                obj['nominalAnnualInterestRate'] = ApiClient.convertToType(data['nominalAnnualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = GetSavingsProductsInterestCompoundingPeriodType.constructFromObject(data['interestCompoundingPeriodType']);
            }
            if (data.hasOwnProperty('interestPostingPeriodType')) {
                obj['interestPostingPeriodType'] = GetSavingsProductsInterestPostingPeriodType.constructFromObject(data['interestPostingPeriodType']);
            }
            if (data.hasOwnProperty('interestCalculationType')) {
                obj['interestCalculationType'] = GetSavingsProductsInterestCalculationType.constructFromObject(data['interestCalculationType']);
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearType')) {
                obj['interestCalculationDaysInYearType'] = GetSavingsProductsInterestCalculationDaysInYearType.constructFromObject(data['interestCalculationDaysInYearType']);
            }
            if (data.hasOwnProperty('withdrawalFeeForTransfers')) {
                obj['withdrawalFeeForTransfers'] = ApiClient.convertToType(data['withdrawalFeeForTransfers'], 'Boolean');
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = GetSavingsProductsAccountingRule.constructFromObject(data['accountingRule']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsProductsResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsResponse.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetSavingsProductsResponse.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsResponse.prototype['description'] = undefined;

/**
 * @member {module:model/GetSavingsCurrency} currency
 */
GetSavingsProductsResponse.prototype['currency'] = undefined;

/**
 * @member {Number} nominalAnnualInterestRate
 */
GetSavingsProductsResponse.prototype['nominalAnnualInterestRate'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetSavingsProductsResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestPostingPeriodType} interestPostingPeriodType
 */
GetSavingsProductsResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestCalculationType} interestCalculationType
 */
GetSavingsProductsResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetSavingsProductsResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {Boolean} withdrawalFeeForTransfers
 */
GetSavingsProductsResponse.prototype['withdrawalFeeForTransfers'] = undefined;

/**
 * @member {module:model/GetSavingsProductsAccountingRule} accountingRule
 */
GetSavingsProductsResponse.prototype['accountingRule'] = undefined;






export default GetSavingsProductsResponse;

