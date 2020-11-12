

import ApiClient from '../ApiClient';

/**
 * The GetSelfSavingsChargeTimeType model module.
 * @module model/GetSelfSavingsChargeTimeType
 * @version 1.0
 */
class GetSelfSavingsChargeTimeType {
    /**
     * Constructs a new <code>GetSelfSavingsChargeTimeType</code>.
     * @alias module:model/GetSelfSavingsChargeTimeType
     */
    constructor() { 
        
        GetSelfSavingsChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsChargeTimeType} The populated <code>GetSelfSavingsChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsChargeTimeType();

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
GetSelfSavingsChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfSavingsChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfSavingsChargeTimeType.prototype['description'] = undefined;






export default GetSelfSavingsChargeTimeType;

