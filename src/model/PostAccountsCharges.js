

import ApiClient from '../ApiClient';

/**
 * The PostAccountsCharges model module.
 * @module model/PostAccountsCharges
 * @version 1.0
 */
class PostAccountsCharges {
    /**
     * Constructs a new <code>PostAccountsCharges</code>.
     * @alias module:model/PostAccountsCharges
     */
    constructor() { 
        
        PostAccountsCharges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountsCharges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountsCharges} obj Optional instance to populate.
     * @return {module:model/PostAccountsCharges} The populated <code>PostAccountsCharges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountsCharges();

            if (data.hasOwnProperty('chargeId')) {
                obj['chargeId'] = ApiClient.convertToType(data['chargeId'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} chargeId
 */
PostAccountsCharges.prototype['chargeId'] = undefined;

/**
 * @member {Number} amount
 */
PostAccountsCharges.prototype['amount'] = undefined;






export default PostAccountsCharges;

