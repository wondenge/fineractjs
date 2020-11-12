

import ApiClient from '../ApiClient';

/**
 * The GetSavingsChargeCalculationType model module.
 * @module model/GetSavingsChargeCalculationType
 * @version 1.0
 */
class GetSavingsChargeCalculationType {
    /**
     * Constructs a new <code>GetSavingsChargeCalculationType</code>.
     * @alias module:model/GetSavingsChargeCalculationType
     */
    constructor() { 
        
        GetSavingsChargeCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsChargeCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsChargeCalculationType} obj Optional instance to populate.
     * @return {module:model/GetSavingsChargeCalculationType} The populated <code>GetSavingsChargeCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsChargeCalculationType();

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
GetSavingsChargeCalculationType.prototype['code'] = undefined;

/**
 * @member {Number} id
 */
GetSavingsChargeCalculationType.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GetSavingsChargeCalculationType.prototype['description'] = undefined;






export default GetSavingsChargeCalculationType;

