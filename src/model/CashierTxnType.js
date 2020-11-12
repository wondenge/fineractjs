

import ApiClient from '../ApiClient';

/**
 * The CashierTxnType model module.
 * @module model/CashierTxnType
 * @version 1.0
 */
class CashierTxnType {
    /**
     * Constructs a new <code>CashierTxnType</code>.
     * @alias module:model/CashierTxnType
     */
    constructor() { 
        
        CashierTxnType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CashierTxnType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashierTxnType} obj Optional instance to populate.
     * @return {module:model/CashierTxnType} The populated <code>CashierTxnType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashierTxnType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
CashierTxnType.prototype['id'] = undefined;

/**
 * @member {String} value
 */
CashierTxnType.prototype['value'] = undefined;






export default CashierTxnType;

