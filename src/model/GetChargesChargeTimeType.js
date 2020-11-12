

import ApiClient from '../ApiClient';

/**
 * The GetChargesChargeTimeType model module.
 * @module model/GetChargesChargeTimeType
 * @version 1.0
 */
class GetChargesChargeTimeType {
    /**
     * Constructs a new <code>GetChargesChargeTimeType</code>.
     * @alias module:model/GetChargesChargeTimeType
     */
    constructor() { 
        
        GetChargesChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetChargesChargeTimeType} The populated <code>GetChargesChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesChargeTimeType();

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
GetChargesChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargesChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargesChargeTimeType.prototype['description'] = undefined;






export default GetChargesChargeTimeType;

