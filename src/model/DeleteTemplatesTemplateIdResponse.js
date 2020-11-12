

import ApiClient from '../ApiClient';

/**
 * The DeleteTemplatesTemplateIdResponse model module.
 * @module model/DeleteTemplatesTemplateIdResponse
 * @version 1.0
 */
class DeleteTemplatesTemplateIdResponse {
    /**
     * Constructs a new <code>DeleteTemplatesTemplateIdResponse</code>.
     * DeleteTemplatesTemplateIdResponse
     * @alias module:model/DeleteTemplatesTemplateIdResponse
     */
    constructor() { 
        
        DeleteTemplatesTemplateIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteTemplatesTemplateIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTemplatesTemplateIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteTemplatesTemplateIdResponse} The populated <code>DeleteTemplatesTemplateIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteTemplatesTemplateIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteTemplatesTemplateIdResponse.prototype['resourceId'] = undefined;






export default DeleteTemplatesTemplateIdResponse;

