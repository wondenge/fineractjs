

import ApiClient from '../ApiClient';

/**
 * The GetChargeTimeType model module.
 * @module model/GetChargeTimeType
 * @version 1.0
 */
class GetChargeTimeType {
    /**
     * Constructs a new <code>GetChargeTimeType</code>.
     * @alias module:model/GetChargeTimeType
     */
    constructor() { 
        
        GetChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetChargeTimeType} The populated <code>GetChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargeTimeType();

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
GetChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargeTimeType.prototype['description'] = undefined;






export default GetChargeTimeType;

