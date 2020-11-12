

import ApiClient from '../ApiClient';
import TemplateMapper from './TemplateMapper';

/**
 * The PutTemplatesTemplateIdRequest model module.
 * @module model/PutTemplatesTemplateIdRequest
 * @version 1.0
 */
class PutTemplatesTemplateIdRequest {
    /**
     * Constructs a new <code>PutTemplatesTemplateIdRequest</code>.
     * PutTemplatesTemplateIdRequest
     * @alias module:model/PutTemplatesTemplateIdRequest
     */
    constructor() { 
        
        PutTemplatesTemplateIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTemplatesTemplateIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTemplatesTemplateIdRequest} obj Optional instance to populate.
     * @return {module:model/PutTemplatesTemplateIdRequest} The populated <code>PutTemplatesTemplateIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTemplatesTemplateIdRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('mappers')) {
                obj['mappers'] = ApiClient.convertToType(data['mappers'], [TemplateMapper]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PutTemplatesTemplateIdRequest.prototype['id'] = undefined;

/**
 * @member {String} name
 */
PutTemplatesTemplateIdRequest.prototype['name'] = undefined;

/**
 * @member {Number} entity
 */
PutTemplatesTemplateIdRequest.prototype['entity'] = undefined;

/**
 * @member {Number} type
 */
PutTemplatesTemplateIdRequest.prototype['type'] = undefined;

/**
 * @member {String} text
 */
PutTemplatesTemplateIdRequest.prototype['text'] = undefined;

/**
 * @member {Array.<module:model/TemplateMapper>} mappers
 */
PutTemplatesTemplateIdRequest.prototype['mappers'] = undefined;






export default PutTemplatesTemplateIdRequest;

