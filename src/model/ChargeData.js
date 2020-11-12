

import ApiClient from '../ApiClient';
import CurrencyData from './CurrencyData';

/**
 * The ChargeData model module.
 * @module model/ChargeData
 * @version 1.0
 */
class ChargeData {
    /**
     * Constructs a new <code>ChargeData</code>.
     * @alias module:model/ChargeData
     */
    constructor() { 
        
        ChargeData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChargeData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChargeData} obj Optional instance to populate.
     * @return {module:model/ChargeData} The populated <code>ChargeData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChargeData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'Boolean');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = CurrencyData.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('overdueInstallmentCharge')) {
                obj['overdueInstallmentCharge'] = ApiClient.convertToType(data['overdueInstallmentCharge'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ChargeData.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ChargeData.prototype['name'] = undefined;

/**
 * @member {Boolean} penalty
 */
ChargeData.prototype['penalty'] = undefined;

/**
 * @member {module:model/CurrencyData} currency
 */
ChargeData.prototype['currency'] = undefined;

/**
 * @member {Boolean} overdueInstallmentCharge
 */
ChargeData.prototype['overdueInstallmentCharge'] = undefined;






export default ChargeData;

