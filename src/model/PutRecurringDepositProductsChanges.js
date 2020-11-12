

import ApiClient from '../ApiClient';

/**
 * The PutRecurringDepositProductsChanges model module.
 * @module model/PutRecurringDepositProductsChanges
 * @version 1.0
 */
class PutRecurringDepositProductsChanges {
    /**
     * Constructs a new <code>PutRecurringDepositProductsChanges</code>.
     * @alias module:model/PutRecurringDepositProductsChanges
     */
    constructor() { 
        
        PutRecurringDepositProductsChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRecurringDepositProductsChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRecurringDepositProductsChanges} obj Optional instance to populate.
     * @return {module:model/PutRecurringDepositProductsChanges} The populated <code>PutRecurringDepositProductsChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRecurringDepositProductsChanges();

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
PutRecurringDepositProductsChanges.prototype['description'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
PutRecurringDepositProductsChanges.prototype['minDepositTerm'] = undefined;






export default PutRecurringDepositProductsChanges;

