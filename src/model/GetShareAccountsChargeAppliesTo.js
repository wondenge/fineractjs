

import ApiClient from '../ApiClient';

/**
 * The GetShareAccountsChargeAppliesTo model module.
 * @module model/GetShareAccountsChargeAppliesTo
 * @version 1.0
 */
class GetShareAccountsChargeAppliesTo {
    /**
     * Constructs a new <code>GetShareAccountsChargeAppliesTo</code>.
     * @alias module:model/GetShareAccountsChargeAppliesTo
     */
    constructor() { 
        
        GetShareAccountsChargeAppliesTo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsChargeAppliesTo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsChargeAppliesTo} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsChargeAppliesTo} The populated <code>GetShareAccountsChargeAppliesTo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsChargeAppliesTo();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetShareAccountsChargeAppliesTo.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetShareAccountsChargeAppliesTo.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetShareAccountsChargeAppliesTo.prototype['description'] = undefined;






export default GetShareAccountsChargeAppliesTo;

