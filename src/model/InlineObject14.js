  

import ApiClient from '../ApiClient';
import FormDataContentDisposition from './FormDataContentDisposition';

/**
 * The InlineObject14 model module.
 * @module model/InlineObject14
 * @version 1.0
 */
class InlineObject14 {
    /**
     * Constructs a new <code>InlineObject14</code>.
     * @alias module:model/InlineObject14
     */
    constructor() { 
        
        InlineObject14.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject14</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject14} obj Optional instance to populate.
     * @return {module:model/InlineObject14} The populated <code>InlineObject14</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject14();

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
InlineObject14.prototype['file'] = undefined;

/**
 * @member {String} locale
 */
InlineObject14.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
InlineObject14.prototype['dateFormat'] = undefined;






export default InlineObject14;

