

import ApiClient from '../ApiClient';

/**
 * The Field model module.
 * @module model/Field
 * @version 1.0
 */
class Field {
    /**
     * Constructs a new <code>Field</code>.
     * @alias module:model/Field
     */
    constructor() { 
        
        Field.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Field</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Field} obj Optional instance to populate.
     * @return {module:model/Field} The populated <code>Field</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Field();

            if (data.hasOwnProperty('fieldName')) {
                obj['fieldName'] = ApiClient.convertToType(data['fieldName'], 'String');
            }
            if (data.hasOwnProperty('fieldValue')) {
                obj['fieldValue'] = ApiClient.convertToType(data['fieldValue'], 'String');
            }
            if (data.hasOwnProperty('fieldType')) {
                obj['fieldType'] = ApiClient.convertToType(data['fieldType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} fieldName
 */
Field.prototype['fieldName'] = undefined;

/**
 * @member {String} fieldValue
 */
Field.prototype['fieldValue'] = undefined;

/**
 * @member {String} fieldType
 */
Field.prototype['fieldType'] = undefined;






export default Field;

