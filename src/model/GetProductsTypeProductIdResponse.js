

import ApiClient from '../ApiClient';
import GetChargesCurrency from './GetChargesCurrency';
import GetLockPeriodTypeEnum from './GetLockPeriodTypeEnum';
import GetProductsAccountingMappingOptions from './GetProductsAccountingMappingOptions';
import GetProductsAccountingMappings from './GetProductsAccountingMappings';
import GetProductsAccountingRule from './GetProductsAccountingRule';
import GetProductsCharges from './GetProductsCharges';
import GetProductsCurrency from './GetProductsCurrency';
import GetProductsMarketPrice from './GetProductsMarketPrice';
import GetProductsMinimumActivePeriodFrequencyTypeOptions from './GetProductsMinimumActivePeriodFrequencyTypeOptions';

/**
 * The GetProductsTypeProductIdResponse model module.
 * @module model/GetProductsTypeProductIdResponse
 * @version 1.0
 */
class GetProductsTypeProductIdResponse {
    /**
     * Constructs a new <code>GetProductsTypeProductIdResponse</code>.
     * GetProductsTypeProductIdResponse
     * @alias module:model/GetProductsTypeProductIdResponse
     */
    constructor() { 
        
        GetProductsTypeProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsTypeProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsTypeProductIdResponse} obj Optional instance to populate.
     * @return {module:model/GetProductsTypeProductIdResponse} The populated <code>GetProductsTypeProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsTypeProductIdResponse();

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
                obj['currency'] = GetProductsCurrency.constructFromObject(data['currency']);
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
            if (data.hasOwnProperty('nominalShares')) {
                obj['nominalShares'] = ApiClient.convertToType(data['nominalShares'], 'Number');
            }
            if (data.hasOwnProperty('maximumShares')) {
                obj['maximumShares'] = ApiClient.convertToType(data['maximumShares'], 'Number');
            }
            if (data.hasOwnProperty('marketPrice')) {
                obj['marketPrice'] = ApiClient.convertToType(data['marketPrice'], [GetProductsMarketPrice]);
            }
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], [GetProductsCharges]);
            }
            if (data.hasOwnProperty('allowDividendCalculationForInactiveClients')) {
                obj['allowDividendCalculationForInactiveClients'] = ApiClient.convertToType(data['allowDividendCalculationForInactiveClients'], 'Boolean');
            }
            if (data.hasOwnProperty('lockinPeriod')) {
                obj['lockinPeriod'] = ApiClient.convertToType(data['lockinPeriod'], 'Number');
            }
            if (data.hasOwnProperty('lockPeriodTypeEnum')) {
                obj['lockPeriodTypeEnum'] = GetLockPeriodTypeEnum.constructFromObject(data['lockPeriodTypeEnum']);
            }
            if (data.hasOwnProperty('minimumActivePeriod')) {
                obj['minimumActivePeriod'] = ApiClient.convertToType(data['minimumActivePeriod'], 'Number');
            }
            if (data.hasOwnProperty('minimumActivePeriodForDividendsTypeEnum')) {
                obj['minimumActivePeriodForDividendsTypeEnum'] = GetLockPeriodTypeEnum.constructFromObject(data['minimumActivePeriodForDividendsTypeEnum']);
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = GetProductsAccountingRule.constructFromObject(data['accountingRule']);
            }
            if (data.hasOwnProperty('accountingMappings')) {
                obj['accountingMappings'] = GetProductsAccountingMappings.constructFromObject(data['accountingMappings']);
            }
            if (data.hasOwnProperty('currencyOptions')) {
                obj['currencyOptions'] = ApiClient.convertToType(data['currencyOptions'], [GetChargesCurrency]);
            }
            if (data.hasOwnProperty('chargeOptions')) {
                obj['chargeOptions'] = ApiClient.convertToType(data['chargeOptions'], [GetProductsCharges]);
            }
            if (data.hasOwnProperty('minimumActivePeriodFrequencyTypeOptions')) {
                obj['minimumActivePeriodFrequencyTypeOptions'] = ApiClient.convertToType(data['minimumActivePeriodFrequencyTypeOptions'], [GetProductsMinimumActivePeriodFrequencyTypeOptions]);
            }
            if (data.hasOwnProperty('lockinPeriodFrequencyTypeOptions')) {
                obj['lockinPeriodFrequencyTypeOptions'] = ApiClient.convertToType(data['lockinPeriodFrequencyTypeOptions'], [GetProductsMinimumActivePeriodFrequencyTypeOptions]);
            }
            if (data.hasOwnProperty('accountingMappingOptions')) {
                obj['accountingMappingOptions'] = GetProductsAccountingMappingOptions.constructFromObject(data['accountingMappingOptions']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetProductsTypeProductIdResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetProductsTypeProductIdResponse.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetProductsTypeProductIdResponse.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
GetProductsTypeProductIdResponse.prototype['description'] = undefined;

/**
 * @member {module:model/GetProductsCurrency} currency
 */
GetProductsTypeProductIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} totalShares
 */
GetProductsTypeProductIdResponse.prototype['totalShares'] = undefined;

/**
 * @member {Number} totalSharesIssued
 */
GetProductsTypeProductIdResponse.prototype['totalSharesIssued'] = undefined;

/**
 * @member {Number} unitPrice
 */
GetProductsTypeProductIdResponse.prototype['unitPrice'] = undefined;

/**
 * @member {Number} shareCapital
 */
GetProductsTypeProductIdResponse.prototype['shareCapital'] = undefined;

/**
 * @member {Number} minimumShares
 */
GetProductsTypeProductIdResponse.prototype['minimumShares'] = undefined;

/**
 * @member {Number} nominalShares
 */
GetProductsTypeProductIdResponse.prototype['nominalShares'] = undefined;

/**
 * @member {Number} maximumShares
 */
GetProductsTypeProductIdResponse.prototype['maximumShares'] = undefined;

/**
 * @member {Array.<module:model/GetProductsMarketPrice>} marketPrice
 */
GetProductsTypeProductIdResponse.prototype['marketPrice'] = undefined;

/**
 * @member {Array.<module:model/GetProductsCharges>} charges
 */
GetProductsTypeProductIdResponse.prototype['charges'] = undefined;

/**
 * @member {Boolean} allowDividendCalculationForInactiveClients
 */
GetProductsTypeProductIdResponse.prototype['allowDividendCalculationForInactiveClients'] = undefined;

/**
 * @member {Number} lockinPeriod
 */
GetProductsTypeProductIdResponse.prototype['lockinPeriod'] = undefined;

/**
 * @member {module:model/GetLockPeriodTypeEnum} lockPeriodTypeEnum
 */
GetProductsTypeProductIdResponse.prototype['lockPeriodTypeEnum'] = undefined;

/**
 * @member {Number} minimumActivePeriod
 */
GetProductsTypeProductIdResponse.prototype['minimumActivePeriod'] = undefined;

/**
 * @member {module:model/GetLockPeriodTypeEnum} minimumActivePeriodForDividendsTypeEnum
 */
GetProductsTypeProductIdResponse.prototype['minimumActivePeriodForDividendsTypeEnum'] = undefined;

/**
 * @member {module:model/GetProductsAccountingRule} accountingRule
 */
GetProductsTypeProductIdResponse.prototype['accountingRule'] = undefined;

/**
 * @member {module:model/GetProductsAccountingMappings} accountingMappings
 */
GetProductsTypeProductIdResponse.prototype['accountingMappings'] = undefined;

/**
 * @member {Array.<module:model/GetChargesCurrency>} currencyOptions
 */
GetProductsTypeProductIdResponse.prototype['currencyOptions'] = undefined;

/**
 * @member {Array.<module:model/GetProductsCharges>} chargeOptions
 */
GetProductsTypeProductIdResponse.prototype['chargeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetProductsMinimumActivePeriodFrequencyTypeOptions>} minimumActivePeriodFrequencyTypeOptions
 */
GetProductsTypeProductIdResponse.prototype['minimumActivePeriodFrequencyTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetProductsMinimumActivePeriodFrequencyTypeOptions>} lockinPeriodFrequencyTypeOptions
 */
GetProductsTypeProductIdResponse.prototype['lockinPeriodFrequencyTypeOptions'] = undefined;

/**
 * @member {module:model/GetProductsAccountingMappingOptions} accountingMappingOptions
 */
GetProductsTypeProductIdResponse.prototype['accountingMappingOptions'] = undefined;






export default GetProductsTypeProductIdResponse;

