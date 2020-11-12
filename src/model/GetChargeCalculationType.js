

import ApiClient from '../ApiClient';

/**
 * The GetChargeCalculationType model module.
 * @module model/GetChargeCalculationType
 * @version 1.0
 */
class GetChargeCalculationType {
    /**
     * Constructs a new <code>GetChargeCalculationType</code>.
     * @alias module:model/GetChargeCalculationType
     */
    constructor() { 
        
        GetChargeCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargeCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargeCalculationType} obj Optional instance to populate.
     * @return {module:model/GetChargeCalculationType} The populated <code>GetChargeCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargeCalculationType();

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
GetChargeCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargeCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargeCalculationType.prototype['description'] = undefined;






export default GetChargeCalculationType;

