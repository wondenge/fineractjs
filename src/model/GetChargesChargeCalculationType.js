

import ApiClient from '../ApiClient';

/**
 * The GetChargesChargeCalculationType model module.
 * @module model/GetChargesChargeCalculationType
 * @version 1.0
 */
class GetChargesChargeCalculationType {
    /**
     * Constructs a new <code>GetChargesChargeCalculationType</code>.
     * @alias module:model/GetChargesChargeCalculationType
     */
    constructor() { 
        
        GetChargesChargeCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesChargeCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesChargeCalculationType} obj Optional instance to populate.
     * @return {module:model/GetChargesChargeCalculationType} The populated <code>GetChargesChargeCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesChargeCalculationType();

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
GetChargesChargeCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargesChargeCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargesChargeCalculationType.prototype['description'] = undefined;






export default GetChargesChargeCalculationType;

