

import ApiClient from '../ApiClient';

/**
 * The GetShareAccountsChargeTimeType model module.
 * @module model/GetShareAccountsChargeTimeType
 * @version 1.0
 */
class GetShareAccountsChargeTimeType {
    /**
     * Constructs a new <code>GetShareAccountsChargeTimeType</code>.
     * @alias module:model/GetShareAccountsChargeTimeType
     */
    constructor() { 
        
        GetShareAccountsChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsChargeTimeType} The populated <code>GetShareAccountsChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsChargeTimeType();

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
GetShareAccountsChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetShareAccountsChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetShareAccountsChargeTimeType.prototype['description'] = undefined;






export default GetShareAccountsChargeTimeType;

