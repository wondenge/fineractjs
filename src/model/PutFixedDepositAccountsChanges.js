

import ApiClient from '../ApiClient';

/**
 * The PutFixedDepositAccountsChanges model module.
 * @module model/PutFixedDepositAccountsChanges
 * @version 1.0
 */
class PutFixedDepositAccountsChanges {
    /**
     * Constructs a new <code>PutFixedDepositAccountsChanges</code>.
     * @alias module:model/PutFixedDepositAccountsChanges
     */
    constructor() { 
        
        PutFixedDepositAccountsChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFixedDepositAccountsChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFixedDepositAccountsChanges} obj Optional instance to populate.
     * @return {module:model/PutFixedDepositAccountsChanges} The populated <code>PutFixedDepositAccountsChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFixedDepositAccountsChanges();

            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} depositAmount
 */
PutFixedDepositAccountsChanges.prototype['depositAmount'] = undefined;

/**
 * @member {String} locale
 */
PutFixedDepositAccountsChanges.prototype['locale'] = undefined;






export default PutFixedDepositAccountsChanges;

