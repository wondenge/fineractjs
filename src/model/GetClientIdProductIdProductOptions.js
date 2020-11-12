

import ApiClient from '../ApiClient';
import GetClientIdProductIdAccountingMappings from './GetClientIdProductIdAccountingMappings';
import GetClientIdProductIdLockinPeriodFrequencyTypeOptions from './GetClientIdProductIdLockinPeriodFrequencyTypeOptions';
import GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions from './GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions';
import GetShareAccountsChargeOptions from './GetShareAccountsChargeOptions';
import GetShareAccountsClientIdProductIdAccountingRule from './GetShareAccountsClientIdProductIdAccountingRule';
import GetShareAccountsClientIdProductIdLockPeriodTypeEnum from './GetShareAccountsClientIdProductIdLockPeriodTypeEnum';
import GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum from './GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum';
import GetShareAccountsCurrency from './GetShareAccountsCurrency';

/**
 * The GetClientIdProductIdProductOptions model module.
 * @module model/GetClientIdProductIdProductOptions
 * @version 1.0
 */
class GetClientIdProductIdProductOptions {
    /**
     * Constructs a new <code>GetClientIdProductIdProductOptions</code>.
     * @alias module:model/GetClientIdProductIdProductOptions
     */
    constructor() { 
        
        GetClientIdProductIdProductOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientIdProductIdProductOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientIdProductIdProductOptions} obj Optional instance to populate.
     * @return {module:model/GetClientIdProductIdProductOptions} The populated <code>GetClientIdProductIdProductOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientIdProductIdProductOptions();

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
                obj['currency'] = GetShareAccountsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('totalShares')) {
                obj['totalShares'] = ApiClient.convertToType(data['totalShares'], 'Number');
            }
            if (data.hasOwnProperty('totalSharesIssued')) {
                obj['totalSharesIssued'] = ApiClient.convertToType(data['totalSharesIssued'], 'Number');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('shareCapital')) {
                obj['shareCapital'] = ApiClient.convertToType(data['shareCapital'], 'Number');
            }
            if (data.hasOwnProperty('minimumShares')) {
                obj['minimumShares'] = ApiClient.convertToType(data['minimumShares'], 'Number');
            }
            if (data.hasOwnProperty('norminalShares')) {
                obj['norminalShares'] = ApiClient.convertToType(data['norminalShares'], 'Number');
            }
            if (data.hasOwnProperty('maximumShares')) {
                obj['maximumShares'] = ApiClient.convertToType(data['maximumShares'], 'Number');
            }
            if (data.hasOwnProperty('marketPrice')) {
                obj['marketPrice'] = ApiClient.convertToType(data['marketPrice'], 'String');
            }
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], 'String');
            }
            if (data.hasOwnProperty('allowDividendCalculationForInactiveClients')) {
                obj['allowDividendCalculationForInactiveClients'] = ApiClient.convertToType(data['allowDividendCalculationForInactiveClients'], 'Boolean');
            }
            if (data.hasOwnProperty('lockinPeriod')) {
                obj['lockinPeriod'] = ApiClient.convertToType(data['lockinPeriod'], 'Number');
            }
            if (data.hasOwnProperty('lockinPeriodEnum')) {
                obj['lockinPeriodEnum'] = GetShareAccountsClientIdProductIdLockPeriodTypeEnum.constructFromObject(data['lockinPeriodEnum']);
            }
            if (data.hasOwnProperty('minimumActivePeriod')) {
                obj['minimumActivePeriod'] = ApiClient.convertToType(data['minimumActivePeriod'], 'Number');
            }
            if (data.hasOwnProperty('minimumActivePeriodForDividendsTypeEnum')) {
                obj['minimumActivePeriodForDividendsTypeEnum'] = GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum.constructFromObject(data['minimumActivePeriodForDividendsTypeEnum']);
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = GetShareAccountsClientIdProductIdAccountingRule.constructFromObject(data['accountingRule']);
            }
            if (data.hasOwnProperty('accountingMappings')) {
                obj['accountingMappings'] = GetClientIdProductIdAccountingMappings.constructFromObject(data['accountingMappings']);
            }
            if (data.hasOwnProperty('currencyOptions')) {
                obj['currencyOptions'] = GetShareAccountsCurrency.constructFromObject(data['currencyOptions']);
            }
            if (data.hasOwnProperty('chargeOptions')) {
                obj['chargeOptions'] = GetShareAccountsChargeOptions.constructFromObject(data['chargeOptions']);
            }
            if (data.hasOwnProperty('minimumActivePeriodFrequencyTypeOptions')) {
                obj['minimumActivePeriodFrequencyTypeOptions'] = GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions.constructFromObject(data['minimumActivePeriodFrequencyTypeOptions']);
            }
            if (data.hasOwnProperty('lockinPeriodFrequencyTypeOptions')) {
                obj['lockinPeriodFrequencyTypeOptions'] = GetClientIdProductIdLockinPeriodFrequencyTypeOptions.constructFromObject(data['lockinPeriodFrequencyTypeOptions']);
            }
            if (data.hasOwnProperty('accountingMappingOptions')) {
                obj['accountingMappingOptions'] = ApiClient.convertToType(data['accountingMappingOptions'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetClientIdProductIdProductOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetClientIdProductIdProductOptions.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetClientIdProductIdProductOptions.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
GetClientIdProductIdProductOptions.prototype['description'] = undefined;

/**
 * @member {module:model/GetShareAccountsCurrency} currency
 */
GetClientIdProductIdProductOptions.prototype['currency'] = undefined;

/**
 * @member {Number} totalShares
 */
GetClientIdProductIdProductOptions.prototype['totalShares'] = undefined;

/**
 * @member {Number} totalSharesIssued
 */
GetClientIdProductIdProductOptions.prototype['totalSharesIssued'] = undefined;

/**
 * @member {Number} unitPrice
 */
GetClientIdProductIdProductOptions.prototype['unitPrice'] = undefined;

/**
 * @member {Number} shareCapital
 */
GetClientIdProductIdProductOptions.prototype['shareCapital'] = undefined;

/**
 * @member {Number} minimumShares
 */
GetClientIdProductIdProductOptions.prototype['minimumShares'] = undefined;

/**
 * @member {Number} norminalShares
 */
GetClientIdProductIdProductOptions.prototype['norminalShares'] = undefined;

/**
 * @member {Number} maximumShares
 */
GetClientIdProductIdProductOptions.prototype['maximumShares'] = undefined;

/**
 * @member {String} marketPrice
 */
GetClientIdProductIdProductOptions.prototype['marketPrice'] = undefined;

/**
 * @member {String} charges
 */
GetClientIdProductIdProductOptions.prototype['charges'] = undefined;

/**
 * @member {Boolean} allowDividendCalculationForInactiveClients
 */
GetClientIdProductIdProductOptions.prototype['allowDividendCalculationForInactiveClients'] = undefined;

/**
 * @member {Number} lockinPeriod
 */
GetClientIdProductIdProductOptions.prototype['lockinPeriod'] = undefined;

/**
 * @member {module:model/GetShareAccountsClientIdProductIdLockPeriodTypeEnum} lockinPeriodEnum
 */
GetClientIdProductIdProductOptions.prototype['lockinPeriodEnum'] = undefined;

/**
 * @member {Number} minimumActivePeriod
 */
GetClientIdProductIdProductOptions.prototype['minimumActivePeriod'] = undefined;

/**
 * @member {module:model/GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum} minimumActivePeriodForDividendsTypeEnum
 */
GetClientIdProductIdProductOptions.prototype['minimumActivePeriodForDividendsTypeEnum'] = undefined;

/**
 * @member {module:model/GetShareAccountsClientIdProductIdAccountingRule} accountingRule
 */
GetClientIdProductIdProductOptions.prototype['accountingRule'] = undefined;

/**
 * @member {module:model/GetClientIdProductIdAccountingMappings} accountingMappings
 */
GetClientIdProductIdProductOptions.prototype['accountingMappings'] = undefined;

/**
 * @member {module:model/GetShareAccountsCurrency} currencyOptions
 */
GetClientIdProductIdProductOptions.prototype['currencyOptions'] = undefined;

/**
 * @member {module:model/GetShareAccountsChargeOptions} chargeOptions
 */
GetClientIdProductIdProductOptions.prototype['chargeOptions'] = undefined;

/**
 * @member {module:model/GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions} minimumActivePeriodFrequencyTypeOptions
 */
GetClientIdProductIdProductOptions.prototype['minimumActivePeriodFrequencyTypeOptions'] = undefined;

/**
 * @member {module:model/GetClientIdProductIdLockinPeriodFrequencyTypeOptions} lockinPeriodFrequencyTypeOptions
 */
GetClientIdProductIdProductOptions.prototype['lockinPeriodFrequencyTypeOptions'] = undefined;

/**
 * @member {Object} accountingMappingOptions
 */
GetClientIdProductIdProductOptions.prototype['accountingMappingOptions'] = undefined;






export default GetClientIdProductIdProductOptions;

