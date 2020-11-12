

import ApiClient from '../ApiClient';

/**
 * The PutFixedDepositProductsChanges model module.
 * @module model/PutFixedDepositProductsChanges
 * @version 1.0
 */
class PutFixedDepositProductsChanges {
    /**
     * Constructs a new <code>PutFixedDepositProductsChanges</code>.
     * @alias module:model/PutFixedDepositProductsChanges
     */
    constructor() { 
        
        PutFixedDepositProductsChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFixedDepositProductsChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFixedDepositProductsChanges} obj Optional instance to populate.
     * @return {module:model/PutFixedDepositProductsChanges} The populated <code>PutFixedDepositProductsChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFixedDepositProductsChanges();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('minDepositTerm')) {
                obj['minDepositTerm'] = ApiClient.convertToType(data['minDepositTerm'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PutFixedDepositProductsChanges.prototype['description'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
PutFixedDepositProductsChanges.prototype['minDepositTerm'] = undefined;






export default PutFixedDepositProductsChanges;

