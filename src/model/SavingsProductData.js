

import ApiClient from '../ApiClient';
import CurrencyData from './CurrencyData';
import EnumOptionData from './EnumOptionData';

/**
 * The SavingsProductData model module.
 * @module model/SavingsProductData
 * @version 1.0
 */
class SavingsProductData {
    /**
     * Constructs a new <code>SavingsProductData</code>.
     * @alias module:model/SavingsProductData
     */
    constructor() { 
        
        SavingsProductData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SavingsProductData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SavingsProductData} obj Optional instance to populate.
     * @return {module:model/SavingsProductData} The populated <code>SavingsProductData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SavingsProductData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = CurrencyData.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('nominalAnnualInterestRate')) {
                obj['nominalAnnualInterestRate'] = ApiClient.convertToType(data['nominalAnnualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = EnumOptionData.constructFromObject(data['interestCompoundingPeriodType']);
            }
            if (data.hasOwnProperty('interestPostingPeriodType')) {
                obj['interestPostingPeriodType'] = EnumOptionData.constructFromObject(data['interestPostingPeriodType']);
            }
            if (data.hasOwnProperty('interestCalculationType')) {
                obj['interestCalculationType'] = EnumOptionData.constructFromObject(data['interestCalculationType']);
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearType')) {
                obj['interestCalculationDaysInYearType'] = EnumOptionData.constructFromObject(data['interestCalculationDaysInYearType']);
            }
            if (data.hasOwnProperty('minRequiredOpeningBalance')) {
                obj['minRequiredOpeningBalance'] = ApiClient.convertToType(data['minRequiredOpeningBalance'], 'Number');
            }
            if (data.hasOwnProperty('lockinPeriodFrequency')) {
                obj['lockinPeriodFrequency'] = ApiClient.convertToType(data['lockinPeriodFrequency'], 'Number');
            }
            if (data.hasOwnProperty('lockinPeriodFrequencyType')) {
                obj['lockinPeriodFrequencyType'] = EnumOptionData.constructFromObject(data['lockinPeriodFrequencyType']);
            }
            if (data.hasOwnProperty('withdrawalFeeForTransfers')) {
                obj['withdrawalFeeForTransfers'] = ApiClient.convertToType(data['withdrawalFeeForTransfers'], 'Boolean');
            }
            if (data.hasOwnProperty('allowOverdraft')) {
                obj['allowOverdraft'] = ApiClient.convertToType(data['allowOverdraft'], 'Boolean');
            }
            if (data.hasOwnProperty('overdraftLimit')) {
                obj['overdraftLimit'] = ApiClient.convertToType(data['overdraftLimit'], 'Number');
            }
            if (data.hasOwnProperty('minRequiredBalance')) {
                obj['minRequiredBalance'] = ApiClient.convertToType(data['minRequiredBalance'], 'Number');
            }
            if (data.hasOwnProperty('depositAccountType')) {
                obj['depositAccountType'] = ApiClient.convertToType(data['depositAccountType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
SavingsProductData.prototype['id'] = undefined;

/**
 * @member {String} name
 */
SavingsProductData.prototype['name'] = undefined;

/**
 * @member {module:model/CurrencyData} currency
 */
SavingsProductData.prototype['currency'] = undefined;

/**
 * @member {Number} nominalAnnualInterestRate
 */
SavingsProductData.prototype['nominalAnnualInterestRate'] = undefined;

/**
 * @member {module:model/EnumOptionData} interestCompoundingPeriodType
 */
SavingsProductData.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/EnumOptionData} interestPostingPeriodType
 */
SavingsProductData.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/EnumOptionData} interestCalculationType
 */
SavingsProductData.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/EnumOptionData} interestCalculationDaysInYearType
 */
SavingsProductData.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {Number} minRequiredOpeningBalance
 */
SavingsProductData.prototype['minRequiredOpeningBalance'] = undefined;

/**
 * @member {Number} lockinPeriodFrequency
 */
SavingsProductData.prototype['lockinPeriodFrequency'] = undefined;

/**
 * @member {module:model/EnumOptionData} lockinPeriodFrequencyType
 */
SavingsProductData.prototype['lockinPeriodFrequencyType'] = undefined;

/**
 * @member {Boolean} withdrawalFeeForTransfers
 */
SavingsProductData.prototype['withdrawalFeeForTransfers'] = undefined;

/**
 * @member {Boolean} allowOverdraft
 */
SavingsProductData.prototype['allowOverdraft'] = undefined;

/**
 * @member {Number} overdraftLimit
 */
SavingsProductData.prototype['overdraftLimit'] = undefined;

/**
 * @member {Number} minRequiredBalance
 */
SavingsProductData.prototype['minRequiredBalance'] = undefined;

/**
 * @member {String} depositAccountType
 */
SavingsProductData.prototype['depositAccountType'] = undefined;






export default SavingsProductData;

