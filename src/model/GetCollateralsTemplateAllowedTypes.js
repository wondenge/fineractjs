

import ApiClient from '../ApiClient';

/**
 * The GetCollateralsTemplateAllowedTypes model module.
 * @module model/GetCollateralsTemplateAllowedTypes
 * @version 1.0
 */
class GetCollateralsTemplateAllowedTypes {
    /**
     * Constructs a new <code>GetCollateralsTemplateAllowedTypes</code>.
     * @alias module:model/GetCollateralsTemplateAllowedTypes
     */
    constructor() { 
        
        GetCollateralsTemplateAllowedTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCollateralsTemplateAllowedTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCollateralsTemplateAllowedTypes} obj Optional instance to populate.
     * @return {module:model/GetCollateralsTemplateAllowedTypes} The populated <code>GetCollateralsTemplateAllowedTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCollateralsTemplateAllowedTypes();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetCollateralsTemplateAllowedTypes.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetCollateralsTemplateAllowedTypes.prototype['name'] = undefined;

/**
 * @member {Number} position
 */
GetCollateralsTemplateAllowedTypes.prototype['position'] = undefined;






export default GetCollateralsTemplateAllowedTypes;

