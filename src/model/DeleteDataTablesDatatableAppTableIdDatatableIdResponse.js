

import ApiClient from '../ApiClient';

/**
 * The DeleteDataTablesDatatableAppTableIdDatatableIdResponse model module.
 * @module model/DeleteDataTablesDatatableAppTableIdDatatableIdResponse
 * @version 1.0
 */
class DeleteDataTablesDatatableAppTableIdDatatableIdResponse {
    /**
     * Constructs a new <code>DeleteDataTablesDatatableAppTableIdDatatableIdResponse</code>.
     * DeleteDataTablesDatatableAppTableIdDatatableIdResponse 
     * @alias module:model/DeleteDataTablesDatatableAppTableIdDatatableIdResponse
     */
    constructor() { 
        
        DeleteDataTablesDatatableAppTableIdDatatableIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteDataTablesDatatableAppTableIdDatatableIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteDataTablesDatatableAppTableIdDatatableIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteDataTablesDatatableAppTableIdDatatableIdResponse} The populated <code>DeleteDataTablesDatatableAppTableIdDatatableIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteDataTablesDatatableAppTableIdDatatableIdResponse();

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
DeleteDataTablesDatatableAppTableIdDatatableIdResponse.prototype['resourceId'] = undefined;






export default DeleteDataTablesDatatableAppTableIdDatatableIdResponse;

