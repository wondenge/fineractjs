

import ApiClient from '../ApiClient';

/**
 * The GetShareAccountsChargeCalculationType model module.
 * @module model/GetShareAccountsChargeCalculationType
 * @version 1.0
 */
class GetShareAccountsChargeCalculationType {
    /**
     * Constructs a new <code>GetShareAccountsChargeCalculationType</code>.
     * @alias module:model/GetShareAccountsChargeCalculationType
     */
    constructor() { 
        
        GetShareAccountsChargeCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsChargeCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsChargeCalculationType} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsChargeCalculationType} The populated <code>GetShareAccountsChargeCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsChargeCalculationType();

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
GetShareAccountsChargeCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetShareAccountsChargeCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetShareAccountsChargeCalculationType.prototype['description'] = undefined;






export default GetShareAccountsChargeCalculationType;

