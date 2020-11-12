

import ApiClient from '../ApiClient';

/**
 * The BodyPartMediaType model module.
 * @module model/BodyPartMediaType
 * @version 1.0
 */
class BodyPartMediaType {
    /**
     * Constructs a new <code>BodyPartMediaType</code>.
     * @alias module:model/BodyPartMediaType
     */
    constructor() { 
        
        BodyPartMediaType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BodyPartMediaType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodyPartMediaType} obj Optional instance to populate.
     * @return {module:model/BodyPartMediaType} The populated <code>BodyPartMediaType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BodyPartMediaType();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('subtype')) {
                obj['subtype'] = ApiClient.convertToType(data['subtype'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('wildcardType')) {
                obj['wildcardType'] = ApiClient.convertToType(data['wildcardType'], 'Boolean');
            }
            if (data.hasOwnProperty('wildcardSubtype')) {
                obj['wildcardSubtype'] = ApiClient.convertToType(data['wildcardSubtype'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
BodyPartMediaType.prototype['type'] = undefined;

/**
 * @member {String} subtype
 */
BodyPartMediaType.prototype['subtype'] = undefined;

/**
 * @member {Object.<String, String>} parameters
 */
BodyPartMediaType.prototype['parameters'] = undefined;

/**
 * @member {Boolean} wildcardType
 */
BodyPartMediaType.prototype['wildcardType'] = undefined;

/**
 * @member {Boolean} wildcardSubtype
 */
BodyPartMediaType.prototype['wildcardSubtype'] = undefined;






export default BodyPartMediaType;

