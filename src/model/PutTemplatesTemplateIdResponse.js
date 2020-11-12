

import ApiClient from '../ApiClient';

/**
 * The PutTemplatesTemplateIdResponse model module.
 * @module model/PutTemplatesTemplateIdResponse
 * @version 1.0
 */
class PutTemplatesTemplateIdResponse {
    /**
     * Constructs a new <code>PutTemplatesTemplateIdResponse</code>.
     * PutTemplatesTemplateIdResponse
     * @alias module:model/PutTemplatesTemplateIdResponse
     */
    constructor() { 
        
        PutTemplatesTemplateIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTemplatesTemplateIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTemplatesTemplateIdResponse} obj Optional instance to populate.
     * @return {module:model/PutTemplatesTemplateIdResponse} The populated <code>PutTemplatesTemplateIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTemplatesTemplateIdResponse();

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
PutTemplatesTemplateIdResponse.prototype['resourceId'] = undefined;






export default PutTemplatesTemplateIdResponse;

