

import ApiClient from '../ApiClient';

/**
 * The GetSavingsChargesChargeTimeType model module.
 * @module model/GetSavingsChargesChargeTimeType
 * @version 1.0
 */
class GetSavingsChargesChargeTimeType {
    /**
     * Constructs a new <code>GetSavingsChargesChargeTimeType</code>.
     * @alias module:model/GetSavingsChargesChargeTimeType
     */
    constructor() { 
        
        GetSavingsChargesChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsChargesChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsChargesChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetSavingsChargesChargeTimeType} The populated <code>GetSavingsChargesChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsChargesChargeTimeType();

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
GetSavingsChargesChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsChargesChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsChargesChargeTimeType.prototype['description'] = undefined;






export default GetSavingsChargesChargeTimeType;

