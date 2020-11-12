

import ApiClient from '../ApiClient';

/**
 * The GetAccountsChargeTimeType model module.
 * @module model/GetAccountsChargeTimeType
 * @version 1.0
 */
class GetAccountsChargeTimeType {
    /**
     * Constructs a new <code>GetAccountsChargeTimeType</code>.
     * @alias module:model/GetAccountsChargeTimeType
     */
    constructor() { 
        
        GetAccountsChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetAccountsChargeTimeType} The populated <code>GetAccountsChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsChargeTimeType();

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
GetAccountsChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountsChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountsChargeTimeType.prototype['description'] = undefined;






export default GetAccountsChargeTimeType;

