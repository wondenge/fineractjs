

import ApiClient from '../ApiClient';

/**
 * The GetChargeAppliesTo model module.
 * @module model/GetChargeAppliesTo
 * @version 1.0
 */
class GetChargeAppliesTo {
    /**
     * Constructs a new <code>GetChargeAppliesTo</code>.
     * @alias module:model/GetChargeAppliesTo
     */
    constructor() { 
        
        GetChargeAppliesTo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargeAppliesTo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargeAppliesTo} obj Optional instance to populate.
     * @return {module:model/GetChargeAppliesTo} The populated <code>GetChargeAppliesTo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargeAppliesTo();

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
GetChargeAppliesTo.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargeAppliesTo.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargeAppliesTo.prototype['description'] = undefined;






export default GetChargeAppliesTo;

