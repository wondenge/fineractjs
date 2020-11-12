

import ApiClient from '../ApiClient';

/**
 * The ParameterizedHeader model module.
 * @module model/ParameterizedHeader
 * @version 1.0
 */
class ParameterizedHeader {
    /**
     * Constructs a new <code>ParameterizedHeader</code>.
     * @alias module:model/ParameterizedHeader
     */
    constructor() { 
        
        ParameterizedHeader.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParameterizedHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParameterizedHeader} obj Optional instance to populate.
     * @return {module:model/ParameterizedHeader} The populated <code>ParameterizedHeader</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParameterizedHeader();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {String} value
 */
ParameterizedHeader.prototype['value'] = undefined;

/**
 * @member {Object.<String, String>} parameters
 */
ParameterizedHeader.prototype['parameters'] = undefined;






export default ParameterizedHeader;

