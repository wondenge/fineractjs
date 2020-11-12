

import ApiClient from '../ApiClient';
import FormDataContentDisposition from './FormDataContentDisposition';

/**
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 1.0
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:model/InlineObject
     */
    constructor() { 
        
        InlineObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

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
InlineObject.prototype['file'] = undefined;

/**
 * @member {String} locale
 */
InlineObject.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
InlineObject.prototype['dateFormat'] = undefined;






export default InlineObject;

