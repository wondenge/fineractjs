

import ApiClient from '../ApiClient';

/**
 * The PostEntityDatatableChecksTemplateResponse model module.
 * @module model/PostEntityDatatableChecksTemplateResponse
 * @version 1.0
 */
class PostEntityDatatableChecksTemplateResponse {
    /**
     * Constructs a new <code>PostEntityDatatableChecksTemplateResponse</code>.
     * PostEntityDatatableChecksTemplateResponse
     * @alias module:model/PostEntityDatatableChecksTemplateResponse
     */
    constructor() { 
        
        PostEntityDatatableChecksTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostEntityDatatableChecksTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostEntityDatatableChecksTemplateResponse} obj Optional instance to populate.
     * @return {module:model/PostEntityDatatableChecksTemplateResponse} The populated <code>PostEntityDatatableChecksTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostEntityDatatableChecksTemplateResponse();

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
PostEntityDatatableChecksTemplateResponse.prototype['resourceId'] = undefined;






export default PostEntityDatatableChecksTemplateResponse;

