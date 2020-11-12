

import ApiClient from '../ApiClient';

/**
 * The GetChargesAppliesTo model module.
 * @module model/GetChargesAppliesTo
 * @version 1.0
 */
class GetChargesAppliesTo {
    /**
     * Constructs a new <code>GetChargesAppliesTo</code>.
     * @alias module:model/GetChargesAppliesTo
     */
    constructor() { 
        
        GetChargesAppliesTo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesAppliesTo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesAppliesTo} obj Optional instance to populate.
     * @return {module:model/GetChargesAppliesTo} The populated <code>GetChargesAppliesTo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesAppliesTo();

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
GetChargesAppliesTo.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargesAppliesTo.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargesAppliesTo.prototype['description'] = undefined;






export default GetChargesAppliesTo;

