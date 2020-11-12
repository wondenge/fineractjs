

import ApiClient from '../ApiClient';

/**
 * The PutDataTablesAppTableIdDatatableIdResponse model module.
 * @module model/PutDataTablesAppTableIdDatatableIdResponse
 * @version 1.0
 */
class PutDataTablesAppTableIdDatatableIdResponse {
    /**
     * Constructs a new <code>PutDataTablesAppTableIdDatatableIdResponse</code>.
     * PutDataTablesAppTableIdDatatableIdResponse 
     * @alias module:model/PutDataTablesAppTableIdDatatableIdResponse
     */
    constructor() { 
        
        PutDataTablesAppTableIdDatatableIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutDataTablesAppTableIdDatatableIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDataTablesAppTableIdDatatableIdResponse} obj Optional instance to populate.
     * @return {module:model/PutDataTablesAppTableIdDatatableIdResponse} The populated <code>PutDataTablesAppTableIdDatatableIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDataTablesAppTableIdDatatableIdResponse();

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
PutDataTablesAppTableIdDatatableIdResponse.prototype['resourceId'] = undefined;






export default PutDataTablesAppTableIdDatatableIdResponse;

