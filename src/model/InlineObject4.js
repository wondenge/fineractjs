

import ApiClient from '../ApiClient';
import FormDataBodyPart from './FormDataBodyPart';

/**
 * The InlineObject4 model module.
 * @module model/InlineObject4
 * @version 1.0
 */
class InlineObject4 {
    /**
     * Constructs a new <code>InlineObject4</code>.
     * @alias module:model/InlineObject4
     */
    constructor() { 
        
        InlineObject4.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject4} obj Optional instance to populate.
     * @return {module:model/InlineObject4} The populated <code>InlineObject4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject4();

            if (data.hasOwnProperty('file')) {
                obj['file'] = FormDataBodyPart.constructFromObject(data['file']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FormDataBodyPart} file
 */
InlineObject4.prototype['file'] = undefined;






export default InlineObject4;

