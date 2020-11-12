

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersTemplateRefundByTransferCurrency model module.
 * @module model/GetAccountTransfersTemplateRefundByTransferCurrency
 * @version 1.0
 */
class GetAccountTransfersTemplateRefundByTransferCurrency {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateRefundByTransferCurrency</code>.
     * @alias module:model/GetAccountTransfersTemplateRefundByTransferCurrency
     */
    constructor() { 
        
        GetAccountTransfersTemplateRefundByTransferCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateRefundByTransferCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferCurrency} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateRefundByTransferCurrency} The populated <code>GetAccountTransfersTemplateRefundByTransferCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateRefundByTransferCurrency();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('decimalPlaces')) {
                obj['decimalPlaces'] = ApiClient.convertToType(data['decimalPlaces'], 'Number');
            }
            if (data.hasOwnProperty('inMultiplesOf')) {
                obj['inMultiplesOf'] = ApiClient.convertToType(data['inMultiplesOf'], 'Number');
            }
            if (data.hasOwnProperty('displaySymbol')) {
                obj['displaySymbol'] = ApiClient.convertToType(data['displaySymbol'], 'String');
            }
            if (data.hasOwnProperty('nameCode')) {
                obj['nameCode'] = ApiClient.convertToType(data['nameCode'], 'String');
            }
            if (data.hasOwnProperty('displayLabel')) {
                obj['displayLabel'] = ApiClient.convertToType(data['displayLabel'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
GetAccountTransfersTemplateRefundByTransferCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetAccountTransfersTemplateRefundByTransferCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetAccountTransfersTemplateRefundByTransferCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
GetAccountTransfersTemplateRefundByTransferCurrency.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetAccountTransfersTemplateRefundByTransferCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetAccountTransfersTemplateRefundByTransferCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetAccountTransfersTemplateRefundByTransferCurrency.prototype['displayLabel'] = undefined;






export default GetAccountTransfersTemplateRefundByTransferCurrency;

