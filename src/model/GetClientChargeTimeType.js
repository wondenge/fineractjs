

import ApiClient from '../ApiClient';

/**
 * The GetClientChargeTimeType model module.
 * @module model/GetClientChargeTimeType
 * @version 1.0
 */
class GetClientChargeTimeType {
    /**
     * Constructs a new <code>GetClientChargeTimeType</code>.
     * @alias module:model/GetClientChargeTimeType
     */
    constructor() { 
        
        GetClientChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetClientChargeTimeType} The populated <code>GetClientChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientChargeTimeType();

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
GetClientChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetClientChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetClientChargeTimeType.prototype['description'] = undefined;






export default GetClientChargeTimeType;

