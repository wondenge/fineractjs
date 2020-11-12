

import ApiClient from '../ApiClient';
import FormDataBodyPart from './FormDataBodyPart';

/**
 * The InlineObject3 model module.
 * @module model/InlineObject3
 * @version 1.0
 */
class InlineObject3 {
    /**
     * Constructs a new <code>InlineObject3</code>.
     * @alias module:model/InlineObject3
     */
    constructor() { 
        
        InlineObject3.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject3();

            if (data.hasOwnProperty('file')) {
                obj['file'] = FormDataBodyPart.constructFromObject(data['file']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FormDataBodyPart} file
 */
InlineObject3.prototype['file'] = undefined;

/**
 * name
 * @member {String} name
 */
InlineObject3.prototype['name'] = undefined;

/**
 * description
 * @member {String} description
 */
InlineObject3.prototype['description'] = undefined;






export default InlineObject3;

