

import ApiClient from '../ApiClient';
import FormDataBodyPart from './FormDataBodyPart';

/**
 * The InlineObject5 model module.
 * @module model/InlineObject5
 * @version 1.0
 */
class InlineObject5 {
    /**
     * Constructs a new <code>InlineObject5</code>.
     * @alias module:model/InlineObject5
     */
    constructor() { 
        
        InlineObject5.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject5} obj Optional instance to populate.
     * @return {module:model/InlineObject5} The populated <code>InlineObject5</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject5();

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
InlineObject5.prototype['file'] = undefined;






export default InlineObject5;

