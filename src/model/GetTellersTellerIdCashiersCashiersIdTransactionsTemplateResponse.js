  

import ApiClient from '../ApiClient';
import CashierData from './CashierData';
import CurrencyData from './CurrencyData';

/**
 * The GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse model module.
 * @module model/GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse
 * @version 1.0
 */
class GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse {
    /**
     * Constructs a new <code>GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse</code>.
     * GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse
     * @alias module:model/GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse
     */
    constructor() { 
        
        GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse} The populated <code>GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();

            if (data.hasOwnProperty('cashierId')) {
                obj['cashierId'] = ApiClient.convertToType(data['cashierId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('tellerId')) {
                obj['tellerId'] = ApiClient.convertToType(data['tellerId'], 'Number');
            }
            if (data.hasOwnProperty('tellerName')) {
                obj['tellerName'] = ApiClient.convertToType(data['tellerName'], 'String');
            }
            if (data.hasOwnProperty('cashierName')) {
                obj['cashierName'] = ApiClient.convertToType(data['cashierName'], 'String');
            }
            if (data.hasOwnProperty('cashierData')) {
                obj['cashierData'] = CashierData.constructFromObject(data['cashierData']);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('currencyOptions')) {
                obj['currencyOptions'] = ApiClient.convertToType(data['currencyOptions'], [CurrencyData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} cashierId
 */
GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.prototype['cashierId'] = undefined;

/**
 * @member {String} officeName
 */
GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.prototype['officeName'] = undefined;

/**
 * @member {Number} tellerId
 */
GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.prototype['tellerId'] = undefined;

/**
 * @member {String} tellerName
 */
GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.prototype['tellerName'] = undefined;

/**
 * @member {String} cashierName
 */
GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.prototype['cashierName'] = undefined;

/**
 * @member {module:model/CashierData} cashierData
 */
GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.prototype['cashierData'] = undefined;

/**
 * @member {Date} startDate
 */
GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.prototype['startDate'] = undefined;

/**
 * @member {Date} endDate
 */
GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.prototype['endDate'] = undefined;

/**
 * @member {Array.<module:model/CurrencyData>} currencyOptions
 */
GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.prototype['currencyOptions'] = undefined;






export default GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse;

