

import ApiClient from '../ApiClient';
import FormDataContentDisposition from './FormDataContentDisposition';

/**
 * The InlineObject7 model module.
 * @module model/InlineObject7
 * @version 1.0
 */
class InlineObject7 {
    /**
     * Constructs a new <code>InlineObject7</code>.
     * @alias module:model/InlineObject7
     */
    constructor() { 
        
        InlineObject7.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject7</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject7} obj Optional instance to populate.
     * @return {module:model/InlineObject7} The populated <code>InlineObject7</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject7();

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
InlineObject7.prototype['file'] = undefined;

/**
 * @member {String} locale
 */
InlineObject7.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
InlineObject7.prototype['dateFormat'] = undefined;






export default InlineObject7;

