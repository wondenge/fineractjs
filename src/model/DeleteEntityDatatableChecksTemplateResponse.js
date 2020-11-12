

import ApiClient from '../ApiClient';

/**
 * The DeleteEntityDatatableChecksTemplateResponse model module.
 * @module model/DeleteEntityDatatableChecksTemplateResponse
 * @version 1.0
 */
class DeleteEntityDatatableChecksTemplateResponse {
    /**
     * Constructs a new <code>DeleteEntityDatatableChecksTemplateResponse</code>.
     * DeleteEntityDatatableChecksTemplateResponse
     * @alias module:model/DeleteEntityDatatableChecksTemplateResponse
     */
    constructor() { 
        
        DeleteEntityDatatableChecksTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteEntityDatatableChecksTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteEntityDatatableChecksTemplateResponse} obj Optional instance to populate.
     * @return {module:model/DeleteEntityDatatableChecksTemplateResponse} The populated <code>DeleteEntityDatatableChecksTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteEntityDatatableChecksTemplateResponse();

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
DeleteEntityDatatableChecksTemplateResponse.prototype['resourceId'] = undefined;






export default DeleteEntityDatatableChecksTemplateResponse;

