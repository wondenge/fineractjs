

import ApiClient from '../ApiClient';

/**
 * The GetAccountsChargeCalculationType model module.
 * @module model/GetAccountsChargeCalculationType
 * @version 1.0
 */
class GetAccountsChargeCalculationType {
    /**
     * Constructs a new <code>GetAccountsChargeCalculationType</code>.
     * @alias module:model/GetAccountsChargeCalculationType
     */
    constructor() { 
        
        GetAccountsChargeCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsChargeCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsChargeCalculationType} obj Optional instance to populate.
     * @return {module:model/GetAccountsChargeCalculationType} The populated <code>GetAccountsChargeCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsChargeCalculationType();

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
GetAccountsChargeCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountsChargeCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountsChargeCalculationType.prototype['description'] = undefined;






export default GetAccountsChargeCalculationType;

