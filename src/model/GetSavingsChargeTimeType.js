

import ApiClient from '../ApiClient';

/**
 * The GetSavingsChargeTimeType model module.
 * @module model/GetSavingsChargeTimeType
 * @version 1.0
 */
class GetSavingsChargeTimeType {
    /**
     * Constructs a new <code>GetSavingsChargeTimeType</code>.
     * @alias module:model/GetSavingsChargeTimeType
     */
    constructor() { 
        
        GetSavingsChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetSavingsChargeTimeType} The populated <code>GetSavingsChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsChargeTimeType();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
GetSavingsChargeTimeType.prototype['code'] = undefined;

/**
 * @member {Number} id
 */
GetSavingsChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GetSavingsChargeTimeType.prototype['description'] = undefined;






export default GetSavingsChargeTimeType;

