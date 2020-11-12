

import ApiClient from '../ApiClient';
import BodyPartMediaType from './BodyPartMediaType';
import ContentDisposition from './ContentDisposition';
import FormDataContentDisposition from './FormDataContentDisposition';
import MultiPart from './MultiPart';
import ParameterizedHeader from './ParameterizedHeader';

/**
 * The FormDataBodyPart model module.
 * @module model/FormDataBodyPart
 * @version 1.0
 */
class FormDataBodyPart {
    /**
     * Constructs a new <code>FormDataBodyPart</code>.
     * @alias module:model/FormDataBodyPart
     */
    constructor() { 
        
        FormDataBodyPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormDataBodyPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FormDataBodyPart} obj Optional instance to populate.
     * @return {module:model/FormDataBodyPart} The populated <code>FormDataBodyPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormDataBodyPart();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], Object);
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': ['String']});
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = BodyPartMediaType.constructFromObject(data['mediaType']);
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = MultiPart.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('providers')) {
                obj['providers'] = ApiClient.convertToType(data['providers'], Object);
            }
            if (data.hasOwnProperty('simple')) {
                obj['simple'] = ApiClient.convertToType(data['simple'], 'Boolean');
            }
            if (data.hasOwnProperty('formDataContentDisposition')) {
                obj['formDataContentDisposition'] = FormDataContentDisposition.constructFromObject(data['formDataContentDisposition']);
            }
            if (data.hasOwnProperty('contentDisposition')) {
                obj['contentDisposition'] = ContentDisposition.constructFromObject(data['contentDisposition']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('parameterizedHeaders')) {
                obj['parameterizedHeaders'] = ApiClient.convertToType(data['parameterizedHeaders'], {'String': [ParameterizedHeader]});
            }
        }
        return obj;
    }


}

/**
 * @member {Object} entity
 */
FormDataBodyPart.prototype['entity'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} headers
 */
FormDataBodyPart.prototype['headers'] = undefined;

/**
 * @member {module:model/BodyPartMediaType} mediaType
 */
FormDataBodyPart.prototype['mediaType'] = undefined;

/**
 * @member {module:model/MultiPart} parent
 */
FormDataBodyPart.prototype['parent'] = undefined;

/**
 * @member {Object} providers
 */
FormDataBodyPart.prototype['providers'] = undefined;

/**
 * @member {Boolean} simple
 */
FormDataBodyPart.prototype['simple'] = undefined;

/**
 * @member {module:model/FormDataContentDisposition} formDataContentDisposition
 */
FormDataBodyPart.prototype['formDataContentDisposition'] = undefined;

/**
 * @member {module:model/ContentDisposition} contentDisposition
 */
FormDataBodyPart.prototype['contentDisposition'] = undefined;

/**
 * @member {String} name
 */
FormDataBodyPart.prototype['name'] = undefined;

/**
 * @member {String} value
 */
FormDataBodyPart.prototype['value'] = undefined;

/**
 * @member {Object.<String, Array.<module:model/ParameterizedHeader>>} parameterizedHeaders
 */
FormDataBodyPart.prototype['parameterizedHeaders'] = undefined;






export default FormDataBodyPart;

