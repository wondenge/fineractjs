

import ApiClient from '../ApiClient';
import FormDataContentDisposition from './FormDataContentDisposition';

/**
 * The InlineObject11 model module.
 * @module model/InlineObject11
 * @version 1.0
 */
class InlineObject11 {
    /**
     * Constructs a new <code>InlineObject11</code>.
     * @alias module:model/InlineObject11
     */
    constructor() { 
        
        InlineObject11.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject11</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject11} obj Optional instance to populate.
     * @return {module:model/InlineObject11} The populated <code>InlineObject11</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject11();

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
InlineObject11.prototype['file'] = undefined;

/**
 * @member {String} locale
 */
InlineObject11.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
InlineObject11.prototype['dateFormat'] = undefined;






export default InlineObject11;

