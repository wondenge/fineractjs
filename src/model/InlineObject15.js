

import ApiClient from '../ApiClient';
import FormDataContentDisposition from './FormDataContentDisposition';

/**
 * The InlineObject15 model module.
 * @module model/InlineObject15
 * @version 1.0
 */
class InlineObject15 {
    /**
     * Constructs a new <code>InlineObject15</code>.
     * @alias module:model/InlineObject15
     */
    constructor() { 
        
        InlineObject15.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject15</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject15} obj Optional instance to populate.
     * @return {module:model/InlineObject15} The populated <code>InlineObject15</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject15();

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
InlineObject15.prototype['file'] = undefined;

/**
 * @member {String} locale
 */
InlineObject15.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
InlineObject15.prototype['dateFormat'] = undefined;






export default InlineObject15;

