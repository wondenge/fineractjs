

import ApiClient from '../ApiClient';
import FormDataContentDisposition from './FormDataContentDisposition';

/**
 * The InlineObject20 model module.
 * @module model/InlineObject20
 * @version 1.0
 */
class InlineObject20 {
    /**
     * Constructs a new <code>InlineObject20</code>.
     * @alias module:model/InlineObject20
     */
    constructor() { 
        
        InlineObject20.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject20</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject20} obj Optional instance to populate.
     * @return {module:model/InlineObject20} The populated <code>InlineObject20</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject20();

            if (data.hasOwnProperty('file')) {
                obj['file'] = FormDataContentDisposition.constructFromObject(data['file']);
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FormDataContentDisposition} file
 */
InlineObject20.prototype['file'] = undefined;

/**
 * @member {String} locale
 */
InlineObject20.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
InlineObject20.prototype['dateFormat'] = undefined;






export default InlineObject20;

